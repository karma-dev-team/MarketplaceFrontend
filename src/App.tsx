import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import LeftNavbar from './Components/LeftNavbar/LeftNavbar';
import UserRoles from './Schemas/UserRoles';
import LoginPage from './Pages/Users/Login/Login';
import HomePage from './Pages/Home/Home';
import RegisterPage from './Pages/Users/Register/Register';
import ResetPasswordPage from './Pages/Users/ResetPassword/ResetPassword';

import ChatSelectPage from './Pages/Payment/Chat_select/Chat_select';
import WaitingPage from './Pages/Payment/Waiting/Waiting';
import ContactPage from './Pages/Contact/Contact';
import UserSettingsPage from './Pages/Users/UserSettings/UserSettings';
import UserSecurityPage from './Pages/Users/UserSettings/Categories/Security';





import { useState } from 'react';


function App() {	
	const location = useLocation();
	const excludeNavbarPaths = ['/login', '/register', '/reset_password'];
	const showNavbar = !excludeNavbarPaths.includes(location.pathname);
	const [category, setCategory] = useState<string>('')
	
	return (
		<div>
		{showNavbar && <LeftNavbar Role={UserRoles.Admin} category={category} setCategory={setCategory}/>}
		{/* <NavbarComponent/> */}
		<div className='content'>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/reset-password" element={<ResetPasswordPage />} />
				<Route path="/chat-select/:id" element={<ChatSelectPage />} />
				<Route path="/waiting/:id" element={<WaitingPage />} />
				<Route path="/contact/" element={<ContactPage />} />
				<Route path="/user/:id/settings/" element={<UserSettingsPage />} />
				<Route path="/user/:id/security/" element={<UserSecurityPage />} />
			</Routes>
		</div>
		</div>
	);
}

export default App;
