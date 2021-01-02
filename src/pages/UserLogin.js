import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [state, setstate] = useState({
        username:"",
        password:"",
        rememberme:false
    });
    return (
        <section className="section-conten padding-y" style={{"min-height":"84vh"}}>
                <p className="text-center">Hesabın yok mu? <Link to="/kayit">Kayıt Ol</Link></p>
                <div className="card mx-auto" style={{"max-width": "380px"}}>
                    <div className="card-body">
                        <h4 className="card-title text-center mb-4">Giriş Yap</h4>
                        <form>
                            <a href="#" className="btn btn-google btn-block mb-4"> <i className="fab fa-google"></i> &nbsp;  Google ile Giriş Yap</a>
                            <div className="form-group">
                                <input autoComplete="off" className="form-control" placeholder="Kullanıcı adı" type="text" onChange={(e) => setstate({...state,username:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <input autoComplete="off" className="form-control" placeholder="Şifre" type="password" onChange={(e) => setstate({...state,password:e.target.value})}/>
                            </div>

                            <div className="form-group">
                                <a href="#" className="float-right">Şifreni mi unuttun?</a>
                                <label className="float-left custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked={state.rememberme} onChange={(e) => setstate({...state,rememberme:e.target.checked})} />
                                    <div className="custom-control-label"> Beni Hatırla </div> </label>
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
export default UserLogin