class Course {

    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }

    displayCourse() {
        return `Course: ${this.courseName}, Instructor: ${this.instructor}`;
    }
}

function enroll() {

    let courseName = document.getElementById("courseName").value;
    let instructor = document.getElementById("instructor").value;
    let seatsAvailable = document.getElementById("seats").value === "true";

    let course1 = new Course(courseName, instructor);

    let output = course1.displayCourse();

    let enrollCourse = new Promise((resolve, reject) => {

        if (seatsAvailable)
            resolve("Enrollment Successful");
        else
            reject("Course Full");

    });

    enrollCourse
        .then(msg => {
            document.getElementById("result").innerHTML =
                `${output}<br>${msg}`;
            console.log(msg);
        })
        .catch(err => {
            document.getElementById("result").innerHTML =
                `${output}<br>${err}`;
            console.log(err);
        });
}