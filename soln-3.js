// Function to calculate PAYE (Pay As You Earn) tax.
function calculatePAYE(grossSalary) {
    let tax = 0; // Initialize the tax variable to store the calculated PAYE.

    // Tax bands based on KRA (Kenya Revenue Authority) rates.
    if (grossSalary <= 24000) { 
        // If gross salary is less than or equal to 24,000, tax is 10% of gross salary.
        tax = grossSalary * 0.1; 
    } else if (grossSalary <= 32333) { 
        // If gross salary is between 24,001 and 32,333, apply 10% on the first 24,000 and 25% on the remainder.
        tax = 2400 + (grossSalary - 24000) * 0.25; 
    } else if (grossSalary <= 500000) {
        // If gross salary is between 32,334 and 500,000, apply respective rates for each band.
        tax = 2400 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        // If gross salary is between 500,001 and 800,000, apply respective rates for each band.
        tax = 2400 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325;
    } else {
        // For gross salaries above 800,000, apply respective rates for all bands including 35% for the remainder.
        tax = 2400 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35; 
    }

    return tax; // Return the calculated PAYE.
}

// Function to calculate NHIF (National Hospital Insurance Fund) deductions.
function calculateNHIF(grossSalary) {
    // NHIF contribution rates based on salary ranges.
    if (grossSalary <= 5999) return 150; // Minimum contribution.
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700; // Maximum contribution for salaries above 100,000.
}

// Function to calculate NSSF (National Social Security Fund) deductions.
function calculateNSSF(grossSalary) {
    // NSSF contribution rates under the new Act, divided into two tiers.
    const tier1 = Math.min(grossSalary, 6000) * 0.06; // 6% on the first 6,000 of salary.
    const tier2 = Math.max(0, Math.min(grossSalary - 6000, 12000)) * 0.06; // 6% on the next 12,000 of salary.

    return tier1 + tier2; // Return the total NSSF contribution.
}

// Main function to calculate net salary.
function calculateNetSalary() {
    // Prompt user for basic salary and benefits.
    const basicSalary = parseFloat(prompt("Enter your basic salary: "));
    const benefits = parseFloat(prompt("Enter your benefits: "));
    
    // Validate inputs to ensure they are numbers.
    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Invalid Input"); // Alert the user if input is invalid.
        return calculateNetSalary(); // Restart the function to allow correct input.
    }

    // Calculate gross salary by summing basic salary and benefits.
    const grossSalary = basicSalary + benefits;

    // Calculate deductions: PAYE, NHIF, and NSSF.
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    // Calculate net salary by subtracting total deductions from gross salary.
    const netSalary = grossSalary - (paye + nhif + nssf);

    // Output the salary breakdown to the user.
    alert(`
        === Salary Breakdown ===
        Gross Salary: ${grossSalary.toFixed(2)}
        PAYE: ${paye.toFixed(2)}
        NHIF Deductions: ${nhif.toFixed(2)}
        NSSF Deductions: ${nssf.toFixed(2)}
        Net Salary: ${netSalary.toFixed(2)}
    `);
}

// Call the main function to execute the program.
calculateNetSalary();

