import { useState } from 'react';
import { Button } from '../components/Button';
import { Login } from '../components/Login';
import { Register } from '../components/Register';

export const AuthPanel = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true);
    const toggleLogin = () => {
        setIsLogin(l => !l);
    };


    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen bg-electric-violet-100">
                <div className="relative flex flex-col items-center w-4/5 rounded-sm md:flex-row h-4/5">
                    <div className={`w-full flex flex-row relative h-full transition-all duration-1000 p-7 md:${isLogin ? 'w-2/5' : 'w-3/5'} bg-electric-violet-200`}>
                        <div className={`flex transition-all duration-700 ease-in-out flex-col ${isLogin ? 'opacity-100' : 'w-0 -translate-x-48 overflow-hidden'} items-center justify-center h-full gap-9`}>
                            <p className='text-5xl font-bold tracking-wider text-center font-russo-one text-electric-violet-800'>Hello, Friend!</p>
                            <p className='text-base font-bold tracking-wider text-center font-russo-one text-electric-violet-500'>Enter your personal details and start journey with us</p>
                            <Button fn={toggleLogin} title='Sign Up' px='px-9' py='py-4'rounded='rounded-full'/>
                        </div>
                        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isLogin ? 'w-0' : 'opacity-100'} w-full`}>
                            <Register />
                        </div>
                    </div>
                    <div className={`w-full h-full py-5 transition-all duration-1000 md:${isLogin ? 'w-3/5' : 'w-2/5'} bg-electric-violet-700`}>
                        <Login />
                        <Button fn={toggleLogin} title='Sign Up' px='px-9' py='py-4'rounded='rounded-full'/>
                    </div>
                </div>
            </div>
        </>
    );
};
