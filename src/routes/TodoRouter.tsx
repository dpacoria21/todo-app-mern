import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPanel } from '../auth/pages/AuthPanel';
import { TodoAppPage } from '../todo-app/pages/TodoAppPage';

export const TodoRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<TodoAppPage />} />
            <Route path="/login" element={<AuthPanel />}/>
            <Route path='/*' element={<Navigate to={'/'}/>} />
        </Routes>
    );
};
