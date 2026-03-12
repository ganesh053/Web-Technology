const calculateAverage = (m1, m2, m3) => {
    return (m1 + m2 + m3) / 3;
}

function calculate() {

    let studentName = document.getElementById("name").value;
    let mark1 = Number(document.getElementById("m1").value);
    let mark2 = Number(document.getElementById("m2").value);
    let mark3 = Number(document.getElementById("m3").value);

    let total = mark1 + mark2 + mark3;
    let average = calculateAverage(mark1, mark2, mark3);

    let output = `
    Student Name: ${studentName} <br>
    Total Marks: ${total} <br>
    Average Marks: ${average.toFixed(2)}
    `;

    document.getElementById("result").innerHTML = output;

    console.log(`Student Name: ${studentName}`);
    console.log(`Total Marks: ${total}`);
    console.log(`Average Marks: ${average.toFixed(2)}`);
}