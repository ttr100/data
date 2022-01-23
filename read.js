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

members = content.split('-')
console.log('first member is ' + members[0])

console.log('members: ')
console.log(members)
