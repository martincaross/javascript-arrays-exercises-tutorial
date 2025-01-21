let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parkingState){
  let totalSlots = 0
  let availableSlots = 0
  let occupiedSlots = 0

  let state = { totalSlots: 0, availableSlots: 0, occupiedSlots: 0 }

  for(let i = 0; i < parkingState.length; i++){
    for(let j = 0; j < parkingState[i].length; j++)
      if (parkingState[i][j] == 0){ //creo que entonces me sobra esto
        
      } else if (parkingState[i][j] == 1){
        state.occupiedSlots++
        state.totalSlots++

      } else {
        state.totalSlots++
        state.availableSlots++
        
      }

  }
 

  return state


}


console.log(getParkingLotState(parkingState))
