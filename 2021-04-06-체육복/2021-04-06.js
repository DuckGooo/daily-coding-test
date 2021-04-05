function solution(n, lost, reserve) {
    let answer = 0;
    for(let r of reserve){
        let turn = 0
        for(let l of lost){
            let p = r + 1
            let m = r - 1

            if(lost.length < reserve.length){
                if(turn == 0){
                    if(l == p || l == m){ 
                        answer = answer +1
                        turn = 1
                    }
                }
            }else{
                if(l == p || l == m){
                    answer = answer +1
                    turn = 1
                }
            }
        }
    }

    answer = answer + lost.length

    return answer
}