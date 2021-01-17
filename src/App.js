import React,{useEffect,useState} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './layouts/Header';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import Product from './pages/Product';
import Users from './component/users'
import UserSignUp from './pages/UserSignUp';
import UserLogin from './pages/UserLogin';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const [checkAuth, setCheckAuth] = useState(false)
  useEffect(() => {
    (sessionStorage.getItem("customer_info") && sessionStorage.getItem("isLoggedIn")=="true")?setCheckAuth(true):setCheckAuth(false)
    console.log("app js")
  }, [])
  
  return (
    <BrowserRouter>
      <Header isAuth={checkAuth} />

      <Switch>
        <Route path='/urun/:category/:id' component={Product} />
        <Route exact path={['/urunler/', '/urunler/:category']} component={ProductCategory} />
        <Route exact path='/' component={Home} />
        <Route path='/kayit' component={UserSignUp} />
        <Route path='/giris' component={UserLogin} />
        <Route path='/profil' component={ProfilePage}/>
        <Redirect to='/' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
