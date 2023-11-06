import { Button } from './Button';
import { Input } from './Input';

export const Register = () => {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 ">
            <p className="text-5xl font-normal font-russo-one text-slate-50">Sign Up</p>
            <form className="flex flex-col items-center w-full gap-3 ">
                <Input title='Name' type='text'/>
                <Input title='Email' type='email'/>
                <Input title='Password' type='password'/>
                <Input title='Password Confirmation' type='password'/>
                <Button title='Register' px={'px-6'} py={'py-2'} rounded='rounded-sm'/>
            </form>
        </div>
    );
};
