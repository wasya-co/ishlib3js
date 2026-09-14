#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const scenesDir = '.'
const output = 'index.json'

const directories = fs.readdirSync(scenesDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)
  .filter(name => /^0\d+mb/.test(name))

const scenes = {}

for (const dir of directories) {
  const name = dir.match(/\S+$/)[0] // string after last space
  scenes[name] = { name, }

  let height, match
  if (match = dir.match(/h(\d+)cm(?: |$)/)) {
    height = Number(match[1]) / 10
  } else if (match = dir.match(/h(\d+)(?: |$)/)) {
    height = Number(match[1])
  }
  console.log(height);
  if (height) {
    scenes[name].height = height
  }

}

fs.writeFileSync(
  output,
  JSON.stringify(scenes, null, 2) + '\n'
)

console.log(`Wrote ${output}.`)