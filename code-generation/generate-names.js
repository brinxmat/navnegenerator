const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')

const namesM = []
const namesF = []
const surnames = []
const inputFile = path.resolve(__dirname, '../data/names.csv')
const outputFile = path.resolve(__dirname, '../src/name-generator/Constants.js')
fs.createReadStream(inputFile)
  .pipe(csv({ headers: ['Guttenavn', 'Jentenavn', 'Etternavn'], skipLines: 1 }))
  .on('data', (data) => updateNames(data))
  .on('end', () => fs.writeFileSync(outputFile, fileContent(namesF, namesM, surnames)))

const updateNames = (data) => {
  namesM.push(`'${data.Guttenavn}'`)
  namesF.push(`'${data.Jentenavn}'`)
  surnames.push(`'${data.Etternavn}'`)
}
const fileContent = (namesF, namesM, surnames) => {
  return `const firstNamesF = Object.freeze([${namesF.join(', ')}])
const firstNamesM = Object.freeze([${namesM.join(', ')}])
const lastNames = Object.freeze([${surnames.join(', ')}])

export { firstNamesM, firstNamesF, lastNames }
`
}
