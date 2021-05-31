import React, {useContext} from "react";
import UserContext from "../../utils/userContext"

function Usercard (){

  const {dbUser}=useContext(UserContext);


    return(
<div class="card">
<div class="card-body">
  <div class="d-flex flex-column align-items-center text-center">
    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
    <div class="mt-3">
      <h4>{dbUser.fullname}</h4>
      <p class="text-secondary mb-1">3 Kids, We're swingers</p>
      <p class="text-muted font-size-sm">{dbUser.description}</p>
      <button class="btn btn-outline-primary">Message</button>
    </div>
  </div>
</div>
</div>
    )
}


export default Usercard;