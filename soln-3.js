// Function to calculate PAYE (Pay-As-You-Earn) tax.
function calculatePAYE(grossSalary) {
    let tax = 0;

    // The PAYE tax is calculated based on different income brackets.
    // The rates are as follows:
    // - 10% for income up to 24,000
    // - 25% for income between 24,001 and 32,333
    // - 30% for income between 32,334 and 500,000
    // - 32.5% for income between 500,001 and 800,000
    // - 35% for income above 800,000
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1; // 10% tax for income within this bracket
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25; // Add 25% for the amount exceeding 24,000
    } else if (grossSalary <= 500000) {
        tax = 2400 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30; // Add 30% for the amount exceeding 32,333
    } else if (grossSalary <= 800000) {
        tax = 2400 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325; // Add 32.5% for the amount exceeding 500,000
    } else {
        tax = 2400 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35; // Add 35% for the amount exceeding 800,000
    }

    return tax; // Return the total tax calculated
}

// Function to calculate NHIF (National Hospital Insurance Fund) contributions.
function calculateNHIF(grossSalary) {
    // NHIF rates are based on income brackets.
    // Contributions increase as income increases.
    if (grossSalary <= 5999) return 150;
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
    return 1700; // Maximum contribution for income above 99,999
}

// Function to calculate NSSF (National Social Security Fund) contributions.
function calculateNSSF(grossSalary) {
    // NSSF contributions are divided into two tiers:
    // - Tier 1: 6% of income up to 6,000
    // - Tier 2: 6% of income between 6,001 and 12,000
    const tier1 = Math.min(grossSalary, 6000) * 0.06; // Calculate Tier 1 contribution
    const tier2 = Math.max(0, Math.min(grossSalary - 6000, 12000)) * 0.06; // Calculate Tier 2 contribution
    return tier1 + tier2; // Return total NSSF contribution
}

// Main function to calculate net salary.
function calculateNetSalary() {
    // Prompt the user for their basic salary and benefits.
    let basicSalary, benefits;
    while (true) {
        basicSalary = parseFloat(prompt("Enter your basic salary: "));
        benefits = parseFloat(prompt("Enter your benefits: "));

        // Ensure valid numeric inputs.
        if (!isNaN(basicSalary) && !isNaN(benefits)) break;
        alert("Invalid input. Please enter numeric values."); // Alert user for invalid input
    }

    // Gross salary is the sum of the basic salary and benefits.
    const grossSalary = basicSalary + benefits;

    // Calculate individual deductions.
    const paye = calculatePAYE(grossSalary); // PAYE deduction
    const nhif = calculateNHIF(grossSalary); // NHIF deduction
    const nssf = calculateNSSF(grossSalary); // NSSF deduction

    // Net salary is calculated by subtracting total deductions from gross salary.
    const netSalary = grossSalary - (paye + nhif + nssf);

    // Display a detailed breakdown of the salary and deductions.
    alert(`
        === Salary Breakdown ===
        Gross Salary: ${grossSalary.toFixed(2)} KES
        PAYE: ${paye.toFixed(2)} KES
        NHIF Deductions: ${nhif.toFixed(2)} KES
        NSSF Deductions: ${nssf.toFixed(2)} KES
        Net Salary: ${netSalary.toFixed(2)} KES
    `);
}

// Call the main function to execute the salary calculation.
calculateNetSalary();