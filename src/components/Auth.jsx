import React from "react";
import { Link } from 'react-router-dom'


const Auth = () => {
  return (
    <div>
      <div id="call__to__action" className=" call__to__action">
        <Link to="/login">Sign in / Sign up</Link>
      </div>

      <div id="user__logged" className=" user__logged"></div>
    </div>
  );
};

export default Auth;
