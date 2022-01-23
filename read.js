const fs = require('fs');
const FILENAME = 'data.txt'

let members = [];

console.log('Reading file')
let content = fs.readFileSync(FILENAME)
console.log('Read file done, content is:')
content = String(content)


// mengubah data dalam string
// kedalam bentuk js
// deserialization

let lines = content.split('\n')
for(let i = 0; i < lines.length ; i++){
  let line = lines[i]
  let splitLines = line.split('-')
  members.push({
    name: splitLines[0],
    score: parseInt(splitLines[1])
  })
}

console.log('first member is ' + members[0].name)

console.log('members: ')
console.log(members)
