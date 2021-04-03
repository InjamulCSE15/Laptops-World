import React, { useContext } from 'react';
import firebase from "firebase/app";
import './Login.css';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div>
        <div className="main">
            <h2 className="sign" align="center">Create an account</h2>
            <div className="form1">
                <input className="un" name="name" type="text" align="center"  placeholder="Name" />
                <input className="un" type="text" name="email" align="center" placeholder="Email" />
                <input className="pass" type="password" name="password" align="center" placeholder="Password" />
                {/* <input className="pass" type="password" name="password" align="center" onBlur={handleBlur} placeholder="Confirm Password" />
                <input className="un " align="center" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} ></input> */}
                <br />
                <br />
                <button className="submit-google" align="center" onClick={handleGoogleSignIn} >     Continue with Google</button>
                <br/>
                <br/>
                <>
                <label className="unNewUser">Already Have an account?</label>
                <br/>
                <label className="unNewUser" >Don't have any account?</label>
                <br/>
                </>
                <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>

                {/* <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Signed Up' : 'Sign In'} Successfully</p>} */}
            </div>
        </div>
       
        <br />

    </div>
        
        // <div>
            
        //     <button onClick={handleGoogleSignIn}>Google Sign in</button>
        // </div>
        
    );
};

export default Login;