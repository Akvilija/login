import { Routes, Route } from 'react-router-dom';

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
    )
}

export default MainRouter