
import '../Styles/MainForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import torontoImage from '../Images/toronto.jpg';
import house from '../Images/Icon House.png';
import office from '../Images/Icons Office.png';
import construction from '../Images/Construction Building.png';
import CommentBox from '../Components/CommentSection'


function MainForm(){

return(
    <div id="contactUs" className="mainFormContainer">
<div className="custom-shape-divider-top-1688313123">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>


<div className="mainFormSections row">

<div className="col-md-6 imagToronto">

<img 
className="TorontoImg"
src={torontoImage}
alt="House Background" 
/>

<div className="WhatWeDoIcons">
<img 
className="IconsWhatWeDo"
src={house}
alt="House Background" 
/>
<img 
className="IconsWhatWeDo"
src={office}
alt="House Background" 
/>
<img 
className="IconsWhatWeDo"
src={construction}
alt="House Background" 
/>

</div>

</div>


<div className="col-md-6"  id="mainForm">
<form className="mainForm">
  
  <div className="row mb-4">
  <h1 className="MainFromH1">Contact Us!</h1>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form6Example1">First name*</label>
        <input type="text" id="form6Example1" className="form-control" required/>
        
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form6Example2">Last name</label>
        <input type="text" id="form6Example2" className="form-control" />
        
      </div>
    </div>
  </div>

  
  <div className="form-outline mb-4">
  <label  className="form-label" htmlFor="form6Example3">Country</label>
    <input type="text" value="Canada" id="form6Example3" className="form-control" />
    
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form6Example4">Address*</label>
    <input type="text" id="form6Example4" className="form-control" required/>
   
  </div>

  
  
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form6Example5">Email Address*</label>
    <input type="email" id="form6Example5" className="form-control" required/>
    
  </div>

 
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form6Example6">Phone Number</label>
    <input type="number" id="form6Example6" className="form-control" />
    
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form6Example7">Additional information</label>
    <textarea className="form-control" id="form6Example7" rows="4"></textarea>
    
  </div>

  <div className="checkboxServices">
  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" />
    <label className="form-check-label" htmlFor="form6Example8">House</label>
  </div>

  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8"  />
    <label className="form-check-label" htmlFor="form6Example8">Office</label>  
  </div>

  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8"  />
    <label className="form-check-label" htmlFor="form6Example8">Post-Construction</label>
  </div>
  </div>

  <div className="submitBottonMainContainer">
  <button type="submit" className="btn btn-primary btn-block mb-4 submitBottonMain">Place order</button>
  </div>
</form>
</div>
</div>
<div>
<CommentBox />
</div>
</div>

)


}

export default MainForm;