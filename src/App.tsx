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
import GamePage from './Pages/Market/Game/Game';
import NotificationsPage from './Pages/Users/Notifications/Notifications';
import UserPage from './Pages/Users/User/User';
import PurchasesPage from './Pages/Payment/Purchases/Purchases';
import SalesPage from './Pages/Market/Sales/Sales';
import ProductPage from './Pages/Market/Product/Product';
import ProductCreatePage from './Pages/Market/ProductCreate/ProductCreate';
import ProductAnalPage from './Pages/Market/ProductUpdate/ProductUpdate';  // i'm losing mind, you cannot stop it, nor progress it. I am who will stop crazyness 
import CategoryProductsPage from './Pages/Market/CategoryProducts/CategoryProducts';
import ChatsPage from './Pages/Messaging/Chats/Chats';
import ProductEditPage from './Pages/Market/ProductEdit/ProductEdit';

function App() {	
	const location = useLocation();
	const excludeNavbarPaths = ['/login', '/register', '/reset_password'];
	const showNavbar = !excludeNavbarPaths.includes(location.pathname);
	const [category, setCategory] = useState<string>('')
	const [navpath] = useState<string>('')

	return (
		<div className='root-content'>
			{showNavbar && <LeftNavbar Role={UserRoles.Admin} category={category} setCategory={setCategory} navpath={navpath}/>}
			{showNavbar && <Navbar Role={UserRoles.Admin} category={category} setCategory={setCategory}/>}
			<div className='content'>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/reset-password" element={<ResetPasswordPage />} />
					<Route path="/transaction/:id/chat-select" element={<ChatSelectPage />} />
					<Route path="/transaction/:id" element={<WaitingPage />} />
					<Route path="/contact/" element={<ContactPage />} />
					<Route path="/user/:id/settings/" element={<UserSettingsPage />} />
					<Route path="/user/:id/security/" element={<UserSecurityPage />} />
					<Route path="/user/:id/notifications/" element={<NotificationsPage />} />
					<Route path="/games" element={<GamesPage  type="Game"/>}/>
					<Route path="/applications" element={<GamesPage type="Application"/>}/>
					<Route path='/category/:id' element={<CategoryProductsPage />}/>
					<Route path="/products/create" element={<ProductCreatePage />}/>
					<Route path="/wallet/:id" element={<WalletPage />} />
					<Route path="/games/:id" element={<GamePage />}/>
					<Route path="/user/:id" element={<UserPage />}/>
					<Route path="/user/:id/purchases/" element={<PurchasesPage />}/>
					<Route path="/user/:id/sales/" element={<SalesPage />}/>
					<Route path="/product/:id" element={<ProductPage />}/>
					<Route path="/chats" element={<ChatsPage />}/>
					<Route path="/product/:id/edit" element={<ProductAnalPage />}/>
					<Route path="/chat/:chatId" element={<ChatsPage />}/>
					<Route path="/product/:id/edit/edit" element={<ProductEditPage />}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
