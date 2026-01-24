//Call = Function borrowing

let student1 = {
  name: "Rahul",
  age: 20,
  roll: 1,
};

let student2 = {
  name: "Rohit",
  age: 21,
  roll: 2,
};

function printInfo(branch, cgpa) {
  console.log(this.name, this.age, this.roll, branch, cgpa);
}

// student1.printInfo.call(student2); //printInfo funtion borrowod from student1 to student2

// printInfo.call(student2, "CSE", "9.1"); //for CAll we have to pass arguments

// ------------------------------APPLY----------------------------

printInfo.apply(student2, ["CSE", "9.1"]); //in Apply we have to pass an array

// ------------------------------BIND--------------------------------------/

let printInfoBind = printInfo.bind(student2, "CSE", "9.1");
printInfoBind();

//new function return and can be  later,,, jb mann kare tb execute kra sakte h(call, apply instant execute karega)
