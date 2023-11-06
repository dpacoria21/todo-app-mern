import { Button } from './Button';
import { Input } from './Input';

export const Login: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 -mt-4">
            <p className="mb-5 text-5xl font-normal font-russo-one text-slate-800">Sign In</p>
            <form className="flex flex-col items-center w-full gap-10">
                <Input title='Username' type='text'/>
                <Input title='Password' type='password'/>
                <Button title='Login' px={6} py={2}/>
            </form>
        </div>
    );
};
