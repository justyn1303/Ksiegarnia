import {useState, useEffect} from 'react';
import "../../css/Newsletter.css";

const Newsletter = () => {

    const [inputSend, setinputSend] = useState(true);
    const [newsletter, setNewsletter] =  useState('');
    const [error, setError] = useState('');

    function validateEmail(email) {
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(email);
      }

    const send = () => {
       
        if(newsletter.length < 1){
            setError('To pole jest wymagane. Wpisz swój e-mail');
        }else{
            if(validateEmail(newsletter)){
                setinputSend(false);
                setError('');
            }
            else{
                setError('Wpisz poprawny e-mail')
            }
        }
    }

    const ok = () => {
        setinputSend(true)
    }

    const takeValue = (e) => {
        setNewsletter(e.target.value);
    }

   

    return (
        <div className="newsletter">
            <span>Zapisz się na newsletter</span>
            <input value={newsletter} onChange={takeValue} className={`form-control ${error ? 'is-invalid' : null}`}type="email" placeholder="Wpisz swój e-mail"></input>
            <div className='invalid-feedback'>{error}</div>
            <button onClick={send}>Wyślij</button>
            {inputSend ? null : <div className="newsletter-info"><span>Zostałeś zapisany do newslettera</span><button className='ok' onClick={ok}>Ok</button></div>}
        </div>
        
        
    )
}

export default Newsletter

