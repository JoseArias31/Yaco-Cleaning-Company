import  { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import '../Styles/BeContacted.css'


function BeContactedForm() {
//EMAIL JS

const form = useRef();


const handleSubmitAndSendEmail = (e) => {
  e.preventDefault();

   if (userName === '' || number === '') {
    alert('Please complete the full information before continuing');
  } else {
    alert('Thank you! An agent will contact you ASAP');
    
    // Send the email using EmailJS
    emailjs.sendForm('service_0mk8rzq', 'template_1vw4er8', form.current, 'tS-p4UiAYRKJCv-KI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Reset the form inputs
    setUserName('');
    setNumber('');
  }
};

// EMAIL JS



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


  const house = "House"
  const office = "Office"
  const post = "Post-Construction"
    return (
     
     <div className="formContainer">
     <form ref={form} onSubmit={handleSubmitAndSendEmail}>
        <input value={userName} onChange={(event) => handleInputChangeNames(event, setUserName)} className="BorderForm" name="user_name"  placeholder="First name" />
        <select  name="category" className="BorderForm" {...register("category", { required: true })}>
          <option value={""}>Choose Project...</option>
          <option value={house}>Houses</option>
          <option value={office}>Buildings-Offices</option>
          <option value={post}>Post-Construction</option>
        </select>
        <input value={number} onChange={(e) => handleInputChangeNumbers(e, setNumber)} className="BorderForm"  placeholder="Your Number" name="user_phone" />
       
        <input type="submit" />
      </form>
      </div>
    );
  }

  export default BeContactedForm;