import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './layouts/Header';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import Product from './pages/Product';
import Users from './component/users'


function App() {

  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Route path='/urun/:category/:id' component={Product} />
        <Route path='/urunler' component={ProductCategory} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
