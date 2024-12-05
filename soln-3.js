// Function to calculate PAYE tax
function calculatePAYE(grossSalary) {
    // PAYE tax is 15% of the gross salary
    return grossSalary * 0.15;
}

// Function to calculate NHIF deduction
function calculateNHIF(grossSalary) {
    // NHIF deduction is 2.5% of the gross salary
    return grossSalary * 0.025;
}

// Function to calculate NSSF deduction
function calculateNSSF(grossSalary) {
    // NSSF deduction is 6% of the gross salary
    return grossSalary * 0.06;
}

// Function to calculate the net salary after deductions
function calculateNetSalary() {
    // Get user input for Basic Salary and Benefits
    const basicSalary = parseFloat(prompt("Enter your Basic Salary (KES):"));
    const benefits = parseFloat(prompt("Enter your Benefits (KES):"));

    // Validate the inputs to ensure they are numbers and greater than 0
    if (isNaN(basicSalary) || basicSalary <= 0 || isNaN(benefits) || benefits < 0) {
        // If inputs are invalid, log an error message and exit the function
        console.log("Please enter valid Basic Salary and Benefits.");
        return;
    }

    // Calculate the Gross Salary by adding Basic Salary and Benefits
    const grossSalary = basicSalary + benefits;

    // Calculate the deductions: PAYE, NHIF, and NSSF
    const paye = calculatePAYE(grossSalary);  // PAYE Deduction
    const nhif = calculateNHIF(grossSalary);  // NHIF Deduction
    const nssf = calculateNSSF(grossSalary);  // NSSF Deduction

    // Calculate the Net Salary by subtracting all deductions from the Gross Salary
    const netSalary = grossSalary - (paye + nhif + nssf);

    // Output the results to the console
    console.log(`
        Gross Salary: KES ${grossSalary.toFixed(2)}
        PAYE Deduction: KES ${paye.toFixed(2)}
        NHIF Deduction: KES ${nhif.toFixed(2)}
        NSSF Deduction: KES ${nssf.toFixed(2)}
        Net Salary: KES ${netSalary.toFixed(2)}
    `);
}

// Call the function to execute the salary calculation
calculateNetSalary();