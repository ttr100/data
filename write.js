const fs = require('fs');

const FILENAME = 'data.txt'

let members = [
  {name: 'Alice', score: 10},
  {name: 'Bob', score: 10},
  {name: 'Charlie', score: 10},
];

// mengubah data dalam memory js
// kedalam bentuk string
// serialization


// setiap member,
  // tulis <nama>-<score>

let entries = []
for(let i=0;i<members.length;i++){
  entries.push(`${members[i].name}-${members[i].score}`)
}

let data = entries.join('\n')

console.log('Writing file')
fs.writeFileSync(FILENAME, data)
console.log('Writing file done')
