import React, { Component } from 'react'

class Carousel extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mb-5">
                        <div class="col-md-8 mb-3">
                            <a href="#" class="card-banner" style={{ "minHeight": "230px", "background-image": "url('../../images/products/img2.jpg')" }}>
                                <div class="card-img-overlay white">
                                    <h3 class="card-title">Photography is my hobby right now</h3>
                                    <p class="card-text" style={{ "maxWidth": "400px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt.</p>
                                    <a href="" class="btn btn-warning">Learn more</a>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mb-3">
                            <a href="#" class="card-banner" style={{ "minHeight": "230px", "background-image": "url('https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/posts/3.jpg')" }}>
                                <div class="card-img-overlay text-white">
                                    <h5 class="card-title">Best products</h5>
                                    <p class="card-text">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
                                </div>
                            </a>

                        </div>
                    </div>
                <div class="row small-slider">
                    <div class="col-md-4">
                        <a href="#" class="shadow-sm card-banner">
                            <div class="p-4 W-75" >
                                <h5 class="card-title">Bu Hafta İndirimli Buketler</h5>
                                <p>Some quick example text to build on the card title and make up the bulk .</p>
                            </div>
                            <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/banners/banner-item1.jpg" height="150" class="img-bg" />
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="#" class="shadow-sm card-banner">
                            <div class="p-4 W-75">
                                <h5 class="card-title">Birbirinden Güzel Kaktüsler</h5>
                                <p>Some quick example text to build on the card title and make up the bulk.</p>
                            </div>
                            <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/banners/banner-item1.jpg" height="150" class="img-bg" />
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="#" class="shadow-sm card-banner">
                            <div class="p-4 W-75">
                                <h5 class="card-title">Sevginizi Gösterin</h5>
                                <p>Some quick example text to build on the card title and make up the bulk.</p>

                            </div>
                            <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/banners/banner-item1.jpg" height="150" class="img-bg" />
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="#" class="shadow-sm card-banner">
                            <div class="p-4 W-75">
                                <h5 class="card-title">Teraryumlara Göz Attınız mı?</h5>
                                <p>Some quick example text to build on the card title and make up the bulk.</p>

                            </div>
                            <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/banners/banner-item1.jpg" height="150" class="img-bg" />
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="#" class="shadow-sm card-banner">
                            <div class="p-4 W-75">
                                <h5 class="card-title">Masa Üstü İçin Seçtiklerimiz </h5>
                                <p>Some quick example text to build on the card title and make up the bulk.</p>

                            </div>
                            <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/banners/banner-item1.jpg" height="150" class="img-bg" />
                        </a>
                    </div>
                </div>
            </div>
        )


        // return (
        //     <section className="section-intro">
        //         <div className="intro-banner-wrap">
        //             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        //                 <ol className="carousel-indicators">
        //                     <li data-target="/carouselExampleIndicators" data-slide-to="0" className="active"></li>
        //                     <li data-target="/carouselExampleIndicators" data-slide-to="1"></li>
        //                     <li data-target="/carouselExampleIndicators" data-slide-to="2"></li>
        //                 </ol>
        //                 <div className="carousel-inner">
        //                     <div className="carousel-item active">
        //                         <img className="d-block w-100" src="images/sliders/bg-1.jpg" alt="First slide" />
        //                         <div className="carousel-text">
        //                             <h3>Sevgililer Gününe Özel Ürünler</h3>
        //                             <h5>Sevgililer gününde sevgilinizi şimartacak ürünleri sizler için hazırladık.</h5>
        //                             <button className="btn btn-light">İncele</button>
        //                         </div>
        //                     </div>
        //                     <div className="carousel-item">
        //                         <img className="d-block w-100" src="images/sliders/bg-1.jpg" alt="First slide" />
        //                         <div className="carousel-text">
        //                             <h3>Sevgililer Gününe Özel Ürünler</h3>
        //                             <h5>Sevgililer gününde sevgilinizi şimartacak ürünleri sizler için hazırladık.</h5>
        //                             <button className="btn btn-light">İncele</button>
        //                         </div>
        //                     </div>
        //                     <div className="carousel-item">
        //                         <img className="d-block w-100" src="images/sliders/bg-1.jpg" alt="First slide" />
        //                         <div className="carousel-text">
        //                             <h3>Sevgililer Gününe Özel Ürünler</h3>
        //                             <h5>Sevgililer gününde sevgilinizi şimartacak ürünleri sizler için hazırladık.</h5>
        //                             <button className="btn btn-light">İncele</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <a className="carousel-control-prev" href="/carouselExampleIndicators" role="button" data-slide="prev">
        //                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //                     <span className="sr-only">Önceki</span>
        //                 </a>
        //                 <a className="carousel-control-next" href="/carouselExampleIndicators" role="button" data-slide="next">
        //                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //                     <span className="sr-only">Sonraki</span>
        //                 </a>
        //             </div>
        //         </div>
        //     </section>
        // )
    }
}
export default Carousel