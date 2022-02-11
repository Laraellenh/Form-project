import React, {useEffect} from 'react'


function Display({submittedData}) {
    const {firstName, lastName, favoriteSoftAnimal} = submittedData
    console.log(favoriteSoftAnimal)
    useEffect(()=>{
        // gather data from submit and add to a new database that I make, display 3 on screen
    }, [])
       
//     console.log("consoling stored Data Array in display obtained from app", storedDataArray)
//     let displayString = storedDataArray.length === 0 ? displayString = "it's empty, nothing to show" : displayString = storedDataArray[0].firstName
//     // storedDataArray is empty [] until we add Data
// //    storedDataArray 
  return (
    <div > 
        <h1> Favorite Softy is: {favoriteSoftAnimal} </h1>
        <h2> Who thinks its softest? {firstName} {lastName} </h2>
      
    </div>
  )
}

export default Display