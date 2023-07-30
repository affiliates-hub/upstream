import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextProvier } from '../../private/provider/Provider';

const Login = () => {
    const { emailLogIn, signInWithGoogle, setUser } = useContext(contextProvier)
    const userUpdate = (name, email, password, img) => {

    }
    let name, email, password, img;
    const loginWithEmail = (e) => {
        e.preventDefault()
        email = e.target.email.value;
        password = e.target.password.value;
        emailLogIn(email, password).then(res => {
            let user = res.user;
            setUser(user)
        })
    }
    const loginWithGoogle = () => {
        signInWithGoogle().then(res => {
            let user = res.user;
            setUser(user)
        })
    }
    return (
        <div className='md:w-3/4 lg:w-2/3 sm:w-4/5 w-full  mx-auto'>
            <div className="gap-2 border my-5 rounded flex flex-col">
                <form onSubmit={loginWithEmail} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name='password' className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <Link to={'/register'} className='text-sm underline'>Dont have an acount ? Register ?</Link>
                </form>
                <button className='btn btn-warning capitalize mx-8 mt-2 mb-5' onClick={loginWithGoogle}> Login with google</button>
            </div>
        </div>
    );
};

export default Login;