function solution(n, lost, reserve) {
    
    let answerList = []
    
    for(let i=0; i<n; i++){
        answerList.push(1)
    }
    
    for(let i=1; i<=n; i++){
        for(let l=0; l<lost.length; l++){
            if(i === lost[l]){
                answerList[i-1] = 0
            }
        }
        for(let r=0; r<reserve.length; r++){
            if(i === reserve[r]){
                answerList[i-1] += 1
            }
        }
    }
    
    for(let a=0; a<answerList.length; a++){
        if(answerList[a] === 0 && answerList[a+1] === 2){
            answerList[a] = 1
            answerList[a+1] = 1
        }else if(answerList[a] === 0 && answerList[a-1] === 2){
            answerList[a] = 1
            answerList[a-1] = 1
        }
    }
    
    let answer = 0
    for(let ans of answerList){
        if(ans >= 1){
            answer++;
        }
    }
    return answer
}