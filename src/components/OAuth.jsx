import { FcGoogle } from "react-icons/fc";
import {toast} from "react-toastify";
import {getAuth, signInWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {db} from "../firebase";
import {doc,getDoc,serverTimestamp,setDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export default function OAuth() {
  const navigate =useNavigate()
  async function onGoogleClick() {
    try{
      const auth=getAuth()
      const provider= new GoogleAuthProvider()
      const result = await signInWithPopup(auth,provider)
      const user =result.user

      //check for the user 
      const docRef =doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){
        await setDoc(docRef,{
          name: user.displayName,
          email: user.email,
          timestamp:serverTimestamp(),
        });
      }

      navigate("/")

    } catch (error){
      toast.error("Could not authorize with Google")
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover: shadow-lg transition duration-150 ease-in-out rounded "
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" /> Continue with
      Google{" "}
    </button>
  );
}
