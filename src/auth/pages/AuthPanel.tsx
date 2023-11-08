import { useState } from 'react';
import { Button } from '../components/Button';
import { Login } from '../components/Login';
import { Register } from '../components/Register';

export const AuthPanel = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true);
    const toggleLogin = () => {
        setIsLogin(!isLogin);
    };


    return (
        <>
            <div className="flex items-center justify-center w-screen h-full min-h-screen px-12 py-12 bg-electric-violet-100">
                <div className="relative flex flex-col items-center w-full rounded-sm md:flex-row min-h-max h-[700px]">
                    <div className={`w-full flex flex-row justify-center relative h-full transition-all duration-1000 p-7 ${isLogin ? 'md:w-2/5 bg-electric-violet-200' : 'md:w-3/5 bg-electric-violet-700'} bg-electric-violet-200`}>
                        <div className={`flex transition-all duration-300 ease-in-out flex-col ${isLogin ? 'opacity-100' : 'w-0 -translate-x-48 overflow-hidden'} items-center justify-center h-full gap-9`}>
                            <p className='text-5xl font-bold tracking-wider text-center font-russo-one text-electric-violet-800'>Hello, Friend!</p>
                            <p className='text-base font-bold tracking-wider text-center font-russo-one text-electric-violet-500'>Enter your personal details and start journey with us</p>
                            <Button fn={toggleLogin} title='Sign Up' px='px-9' py='py-4'rounded='rounded-full'/>
                        </div>
                        <div className={`transition-all duration-300 ease-in-out translate-x-0 ${isLogin ? 'translate-x-14 opacity-0 z-0 w-0 overflow-hidden' : 'opacity-100 w-full h-full'}`}>
                            <Register />
                        </div>
                    </div>
                    <div className={`w-full flex flex-row justify-center relative h-full transition-all duration-1000 p-7 ${isLogin ? 'md:w-3/5 bg-electric-violet-700' : 'md:w-2/5 bg-electric-violet-200'}`}>
                        <div className={`flex transition-all duration-300 ease-in-out flex-col ${isLogin ? 'w-0 translate-x-48 overflow-hidden' : 'opacity-100'} items-center justify-center h-full gap-9`}>
                            <p className='text-5xl font-bold tracking-wider text-center font-russo-one text-electric-violet-800'>Do you have an account?</p>
                            <p className='text-base font-bold tracking-wider text-center font-russo-one text-electric-violet-500'>Enter your email and start working with us</p>
                            <Button fn={toggleLogin} title='Sign In' px='px-9' py='py-4'rounded='rounded-full'/>
                        </div>
                        <div className={`transition-all duration-300 ease-in-out translate-x-0 ${isLogin ? 'opacity-100 w-full h-full' : 'translate-x-14 opacity-0 z-0 w-0 overflow-hidden'}`}>
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
