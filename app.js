const students = [
    {
        id: 1,
        name: "AGUIRRE, RENZE T.",
        year: 3,
        course: "BSIT",
        grades: [85, 88, 90, 87],
        enrolled: true
    },
    {
        id: 2,
        name: "VILLAFLOR, KAREN V.",
        year: 3,
        course: "BSIT",
        grades: [90, 92, 89, 91],
        enrolled: true
    },
    {
        id: 3,
        name: "ARROYO, JOHNJAY C.",
        year: 3,
        course: "BSIT",
        grades: [82, 85, 84, 86],
        enrolled: true
    },
    {
        id: 4,
        name: "BUENAFE, JASON E.",
        year: 3,
        course: "BSIT",
        grades: [88, 87, 90, 89],
        enrolled: true
    },
    {
        id: 5,
        name: "DACLAN, INRI S.",
        year: 3,
        course: "BSIT",
        grades: [78, 82, 80, 85],
        enrolled: true
    },
    {
        id: 6,
        name: "POJAS, NATHANIEL L.",
        year: 3,
        course: "BSIT",
        grades: [91, 90, 94, 92],
        enrolled: true
    },
    {
        id: 7,
        name: "DEMAFELIS, RENIEL O.",
        year: 3,
        course: "BSIT",
        grades: [84, 86, 88, 85],
        enrolled: true
    },
    {
        id: 8,
        name: "SIASON, JAMILLA O.",
        year: 3,
        course: "BSIT",
        grades: [93, 91, 95, 94],
        enrolled: true
    },
    {
        id: 9,
        name: "GATILA, CRIS JOHN M.",
        year: 3,
        course: "BSIT",
        grades: [80, 83, 85, 82],
        enrolled: true
    },
    {
        id: 10,
        name: "JAWOD, JOHN THERENCE G.",
        year: 3,
        course: "BSIT",
        grades: [87, 89, 86, 88],
        enrolled: true
    },
    {
        id: 11,
        name: "MAGBANUA, EDMAR P.",
        year: 3,
        course: "BSIT",
        grades: [79, 81, 84, 80],
        enrolled: true
    },
    {
        id: 12,
        name: "MALBA, PAUL JOHN T.",
        year: 3,
        course: "BSIT",
        grades: [86, 88, 87, 90],
        enrolled: true
    },
    {
        id: 13,
        name: "MAQUE, ROMAN B.",
        year: 3,
        course: "BSIT",
        grades: [89, 91, 90, 88],
        enrolled: true
    },
    {
        id: 14,
        name: "PAGURTALAN, SAMLEE H.",
        year: 3,
        course: "BSIT",
        grades: [92, 90, 91, 93],
        enrolled: true
    },
    {
        id: 15,
        name: "QUILINO, RIZALITO D.",
        year: 3,
        course: "BSIT",
        grades: [83, 85, 82, 86],
        enrolled: true
    },
    {
        id: 16,
        name: "CEPEDA, RODEL P.",
        year: 3,
        course: "BSIT",
        grades: [88, 84, 87, 89],
        enrolled: true
    },
    {
        id: 17,
        name: "VIDAL, ARCHIE F.",
        year: 3,
        course: "BSIT",
        grades: [81, 83, 80, 84],
        enrolled: true
    },
    {
        id: 18,
        name: "SILLADOR, DENMARK M.",
        year: 3,
        course: "BSIT",
        grades: [90, 88, 92, 91],
        enrolled: true
    },
    {
        id: 19,
        name: "TEQUILLO, ADRIAN N.",
        year: 3,
        course: "BSIT",
        grades: [85, 87, 86, 88],
        enrolled: true
    },
    {
        id: 20,
        name: "BAHILOT, NERA C.",
        year: 3,
        course: "BSIT",
        grades: [91, 93, 90, 92],
        enrolled: true
    },
    {
        id: 21,
        name: "ALEGRIA, RONAMIE C.",
        year: 3,
        course: "BSIT",
        grades: [84, 82, 86, 85],
        enrolled: true
    },
    {
        id: 22,
        name: "EROSIDO, JISA B.",
        year: 3,
        course: "BSIT",
        grades: [89, 87, 90, 88],
        enrolled: true
    },
    {
        id: 23,
        name: "BARCOMA, ELYZAH PEARL L.",
        year: 3,
        course: "BSIT",
        grades: [94, 92, 95, 93],
        enrolled: true
    },
    {
        id: 24,
        name: "PLAZA, KEVIN JAMES A.",
        year: 3,
        course: "BSIT",
        grades: [80, 82, 84, 81],
        enrolled: true
    },
    {
        id: 25,
        name: "BAYKING, KASSANDRA NICOLE M.",
        year: 3,
        course: "BSIT",
        grades: [90, 91, 89, 92],
        enrolled: true
    },
    {
        id: 26,
        name: "BIARAS, GRACE JOY P.",
        year: 3,
        course: "BSIT",
        grades: [87, 85, 88, 90],
        enrolled: true
    },
    {
        id: 27,
        name: "CORDOVA, CHRISTINE M.",
        year: 3,
        course: "BSIT",
        grades: [92, 94, 91, 93],
        enrolled: true
    },
    {
        id: 28,
        name: "DAGUMBOY, JECA F.",
        year: 3,
        course: "BSIT",
        grades: [83, 86, 84, 85],
        enrolled: true
    },
    {
        id: 29,
        name: "PRACIO, ROXAN L.",
        year: 3,
        course: "BSIT",
        grades: [88, 90, 87, 89],
        enrolled: true
    },
    {
        id: 30,
        name: "GAVITO, HEART JANINE M.",
        year: 3,
        course: "BSIT",
        grades: [91, 89, 93, 92],
        enrolled: true
    },
    {
        id: 31,
        name: "CARAMIHAN, GENE MAE D.",
        year: 3,
        course: "BSIT",
        grades: [86, 88, 85, 87],
        enrolled: true
    }
];

function getAverageGrade(student) {
    if (!student || !Array.isArray(student.grades) || student.grades.length === 0) {
        return 0;
    }

    const total = student.grades.reduce((sum, grade) => sum + grade, 0);

    return total / student.grades.length;
}

function getTopStudents(students, n) {
    if (!Array.isArray(students) || students.length === 0 || n <= 0) {
        return [];
    }

    return students
        .map(student => ({
            ...student,
            average: getAverageGrade(student)
        }))
        .sort((a, b) => b.average - a.average)
        .slice(0, n);
}

function groupByCourse(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return {};
    }

    return students.reduce((groups, student) => {
        if (!groups[student.course]) {
            groups[student.course] = [];
        }

        groups[student.course].push(student);

        return groups;
    }, {});
}

function getEnrolledCount(students) {
    if (!Array.isArray(students)) {
        return 0;
    }

    return students.filter(student => student.enrolled === true).length;
}

function findStudent(students, name) {
    if (!Array.isArray(students) || !name) {
        return null;
    }

    return students.find(
        student => student.name.toLowerCase() === name.toLowerCase()
    ) || null;
}

function getCourseAverages(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return {};
    }

    const grouped = groupByCourse(students);

    return Object.keys(grouped).reduce((result, course) => {
        const courseStudents = grouped[course];

        const totalAverage = courseStudents.reduce(
            (sum, student) => sum + getAverageGrade(student),
            0
        );

        result[course] = totalAverage / courseStudents.length;

        return result;
    }, {});
}

function exportSummary(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return {
            totalStudents: 0,
            enrolledStudents: 0,
            courses: {},
            courseAverages: {},
            topStudents: []
        };
    }

    return {
        totalStudents: students.length,
        enrolledStudents: getEnrolledCount(students),
        courses: groupByCourse(students),
        courseAverages: getCourseAverages(students),
        topStudents: getTopStudents(students, 5)
    };
}

function filterByYear(students, year) {
    if (!Array.isArray(students)) {
        return [];
    }

    return students.filter(student => student.year === year);
}

function sortByName(students) {
    if (!Array.isArray(students)) {
        return [];
    }

    return [...students].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}

function main() {
    console.log("==========================================");
    console.log("       STUDENT RECORDS DATA PROCESSOR");
    console.log("              BSIT 3A");
    console.log("==========================================");

    console.log("\n[1] AVERAGE GRADE");
    console.log("------------------------------------------");

    const firstStudent = students[0];
    const firstAverage = getAverageGrade(firstStudent);

    console.log(`${firstStudent.name}: ${firstAverage.toFixed(2)}`);

    console.log("\n[2] TOP 5 STUDENTS");
    console.log("------------------------------------------");

    const topStudents = getTopStudents(students, 5);

    topStudents.forEach((student, index) => {
        console.log(
            `${index + 1}. ${student.name} - Average: ${student.average.toFixed(2)}`
        );
    });

    console.log("\n[3] STUDENTS GROUPED BY COURSE");
    console.log("------------------------------------------");

    const groupedStudents = groupByCourse(students);

    Object.keys(groupedStudents).forEach(course => {
        console.log(
            `${course}: ${groupedStudents[course].length} student(s)`
        );
    });

    console.log("\n[4] ENROLLED STUDENTS");
    console.log("------------------------------------------");

    const enrolledCount = getEnrolledCount(students);

    console.log(`Total Enrolled: ${enrolledCount}`);
    console.log(`Total Students: ${students.length}`);

    console.log("\n[5] FIND STUDENT");
    console.log("------------------------------------------");

    const searchName = "MAQUE, ROMAN B.";
    const foundStudent = findStudent(students, searchName);

    if (foundStudent) {
        console.log("Student Found:");
        console.log(`ID: ${foundStudent.id}`);
        console.log(`Name: ${foundStudent.name}`);
        console.log(`Year: ${foundStudent.year}`);
        console.log(`Course: ${foundStudent.course}`);
        console.log(`Enrolled: ${foundStudent.enrolled}`);
        console.log(`Average: ${getAverageGrade(foundStudent).toFixed(2)}`);
    } else {
        console.log("Student not found.");
    }

    console.log("\n[6] COURSE AVERAGES");
    console.log("------------------------------------------");

    const courseAverages = getCourseAverages(students);

    Object.keys(courseAverages).forEach(course => {
        console.log(
            `${course}: ${courseAverages[course].toFixed(2)}`
        );
    });

    console.log("\n[7] EXPORT SUMMARY");
    console.log("------------------------------------------");

    const summary = exportSummary(students);

    console.log(`Total Students: ${summary.totalStudents}`);
    console.log(`Enrolled Students: ${summary.enrolledStudents}`);

    console.log("\nTop Students in Summary:");

    summary.topStudents.forEach((student, index) => {
        console.log(
            `${index + 1}. ${student.name} - ${student.average.toFixed(2)}`
        );
    });

    console.log("\n[8] EDGE CASE TESTS");
    console.log("------------------------------------------");

    console.log("Empty students average:", getAverageGrade(null));

    console.log("Empty students array:", exportSummary([]));

    console.log(
        "Student with no grades:",
        getAverageGrade({
            id: 999,
            name: "TEST STUDENT",
            year: 3,
            course: "BSIT",
            grades: [],
            enrolled: true
        })
    );

    console.log(
        "Non-existing student:",
        findStudent(students, "NON-EXISTING STUDENT")
    );

    console.log("\n[9] OPTIONAL FUNCTIONS");
    console.log("------------------------------------------");

    console.log(`Year 3 Students: ${filterByYear(students, 3).length}`);

    console.log("\nFirst 5 Students Alphabetically:");

    sortByName(students)
        .slice(0, 5)
        .forEach((student, index) => {
            console.log(`${index + 1}. ${student.name}`);
        });

    console.log("\n==========================================");
    console.log("             PROGRAM COMPLETE");
    console.log("==========================================");
}

main();
