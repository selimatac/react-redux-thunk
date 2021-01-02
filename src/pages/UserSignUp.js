import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {
    const [state, setstate] = useState({
        accounttype: "Bireysel",
        name: "",
        surname: "",
        email: "",
        tel: "",
        city: "",
        password: "",
        retypepassword: "",
        billingaddress: "",
        terms: false
    });
    const [stateCompany, setStateCompany] = useState({
        accounttype: "Kurumsal",
        companyname: "",
        taxadministration: "",
        taxnumber: "",
        companytel: "",
        name: "",
        surname: "",
        email: "",
        tel: "",
        city: "",
        password: "",
        retypepassword: "",
        billingaddress: "",
        terms: false
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return (
        <section class="section-content padding-y">
            <p class="text-center mt-4">Hesabın var mı? <Link to="/giris">Giriş Yap</Link></p>

            <div class="card mx-auto" style={{ "max-width": "520px" }}>
                <article class="card-body">
                    <header class="mb-4"><h4 class="card-title text-center">Kayıt Ol</h4></header>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a onClick={() => setstate({ ...state, accounttype: "Bireysel" })} class="nav-link active" id="bireysel-tab" data-toggle="tab" href="#bireysel" role="tab" aria-controls="bireysel" aria-selected="true">Bireysel</a>
                        </li>
                        <li class="nav-item">
                            <a onClick={() => setStateCompany({ ...stateCompany, accounttype: "Kurumsal" })} class="nav-link" id="kurumsal-tab" data-toggle="tab" href="#kurumsal" role="tab" aria-controls="kurumsal" aria-selected="false">Kurumsal</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade mt-4 show active" id="bireysel" role="tabpanel" aria-labelledby="bireysel-tab">
                            <form onSubmit={handleSubmit}>
                                <div class="form-row">
                                    <div class="col form-group">
                                        <label>Adınız</label>
                                        <input onChange={(e) => setstate({ ...state, name: e.target.value })} type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div class="col form-group">
                                        <label>Soyadınız</label>
                                        <input onChange={(e) => setstate({ ...state, surname: e.target.value })} type="text" class="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>E-posta</label>
                                    <input onChange={(e) => setstate({ ...state, email: e.target.value })} type="email" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>İletişim Telefonu</label>
                                    <input onChange={(e) => setstate({ ...state, tel: e.target.value })} type="tep" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>Şehir</label>
                                    <input onChange={(e) => setstate({ ...state, city: e.target.value })} type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label>Fatura Adresi</label>
                                    <textarea onChange={(e) => setstate({ ...state, billingaddress: e.target.value })} class="form-control"></textarea>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Şifre</label>
                                        <input onChange={(e) => setstate({ ...state, password: e.target.value })} class="form-control" type="password" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Şifre tekrar</label>
                                        <input onChange={(e) => setstate({ ...state, retypepassword: e.target.value })} class="form-control" type="password" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block"> Kayıt Ol  </button>
                                </div>
                                <div class="form-group">
                                    <label class="custom-control custom-checkbox">
                                        <input required type="checkbox" class="custom-control-input" checked="" />
                                        <div class="custom-control-label">  <a href="#">Kullanım sözleşmesini</a>  onaylıyorum. </div> </label>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade mt-4" id="kurumsal" role="tabpanel" aria-labelledby="kurumsal-tab">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <label>Kurum Adı</label>
                                    <input onChange={(e) => setStateCompany({ ...stateCompany, companyname: e.target.value })} type="text" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>Vergi Dairesi</label>
                                    <input onChange={(e) => setStateCompany({ ...stateCompany, taxadministration: e.target.value })} type="text" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>Vergi Numarası</label>
                                    <input onChange={(e) => setStateCompany({ ...stateCompany, taxnumber: e.target.value })} type="text" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>Kurum Telefon</label>
                                    <input onChange={(e) => setStateCompany({ ...stateCompany, companytel: e.target.value })} type="text" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>Adınız</label>
                                    <input onChange={(e) => setStateCompany({ ...stateCompany, name: e.target.value })} type="text" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>Soyadınız</label>
                                    <input onChange={(e) => setStateCompany({ ...stateCompany, surname: e.target.value })} type="text" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>E-posta</label>
                                    <input onChange={(e) => setStateCompany({ ...stateCompany, email: e.target.value })} type="email" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>İletişim Telefonu</label>
                                    <input onChange={(e) => setStateCompany({ ...stateCompany, tel: e.target.value })} type="tep" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>Şehir</label>
                                    <input onChange={(e) => setStateCompany({ ...stateCompany, city: e.target.value })} type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label>Fatura Adresi</label>
                                    <textarea onChange={(e) => setStateCompany({ ...stateCompany, billingaddress: e.target.value })} class="form-control"></textarea>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Şifre</label>
                                        <input onChange={(e) => setStateCompany({ ...stateCompany, password: e.target.value })} class="form-control" type="password" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Şifre tekrar</label>
                                        <input onChange={(e) => setStateCompany({ ...stateCompany, retypepassword: e.target.value })} class="form-control" type="password" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block"> Kayıt Ol  </button>
                                </div>
                                <div class="form-group">
                                    <label class="custom-control custom-checkbox">
                                        <input required type="checkbox" class="custom-control-input" checked="" />
                                        <div class="custom-control-label">  <a href="#">Kullanım sözleşmesini</a>  onaylıyorum. </div> </label>
                                </div>
                            </form>
                        </div>
                    </div>

                </article>
            </div>


        </section>
    )
}
export default UserSignUp