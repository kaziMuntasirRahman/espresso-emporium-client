import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.console'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const serverURL = 'http://localhost:3000';
  // const serverURL = 'https://espresso-emporium-server-kappa.vercel.app';
  // const serverURL = 'https://espresso-emporium-server-kazi-muntasir-rahmans-projects.vercel.app';

  // manages user states
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      //<<extension
      if (currentUser) {
        console.log("User is present as: " + currentUser.displayName);
        console.log(currentUser);
      } else {
        console.log("User is absent.");
      }
      //extension>>
      setLoading(false);
    })
    return (() => unSubscribe());
  }, [])

  // Create user with name, email and password
  const createUser = async (name, email, password) => {
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, { displayName: name });
      const updatedUser = { ...credentials.user, displayName: name };
      setUser(updatedUser);
      return updatedUser;
    }
    catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }

  //sign in with email and password
  const signInUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  }

  //sign out 
  const logOut = () => {
    return signOut(auth);
  }


  const authInfo = {
    user,
    serverURL,
    loading,
    createUser,
    signInUser,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;