const calulateNewGrades = (grades) => {
    const newGrades = grades.map((grade) => {
        if (grade < 39) {
        return grade;
        }
        const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
        if (nextMultipleOfFive - grade < 3) {
        return nextMultipleOfFive;
        }
        return grade;
    });
    return newGrades;
}


const grades = [73, 39, 40, 54, 66, 75, 88];
const newGrades=calulateNewGrades(grades);
console.log(`${newGrades.join('\n')}`);