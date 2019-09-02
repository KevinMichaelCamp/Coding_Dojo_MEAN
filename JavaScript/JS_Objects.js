//Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// students.forEach(student => {
//   console.log(`Name: ${student.name}\, Cohort: ${student.cohort}`)
// })

for(const student of students){
  console.log(`Name: ${student.name}, Cohort: ${student.cohort}`)
}


//Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for (const key in users){
  console.log(key.toUpperCase());
  for(let i = 0; i < users[key].length; i ++){
    const num  = i + 1;
    const fname = users[key][i].first_name;
    const lname = users[key][i].last_name;
    const length = fname.length + lname.length;
    console.log(`${num}. - ${lname}, ${fname} - ${length}`);
  }
}
