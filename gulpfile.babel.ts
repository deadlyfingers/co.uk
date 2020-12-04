// import gulp from 'gulp'
// import fs from 'fs'
// import path from 'path'

/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp')
const fs = require('fs')
const path = require('path')

const readDir = (sourceDir, fn: (files: string[]) => string[]): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(sourceDir, (err, files): void => {
      if (err) return reject(err)
      const filePaths = files.map((f: string): string => path.join(sourceDir, f))
      return resolve(fn(filePaths))
    })
  })
}

const writeFile = (filePath, data): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err): void => {
      if (err) return reject(err)
      return resolve()
    })
  })
}

const getImageCategories = (filePaths: string[]): string[] => {
  let arr: string[] = []
  // skip dot files
  arr = filePaths.filter(filePath => !path.basename(filePath).startsWith('.'))
  // natural alphanumeric sort
  return arr.splice(0).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
}

const isDirectory = (filePath: string): boolean => {
  const fileName = path.basename(filePath)
  if (fileName.startsWith('.')) {
    return false
  }
  return path.extname(path.basename(filePath)) === ''
}

// generate image categories json
gulp.task('generate:json', async () => {
  const json: { [key: string]: string[] } = {}
  const keys: string[] = []
  const imageDirs = await readDir('public/images/', getImageCategories)
  const promises: Promise<string[]>[] = []
  imageDirs.forEach(dir => {
    if (isDirectory(dir)) {
      promises.push(readDir(dir, getImageCategories))
      keys.push(path.basename(dir))
    }
  })
  await Promise.all(promises).then(results => {
    results.forEach((values, i) => {
      const key = keys[i]
      // strip 'public/' prefix
      const images = values.map(filePath => filePath.replace(/^public\//g, ''))
      // sort by YYYY-MM where most date recent is first, otherwise localeCompare
      const sortedImages = images.sort((a, b) => {
				const aFile = a.substring(a.lastIndexOf('/')+1)
				const bFile = b.substring(b.lastIndexOf('/')+1)
				const aArr = aFile.split('-')
				const bArr = bFile.split('-')
				if (aArr.length < 3 && bArr.length < 3) {
					return aFile.localeCompare(bFile, 'en-US', {numeric: true})
				}
				const aDate = aArr[0] + aArr[1]
				const bDate = bArr[0] + bArr[1]
				const aInt = parseInt(aDate)
				const bInt = parseInt(bDate)

				const min = 10 * 6
				if (aInt > min || bInt > min) {
					if (aInt > bInt) {
						return -1
					} else if (aInt < bInt) {
						return 1
					}
				}

				return aFile.localeCompare(bFile, 'en-US', {numeric: true})
			});
      json[key] = sortedImages
    })
  })
  writeFile('src/generated/imageCategories.json', JSON.stringify(json, null, 2))
})
