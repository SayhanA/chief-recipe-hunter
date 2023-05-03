import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaExclamationTriangle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { GithubAuthProvider } from 'firebase/auth';


const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const { singIn, user, handleGoogleSignIn, handleGitHubSignIn } = useContext(AuthContext);
    // console.log(singIn)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // // firebase login
        singIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from)
                if (user) {
                    setError("Congratulation !! ");
                    form.reset();
                    setPassword('');    
                }
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    // control form
    const handledPassword = (e) => {
        setError('')
        const inputPassword = e.target.value;
        setPassword(inputPassword);

        // password validation
        if (inputPassword.length < 6) {
            setPasswordError("Password must be at least 6 character long.");
        }
        else if (!/(?=.*?[A-Z])/.test(inputPassword)) {
            setPasswordError("Password must contain at least one capital letter")
            form.reset()
        }
        else if (!/(?=.*?[a-z])/.test(inputPassword)) {
            setPasswordError("Password must contain at least one small letter")
        }
        else if (!/(?=.*?[0-9])/.test(inputPassword)) {
            setPasswordError("Password must contain at least one number")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(inputPassword)) {
            setPasswordError("Password must contain al least one special character")
        }
        else {
            setPasswordError("");
        }

    }

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
            navigate(from)
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleGithubLogin = () => {
        handleGitHubSignIn()
        .then(result => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
            navigate(from)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div style={{ background: "url('https://wallpapercave.com/wp/wp9764009.jpg')" }} className='w-full pt-20'>
            <form onSubmit={handleSubmit} style={{ backdropFilter: "blur(20px)" }} className='border bg-[#ffffff10] rounded-xl border-gray-300 p-10 mx-auto mt-5 w-[540px] h-[450px] text-white'>
                <p className='font-bold text-2xl leading-7'>Login</p>

                <div className="relative z-0 w-full mb-6 mt-10 group text-lg">
                    <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email address</label>
                </div>

                <div className="mt-9 relative nameContainer">

                    <div className="relative z-0 w-full group text-lg">
                        {
                            show ? <FaEye onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4 z-30' /> : <FaEyeSlash onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4' />
                        }
                        <input onChange={handledPassword} type={show ? "text" : "password"} name="password" id="password" value={password} className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Password</label>
                    </div>
                    {passwordError && <div className='flex items-center gap-2 text-red-500'> <FaExclamationTriangle /><span>{passwordError}</span> </div>}
                </div>

                <div className='mt-5 flex justify-between'>
                    <div className=" relative nameContainer flex gap-3 items-center font-semibold">
                        <input className=" border-[3px]" id="username" type="checkbox" placeholder='userName' required />
                        Accept all <Link className='font-light underline text-gray-400'>Terms and Conditions</Link>
                    </div>
                    <Link className='text-yellow-400 font-medium underline'>Forgot Password</Link>
                </div>

                <div className="">
                    <label className="btn btn-warning w-full rounded-none mt-9" htmlFor="login">
                        Login
                    </label>
                    <input className="text-white hidden" id='login' type="submit" />
                </div>
                <div className='text-center font-semibold'>Don't have an account? <Link to='/register' className='text-yellow-400 underline'>Create an account</Link></div>
                {error && <p id='errorField' className='text-red-500 text-center'>{error}</p>}
            </form>

            <div className='w-[540px] mx-auto p-4 text-white'>
                <div className='p-5 w-full flex gap-5 justify-center items-center'>
                    <div className=' border-2 border-gray-300 w-[40%] h-0'></div>
                    <span className=' font-bold'>OR</span>
                    <div className=' border-2 border-gray-300 w-[40%] h-0'></div>
                </div>
                <div className='mx-5'>
                    <div onClick={handleGithubLogin} className='relative border border-gray-300 h-[51px] flex justify-center items-center rounded-full cursor-pointer transition-all hover:bg-[#ffffff30] hover:scale-105'>
                        <img className='w-[37px] absolute left-2 rounded-full' src="/public/images/GitHub.png" alt="" />
                        <p className='text-center font-semibold'>Continue with GitHub</p>
                    </div>
                    <div onClick={handleGoogleLogin} className='mt-3 relative border border-gray-300 h-[51px] flex justify-center items-center rounded-full cursor-pointer transition-all hover:bg-[#ffffff30] hover:scale-105'>
                        <img className='w-[37px] absolute left-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                        <p className='text-center font-semibold'>Continue with Google</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;