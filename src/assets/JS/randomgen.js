let n = 100
genRandomNumbers = function(){
    let rNums = []


    for(let i=0; i < n; i++){
        let rnd = Math.floor((Math.random() * 9999) + 1)
        rNums.push(rnd)
    }
   
    return rNums
}

getN = function(){
    return n
}