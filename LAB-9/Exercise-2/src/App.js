import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Cards</h1>

      <StudentCard name="Ganesh" department="CSE" marks="85" />
      <StudentCard name="Ravi" department="ECE" marks="78" />
      <StudentCard name="Sneha" department="IT" marks="92" />

    </div>
  );
}

export default App;