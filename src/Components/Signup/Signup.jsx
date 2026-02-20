import React from "react";
import "./Signup.css";

const Signup = () => {


  return (
    <div className="signupContainer">
        <div className="leftSide">
            <div className="formDataContainer">
            <div className="tag">
                        <h2>Welcome to Solace</h2>
                        <p>Sign in to your account</p>
                    </div>
                <form action="\" method="post" className="formData">

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div className="moreDetails">
                        <div className="remeber">
                            <input type="checkbox" name="remember" id="remember" />Remember Me
                        </div>
                        <div className="forgot">
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" className="loginBtn">Login</button>
                </form>
            </div>
        </div>
        <div className="rightSide">
            <div className="imgBG">
                <img src="/image.png" alt="" />
            </div>
        </div>
    </div>
  );
};

export default Signup;
