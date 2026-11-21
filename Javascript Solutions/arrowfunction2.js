const calculateAverage = (m1, m2, m3) => {
    return (m1 + m2 + m3) / 3;
}

const getDivision = (average) => {
    if (average >= 70) {
        return "First Division";
    } else if (average >= 60) {
        return "Second Division";
    } else if (average >= 50) {
        return "Third Division";
    } else {
        return "Fail";
    }
}

const processResult = (name, m1, m2, m3, callback) => {
    let average = calculateAverage(m1, m2, m3);

    console.log("Student:", name);
    console.log("Average:", average);
    console.log("Division:", callback(average));
}

processResult("Sita", 75, 75, 75, getDivision);