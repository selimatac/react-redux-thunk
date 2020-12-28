import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProducts } from '../store/actions/productActions'
import ImageGrid from '../component/skeletons/ProductListSkeleton';
import slugify from './helpers/Slugify';
import CategoryTop from './CategoryTop';
import CategorySidebar from './CategorySidebar';

class ProductList extends Component {
    componentDidMount() {
        this.props.getProducts();
        console.log("componentDidMount", this.props)
    }
    componentDidUpdate() {
        // this.props.getProducts();
        console.log("this.props", this.props);
    }
    render() {
        const { products } = this.props.products;
        var loading = this.props.products.loading;
        // if (loading) {
        //     return (
        //         <div className="row text-center">
        //             <ImageGrid />
        //         </div>
        //     )
        // } else {
            return (
                <React.Fragment>
                {/* <CategoryTop /> */}
                <section className="section-content padding-y">
                    <div className="container">
                        <div className="row">
                        <CategorySidebar />

                            <main className="col-md-9">
                                <header className="border-bottom mb-4 pb-3">
                                    <div className="form-inline">
                                        <span className="mr-md-auto">{products.length} Ürün Listeleniyor </span>
                                        <select className="mr-2 form-control">
                                            <option>Latest items</option>
                                            <option>Trending</option>
                                            <option>Most Popular</option>
                                            <option>Cheapest</option>
                                        </select>
                                        <div className="btn-group">
                                            <a href="/" className="btn btn-outline-secondary" data-toggle="tooltip" title="" data-original-title="List view">
                                                <i className="fa fa-bars"></i></a>
                                            <a href="/" className="btn  btn-outline-secondary active" data-toggle="tooltip" title="" data-original-title="Grid view">
                                                <i className="fa fa-th"></i></a>
                                        </div>
                                    </div>
                                </header>
                                <div className="row">
                                    {
                                        products.map(u =>
                                            <div className="col-md-4" key={u.id}>
                                                <NavLink to={"/urun/" + slugify(JSON.parse(u.product_info).category) + "/" + JSON.parse(u.product_info).slug} className="card card-product-grid">
                                                    <div className="img-wrap"> <img src={"../../images/products/" + (JSON.parse(u.product_info).photos.length > 0 ? JSON.parse(u.product_info).photos[0].url : "no-image.jpg")} alt={JSON.parse(u.product_info).name} className="w-100" /> </div>
                                                    <figcaption className="info-wrap">
                                                        <p className="title text-truncate">{JSON.parse(u.product_info).name}</p>
                                                        {/* <small className="text-muted">{JSON.parse(u.product_info).description}</small> */}
                                                        <div className="price mt-2">{JSON.parse(u.product_info).price}₺</div>
                                                    </figcaption>
                                                </NavLink>
                                            </div>
                                        )}
                                </div>
                                <nav className="mt-4" aria-label="Page navigation sample">
                                    <ul className="pagination">
                                        <li className="page-item disabled"><a className="page-link" href="/">Önceki</a></li>
                                        <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                                        <li className="page-item"><a className="page-link" href="/">Sonraki</a></li>
                                    </ul>
                                </nav>
                            </main>
                        
                        </div>
                    </div>
                </section>
                </React.Fragment>
            )
        //}
    }
}


const mapStateToProps = (state) => ({ products: state.products })
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     getProductsByParams: () => dispatch(getProductsByParams(ownProps.match.params.id))
// })
export default connect(mapStateToProps, { getProducts })(ProductList)