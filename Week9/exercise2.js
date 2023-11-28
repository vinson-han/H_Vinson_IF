function addStudentToClass(student) {
  let random = (Math.random() * 3 + 1).toFixed(2);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (student.age < 18) {
        reject("Student is too young for this class " + random);
      } else {
        resolve("Student is added to Class " + random);
      }
    }, random * 1000);
  });
}

async function registerStudent(student) {
  try {
    const result = await addStudentToClass(student);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

for (const student of students) {
  console.log("next Student");
  registerStudent(student);
}
