import React from 'react';
import { useHistory } from "react-router-dom";
function SignUpBtn() {
  const history = useHistory();
  const navigateTo = () => history.push('/Signup');

  return (
   <div>
   <button 
   onClick={navigateTo} 
   type="button"
   className="btn btn-primary" > Get Started </button>
   </div>
  );
}
export default SignUpBtn;