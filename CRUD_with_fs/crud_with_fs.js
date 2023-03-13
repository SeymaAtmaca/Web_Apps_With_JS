// Node js Patikası Ödevi 
const fs = require('fs')


// create
fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
    if(err) throw err;
    console.log("Create ");
})


// read
fs.readFile('employees.json', 'utf-8', (err) => {
    if(err) throw err;
    console.log("Read ");
})


//update
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 6000}', (err) => {
    if(err) throw err;
    console.log("Update ")
})


//delete
fs.unlink('employees.json',(err) => {
    if(err) throw err;
    console.log("Delete ")
})