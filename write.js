const fs = require('fs');

const FILENAME = 'data.txt'

let members = [
  {id: 123, name: 'Alice', score: 10},
  {id: 123, name: 'Bob', score: 10},
  {id: 123, name: 'Charlie', score: 10},
];

// mengubah data dalam memory js
// kedalam bentuk string
// serialization

// let entries = []
// for(let i=0;i<members.length;i++){
//   entries.push(`${members[i].name}-${members[i].score}`)
// }

// let data = entries.join('\n')

let data = JSON.stringify(members)

console.log('Writing file')
fs.writeFileSync(FILENAME, data)
console.log('Writing file done')
