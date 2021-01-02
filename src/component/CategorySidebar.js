import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategory } from '../store/actions/categoryAction'
class CategorySidebar extends Component {
    state = {
            isShow: true
        }
    componentDidMount() {
        this.props.getCategory();
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    render() {
        const { category } = this.props.category;
        const parents = category.filter(x => x.parent_id === 0);
        return (
            <aside className="col-md-3">
                <div className="card">
                    <article className="filter-group">
                        <header className="card-header">
                            <a href="#" onClick={() => this.setState({ isShow: !this.state.isShow })}>
                                <i className="icon-control fa fa-chevron-down"></i>
                                <h6 className="title">Ürünler</h6>
                            </a>
                        </header>
                        <div className={this.state.isShow ? "filter-content collapse show" : "filter-content collapse"}>
                            <div className="card-body">
                                <form className="pb-3">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Ara..." />
                                        <div className="input-group-append">
                                            <button className="btn btn-light" type="button"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </form>

                                <ul className="list-menu">
                                  {
                                      category.map((x,index) => {
                                          return(
                                            <li key={index}><NavLink to={"/urunler/" + x.slug} >{x.name}</NavLink></li>
                                          )
                                      })
                                  }
                                </ul>

                            </div>
                        </div>
                    </article>
                    {/* <article className="filter-group">
                        <header className="card-header">
                            <a href="/" data-toggle="collapse" data-target="/collapse_2" aria-expanded="true" >
                                <i className="icon-control fa fa-chevron-down"></i>
                                <h6 className="title">Brands </h6>
                            </a>
                        </header>
                        <div className="filter-content collapse show" id="collapse_2" >
                            <div className="card-body">
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" checked="" className="custom-control-input" />
                                    <div className="custom-control-label">Mercedes
				  	<b className="badge badge-pill badge-light float-right">120</b>  </div>
                                </label>
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" checked="" className="custom-control-input" />
                                    <div className="custom-control-label">Toyota
				  	<b className="badge badge-pill badge-light float-right">15</b>  </div>
                                </label>
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" checked="" className="custom-control-input" />
                                    <div className="custom-control-label">Mitsubishi
				  	<b className="badge badge-pill badge-light float-right">35</b> </div>
                                </label>
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" checked="" className="custom-control-input" />
                                    <div className="custom-control-label">Nissan
				  	<b className="badge badge-pill badge-light float-right">89</b> </div>
                                </label>
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" />
                                    <div className="custom-control-label">Honda
				  	<b className="badge badge-pill badge-light float-right">30</b>  </div>
                                </label>
                            </div>
                        </div>
                    </article>
                    <article className="filter-group">
                        <header className="card-header">
                            <a href="/" data-toggle="collapse" data-target="/collapse_4" aria-expanded="true" >
                                <i className="icon-control fa fa-chevron-down"></i>
                                <h6 className="title">Sizes </h6>
                            </a>
                        </header>
                        <div className="filter-content collapse show" id="collapse_4" >
                            <div className="card-body">
                                <label className="checkbox-btn">
                                    <input type="checkbox" />
                                    <span className="btn btn-light"> XS </span>
                                </label>

                                <label className="checkbox-btn">
                                    <input type="checkbox" />
                                    <span className="btn btn-light"> SM </span>
                                </label>

                                <label className="checkbox-btn">
                                    <input type="checkbox" />
                                    <span className="btn btn-light"> LG </span>
                                </label>

                                <label className="checkbox-btn">
                                    <input type="checkbox" />
                                    <span className="btn btn-light"> XXL </span>
                                </label>
                            </div>
                        </div>
                    </article>
                    <article className="filter-group">
                        <header className="card-header">
                            <a href="/" data-toggle="collapse" data-target="/collapse_5" aria-expanded="true" >
                                <i className="icon-control fa fa-chevron-down"></i>
                                <h6 className="title">More filter </h6>
                            </a>
                        </header>
                        <div className="filter-content in collapse show" id="collapse_5" >
                            <div className="card-body">
                                <label className="custom-control custom-radio">
                                    <input type="radio" name="myfilter_radio" checked="" className="custom-control-input" />
                                    <div className="custom-control-label">Any condition</div>
                                </label>

                                <label className="custom-control custom-radio">
                                    <input type="radio" name="myfilter_radio" className="custom-control-input" />
                                    <div className="custom-control-label">Brand new </div>
                                </label>

                                <label className="custom-control custom-radio">
                                    <input type="radio" name="myfilter_radio" className="custom-control-input" />
                                    <div className="custom-control-label">Used items</div>
                                </label>

                                <label className="custom-control custom-radio">
                                    <input type="radio" name="myfilter_radio" className="custom-control-input" />
                                    <div className="custom-control-label">Very old</div>
                                </label>
                            </div>
                        </div>
                    </article> */}
                </div>
            </aside>
        )
    }
}
const mapStateToProps = (state) => ({ category: state.category })

export default connect(mapStateToProps, { getCategory })(CategorySidebar)