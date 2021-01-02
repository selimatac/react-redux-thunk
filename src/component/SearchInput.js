import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchProducts } from '../store/actions/searchActions'

class SearchInput extends Component {
    state = {
        search: "",
        backdrop: "hide"
    }

    componentDidMount() {
        console.log("search", this.props)
        // this.props.searchProducts(this.state.search);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.search.length>2 || this.state.search.length == 0) {
            if (prevState.search !== this.state.search) {
                this.props.searchProducts(this.state.search);
            }
        }
    }

    render() {
        console.log("this.props>>", this.props.searchList.searchList.product)
        let categoryResult = "";
        let productResult = "";
        if (this.props.searchList.searchList.product) {
            productResult = this.props.searchList.searchList.product.map((item, index) => {
                var product_info = JSON.parse(item.product_info)
                return (
                    <button key={Date.now()} class="list-group-item list-group-item-action d-flex align-items-center">
                        <img className="search-item-img" src={"../images/products/"+(product_info.photos.length>0?product_info.photos[0].url:"no-image.jpg")} alt={product_info.name} />
                                {product_info.name}
                    </button>
                )

            })
        }else{
            productResult = "";
        }
        if (this.props.searchList.searchList.category) {
            categoryResult = this.props.searchList.searchList.category.map((item, index) => {
                return (
                    <button key={Date.now()} class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                {item.name}
                                <span class="badge badge-secondary badge-pill">kategori</span>
                            </button>
                )

            })
        }else{
            categoryResult = "";
        }
        const styles = {
            container: {
                "border": "1px solid rgba(0, 0, 0, 0.125)",
                "border-radius": "10px",
                "overflow": "hidden"
            },
            input: {
                "position": "absolute",
                "z-index": "1041",
                "width": "100%",
                "margin-top": "5px",
                "max-height": "300px",
                "overflow": "auto"
            },
            form: {
                "position": "relative",
                "z-index": "1041"
            },
            image: {
                "width": "45px",
                "height": "45px",
                "object-fit": "cover",
                "margin-right": "16px"
            }
        }
        return (
            <React.Fragment>
                <form className="search" style={styles.form}>
                    <div className="input-group w-100">
                        <input
                            value={this.state.search}
                            onBlur={() => this.setState({ backdrop: "hide", search: "" })}
                            onFocus={() => this.setState({ backdrop: "show" })}
                            onChange={(e) => this.setState({ search: e.target.value })}
                            type="text" className="form-control" placeholder="ürün veya kategori ara..." />
                        <div className="input-group-append">
                            <button className="btn btn-success" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className={"search-result-container " + (this.state.search ? "show" : "hide")} style={styles.input}>
                        <ul class="list-group list-group-flush ss-search-list" style={styles.container}>
                           
                            {categoryResult}
                            {productResult}
                            {/* <button class="list-group-item list-group-item-action d-flex align-items-center">
                                <img style={styles.image} src="../images/products/img1.jpg" alt="Çiçek" />
                            Cras justo odio
                        </button>
                            <button class="list-group-item list-group-item-action d-flex align-items-center">
                                <img style={styles.image} src="../images/products/img2.jpg" alt="Çiçek" />
                            Cras justo odio
                        </button>
                            <button class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Buket
                                <span class="badge badge-secondary badge-pill">kategori</span>
                            </button> */}
                        </ul>
                    </div>

                </form>
                <div className={"search-backdrop fade " + this.state.backdrop}></div>
            </React.Fragment>
        )
    }
}



const mapStateToProps = (state) => ({ searchList: state.searchList })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     searchProducts: () => dispatch(searchProducts())
// })

export default connect(mapStateToProps, { searchProducts })(SearchInput)
