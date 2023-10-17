import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Auth = () => {
    return (
        <section className="bg-slate-950 md:px-52 md:py-16 h-screen">
            <div className="authwrapper">
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </section>
    )
}
export default Auth;