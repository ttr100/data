var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('app.db');

db.serialize(function() {
  db.each("SELECT id, name, age FROM students WHERE age = 55", function(_, row) {
      console.log(row)
  });
});


let newEntry = {
  name: 'KarenX',
  age: 55
}

var stmt = db.prepare("INSERT INTO STUDENTS VALUES (NULL,?, ?)");
stmt.run(newEntry.name, newEntry.age);
stmt.finalize()

db.close();

