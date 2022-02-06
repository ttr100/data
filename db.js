const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'app.db'
});

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.NUMBER,
  },
}, {timestamps: false})

const allStudents = Student.findAll()

allStudents.then((res) => {
  res.forEach(s => {
    console.log(`Name: ${s.name}. Age: ${s.age}`)
  })
})


Student.create({name: 'Karen', age: 88}).then(() => console.log('Data inserted'))

Student.findAll({
  where: {
    age: 55
  }
}).then((result) => {
  console.log('Found age 55:')
  result.forEach( (student) => {
    console.log(student.name)
  })
})
