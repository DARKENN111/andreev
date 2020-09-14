import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Target.css';

const Target = () => {
  const [ type, setType ] = useState('');

  return (
  <React.Fragment>
      <div className="main-target">
        <div className="load-photo">
          <div className="load-text">
            <div className="image">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3083 0C15.8978 0 17.1262 0.237232 18.4021 0.919585C19.5542 1.53571 20.4643 2.44582 21.0804 3.59786C21.7628 4.87375 22 6.10224 22 8.69166V13.3083C22 15.8978 21.7628 17.1262 21.0804 18.4021C20.4643 19.5542 19.5542 20.4643 18.4021 21.0804C17.1262 21.7628 15.8978 22 13.3083 22H8.69166C6.10224 22 4.87375 21.7628 3.59786 21.0804C2.44582 20.4643 1.53571 19.5542 0.919585 18.4021C0.237232 17.1262 0 15.8978 0 13.3083V8.69166C0 6.10224 0.237232 4.87375 0.919585 3.59786C1.53571 2.44582 2.44582 1.53571 3.59786 0.919585C4.87375 0.237232 6.10224 0 8.69166 0H13.3083ZM14.9791 12.4419L10.7771 17.6294C10.426 18.0628 9.78827 18.1253 9.35982 17.7682L7.06137 15.8528L3.96323 18.9516C4.14411 19.0857 4.33681 19.2076 4.54106 19.3168C5.4876 19.823 6.40417 20 8.69166 20H13.3083C15.5958 20 16.5124 19.823 17.4589 19.3168C18.2624 18.8871 18.8871 18.2624 19.3168 17.4589C19.4637 17.1842 19.5829 16.9121 19.6781 16.6082L14.9791 12.4419ZM13.3083 2H8.69166C6.40417 2 5.4876 2.177 4.54106 2.68321C3.73755 3.11293 3.11293 3.73755 2.68321 4.54106C2.177 5.4876 2 6.40417 2 8.69166V13.3083C2 15.5652 2.17229 16.4876 2.66305 17.4209L6.29289 13.7929C6.65861 13.4272 7.24286 13.4007 7.64018 13.7318L9.8612 15.5826L14.0831 10.3706C14.4417 9.92784 15.0972 9.87376 15.5236 10.2517L19.9887 14.2102C19.9964 13.9349 20 13.6356 20 13.3083V8.69166C20 6.40417 19.823 5.4876 19.3168 4.54106C18.8871 3.73755 18.2624 3.11293 17.4589 2.68321C16.5124 2.177 15.5958 2 13.3083 2ZM7.5 6C8.32843 6 9 6.67157 9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6Z" fill="#3F8AE0"/>
              </svg>
            </div>
            <p className="text">Загрузить обложку</p>
          </div>
        </div>
        <div className="form">
        <div>
          <p className="form-text">Название сбора</p>
          <input type="text" className="form-input" placeholder="Название сбора"/>
        </div>
        <div>
          <p className="form-text">Сумма, ₽</p>
          <input type="text" className="form-input" placeholder="Сколько нужно собрать?"/>
        </div>
        <div>
          <p className="form-text">Цель</p>
          <input type="text" className="form-input" placeholder="Например, лечение человека"/>
        </div>
        <div>
          <p className="form-text">Описание</p>
          <input type="text" className="form-input" placeholder="На что пойдут деньги и как они кому-то помогут?"/>
        </div>
        <div>
          <p className="form-text">Куда получать деньги</p>

          <input type="text" list="types" className="form-input" value={type}
          onChange={event => {
              setType(event.target.value);
            }}/>
          <datalist id="types">
             <option value="Счет VK PAY • 1234" onToggle={() => { setType('Счет VK PAY • 1234');}}/>
             <option value="На карту • 9314" onToggle={() => { setType('На карту • 9314'); }}/>
          </datalist>
        </div>
        </div>
        <footer className="Place__footer">
            <input type="button" value="Далее"className="form-button" onClick={() => { if(type !== "Счет VK PAY • 1234" && type !== "На карту • 9314"){alert("error" + type);}else{document.location.href = "/More"}}}/>
        </footer>
      </div>
  </React.Fragment>
);
};


export default Target;

