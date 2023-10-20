import { Routes, Route } from 'react-router-dom';

const Auth = () => {
    return (
        <section className="bg-slate-950 md:px-52 md:py-12 h-screen">
            <div className="authwrapper">
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </section>
    )
}
export default Auth;