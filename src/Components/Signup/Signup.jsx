import React from "react";
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
      });
    
      const [errors, setErrors] = useState({
        email: '',
        password: ''
      });
    
      const [touched, setTouched] = useState({
        email: false,
        password: false
      });
    
      const [showPassword, setShowPassword] = useState(false);
    
      const validateEmail = (email) => {
        if (!email) return '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return 'Please enter email correctly';
        }
        return '';
      };
    
      const validatePassword = (password) => {
        if (!password) return '';
        
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        if (!specialCharRegex.test(password)) {
          return 'Please enter 1 special character';
        }
        
        return '';
      };
    
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        
        setFormData(prev => ({
          ...prev,
          [name]: newValue
        }));
    

        if (name === 'email') {
          setErrors(prev => ({
            ...prev,
            email: validateEmail(value)
          }));
        } else if (name === 'password') {
          setErrors(prev => ({
            ...prev,
            password: validatePassword(value)
          }));
        }
      };
    
      const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({
          ...prev,
          [name]: true
        }));
    
        if (name === 'email') {
          setErrors(prev => ({
            ...prev,
            email: validateEmail(value)
          }));
        } else if (name === 'password') {
          setErrors(prev => ({
            ...prev,
            password: validatePassword(value)
          }));
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        setTouched({
          email: true,
          password: true
        });
    
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);
    
        setErrors({
          email: emailError,
          password: passwordError
        });
    
        if (!emailError && !passwordError) {
          console.log('Form submitted:', formData);
          navigate("/dashboard");
        }
      };
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

  return (
    <div className="signupContainer">
        <div className="mobile-logo-container">
          <div className="mobile-logo">
            <img src="/image.png" alt="Solace Logo" />
          </div>
        </div>

        <div className="leftSide">
            <div className="formDataContainer">
            <div className="tag">
                        <h2>Welcome to Solace</h2>
                        <p>Sign in to your account</p>
                    </div>
                <form action="\" method="post" className="formData" onSubmit={handleSubmit}>
                    <div className="input-grp">
                        <input type="email" 
                        placeholder=" "
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required 
                        className={touched.email && errors.email ? 'error' : ''}
                        />
                        <label className="labelline" htmlFor="">Email</label>
                        {touched.email && errors.email && (
                          <div className="error-message">{errors.email}</div>
                        )}
                    </div>
                    <div className="input-grp">
                        <input type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder=" "
                          value={formData.password}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          className={touched.password && errors.password ? 'error' : ''}/>
                        <label className="labelline" htmlFor="">Password</label>
                        <i 
                          className={`bx ${showPassword ? 'bx-show' : 'bx-hide'}`}
                          onClick={togglePasswordVisibility}
                        ></i>
                        {touched.password && errors.password && (
                          <div className="error-message">{errors.password}</div>
                        )}
                    </div>
                    <div className="moreDetails">
                        <div className="remeber">
                            <input type="checkbox" 
                              name="remember" 
                              id="remember" 
                              checked={formData.remember}
                              onChange={handleInputChange}/><span className="checkmark">Remember Me</span>
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