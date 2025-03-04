// Salary calculate
let taxRate = 0;
let deduction = 0;
let salaryIncomeTax = 0;
let companyPensiton;
let grosSalary = Number(prompt("Enter your salary"));

switch (true) {
  case grosSalary <= 600:
    let employeePensiton = grosSalary * 0.07;
    let netIncome = grosSalary - employeePensiton;
    taxRate = 0;
    salaryIncomeTax = 0;
    companyPensiton = grosSalary * 0.11;
    deduction = 0;
    console.log(
      `taxRate: ${taxRate}, deduction: ${deduction}, salaryIncomeTax: ${salaryIncomeTax}, employeePensiton: ${employeePensiton}, companyPenstion: ${companyPensiton}, netIncome: ${netIncome}`
    );
    console.log(`NON taxable: Your salary is ${netIncome}`);
    break;

  case grosSalary >= 601 || grosSalary <= 1650:
    taxRate = grosSalary * 0.1;
    deduction = 60;
    break;
  case grosSalary === 1651 || grosSalary <= 3200:
    taxRate = grosSalary * 0.15;
    deduction = 142.5;
    break;
  case grosSalary === 3201 || grosSalary <= 5200:
    taxRate = grosSalary * 0.2;
    deduction = 302.5;
    break;
  case grosSalary === 5201 || grosSalary <= 7800:
    taxRate = grosSalary * 0.25;
    deduction = 565;
    break;
  case grosSalary === 7801 || grosSalary <= 10900:
    taxRate = grosSalary * 0.3;
    deduction = 955;
    break;
  case grosSalary >= 10901:
    taxRate = grosSalary * 0.35;
    deduction = 1500;
    break;

  default:
    console.log("Invalid");
    break;
}

salaryIncomeTax = Math.floor(taxRate - deduction);
employeePensiton = Math.floor(grosSalary * 0.07);
companyPensiton = Math.floor(grosSalary * 0.11);
netIncome = grosSalary - salaryIncomeTax - employeePensiton;
if (grosSalary >= 601) {
  console.log(
    `taxRate: ${taxRate}, deduction: ${deduction}, salaryIncomeTax: ${salaryIncomeTax}, employeePensiton: ${employeePensiton}, companyPenstion: ${companyPensiton}, netIncome: ${netIncome}`
  );
}

/*
let taxRate = 0;
let deduction = 0;
let salaryIncomeTax = 0;
let companyPensiton;
let grosSalary = Number(prompt("Enter your salary"));

switch (true) {
  case (grosSalary <= 600):
    let employeePensiton = grosSalary * 0.7;
    let netIncome = grosSalary - employeePensiton;
    taxRate = 0;
    salaryIncomeTax = 0;
    companyPensiton = grosSalary * 0.11;
    deduction = 0;
    console.log(
      `taxRate: ${taxRate}, deduction: ${deduction}, salaryIncomeTax: ${salaryIncomeTax}, employeePensiton: ${employeePensiton}, companyPenstion: ${companyPensiton}, netIncome: ${netIncome}`
    );
    console.log(`NON taxable: Your salary is ${netIncome}`);
    break;

  case (grosSalary >= 601 && grosSalary <= 1650):
    taxRate = grosSalary * 0.1;
    deduction = 60;
    break;

  case (grosSalary >= 1651 && grosSalary <= 3200):
    taxRate = grosSalary * 0.15;
    deduction = 142.5;
    break;

  case (grosSalary >= 3201 && grosSalary <= 5200):
    taxRate = grosSalary * 0.2;
    deduction = 302.5;
    break;

  case (grosSalary >= 5201 && grosSalary <= 7800):
    taxRate = grosSalary * 0.25;
    deduction = 565;
    break;

  case (grosSalary >= 7801 && grosSalary <= 10900):
    taxRate = grosSalary * 0.3;
    deduction = 955;
    break;

  case (grosSalary >= 10901):
    taxRate = grosSalary * 0.35;
    deduction = 1500;
    break;

  default:
    console.log("Invalid salary input");
    break;
}
salaryIncomeTax = Math.floor(taxRate - deduction);
employeePensiton = Math.floor(grosSalary * 0.07);
companyPensiton = Math.floor(grosSalary * 0.11);
netIncome = grosSalary - salaryIncomeTax - employeePensiton;

if (grosSalary >= 601) {
  console.log(
    `taxRate: ${taxRate}, deduction: ${deduction}, salaryIncomeTax: ${salaryIncomeTax}, employeePensiton: ${employeePensiton}, companyPenstion: ${companyPensiton}, netIncome: ${netIncome}`
  );
}
  */
