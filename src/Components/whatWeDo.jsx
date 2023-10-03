

import BeContactedForm from "./BeContacted.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from '../Images/icons phone.png'
import '../Styles/whatWeDo.css'

function WhatWeDo(){
   return(
<div>

<h1 className="h1">
<img id="phone" src={phone}
        alt='Phone Icone' />
       Drop your Number to be Contacted!
      </h1>
      <BeContactedForm />
</div>
)

}

export default WhatWeDo;