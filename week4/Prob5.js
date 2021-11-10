/*2명의 이름과 수학 점수를 입력 받아 object에 name, math라는 이름으로 저장한 뒤  */
const input1= prompt("Input student1's Name : ");
const input2= prompt("Input student2's Name : ");

const input3= parseInt(prompt("Input student1's math_score : "));
const input4= parseInt(prompt("Input student2's math_score : "));


const student=[ 
    {name: input1, math: input3},
    {name: input2, math: input4}
];
document.write(student[0].name+" : "+student[0].math);
document.write("<br>"+student[1].name+" : "+student[1].math);
