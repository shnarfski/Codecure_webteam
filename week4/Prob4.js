const input1 = parseInt(prompt("student1 : "));
const input2 = parseInt(prompt("student2 : "));
const input3 = parseInt(prompt("student3 : "));
const score = new Array();
score[0] = input1;
score[1] = input2;
score[2] = input3;
const avg = (score[0] + score[1] + score[2]) / 3
document.write("<br />"+input1+ " + " + input2 + " + " + input3);
document.write("<br/>Korean class Average : " + avg);
console.log(avg);
