import React, { useState } from 'react'
import moment from 'moment';
const Order = (props) => {
    const product = props.product[0];
    const [sendTime, setSendTime] = useState("");
    const [address, setAddress] = useState("");
    const [recipientName, setRecipientName] = useState("");
    const [sendDate, setSendDate] = useState("");
    const [activeClass, setActiveClass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            product:{...product},
            sendTime,
            address,
            recipientName,
            sendDate
        }
        console.log(obj)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <p>Gönderim Tarihi:</p>
            <div className="d-flex flex-wrap justify-content-between btn-group-toggle send-date">
                <label className={activeClass == "option0" ? "btn btn-light mb-2 active" : "btn btn-light mb-2"} htmlFor="option0" onClick={(() => setActiveClass('option0'))}>
                    <input required type="radio" name="sendDate" id="option0" value={moment().format("DD.MM.YYYY")} onChange={(e) => { setSendDate(e.target.value); setSendTime("") }} />Bugün<p>{moment().format("DD.MM.YYYY")}</p>
                </label>
                <label className={activeClass == "option1" ? "btn btn-light mb-2 active" : "btn btn-light mb-2"} htmlFor="option1" onClick={(() => setActiveClass('option1'))}>
                    <input required type="radio" name="sendDate" id="option1" value={moment().add('1', 'days').format('DD.MM.YYYY')} onChange={(e) => setSendDate(e.target.value)} />Yarın<p>{moment().add("1", "days").format("DD.MM.YYYY")}</p>
                </label>
                <label className={activeClass == "option2" ? "btn btn-light mb-2 active" : "btn btn-light mb-2"} htmlFor="option2" onClick={(() => setActiveClass('option2'))}>
                    <input required type="radio" name="sendDate" id="option2" value={moment().add("2", "days").format("DD.MM.YYYY")} onChange={(e) => setSendDate(e.target.value)} />{moment().add("2", "days").format('dddd')} <p>{moment().add("2", "days").format("DD.MM.YYYY")}</p>
                </label>
                <label className={activeClass == "option3" ? "btn btn-light mb-2 active" : "btn btn-light mb-2"} htmlFor="option3" onClick={(() => setActiveClass('option3'))}>
                    <input required type="radio" name="sendDate" id="option3" value={moment().add("3", "days").format("DD.MM.YYYY")} onChange={(e) => setSendDate(e.target.value)} />{moment().add("3", "days").format('dddd')}<p>{moment().add("3", "days").format("DD.MM.YYYY")}</p>
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="sendTime">Gönderim Zamanı:</label>
                <select required value={sendTime} className="form-control mt-2" id="sendTime" onChange={(e) => setSendTime(e.target.value)}>
                    <option value="">Seçiniz</option>
                    <option value="09:00" disabled={moment(moment().format("DD.MM.YYYY HH:mm")).isAfter(sendDate+" 10:00")}>09:00-10:00</option>
                    <option value="10:00" disabled={moment(moment().format("DD.MM.YYYY HH:mm")).isAfter(sendDate+" 11:00")}>10:00-11:00</option>
                    <option value="11:00" disabled={moment(moment().format("DD.MM.YYYY HH:mm")).isAfter(sendDate+" 12:00")}>11:00-12:00</option>
                    <option value="12:00" disabled={moment(moment().format("DD.MM.YYYY HH:mm")).isAfter(sendDate+" 13:00")}>12:00-13:00</option>
                    <option value="13:00" disabled={moment(moment().format("DD.MM.YYYY HH:mm")).isAfter(sendDate+" 14:00")}>13:00-14:00</option>
                    <option value="14:00" disabled={moment(moment().format("DD.MM.YYYY HH:mm")).isAfter(sendDate+" 15:00")}>14:00-15:00</option>
                    <option value="15:00" disabled={moment(moment().format("DD.MM.YYYY HH:mm")).isAfter(sendDate+" 16:00")}>15:00-16:00</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="recipientName">Alıcı Adı Soyadı</label>
                <input required type="text" autoComplete="off" className="form-control" id="recipientName" onChange={(e) => setRecipientName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="address">Gönderim Adresi:</label>
                <textarea required className="form-control" placeholder="İlçe, Mahalle, Cadde, Sokak, Kapı No.." id="address" onChange={(e) => setAddress(e.target.value)}></textarea>
            </div>
            <div className="d-flex align-items-center justify-content-end">
                <button className="btn btn-lg btn-success float-right" title="Whatsapp İle Sipariş"><i className="fab fa-whatsapp"></i></button>
                <strong className="float-right mx-3">veya</strong>
                <button type="submit" className="btn btn-lg btn-primary float-right"> <span className="text">Online Sipariş Ver</span> <i className="fas  fa-shipping-fast"></i>  </button>
            </div>
        </form>
    )
}
export default Order