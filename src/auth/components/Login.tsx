import { Input } from './Input';

export const Login: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 -mt-4">
            <p className="mb-5 text-4xl font-bold font-russo-one text-slate-700">Sign In</p>
            <form className="flex flex-col items-center w-full gap-10">
                <Input title='Username' type='text'/>
                <Input title='Password' type='password'/>
                <button type="submit" className="px-6 py-2 tracking-widest transition-all duration-300 ease-in-out rounded-sm bg-electric-violet-700 text-slate-200 font-russo-one">
                    Login
                </button>
            </form>
        </div>
    );
};
