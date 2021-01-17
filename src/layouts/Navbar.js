import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategory } from '../store/actions/categoryAction'
import slugify from '../component/helpers/Slugify';
import CategoryTop from '../component/CategoryTop';

class Navbar extends Component {
    componentDidMount() {
        this.props.getCategory()
    }
    render() {
        const { category } = this.props.category;
        const parents = category.filter(x => x.parent_id === 0);
        return (
            <React.Fragment>
            <nav className="navbar navbar-main navbar-expand-md navbar-light">
                <div className="container">
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/main_nav"
                        aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                        <NavLink exact className="nav-link" to={"/urunler"}>Tümü</NavLink>
                            {
                                //category map
                                //category nin id si farklı birinin id si varmı filtrele ve bas.
                                parents.map((x, index) => {
                                    var filtered = category.filter(c => c.parent_id === x.id)
                                    if (filtered.length === 0) {
                                        return (
                                            <li className="nav-item" key={index}>
                                                <NavLink className="nav-link" to={"/urunler/" + slugify(x.name)}>{x.name}</NavLink>
                                            </li>
                                        )
                                    }else{
                                        return (
                                            <li className="nav-item dropdown" key={index}>
                                                <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to={"/urunler/" + slugify(x.name)}>{x.name}</NavLink>
                                                <div className="dropdown-menu">
                                                        {
                                                            filtered.map((sub,subindex) => {
                                                                return(
                                                                    <NavLink exact className="dropdown-item" to={"/urunler/"+ slugify(sub.name)} key={subindex}>{sub.name}</NavLink>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                            </li>
                                        )
                                    } 
                                })



                            }
                        </ul>
                    </div>
                </div>
            </nav>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({ category: state.category })

export default connect(mapStateToProps, { getCategory })(Navbar)