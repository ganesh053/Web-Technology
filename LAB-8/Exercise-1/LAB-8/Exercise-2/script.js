function showStudent() {
  // Get user input
  const id = Number(document.getElementById("id").value);
  const name = document.getElementById("name").value.trim();
  const department = document.getElementById("department").value.trim();
  const marks = Number(document.getElementById("marks").value);

  // Validate input
  if (!id || !name || !department || isNaN(marks)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Create the object
  const student = { id, name, department, marks };

  // Object destructuring
  const { id: sid, name: sname, department: sdept, marks: smarks } = student;

  // Determine grade
  let grade;
  if (smarks >= 90) grade = "A";
  else if (smarks >= 75) grade = "B";
  else if (smarks >= 60) grade = "C";
  else grade = "D";

  // Create updated object using spread operator
  const updatedStudent = { ...student, grade };

  // Display on page
  const outputText = `
${sid} ${sname} ${sdept} ${smarks}

${JSON.stringify(updatedStudent, null, 2)}
`;

  document.getElementById("output").textContent = outputText;

  // Console output (for verification)
  console.log(sid, sname, sdept, smarks);
  console.log(updatedStudent);
}