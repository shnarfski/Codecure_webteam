const scores1=[1,2,3,4,5];
const scores2=[1,2,3,4,5,6,7,8,9,5];
const scores3=[10,20,30,40,50,60,70,80,90,100,40,40,40,40,40];

function getAverageOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log("Average: " + sum / arr.length);
}
  
console.log(getAverageOfArray(scores1));
console.log(getAverageOfArray(scores2));
console.log(getAverageOfArray(scores3));
