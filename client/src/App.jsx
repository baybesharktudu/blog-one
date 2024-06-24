import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Message from './pages/Message';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteSign from './components/PrivateRouteSign.jsx';
import Navbar from './components/Navbar.jsx';
import { useSelector } from 'react-redux';

export default function App() {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <BrowserRouter>
            {currentUser && <Navbar />}
            <Routes>
                <Route element={<PrivateRouteSign />}>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/messages" element={<Message />} />
                    <Route path="/search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
