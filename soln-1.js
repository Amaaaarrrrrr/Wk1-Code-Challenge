studentGrades();

function studentGrades(){
    const input = prompt('enter Student marks (0-100):')
    const marks = Number(input);


    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    }

    let grade;
    if(marks>=79){
        grade= 'A';
    }else if (marks>=60){
       grade= 'B';
    }else if (marks>=49){
        grade=  'C';
    }else if (marks>=40){
        grade= 'D';
    }else {
        grade=  'E';
    }

    console.log(`Marks: ${marks}, Grade: ${grade}`);
}