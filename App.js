
import Form from "./Form";
import Display from "./Display"
import './App.css';
import React, {useState, useEffect} from "react"



function App() {
  const [submittedData, setSubmittedData] = useState([]);
  const [storedDataArray, setstoredDataArray] = useState([])
 useEffect (()=> {
   setstoredDataArray([
    {
    id: "1",
    firstName: "Lara",
     lastName: "H",
     favoriteSoftAnimal: "hamster"
    }
])
  //  console.log(firstObjectArray)
 }, [])
  // console.log("statevariablearray", storedDataArray)
  
 
  // const dataArray = [...submittedData, formData];
  // setSubmittedData(dataArray);
  // setFirstName("");
  // setLastName("");
  // setFavoriteSoftAnimal("")
  const formArray = ( dataObj ) => {
    const dataArray = [...storedDataArray, dataObj];
    // console.log("formed data from old and new inputs", dataArray)
    return dataArray
  }

function gatherDataFromForm(formData){
  setSubmittedData(formData)
  setstoredDataArray(formArray(formData)
    
    )

// console.log("data from form", formData )
// console.log("is event variable  here?", submittedData)
/*{submittedData={submittedData} */


}
  return (
    <div className="App">
      <header className="App-header">
      <Form gatherDataFromForm={gatherDataFromForm} /> 
      <Display submittedData={submittedData} />
  
      
      </header>
    </div>
  );
}

export default App;
