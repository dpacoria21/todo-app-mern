import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../auth/pages/Login';
import { TodoAppPage } from '../todo-app/pages/TodoAppPage';

export const TodoRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path='/' element={<TodoAppPage />} />
            <Route path='/*' element={<Navigate to={'/'}/>} />
        </Routes>
    );
};
