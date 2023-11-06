import { Button } from '../components/Button';
import { Login } from '../components/Login';

export const AuthPanel = () => {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen bg-electric-violet-100">
                <div className="relative flex flex-col items-center w-4/5 rounded-sm md:flex-row h-4/5">
                    <div className="w-full h-full transition-all duration-1000 p-7 md:w-2/5 bg-electric-violet-200">
                        <div className='flex flex-col items-center justify-center h-full gap-9'>
                            <p className='text-5xl font-bold tracking-wider text-center font-russo-one text-electric-violet-800'>Hello, Friend!</p>
                            <p className='text-base font-bold tracking-wider text-center font-russo-one text-electric-violet-500'>Enter your personal details and start journey with us</p>
                            <Button title='Sign Up' px='px-9' py='py-4'rounded='rounded-full'/>
                        </div>
                    </div>
                    <div className="w-full h-full py-5 transition-all duration-1000 md:w-3/5 bg-electric-violet-700">
                        <Login />
                    </div>
                </div>
            </div>
        </>
    );
};
