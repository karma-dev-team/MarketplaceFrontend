import './App.css';
import { Routes } from 'react-router-dom';
import NavbarComponent from './Components/Navbar/Navbar';

function App() {	
	return (
		<div>
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
