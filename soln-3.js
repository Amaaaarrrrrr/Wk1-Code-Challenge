function netSalaryCalculator() {
   
    const basicSalary = parseFloat(prompt("Enter your basic salary:")); //prompts user to enter their basic salary
    const benefits = parseFloat(prompt("Enter your benefits:")); //prompts user to enter their benefits



    // validate input
    if (isNaN(basicSalary) || isNaN(benefits)) //ensures the value for both basicSalary and benefits is a number
        {
        console.log("Invalid input. Please enter numeric values.");
        return;
    }



    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;



    // Calculate PAYE (Tax)
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = grossSalary * 0.25;
    } else {
        tax = grossSalary * 0.3;
    }

    //nhifRates
    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: Infinity, deduction: 1000 }
    ]; //this ensures that the nhifRates are not changed for easy calculation



    // Calculate NHIF deduction
    const nhifDeduction = nhifRates.find(rate => grossSalary >= rate.min && grossSalary <= rate.max).deduction;

    // Calculate NSSF deduction
    const nssfDeduction = Math.min(grossSalary * 0.06, 1800);

    // Calculate Net Salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;



    // Output results
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`); //output for gross salary

    console.log(`Tax (PAYE): ${tax.toFixed(2)}`); //output for tax PAYE

    console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`); //output for NHIF deduction

    console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`); //output for NSSF deduction

    console.log(`Net Salary: ${netSalary.toFixed(2)}`); //Output for Net Salary
}


netSalaryCalculator();