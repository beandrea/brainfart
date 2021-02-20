import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import "./style/login.css";
import axios from "axios"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  // const [fbUser, setUser] = useState("");

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    let userInfo = {}
    event.preventDefault();
    try {
      userInfo  = await auth.createUserWithEmailAndPassword(email, password);
      // generateUserDocument(user, {displayName});
    
      const newUser = { email: userInfo.user.email, firebaseId: userInfo.user.uid };
      return axios.post("/api/user/", newUser)
    }
    catch (error) {
      console.log(error);
      setError('Error Signing up with email and password');
    }
    finally {
      console.log("test")
      console.log(userInfo)
      // isSignedIn()
      // if(userInfo.user.uid) {
      //   window.location.href = "/"
      // }
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
      console.log(displayName);
    }
  };

  return (
    <div className="mt-8 loginDiv">
      <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form className="formStyle">
          <div className="formInput">
            <label htmlFor="userEmail" className="formLabel">
              Email:
            </label>
            <input
              type="email"
              className="my-1 p-1 w-full"
              name="userEmail"
              value={email}
              placeholder="E.g: faruq123@gmail.com"
              id="userEmail"
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <div className="formInput">
            <label htmlFor="userPassword" className="formLabel">
              Password:
            </label>
            <input
              type="password"
              className="mt-1 mb-3 p-1 w-full"
              name="userPassword"
              value={password}
              placeholder="Your Password"
              id="userPassword"
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-black"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;