import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProductsByParams } from '../store/actions/productByIdActions'
import CategoryTop from '../component/CategoryTop'
import 'moment/locale/tr';
import Gallery from '../component/Gallery';
import Order from '../component/Order';
import AmazonLoader from '../component/skeletons/ProductSkeleton';
import Navbar from '../layouts/Navbar';
class Product extends Component {

    componentDidMount() {
        this.props.getProductsByParams();
        console.log(this.props)
    }

    render() {
        const { product } = this.props.product;
        var loading = this.props.product.loading;

        return (
            <React.Fragment>
                <Navbar />
                <CategoryTop title={(!product.length) ? "false" : JSON.parse(product[0].product_info).name} category={(!product.length) ? "false" : JSON.parse(product[0].product_info).category.name} />
                {loading ? <div className="container text-center"><AmazonLoader /></div> :
                    <div className="container">
                        <div className="row no-gutters">
                            <aside className="col-md-12 col-lg-6">
                                {
                                    (!product.length) ? "" : <Gallery photos={JSON.parse(product[0].product_info).photos} />
                                }
                            </aside>
                            <main className="col-md-12 col-lg-6">
                                <article className="content-body">

                                    <h2 className="title">{(!product.length) ? "" : JSON.parse(product[0].product_info).name}</h2>

                                    <div className="mb-3">
                                        <var className="price h4">{(!product.length) ? "" : JSON.parse(product[0].product_info).price}₺</var>
                                    </div>

                                    <p>{(!product.length) ? "" : JSON.parse(product[0].product_info).description}</p>


                                    <dl className="row">
                                        <dt className="col-sm-3">Ürün Kodu/</dt>
                                        <dd className="col-sm-9">{(!product.length) ? "" : JSON.parse(product[0].product_info).product_code}</dd>

                                        <dt className="col-sm-3">Renk</dt>
                                        <dd className="col-sm-9">Beyaz</dd>
                                        <dt className="col-sm-3">Kategori</dt>
                                        <dd className="col-sm-9">{(!product.length) ? "" : JSON.parse(product[0].product_info).category.value}</dd>
                                        <dt className="col-sm-3">Etiketler</dt>
                                        <dd className="col-sm-9">
                                            {(!product.length) ? "" : JSON.parse(product[0].product_info).tags.map((x, index) => <span className="badge badge-light d-inline-block p-1 mr-1" key={index}>{x}</span>)}

                                        </dd>
                                    </dl>

                                    <hr />
                                    <Order product={product} />
                                </article>
                            </main>
                        </div>
                    </div>
                }
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => ({ product: state.product })

const mapDispatchToProps = (dispatch, ownProps) => ({
    getProductsByParams: () => dispatch(getProductsByParams(ownProps.match.params.id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Product)