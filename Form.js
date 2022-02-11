import React, {useState} from 'react'

function Form({gatherDataFromForm}) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [favoriteSoftAnimal, setFavoriteSoftAnimal] = useState("")


    function handleSubmit(event){
        event.preventDefault();
        const formData = {
            firstName: firstName,
            lastName: lastName,
            favoriteSoftAnimal: favoriteSoftAnimal,
        };
       
        console.log("form data", formData)
        gatherDataFromForm(formData)
   
        // const dataArray = [...submittedData, formData];
        // setSubmittedData(dataArray);
        // setFirstName("");
        // setLastName("");
        // setFavoriteSoftAnimal("")

    // want to clear the form later
  event.target.reset(firstName)
    }
    function handleFirstNameChange(event){
        setFirstName(event.target.value)
      }
      function handleLastNameChange(event){
        setLastName(event.target.value)
      }
      function handleChangeFavoriteSoftAnimal(event){
        setFavoriteSoftAnimal(event.target.value)
      }
 

  
  return (
    <div>
        <form  onSubmit = {handleSubmit}>
            
            <label> Name:
                <input  type="text" value = {firstName} onChange={ handleFirstNameChange} />
            </label>
            <label> Last name:
                 <input type="text" value = {lastName} onChange={handleLastNameChange} />
            </label>
            <label> Favorite soft animal:
                 <input type="text" value ={favoriteSoftAnimal} onChange= {handleChangeFavoriteSoftAnimal}  />
            </label>
            <button onSubmit={handleSubmit}
            type="submit"> Submit, yo</button>
        </form>
      
    </div>
  )
}

export default Form