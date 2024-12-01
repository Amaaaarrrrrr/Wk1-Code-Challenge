<!-- Challenge 1: Student Grade Generator -->
   <!-- overview -->
A program that calculates the grade of a student based on their marks.

   <!-- Grading System -->
A: Marks > 79
B: Marks between 60 and 79
C: Marks between 50 and 59
D: Marks between 40 and 49
E: Marks < 40

   <!-- Features -->
Input Validation: Ensures the entered marks are between 0 and 100.
Error Handling: Displays an error message for invalid inputs.
Output: Displays the entered marks and the corresponding grade.

   <!-- Usage -->
Run the program in a browser or JavaScript runtime.
Enter marks when prompted.
The program outputs the grade based on the marks.

   <!-- Example -->
Input: 85
Output: Marks: 85, Grade: A



<!-- Challenge 2: Speed Detector -->
   <!-- Overview -->
A program to calculate demerit points based on the speed of a car. It also determines if a driver’s license should be suspended.

   <!-- Rules -->
Speed Limit: 70 km/h
Demerit Points: 1 point for every 5 km/h above 70 km/h.
License Suspension: If demerit points exceed 12, the license is suspended.

   <!-- Features -->
Speed Check: Checks if the speed is within the limit.
Demerit Points Calculation: Calculates points for speeds exceeding 70 km/h.
License Suspension: Outputs "License suspended" if points exceed 12.

   <!-- Usage -->
Run the program in a browser or JavaScript runtime.
Input the car's speed.
The program outputs the number of points or suspends the license.

   <!-- Example -->
Input: carSpeed(80)
Output: Points: 2

Input: carSpeed(100)
Output: Points: 6

Input: carSpeed(150)
Output: License suspended


<!-- Challenge 3: Net Salary Calculator -->
   <!-- Overview -->
A program that calculates an individual’s net salary after deductions for tax (PAYE), NHIF, and NSSF.

   <!-- Features -->
Gross Salary Calculation: Adds basic salary and benefits.
PAYE Tax:
10% for gross salary ≤ 24,000.
25% for gross salary between 24,001 and 32,333.
30% for gross salary > 32,333.
NHIF Deductions: Based on predefined rates.
NSSF Deductions: 6% of gross salary, capped at 1,800.
Net Salary Calculation: Subtracts PAYE, NHIF, and NSSF deductions from gross salary.

   <!-- Usage -->
Run the program in a browser or JavaScript runtime.
Input the basic salary and benefits when prompted.
The program outputs a detailed breakdown of gross salary, deductions, and net salary.

   <!-- Example -->
Input:
  Basic Salary: 50,000
  Benefits: 10,000

Output:
  Gross Salary: 60000.00
  Tax (PAYE): 18000.00
  NHIF Deduction: 1000.00
  NSSF Deduction: 1800.00
  Net Salary: 39200.00