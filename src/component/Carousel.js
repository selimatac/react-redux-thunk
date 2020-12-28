import React, { Component } from 'react'

class Carousel extends Component {
    render() {
        return (
            <section className="section-intro">
                <div className="intro-banner-wrap">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="/carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="/carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="/carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="images/sliders/bg-1.jpg" alt="First slide" />
                                <div className="carousel-text">
                                    <h3>Sevgililer Gününe Özel Ürünler</h3>
                                    <h5>Sevgililer gününde sevgilinizi şimartacak ürünleri sizler için hazırladık.</h5>
                                    <button className="btn btn-light">İncele</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="images/sliders/bg-1.jpg" alt="First slide" />
                                <div className="carousel-text">
                                    <h3>Sevgililer Gününe Özel Ürünler</h3>
                                    <h5>Sevgililer gününde sevgilinizi şimartacak ürünleri sizler için hazırladık.</h5>
                                    <button className="btn btn-light">İncele</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="images/sliders/bg-1.jpg" alt="First slide" />
                                <div className="carousel-text">
                                    <h3>Sevgililer Gününe Özel Ürünler</h3>
                                    <h5>Sevgililer gününde sevgilinizi şimartacak ürünleri sizler için hazırladık.</h5>
                                    <button className="btn btn-light">İncele</button>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="/carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Önceki</span>
                        </a>
                        <a className="carousel-control-next" href="/carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Sonraki</span>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
export default Carousel