import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import SearchInput from '../component/SearchInput';

class Header extends Component {
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
                            <div className="col-md-5 col-lg-4 col-sm-12 col-12 text-md-right">
                                <div>{
                                    sessionStorage.getItem("isLoggedIn")!="true"?
                                    <div class="btn-group" role="group">
                                        <Link to="/giris" className="btn btn-outline-primary">Giriş Yap</Link>
                                        <Link to="/kayit" className="btn btn-outline-primary">Kayıt Ol</Link>
                                    </div>:null}
                                    <div class="dropdown btn">
                                        <button class="btn btn-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Hesabım</button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Profil</a>
                                            <a class="dropdown-item" href="#">Siparişlerim</a>
                                            <a class="dropdown-item" href="#">Favorilerim</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Çıkış Yap</a>
                                        </div>
                                    </div>
                                    <button className="btn float-right btn-light d-md-none" type="button" data-toggle="collapse" data-target="#main_nav8" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
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