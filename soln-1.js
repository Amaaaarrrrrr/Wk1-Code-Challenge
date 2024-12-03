function studentGrades() {
    // Prompt the user to enter student marks and store it in the variable 'input'
    const input = prompt('Enter student marks (0-100):'); 

    // Convert the user input to a number and store it in the variable 'marks'
    const marks = Number(input); 

    // Validate the marks entered by the user
    // Check if 'marks' is not a number (NaN) or if it is outside the valid range (0-100)
    if (isNaN(marks) || marks < 0 || marks > 100) {
        // Display an error message if the input is invalid
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return; // Exit the function to prevent further execution
    }

    // Initialize a variable to store the grade
    let grade;

    // Determine the grade based on the value of 'marks' using conditional statements
    if (marks >= 79) {
        // Assign 'A' if marks are 79 or higher
        grade = 'A';
    } else if (marks >= 60) {
        // Assign 'B' if marks are between 60 and 78
        grade = 'B';
    } else if (marks >= 50) {
        // Assign 'C' if marks are between 50 and 59
        grade = 'C';
    } else if (marks >= 40) {
        // Assign 'D' if marks are between 40 and 49
        grade = 'D';
    } else {
        // Assign 'E' if marks are below 40
        grade = 'E';
    }

    // Display the marks and the corresponding grade in the console
    console.log(`Marks: ${marks}, Grade: ${grade}`);
}

// Call the function to execute the program
studentGrades();
