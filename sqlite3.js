var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('app.db');

db.all("SELECT id AS studentID, name, age FROM students", function(err, rows) {
  // console.log(err)
  console.log(rows)
});


for(let x=20;x<30;x++){
  let stmt = db.prepare("INSERT INTO subjects ('name') VALUES (?)", function(err){
    if(err){
      console.log("ERROR INSERTING DATA", err);
    }
    else{
      console.log("SUCCESS INSERTING DATA", err);
    }
  })

  stmt.run(`subject-${x}`)
  stmt.finalize()
}

db.close();

