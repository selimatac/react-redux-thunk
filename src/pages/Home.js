import React from 'react'
import Carousel from '../component/Carousel'
import Navbar from '../layouts/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <hr/>
            
            <section className="section-specials padding-y border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <figure className="itemside">
                                <div className="aside">
                                    <span className="icon-sm rounded-circle bg-primary">
                                        <i className="fa fa-lira-sign white"></i>
                                    </span>
                                </div>
                                <figcaption className="info">
                                    <h6 className="title">Uygun Fiyat</h6>
                                    <p className="text-muted">Tüm ürünlerde ve en iyi kalitede ve uygun fiyatla sunuyoruz.</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-4">
                            <figure className="itemside">
                                <div className="aside">
                                    <span className="icon-sm rounded-circle bg-success">
                                        <i className="fa fa-shipping-fast white"></i>
                                    </span>
                                </div>
                                <figcaption className="info">
                                    <h6 className="title">Hızlı Teslimat</h6>
                                    <p className="text-muted">Siparişinizi verdiğiniz anda hazırlanır ve hızlı bir şekilde yola çıkar.</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-4">
                            <figure className="itemside">
                                <div className="aside">
                                    <span className="icon-sm rounded-circle bg-danger">
                                        <i className="fa fa-comment-dots white"></i>
                                    </span>
                                </div>
                                <figcaption className="info">
                                    <h6 className="title">Bize ulaşın</h6>
                                    <p className="text-muted">İster Whatsapp, ister mail, isterseniz telefon ile ulaşabilirsiniz. </p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home