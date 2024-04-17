import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import { useEffect, useState } from 'react';
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
import AnalyticsPage from './Pages/Market/Analytics/Analytics';
import AboutPage from './Pages/About/About';
import { ApiConfig, removeToken, setAccessTokenForClient } from './Gateway/Config';
import { useCookies } from 'react-cookie';
import { AuthorizationCookieKey } from './Utils/Consts';
import { UserControllersApi, UserEntity } from 'restclient';
import ProductApprovePage from './Pages/Control/ProductApprove/ProductApprove';
import GameSettingsPage from './Pages/Control/ControlGames/GameSettings';
import ControlGamesPage from './Pages/Control/ControlGames/ControlGames';

function App() {	
	const location = useLocation();
	const excludeNavbarPaths = ['/login', '/register', '/reset-password'];
	const showNavbar = !excludeNavbarPaths.includes(location.pathname);
	const [category, setCategory] = useState<string>('')
	const navigate = useNavigate();
	const [navpath] = useState<string>('')
	const [cookies, setCookies, removeCookies] = useCookies([AuthorizationCookieKey]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<UserEntity>()

	useEffect(() => { 
		const checkAuthorization = async () => {
            const token = cookies.Authorization;
			setAccessTokenForClient(token);
			var userApi = new UserControllersApi(ApiConfig); 
			try { 
				let response = await userApi.apiUserMeGet()
				setUser(response.data)
			} catch (e) { 
				// If token doesn't exist, remove access token and mark as not authenticated
				removeToken(removeCookies);
				setIsAuthenticated(false);
				return; 
			}
			setIsAuthenticated(true);
        };

        checkAuthorization();
	}, [cookies])

	useEffect(() => {
        if (isAuthenticated && excludeNavbarPaths.includes(location.pathname)) {
            navigate('/');
        }
    }, [isAuthenticated, location.pathname, navigate]);

	return (
		<div className='root-content'>
			{showNavbar && <LeftNavbar Role={UserRoles.Admin} category={category} setCategory={setCategory} navpath={navpath}/>}
			{showNavbar && <Navbar user={user} category={category} setCategory={setCategory}/>}
			<div className='content'>
				<Routes>
					<Route path="/" element={<HomePage setCategory={setCategory}/>} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage/>} />
					<Route path="/reset-password" element={<ResetPasswordPage/>} />
					<Route path="/transaction/:id/chat-select" element={<ChatSelectPage setCategory={setCategory} user={user}/>} />
					<Route path="/transaction/:id" element={<WaitingPage setCategory={setCategory} user={user}/>} />
					<Route path="/contact/" element={<ContactPage setCategory={setCategory} user={user}/>} />
					<Route path="/user/:id/settings/" element={<UserSettingsPage setCategory={setCategory} user={user}/>} />
					<Route path="/user/:id/security/" element={<UserSecurityPage setCategory={setCategory}/>} />
					<Route path="/notifications/" element={<NotificationsPage setCategory={setCategory} user={user}/>} />
					<Route path="/games" element={<GamesPage  type="Game" setCategory={setCategory}/>}/>
					<Route path="/applications" element={<GamesPage type="Application" setCategory={setCategory}/>}/>
					<Route path='/category/:id' element={<CategoryProductsPage setCategory={setCategory} user={user}/>}/>
					<Route path="/products/create" element={<ProductCreatePage setCategory={setCategory} user={user}/>}/>
					<Route path="/wallet" element={<WalletPage setCategory={setCategory} user={user}/>} />
					<Route path="/games/:id" element={<GamePage setCategory={setCategory} user={user}/>}/>
					<Route path="/user/:id" element={<UserPage setCategory={setCategory} user={user} />}/>
					<Route path="/purchases/" element={<PurchasesPage setCategory={setCategory} user={user}/>}/>
					<Route path="/sales/" element={<SalesPage setCategory={setCategory}/>}/>
					<Route path="/analytics" element={<AnalyticsPage setCategory={setCategory} user={user}/>}/>
					<Route path="/chats" element={<ChatsPage setCategory={setCategory} user={user}/>}/>
					<Route path="/chat/:chatId" element={<ChatsPage setCategory={setCategory} user={user}/>}/>
					<Route path="/product/:id" element={<ProductPage setCategory={setCategory} user={user}/>}/>
					<Route path="/product/:id/edit" element={<ProductAnalPage setCategory={setCategory} user={user}/>}/>
					<Route path="/product/:id/edit/edit" element={<ProductEditPage setCategory={setCategory} user={user}/>}/>
					<Route path="/about" element={<AboutPage setCategory={setCategory} user={user}/>}/>
					<Route path="/control/approved" element={<ProductApprovePage setCategory={setCategory} user={user}/>}/>
					<Route path="/control/games" element={<ControlGamesPage setCategory={setCategory} user={user}/>}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
