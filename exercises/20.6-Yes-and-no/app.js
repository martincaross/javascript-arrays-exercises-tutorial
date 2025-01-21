let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here

let newArray = theBools.map(function(item) {
	// Your code here
    if (item === 0){
        item = 'woko'
    } else {
        item = 'wiki'
    }
	
	return item
});

console.log(newArray)