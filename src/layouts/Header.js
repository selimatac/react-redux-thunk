import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

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
                                <form action="/" className="search">
                                    <div className="input-group w-100">
                                        <input type="text" className="form-control" placeholder="ürün veya kategori ara..." />
                                        <div className="input-group-append">
                                            <button className="btn btn-success" type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
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
                                                <a href="/">Giriş Yap</a> |
                                        <a href="/"> Kayıt Ol</a>
                                            </div>
                                        </div>
                                    </div>
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