// Your code here

function lyricsGenerator(base){
    let letra = ""
    
    for(let i = 0; i < base.length; i++){
        let aux = 0
        if (base[i] === 0){
            aux = 'Boom'
            letra += aux + " ";
        } else if (base[i] === 1){
            aux = 'Drop the bass'
            letra += aux + " ";
            if (i >= 2){
                if (base[i-1] === 1 && base[i-2] === 1){
                    aux = '!!!Break the bass!!!'
                    letra += aux + " ";
                }
            }
            
        } else {
            aux =""
            letra += aux + " ";
        }
        
    }

        
        return letra
    }



// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
