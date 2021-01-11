import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { customerLogin } from '../store/actions/customerLoginAction'
import { MyAlert } from '../component/helpers/Myalert';
class UserLogin extends Component {


    state = {
        user: {
            email: "",
            password: ""
        },
        errors: {
            isShow: false
        }
    }
    componentDidMount() {
        // console.log(this.props)
        // console.log("componentDidMount")
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.customerloginInfo.customerloginInfo !== this.props.customerloginInfo.customerloginInfo) {
            if (this.props.customerloginInfo.customerloginInfo[0].isLoggedIn) {
                this.setState({ errors: { ...this.state.errors, isShow: false } })
                window.sessionStorage.setItem("customer_info", JSON.stringify(this.props.customerloginInfo.customerloginInfo[0]))
                window.sessionStorage.setItem("isLoggedIn",true)
            } else {
                this.setState({ errors: { ...this.state.errors, isShow: true } })
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.customerLogin(this.state.user);
    }
    render() {
        // const responseGoogle = (res) => {
        //     console.log("responseGoogle",res)
        //     console.log("profileObj",res.profileObj)
        // }
        return (
            <section className="section-conten padding-y" style={{ "min-height": "84vh" }}>
                <p className="text-center">Hesabın yok mu? <Link to="/kayit">Kayıt Ol</Link></p>
                <div className="card mx-auto" style={{ "max-width": "380px" }}>
                    <div className="card-body">
                        <h4 className="card-title text-center mb-4">Giriş Yap</h4>
                        <form onSubmit={this.handleSubmit}>
                            {/* <GoogleLogin
                                clientId="724629106004-ltm5rtrpu4a78m9gq897419kgfqbcmub.apps.googleusercontent.com"
                                buttonText="Google İle Giriş Yap"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                className="btn btn-google btn-block mb-4"
                            /> */}
                            {/* <a href="#" className="btn btn-google btn-block mb-4"> <i className="fab fa-google"></i> &nbsp;  Google ile Giriş Yap</a> */}
                            <MyAlert
                                parentClass={"form-group"}
                                isShow={this.state.errors.isShow}
                                alertType={"info"}
                                message={"Kullanıcı Adı Veya Şifre Yanlış!"}
                            />
                            <div className="form-group">
                                <input required autoComplete="off" className="form-control" placeholder="E-mail" type="email" onChange={(e) => this.setState({ user: { ...this.state.user, email: e.target.value } })} />
                            </div>
                            <div className="form-group">
                                <input required autoComplete="off" className="form-control" placeholder="Şifre" type="password" onChange={(e) => this.setState({ user: { ...this.state.user, password: e.target.value } })} />
                            </div>

                            <div className="form-group">
                                <a href="#" className="float-right">Şifreni mi unuttun?</a>

                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Giriş Yap  </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => ({ customerloginInfo: state.customerloginInfo });

export default connect(mapStateToProps, { customerLogin })(UserLogin);
