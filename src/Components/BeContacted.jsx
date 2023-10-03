import  { useState } from "react";
import { useForm } from "react-hook-form";
import '../Styles/BeContacted.css'


function BeContactedForm() {
    const { register } = useForm("");
const [userName, setUserName] = useState("")
const [number, setNumber] = useState("")


const handleInputChangeNames = (event, setState) => {
  const inputValueRegexName = /^[A-Za-z\s\-']+$/;
  const { value } = event.target;

  if (inputValueRegexName.test(value) || value === '') {
    setState(value);
  }
};
    
const handleInputChangeNumbers = (event, setState) => {
  const inputValueRegexNum = /^[0-9]*$/;
  const { value } = event.target;
  
  if (inputValueRegexNum.test(value)) {
    setState(value);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
    if( userName === "" || number === ""){
alert("Please complete the full information before continuing")
      }else{
    alert("Thank you! An agent will contact you ASAP")
      } 
setUserName("")
setNumber("")

    }
  const house = "A"
  const office = "B"
  const post = "C"
    return (
     
     <div className="formContainer">
     <form onSubmit={handleSubmit}>
        <input value={userName} onChange={(event) => handleInputChangeNames(event, setUserName)} className="BorderForm"  placeholder="First name" />
        <select   className="BorderForm" {...register("category", { required: true })}>
          <option value={""}>Choose Project...</option>
          <option value={house}>Houses</option>
          <option value={office}>Buildings-Offices</option>
          <option value={post}>Post-Construction</option>
        </select>
        <input value={number} onChange={(e) => handleInputChangeNumbers(e, setNumber)} className="BorderForm"  placeholder="Your Number" />
       
        <input type="submit" />
      </form>
      </div>
    );
  }

  export default BeContactedForm;