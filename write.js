const fs = require('fs');

const FILENAME = 'data.txt'

let members = [
  'Alice',
  'Bob',
  'Charlie'
];

// mengubah data dalam memory js
// kedalam bentuk string
// serialization

let data = members.join('-')

console.log('Writing file')
fs.writeFileSync(FILENAME, data)
console.log('Writing file done')
