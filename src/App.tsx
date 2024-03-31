import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import LeftNavbar from './Components/LeftNavbar/LeftNavbar';
import UserRoles from './Schemas/UserRoles';
import LoginPage from './Pages/Users/Login/Login';
import HomePage from './Pages/Home/Home';
import RegisterPage from './Pages/Users/Register/Register';
import ResetPasswordPage from './Pages/Users/ResetPassword/ResetPassword';

function App() {	
	const location = useLocation();
	const excludeNavbarPaths = ['/login', '/register', '/reset_password'];
	const showNavbar = !excludeNavbarPaths.includes(location.pathname);

	return (
		<div>
		{showNavbar && <LeftNavbar Role={UserRoles.Admin} />}
		{/* <NavbarComponent/> */}
		<div className='content'>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/reset-password" element={<ResetPasswordPage />} />
			</Routes>
		</div>
		</div>
	);
}

export default App;
