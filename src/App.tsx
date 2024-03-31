import './App.css';
import { Route, Routes } from 'react-router-dom';
// import NavbarComponent from './Components/Navbar/Navbar';
import LeftNavbar from './Components/LeftNavbar/LeftNavbar';
import UserRoles from './Schemas/UserRoles';
import LoginPage from './Pages/Users/Login/Login';
import HomePage from './Pages/Home/Home';

function App() {	
	return (
		<div>
			<LeftNavbar Role={UserRoles.Admin}/>
			{/* <NavbarComponent/> */}
			<div className='content'>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />}/> 
				</Routes>
			</div>
		</div>
	);
}

export default App;
