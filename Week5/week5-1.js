// 함수 내에서 평균을 구한 뒤 반환

    const n = parseInt(prompt("Input the number of students"));
  
    const array = [];
    for (let i = 0; i < n; i++) {
      const score = parseInt(prompt("Input scores"));
      array.push(score);
    }
  
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += array[i];
    }
  
    const average = sum / n;
 
//document.write(average);
  
//표준편차는 편차제곱의 평균=분산에 루트를 씌운것이므로
    const ex2=[];
    let sigex2=0;

    for(let i=0;i<n;i++){
        ex2[i]=(average-array[i])*(average-array[i]);
    }

    for(i=0;i<n;i++){
        sigex2 += ex2[i];
    }

    let variance=0;
    
    variance= sigex2/n;

    let sd=0;

    sd=Math.sqrt(variance);
    document.write("standard deviation : "+sd);
