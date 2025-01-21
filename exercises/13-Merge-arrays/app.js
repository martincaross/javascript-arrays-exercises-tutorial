let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    // Your code here
    for (let i = 0; i < (firstArray.length + secondArray.length); i++){
        if(i < firstArray.length){
            newArray.push(firstArray[i])
        } else {
            newArray.push(secondArray[i-firstArray.length])
        }
    
    }
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
