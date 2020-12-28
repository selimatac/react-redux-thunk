import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import slugify from './helpers/Slugify'

class CategoryTop extends Component {
    render(props) {
        // console.log("CategoryTop",this.props)
        return (
            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">{this.props.category}</h2>
                    <nav>
                        <ol className="breadcrumb text-white">
                            <li className="breadcrumb-item"><Link to={"/"}>Anasayfa</Link></li>
                            <li className="breadcrumb-item"><Link to="/urunler">Ürünler</Link></li>
                            {!this.props.category?"":<li className="breadcrumb-item"><Link to={"/urunler/"+slugify(this.props.category)}>{this.props.category}</Link></li>}
                            {!this.props.title?"":<li className="breadcrumb-item active" aria-current="page">{this.props.title}</li>}
                        </ol>
                    </nav>
                </div>
            </section>
        )
    }
}
export default CategoryTop