import React, { Component } from 'react'

class ProfilePage extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <aside class="col-md-3">
                        <ul class="list-group">
                            <a class="list-group-item active" href="#"> My order history </a>
                            <a class="list-group-item" href="#"> Transactions </a>
                            <a class="list-group-item" href="#"> Return and refunds </a>
                            <a class="list-group-item" href="#">Settings </a>
                            <a class="list-group-item" href="#"> My Selling Items </a>
                            <a class="list-group-item" href="#"> Received orders </a>
                        </ul>
                        <a class="btn btn-light btn-block mt-3" href="#"> <i class="fa fa-power-off"></i> <span class="text">Çıkış Yap</span> </a>
                    </aside>
                    <main class="col-md-9">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title mb-4">Profil Sayfam</h4>
                                <form>
                                    <div class="form-group">
                                        <img src="#" class="img-sm rounded-circle border" />
                                    </div>
                                    <div class="form-row">
                                        <div class="col form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control" value="Mike" />
                                        </div>
                                        <div class="col form-group">
                                            <label>Email</label>
                                            <input type="email" class="form-control" value="Johnson" />
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Country</label>
                                            <select id="inputState" class="form-control">
                                                <option> Choose...</option>
                                                <option>Uzbekistan</option>
                                                <option>Russia</option>
                                                <option selected="">United States</option>
                                                <option>India</option>
                                                <option>Afganistan</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Zip</label>
                                            <input type="text" class="form-control" value="123009" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Phone</label>
                                            <input type="text" class="form-control" value="+123456789" />
                                        </div>
                                    </div>

                                    <button class="btn btn-primary btn-block">Save info</button>
                                </form>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        )
    }
}

export default ProfilePage