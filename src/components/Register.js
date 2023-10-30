import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { FcAddImage } from "react-icons/fc";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
const Register = () => {
  const [err, setErr] = useState(false);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[4].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

const storageRef = ref(storage, username);

const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on(
  (error) => {
    setErr(true)
  }, 
  () => {
    // Handle successful uploads on complete
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      await updateProfile(res.user, {
        username,
        photoURL: downloadURL
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        username,
        email,
        photoURL: downloadURL
      
      })
    });
  }
);
    } catch (err) {
      setErr(true);
    }
  }

  return (
    <section className="bg-slate-950 md:px-52 h-100">
      <div className="authwrapper">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="flex justify-center">
            <h1 className="text-gray-50 text-3xl">Sign up</h1>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={HandleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-50">User Name</label>
                <div className="mt-2">
                  <input id="username" name="username" type="text" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">Email</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-50">Password</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="w-100">
                <input type="file" id="upload" name="file" className="hidden" />
                <label htmlFor="upload" className="rounded-sm w-48 flex flex-row items-center gap-2 cursor">
                  <span className="text-5xl"><FcAddImage /></span>
                  <span className="text-lg text-gray-50">Profile picture</span>
                </label>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              <span className="pe-1">Already have account?</span>
              <a href="/auth/login" className="font-semibold leading-6 text-gray-50 hover:text-gray-300">Login now</a>
            </p>
            <p>{err && <span>Something went wrong.</span>}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Register;