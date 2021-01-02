import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProducts } from '../store/actions/productActions'
import slugify from './helpers/Slugify';
import Navbar from '../layouts/Navbar';

class ProductList extends Component {
    state = {
        orderby: "all",
        products:this.props.products
    }
    componentDidMount() {
        this.props.getProducts();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.matchParams.category !== this.props.matchParams.category) {
            this.props.getProducts(this.props.matchParams.category);
        }

    }
    render() {
        switch (this.state.orderby) {
            case "all":
                this.state.products = this.props.products;
                break;
            case "priceByAsc":
                this.state.products.products.sort(function(a, b) {
                    return JSON.parse(a.product_info).price - JSON.parse(b.product_info).price;
                });
                break;
            case "priceByDesc":
                this.state.products.products.sort(function(a, b) {
                    return JSON.parse(b.product_info).price - JSON.parse(a.product_info).price;
                });
                break;
            case "topSeller":
                //TODO: yapılacak.
                // this.state.products.products.sort(function(a, b) {
                //     return JSON.parse(b.product_info).rate - JSON.parse(a.product_info).rate;
                // });
                break;
        }
        let { products } = this.state.products
        var loading = this.props.products.loading;

        if (loading) {
            return (
                <div className="container text-center">
                    {/* <ImageGrid /> */}
                    <h3 className="row 100w">Yükleniyor...</h3>
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    {/* <CategoryTop /> */}
                    <Navbar />
                    {/* <CategoryTop title={(!products.length) ? "" : JSON.parse(product[0].product_info).name} category={(!product.length) ? "false" : JSON.parse(product[0].product_info).category.name} /> */}

                    <section className="section-content padding-y">
                        <div className="container">
                            <div className="row">
                                {/* <CategorySidebar /> */}

                                <main className="col-md-12">
                                    <header className="border-bottom mb-4 pb-3">
                                        <div className="form-inline">
                                            <span className="mr-md-auto">{products.length} Ürün Listeleniyor </span>
                                            <select className="mr-2 form-control" value={this.state.orderby} onChange={(e) => this.setState({ orderby: e.target.value })}>
                                                <option value="all">Tümü</option>
                                                <option value="priceByAsc">Fiyata Göre Artan</option>
                                                <option value="priceByDesc">Fiyata Göre Azalan</option>
                                                {/* <option value="topSeller">En Çok Saatan</option> */}
                                            </select>
                                            {/* <div className="btn-group">
                                                <a href="/" className="btn btn-outline-secondary" data-toggle="tooltip" title="" data-original-title="List view">
                                                    <i className="fa fa-bars"></i></a>
                                                <a href="/" className="btn  btn-outline-secondary active" data-toggle="tooltip" title="" data-original-title="Grid view">
                                                    <i className="fa fa-th"></i></a>
                                            </div> */}
                                        </div>
                                    </header>
                                    <div className="row">
                                        {
                                            products.map(u =>
                                                <div className="col-md-3" key={u.id}>
                                                    <NavLink to={"/urun/" + slugify(JSON.parse(u.product_info).category.value) + "/" + JSON.parse(u.product_info).slug} className="card card-product-grid">
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
        }
    }
}


const mapStateToProps = (state) => ({ products: state.products })

const mapDispatchToProps = (dispatch, ownProps) => ({
    getProducts: () => dispatch(getProducts(ownProps.matchParams.category))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
