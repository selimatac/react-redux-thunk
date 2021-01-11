import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { insertCustomer } from '../store/actions/insertCustomerActions'
import { RegionDropdown } from 'react-country-region-selector';
import { MyAlert } from '../component/helpers/Myalert';

class UserSignUp extends Component {
    state = {
        personal: {
            accounttype: "Bireysel",
            name: "",
            surname: "",
            email: "test@mail.com",
            tel: "",
            city: "",
            password: "",
            retypepassword: "",
            billingaddress: "",
            terms: false,
            current: true
        },
        company: {
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
            terms: false,
            current: false
        },
        errorlist: {
            personaPasswordIsSame: true,
            companyPasswordIsSame: true
        }
    }
    //TODO: kurumsal tarafta şifre kontrolünü tekrar kontrol et..

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.customer.customer !== this.props.customer.customer) {
            alert("Başarılı")
        }
    }

    render() {
        const handleSubmit = (event, data) => {
            event.preventDefault();
            if (data.accounttype == "Bireysel") {
                this.setState({ errorlist: { ...this.state.errorlist, personaPasswordIsSame: (data.password == data.retypepassword) } });
            } else if (data.accounttype == "Kurumsal") {
                this.setState({ errorlist: { ...this.state.errorlist, companyPasswordIsSame: (data.password == data.retypepassword) } })
            }
            if(data.password == data.retypepassword){
                this.props.insertCustomer(JSON.stringify(data));
            }
        }
        return (
            <section class="section-content padding-y">
                <p class="text-center mt-4">Hesabın var mı? <Link to="/giris">Giriş Yap</Link></p>

                <div class="card mx-auto" style={{ "max-width": "520px" }}>
                    <article class="card-body">
                        <header class="mb-4"><h4 class="card-title text-center">Kayıt Ol</h4></header>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a onClick={(e) => this.setState({ personal: { ...this.state.personal, current: true }, company: { ...this.state.company, current: false } })} class="nav-link active" id="bireysel-tab" data-toggle="tab" href="#bireysel" role="tab" aria-controls="bireysel" aria-selected="true">Bireysel</a>
                            </li>
                            <li class="nav-item">
                                <a onClick={(e) => this.setState({ personal: { ...this.state.personal, current: false }, company: { ...this.state.company, current: true } })} class="nav-link" id="kurumsal-tab" data-toggle="tab" href="#kurumsal" role="tab" aria-controls="kurumsal" aria-selected="false">Kurumsal</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade mt-4 show active" id="bireysel" role="tabpanel" aria-labelledby="bireysel-tab">
                                <form onSubmit={(e) => handleSubmit(e, { ...this.state.personal })}>
                                    <div class="form-row">
                                        <div class="col form-group">
                                            <label>Adınız</label>
                                            <input required onChange={(e) => this.setState({ personal: { ...this.state.personal, name: e.target.value } })} type="text" class="form-control" placeholder="" />
                                        </div>
                                        <div class="col form-group">
                                            <label>Soyadınız</label>
                                            <input required onChange={(e) => this.setState({ personal: { ...this.state.personal, surname: e.target.value } })} type="text" class="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>E-posta</label>
                                        <input required value={this.state.personal.email} onChange={(e) => this.setState({ personal: { ...this.state.personal, email: e.target.value } })} type="email" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>İletişim Telefonu</label>
                                        <input required onChange={(e) => this.setState({ personal: { ...this.state.personal, tel: e.target.value } })} type="tep" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>Şehir</label>
                                        <RegionDropdown
                                            required
                                            country={"Turkey"}
                                            classes={"form-control"}
                                            defaultOptionLabel={"Seçiniz"}
                                            onChange={(val) => this.setState({ personal: { ...this.state.personal, city: val } })}
                                            value={this.state.personal.city}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Fatura Adresi</label>
                                        <textarea required onChange={(e) => this.setState({ personal: { ...this.state.personal, billingaddress: e.target.value } })} class="form-control"></textarea>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Şifre</label>
                                            <input required onChange={(e) => this.setState({ personal: { ...this.state.personal, password: e.target.value } })} class="form-control" type="password" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Şifre tekrar</label>
                                            <input required onChange={(e) => this.setState({ personal: { ...this.state.personal, retypepassword: e.target.value } })} class="form-control" type="password" />
                                        </div>
                                        <div className={this.state.errorlist.personaPasswordIsSame ? "form-group col-md-12 d-none" : "form-group col-md-12 d-block"}>
                                            <div class="alert alert-warning" role="alert">
                                                Şifreler aynı olmalıdır!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block"> Kayıt Ol  </button>
                                    </div>
                                    <div class="form-group">
                                        <label class="custom-control custom-checkbox" >
                                            <input required type="checkbox" class="custom-control-input" onClick={(e) => this.setState({ personal: { ...this.state.personal, terms: e.target.checked } })} />
                                            <div class="custom-control-label">  <a href="#">Kullanım sözleşmesini</a>  onaylıyorum. </div> </label>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane fade mt-4" id="kurumsal" role="tabpanel" aria-labelledby="kurumsal-tab">
                                <form onSubmit={(e) => handleSubmit(e, { ...this.state.company })}>
                                    <div class="form-group">
                                        <label>Kurum Adı</label>
                                        <input onChange={(e) => this.setState({ company: { ...this.state.company, companyname: e.target.value } })} type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>Vergi Dairesi</label>
                                        <input onChange={(e) => this.setState({ company: { ...this.state.company, taxadministration: e.target.value } })} type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>Vergi Numarası</label>
                                        <input onChange={(e) => this.setState({ company: { ...this.state.company, taxnumber: e.target.value } })} type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>Kurum Telefon</label>
                                        <input onChange={(e) => this.setState({ company: { ...this.state.company, companytel: e.target.value } })} type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>Adınız</label>
                                        <input onChange={(e) => this.setState({ company: { ...this.state.company, name: e.target.value } })} type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>Soyadınız</label>
                                        <input onChange={(e) => this.setState({ company: { ...this.state.company, surname: e.target.value } })} type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>E-posta</label>
                                        <input onChange={(e) => this.setState({ company: { ...this.state.company, email: e.target.value } })} type="email" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>İletişim Telefonu</label>
                                        <input onChange={(e) => this.setState({ company: { ...this.state.company, tel: e.target.value } })} type="tep" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>Şehir</label>
                                        <RegionDropdown

                                            required
                                            country={"Turkey"}
                                            classes={"form-control"}
                                            defaultOptionLabel={"Seçiniz"}
                                            onChange={(val) => this.setState({ company: { ...this.state.company, city: val } })}
                                            value={this.state.company.city}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Fatura Adresi</label>
                                        <textarea onChange={(e) => this.setState({ company: { ...this.state.company, billingaddress: e.target.value } })} class="form-control"></textarea>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Şifre</label>
                                            <input onChange={(e) => this.setState({ company: { ...this.state.company, password: e.target.value } })} class="form-control" type="password" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Şifre tekrar</label>
                                            <input onChange={(e) => this.setState({ company: { ...this.state.company, retypepassword: e.target.value } })} class="form-control" type="password" />
                                        </div>
                                        {/* <div className={this.state.errorlist.companyPasswordIsSame ? "form-group col-md-12 d-none" : "form-group col-md-12 d-block"}>
                                        </div> */}
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block"> Kayıt Ol  </button>
                                    </div>
                                    <MyAlert parentClass={"form-group"} alertType={"danger"} message={"Şifreler aynı olmalıdır!"} isShow={!this.state.errorlist.companyPasswordIsSame}/>

                                    <div class="form-group">
                                        <label class="custom-control custom-checkbox" >
                                            <input type="checkbox" class="custom-control-input" onClick={(e) => this.setState({ company: { ...this.state.company, terms: e.target.checked } })} />
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
}


const mapStateToProps = (state) => ({ customer: state.customer });

export default connect(mapStateToProps, { insertCustomer })(UserSignUp);
