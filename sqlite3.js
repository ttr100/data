var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('app.db');

let stmt = db.prepare("INSERT INTO students_copy ('name', 'class') VALUES (?, ?)", function(err){
  if(err){
    console.log("ERROR INSERTING DATA", err);
  }
  else{
    console.log("SUCCESS INSERTING DATA", err);
  }
})


db.all("SELECT id AS studentID, name, age FROM students", function(err, rows) {
  db.all("SELECT name FROM subjects", function(err, subjectRows){
    for(let j= 0; j < subjectRows.length; j++){
      for(let i=0;i<rows.length;i++){
        let subjectRow = subjectRows[j];
        let studentRow = rows[i];

        let name = studentRow.name + ' - ' + subjectRow.name;
        let cls = 12;
        if (studentRow.age > 50 ){
          cls = 13;
        }
        stmt.run(name, cls)
      }
    }

    stmt.finalize()
  })
});



db.close();

