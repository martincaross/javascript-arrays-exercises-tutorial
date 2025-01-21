// Your code here

function matrixBuilder(FilCol){
    let AnArray = []
    
    for(let i = 0; i < FilCol; i++){
        let row = []
        
        for(let j = 0; j < FilCol; j++){

            row.push(Math.round(Math.random()))
        }
        AnArray.push(row)
    }

    return AnArray

}

// Do not change anything from this line down
console.log(matrixBuilder(5))