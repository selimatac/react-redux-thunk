import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom'
import SearchInput from '../component/SearchInput';

class Header extends Component {
    state={
        isAuth:this.props.isAuth
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.isAuth !== prevProps.isAuth){
            this.setState({isAuth:true})
            console.log("değişti")
        }
    }
    
    render() {
        return (
            <header className="section-header">
                <section className="header-main border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-4">
                                <NavLink className="nav-link brand-wrap" to="/">
                                    <img className="logo" src="../../images/logos/logo-onlinecicek.png" />
                                </NavLink>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <SearchInput />
                            </div>
                            {/* <div className="col-lg-4 col-sm-6 col-12">
                                <div className="widgets-wrap float-md-right">
                                    <div className="widget-header  mr-3">
                                        <a href="/" className="icon icon-sm rounded-circle border">
                                            <i className="fa fa-shopping-cart"></i>
                                        </a>
                                        <span className="badge badge-pill badge-danger notify">0</span>
                                    </div>
                                    <div className="widget-header icontext">
                                        <a href="/" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
                                        <div className="text">
                                            <span className="text-muted">Hoşgeldin!</span>
                                            <div>
                                                <Link to="/giris">Giriş Yap</Link> |
                                                <Link to="/kayit">Kayıt Ol</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-12 col-lg-4 col-sm-12 col-12 text-md-right">
                                <div>{
                                    !this.props.isAuth?
                                    <div className="btn-group" role="group">
                                        <Link to="/giris" className="btn btn-outline-primary">Giriş Yap</Link>
                                        <Link to="/kayit" className="btn btn-outline-primary">Kayıt Ol</Link>
                                    </div>:
                                    <div className="dropdown btn p-0">
                                        <button className="btn btn-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Hesabım</button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Profil</a>
                                            <a className="dropdown-item" href="#">Siparişlerim</a>
                                            <a className="dropdown-item" href="#">Favorilerim</a>
                                            <div className="dropdown-divider"></div>
                                            <button className="dropdown-item" onClick={() => {sessionStorage.removeItem("customer_info");sessionStorage.removeItem("isLoggedIn"); window.location.href = "/"}} >Çıkış Yap</button>
                                        </div>
                                    </div>
                                    }
                                    <button className="btn float-right btn-light d-md-none" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fa fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        )
    }
}
export default Header