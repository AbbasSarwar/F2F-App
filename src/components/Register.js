import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Register = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

    return (
      <section className="bg-slate-950 md:px-52 md:py-12 h-screen">
        <div className="authwrapper">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="flex justify-center">
            <h1 className="text-gray-50 text-3xl">Sign up</h1>
          </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST" onSubmit={HandleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">Email address</label>
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
  
                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                </div>
              </form>
  
              <p className="mt-10 text-center text-sm text-gray-500">
                <span className="pe-1">Already have account?</span>
                <a href="/auth/login" className="font-semibold leading-6 text-gray-50 hover:text-gray-300">Login now</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  export default Register;