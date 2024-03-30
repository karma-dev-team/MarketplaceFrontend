import './App.css';
import { Routes } from 'react-router-dom';
import NavbarComponent from './Components/Navbar/Navbar';
import LeftNavbar from './Components/LeftNavbar/LeftNavbar';

function App() {	
	return (
		<div>
			<LeftNavbar Role={UserRoles.Admin}/>
			<NavbarComponent/>
			<div className='content'>
				<Routes>
					{/* <Route path="/home" element={<HomePage  setCategory={setNavigationCategory} user={currentUser}/>} action={localAuthCheck}/> */}
				</Routes>
			</div>
		</div>
	);
}

export default App;
