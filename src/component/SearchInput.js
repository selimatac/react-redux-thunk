import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchProducts } from '../store/actions/searchActions'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class SearchInput extends Component {
    state = {
        search: "",
        backdrop: "hide"
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("this.props>>", this.props.searchList.searchList)
        if (this.state.search.length > 0) {
            if (prevState.search !== this.state.search) {
                // setTimeout(() => {
                this.props.searchProducts(this.state.search);
                // }, 500);
            }

        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    render() {
        return (
            <React.Fragment>
                <form className="search" style={styles.form}>
                    <div className="input-group w-100">
                        <input
                            value={this.state.search}
                            //onBlur={() => this.setState({ backdrop: "hide", search: "" })}
                            onFocus={() => this.setState({ backdrop: "show" })}
                            onChange={(e) => this.setState({ search: e.target.value })}
                            type="text" className="form-control" placeholder="ürün veya kategori ara..." />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className={"search-result-container " + (this.state.search ? "show" : "hide")} style={styles.input}>
                        <ul className="list-group list-group-flush ss-search-list" style={styles.container}>

                            {
                                this.props.searchList.searchList.category ? this.props.searchList.searchList.category.map(item =>
                                    <a href={"/urunler/" + item.slug} className="list-group-item list-group-item-action d-flex align-items-center">
                                        {ReactHtmlParser(item.name.replace(new RegExp(this.state.search, "ig"), `<strong>${this.state.search}</strong>`))}
                                        <span className="badge badge-secondary badge-pill ml-auto">kategori</span>
                                    </a>
                                ) : null}

                            {
                                this.props.searchList.searchList.product ? this.props.searchList.searchList.product.map((item, index) => {
                                    var product_info = JSON.parse(item.product_info)
                                    return (
                                        <a href={"/urun/" + product_info.category.value + "/" + product_info.slug} className="list-group-item list-group-item-action d-flex align-items-center">
                                            <img className="search-item-img" src={"../../images/products/" + (product_info.photos.length > 0 ? product_info.photos[0].url : "no-image.jpg")} alt={product_info.name} />
                                            {ReactHtmlParser(product_info.name.replace(new RegExp(this.state.search, "ig"), `<strong>${this.state.search} </strong>`))}
                                        </a>
                                    )

                                }) : null
                            }
                        </ul>
                    </div>

                </form>
                <div
                    onClick={() => this.setState({ backdrop: "hide", search: "" })}
                    className={"search-backdrop fade " + this.state.backdrop}
                ></div>
            </React.Fragment>
        )
    }
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

const mapStateToProps = (state) => ({ searchList: state.searchList });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     searchProducts: () => dispatch(searchProducts())
// })



export default connect(mapStateToProps, { searchProducts })(SearchInput);
