import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import LeftNavbar from './Components/LeftNavbar/LeftNavbar';
import Navbar from './Components/Navbar/Navbar'
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
import GamesPage from './Pages/Market/Games/Games';
import WalletPage from './Pages/Payment/Wallet/Wallet';
import SelectorComponent, { OptionType } from './Components/Selector/Selector';

function App() {	
	const location = useLocation();
	const excludeNavbarPaths = ['/login', '/register', '/reset_password'];
	const showNavbar = !excludeNavbarPaths.includes(location.pathname);
	const [category, setCategory] = useState<string>('')
	const options: OptionType[] = [
		// Your options here
	  ];

	return (
		<div className='root-content'>
			{showNavbar && <LeftNavbar Role={UserRoles.Admin} category={category} setCategory={setCategory}/>}
			{showNavbar && <Navbar Role={UserRoles.Admin} category={category} setCategory={setCategory}/>}
			<div className='content'>
				<SelectorComponent 
				  options={options}
				  onChange={(newValue, actionMeta) => {
					console.log(newValue, actionMeta);
				  }}
				  width='50%'
				/>
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
					<Route path="/games" element={<GamesPage />}/>
					<Route path="/wallet/:id" element={<WalletPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
