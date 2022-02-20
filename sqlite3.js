var sqlite3 = require('sqlite3');

function runWithCallback(){
  var db = new sqlite3.Database('app.db');
  db.all("SELECT id AS studentID, name, age FROM students", function(err, rows) {
    console.log('SELECT students COMPLETED')
    db.all("SELECT name FROM subjects", function(err, subjectRows){
      console.log('SELECT subjects COMPLETED')
      for(let j= 0; j < subjectRows.length; j++){
        for(let i=0;i<rows.length;i++){
          let subjectRow = subjectRows[j];
          let studentRow = rows[i];

          let name = studentRow.name + ' - ' + subjectRow.name;
          let cls = 12;
          if (studentRow.age > 50 ){
            cls = 13;
          }

          db.run("INSERT INTO students_copy ('name', 'class') VALUES (?, ?)", name, cls)
        }
      }

      console.log('INSERT COMPLETED')
    })
  });

  db.close();
}


var sqlite = require('sqlite');

// promise
async function runWithAsync(){
  const db2 = await sqlite.open({
    filename: 'app.db',
    driver: sqlite3.Database
  })
  console.log('about to select');
  let rows = await db2.all("SELECT id AS studentID, name, age FROM students");
  console.log('select students complete');
  let subjectRows = await db2.all("SELECT name FROM subjects");
  console.log('select subjects complete');

  for(let j= 0; j < subjectRows.length; j++){
    for(let i=0;i<rows.length;i++){
      let subjectRow = subjectRows[j];
      let studentRow = rows[i];

      let name = studentRow.name + ' - ' + subjectRow.name;
      let cls = 12;
      if (studentRow.age > 50 ){
        cls = 13;
      }
      await db2.run("INSERT INTO students_copy ('name', 'class') VALUES (?, ?)", name, cls)
    }
  }
}


// runWithCallback();
runWithAsync();
