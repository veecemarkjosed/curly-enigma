
const students = [
    {
        id: 1,
        name: "Juan Dela Cruz",
        year: 1,
        course: "BSIT",
        grades: [85, 88, 90],
        enrolled: true
    },
    {
        id: 2,
        name: "Maria Santos",
        year: 2,
        course: "BSCS",
        grades: [92, 90, 94],
        enrolled: true
    },
    {
        id: 3,
        name: "Pedro Reyes",
        year: 3,
        course: "BSIT",
        grades: [78, 82, 80],
        enrolled: true
    },
    {
        id: 4,
        name: "Ana Garcia",
        year: 4,
        course: "BSBA",
        grades: [88, 91, 89],
        enrolled: false
    },
    {
        id: 5,
        name: "Carlo Mendoza",
        year: 1,
        course: "BSCS",
        grades: [95, 93, 96],
        enrolled: true
    },
    {
        id: 6,
        name: "Sofia Ramos",
        year: 2,
        course: "BSIT",
        grades: [87, 85, 89],
        enrolled: true
    },
    {
        id: 7,
        name: "Mark Villanueva",
        year: 3,
        course: "BSBA",
        grades: [80, 84, 82],
        enrolled: true
    },
    {
        id: 8,
        name: "Lisa Torres",
        year: 4,
        course: "BSCS",
        grades: [91, 94, 92],
        enrolled: true
    },
    {
        id: 9,
        name: "Kevin Flores",
        year: 1,
        course: "BSIT",
        grades: [76, 79, 81],
        enrolled: false
    },
    {
        id: 10,
        name: "Angela Cruz",
        year: 2,
        course: "BSBA",
        grades: [89, 87, 90],
        enrolled: true
    },
    {
        id: 11,
        name: "Ryan Bautista",
        year: 3,
        course: "BSCS",
        grades: [86, 88, 85],
        enrolled: true
    },
    {
        id: 12,
        name: "Nicole Aquino",
        year: 4,
        course: "BSIT",
        grades: [93, 95, 94],
        enrolled: true
    },
    {
        id: 13,
        name: "Daniel Navarro",
        year: 1,
        course: "BSBA",
        grades: [82, 80, 84],
        enrolled: true
    },
    {
        id: 14,
        name: "Grace Castillo",
        year: 2,
        course: "BSCS",
        grades: [90, 92, 89],
        enrolled: false
    },
    {
        id: 15,
        name: "John Perez",
        year: 3,
        course: "BSIT",
        grades: [83, 86, 85],
        enrolled: true
    },
    {
        id: 16,
        name: "Ella Fernandez",
        year: 4,
        course: "BSBA",
        grades: [94, 91, 93],
        enrolled: true
    },
    {
        id: 17,
        name: "Michael Tan",
        year: 1,
        course: "BSCS",
        grades: [88, 86, 90],
        enrolled: true
    },
    {
        id: 18,
        name: "Samantha Lim",
        year: 2,
        course: "BSIT",
        grades: [81, 84, 83],
        enrolled: true
    },
    {
        id: 19,
        name: "James Sy",
        year: 3,
        course: "BSBA",
        grades: [87, 89, 88],
        enrolled: false
    },
    {
        id: 20,
        name: "Kate Manalo",
        year: 4,
        course: "BSCS",
        grades: [96, 95, 97],
        enrolled: true
    },
    {
        id: 21,
        name: "Robert Diaz",
        year: 1,
        course: "BSIT",
        grades: [79, 81, 80],
        enrolled: true
    },
    {
        id: 22,
        name: "Michelle Ong",
        year: 2,
        course: "BSBA",
        grades: [90, 88, 91],
        enrolled: true
    },
    {
        id: 23,
        name: "Thomas Garcia",
        year: 3,
        course: "BSCS",
        grades: [84, 87, 86],
        enrolled: true
    },
    {
        id: 24,
        name: "Rachel Gomez",
        year: 4,
        course: "BSIT",
        grades: [92, 93, 91],
        enrolled: true
    },
    {
        id: 25,
        name: "Steven Ramos",
        year: 1,
        course: "BSBA",
        grades: [77, 80, 79],
        enrolled: false
    },
    {
        id: 26,
        name: "Julia Santos",
        year: 2,
        course: "BSCS",
        grades: [89, 91, 90],
        enrolled: true
    },
    {
        id: 27,
        name: "Patrick Reyes",
        year: 3,
        course: "BSIT",
        grades: [85, 87, 86],
        enrolled: true
    },
    {
        id: 28,
        name: "Chloe Mendoza",
        year: 4,
        course: "BSBA",
        grades: [93, 92, 94],
        enrolled: true
    },
    {
        id: 29,
        name: "Andrew Flores",
        year: 1,
        course: "BSCS",
        grades: [81, 83, 82],
        enrolled: true
    },
    {
        id: 30,
        name: "Samantha Cruz",
        year: 2,
        course: "BSIT",
        grades: [90, 92, 91],
        enrolled: true
    }
];


// ========================================
// 1. GET AVERAGE GRADE
// ========================================

function getAverageGrade(student) {
    if (!student || !Array.isArray(student.grades) || student.grades.length === 0) {
        return 0;
    }

    const total = student.grades.reduce((sum, grade) => sum + grade, 0);

    return total / student.grades.length;
}


// ========================================
// 2. GET TOP STUDENTS
// ========================================

function getTopStudents(students, n) {
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    if (n < 0) {
        throw new Error("Number of students cannot be negative.");
    }

    return students
        .map(student => ({
            ...student,
            average: getAverageGrade(student)
        }))
        .sort((a, b) => b.average - a.average)
        .slice(0, n);
}


// ========================================
// 3. GROUP BY COURSE
// ========================================

function groupByCourse(students) {
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    return students.reduce((groups, student) => {
        if (!groups[student.course]) {
            groups[student.course] = [];
        }

        groups[student.course].push(student);

        return groups;
    }, {});
}


// ========================================
// 4. GET ENROLLED COUNT
// ========================================

function getEnrolledCount(students) {
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    const enrolled = students.filter(student => student.enrolled).length;

    const notEnrolled = students.filter(student => !student.enrolled).length;

    return {
        enrolled: enrolled,
        notEnrolled: notEnrolled
    };
}


// ========================================
// 5. FIND STUDENT
// ========================================

function findStudent(students, name) {
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    if (!name) {
        return null;
    }

    const searchName = name.toLowerCase();

    return students.find(student =>
        student.name.toLowerCase() === searchName
    ) || null;
}


// ========================================
// 6. GET COURSE AVERAGES
// ========================================

function getCourseAverages(students) {
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    const groups = groupByCourse(students);

    return Object.keys(groups)
        .map(course => {
            const courseStudents = groups[course];

            const total = courseStudents.reduce(
                (sum, student) => sum + getAverageGrade(student),
                0
            );

            return {
                course: course,
                average: total / courseStudents.length
            };
        })
        .sort((a, b) => b.average - a.average);
}


// ========================================
// 7. EXPORT SUMMARY
// ========================================

function exportSummary(students) {
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    const totalStudents = students.length;

    const overallTotal = students.reduce(
        (sum, student) => sum + getAverageGrade(student),
        0
    );

    const overallAverage =
        totalStudents === 0 ? 0 : overallTotal / totalStudents;

    const topStudent = getTopStudents(students, 1)[0] || null;

    return {
        totalStudents: totalStudents,
        overallAverage: overallAverage,
        topPerformingStudent: topStudent,
        breakdownByCourse: getCourseAverages(students)
    };
}


// ========================================
// OPTIONAL: FILTER BY YEAR
// ========================================

function filterByYear(students, year) {
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    return students.filter(student => student.year === year);
}


// ========================================
// OPTIONAL: SORT BY NAME
// ========================================

function sortByName(students) {
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    return [...students].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}


// ========================================
// MAIN FUNCTION
// ========================================

function main() {

    console.log("========================================");
    console.log("       STUDENT RECORDS REPORT");
    console.log("========================================");


    // Total students
    console.log("\n--- TOTAL STUDENTS ---");
    console.log("Total:", students.length);


    // Overall average
    const summary = exportSummary(students);

    console.log("\n--- OVERALL AVERAGE ---");
    console.log(summary.overallAverage.toFixed(2));


    // Enrolled count
    console.log("\n--- ENROLLMENT ---");

    const enrollment = getEnrolledCount(students);

    console.log("Enrolled:", enrollment.enrolled);
    console.log("Not Enrolled:", enrollment.notEnrolled);


    // Top students
    console.log("\n--- TOP 5 STUDENTS ---");

    const topStudents = getTopStudents(students, 5);

    topStudents.forEach((student, index) => {
        console.log(
            `${index + 1}. ${student.name} - ${student.average.toFixed(2)}`
        );
    });


    // Course averages
    console.log("\n--- COURSE AVERAGES ---");

    const courseAverages = getCourseAverages(students);

    courseAverages.forEach(course => {
        console.log(
            `${course.course}: ${course.average.toFixed(2)}`
        );
    });


    // Group by course
    console.log("\n--- STUDENTS BY COURSE ---");

    const grouped = groupByCourse(students);

    Object.keys(grouped).forEach(course => {
        console.log(`${course}: ${grouped[course].length} students`);
    });


    // Search
    console.log("\n--- STUDENT SEARCH ---");

    const searchedStudent = findStudent(
        students,
        "Maria Santos"
    );

    console.log(searchedStudent);


    // Search for nonexistent student
    const notFound = findStudent(
        students,
        "Unknown Student"
    );

    console.log("Unknown Student:", notFound);


    // Optional year filter
    console.log("\n--- YEAR 1 STUDENTS ---");

    const firstYear = filterByYear(students, 1);

    firstYear.forEach(student => {
        console.log(student.name);
    });


    // Summary
    console.log("\n--- COMPLETE SUMMARY ---");
    console.log(summary);


    console.log("\n========================================");
    console.log("           REPORT COMPLETE");
    console.log("========================================");
}


// Run the program
main();
