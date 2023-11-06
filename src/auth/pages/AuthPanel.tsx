import { Login } from '../components/Login';

export const AuthPanel = () => {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen bg-electric-violet-200">
                <div className="relative flex items-center w-4/5 rounded-sm bg-gradient-to-br from-electric-violet-400 to-electric-violet-700 h-4/5">
                    <div className="w-2/5 h-full transition-all duration-1000 "></div>
                    <div className="w-3/5 h-full p-5 transition-all duration-1000 bg-electric-violet-400">
                        <Login />
                    </div>
                </div>
            </div>
        </>
    );
};
