import studentData from "./studentData.js";
import renderTable from "./studentTable.js";
import calculateClassroomAverage from "./calculateClassroomAverage.js";

document.addEventListener("DOMContentLoaded", (e) => {
  let table = document.getElementById("student-table");
  let average = calculateClassroomAverage(studentData);
  let p = document.getElementById("totalAverage");

  p.textContent = `The ClassRoom Average ${average}`;
  renderTable(table, studentData);
});
