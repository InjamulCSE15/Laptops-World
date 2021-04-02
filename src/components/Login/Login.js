import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {

    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

	const provider = new firebase.auth.GoogleAuthProvider();
	const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
	}

    return (
		<div>
            <div className="main">
                <h3 className="sign" align="center">Create an account</h3>
                <form className="form1">
                    <input className="un" name="name" type="text" align="center" placeholder="Name" />
                    <input className="un" type="text" name="email" align="center"  placeholder="Email" />
                    <input className="pass" type="password" name="password" align="center"  placeholder="Password" />
                    {/* {newUser && <input className="pass" type="password" name="password" align="center" onBlur={handleBlur} placeholder="Confirm Password" />} */}
                    {/* <input className="un " align="center" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} ></input> */}
                    <br />
                    <br />
                    <button className="submit-google" align="center" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} />	Continue with Google</button>
                    <br/>
                    <br/>
                    <>
                    <label className="unNewUser"> <FontAwesomeIcon icon={faUser} />	Already Have an account?</label>
                    <br/>
                    <label className="unNewUser"><FontAwesomeIcon icon={faUserAltSlash} />	Don't have any account?</label>
                    {/* {newUser && <label className="unNewUser" onClick={() => setNewUser(!newUser)}  htmlFor='!newUser'>Already Have an account?</label>}
                    <br/>
                    {!newUser && <label className="unNewUser" onClick={() => setNewUser(!newUser)} htmlFor='newUser'>Don't have any account?</label>} */}
                    <br/>
                    </>
                    <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>

                    {/* <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Signed Up' : 'Sign In'} Successfully</p>} */}
                </form>
            </div>
           
            <br />

        </div>
    );
};

export default Login;