import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextProvier } from '../../private/provider/Provider';

const Register = () => {
    const { emailSignUP, signInWithGoogle,updateuser, setUser } = useContext(contextProvier)
    const userUpdate = (name, email, password, img) => {

    }
    let name, email, password, img;
    const RegisterWithEmail = (e) => {
        e.preventDefault()
        name = e.target.name.value;
        email = e.target.email.value;
        password = e.target.password.value;
        emailSignUP(email, password).then(res => {
            let user = res.user;
            setUser(user);
            updateuser(name)
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
            <div className=" border rounded my-5 flex flex-col"> 
            
                        <form onSubmit={RegisterWithEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>Register</button>
                            </div>
                            <Link to={'/login'} className='text-sm underline'>Already have an acount ? login ?</Link>
                        </form>
                        <button className='btn btn-warning mx-8 mt-2 mb-5' onClick={loginWithGoogle}>Register with Google</button>
                    </div>
                </div>
    );
};

export default Register;