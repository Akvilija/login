import { Routes, Route } from 'react-router-dom';
import { RouteKey } from './routes';

const MainRouter = () => {
    return (
        <Routes>
            <Route element={<h1>Home</h1>} path={RouteKey.Index} />
            <Route element={<h1>Login</h1>} path={RouteKey.Login} />
            <Route element={<h1>Register</h1>} path={RouteKey.Register} />
            <Route element={<h1>Pictures</h1>} path={RouteKey.Pictures} />
        </Routes>
    )
}

export default MainRouter