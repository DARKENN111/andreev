import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './More.css';

const More = () => {
    const [ name, setName ] = useState('');
    const [ checked, setChecked ] = useState(false);
    const [ date, setDate ] = useState('');

if (date !== "" && name !== "") {
  return (
  <React.Fragment>
      <div className="main-more">
        <div>
          <p className="form-text">Автор</p>
          <input type="text" list="names" className="form-input" value={name}
          onChange={event => {
              setName(event.target.value);
            }}/>
          <datalist id="names">
             <option value="Данила Андреев" onToggle={() => { setName('Данила Андреев');}}/>
             <option value="Другой..." onToggle={() => { setName('');}}/>
          </datalist>
        </div>
        <div>
          <p className="form-text">Сбор завершится</p>
          <div className="form-radio">
            <input onChange={event => {setChecked(event.target.value);}} checked={checked} id="radio-1" type="radio" className="more-radio" value="1" onToggle={() => { setChecked(!checked);}}/>
            <label className="label-more" for="radio-1">Когда соберём сумму</label>
          </div>
          <div className="form-radio">
            <input onChange={event => {setChecked(!event.target.value);}} checked={!checked} id="radio-2" type="radio" className="more-radio" value="2" onToggle={() => { setChecked(!setChecked);}}/>
            <label className="label-more" for="radio-2">В определённую дату</label>
          </div>
        </div>
        <div>
          <p className="form-text">Дата окончания</p>
          <input type="date" className="form-input" placeholder="Выберите дату" onChange={event => {setDate(event.target.value); }}/>
        </div>
        <footer className="Place__footer">
          <input type="button" value="Создать сбор" className="form-button" onClick={() => { document.location.href = "/"}}/>
        </footer>
      </div>
  </React.Fragment>
  );

} else {
  return (
  <React.Fragment>
      <div className="main-more">
        <div>
          <p className="form-text">Автор</p>
          <input type="text" list="names" className="form-input" value={name}
          onChange={event => {
              setName(event.target.value);
            }}/>
          <datalist id="names">
             <option value="Данила Андреев" onToggle={() => { setName('Данила Андреев');}}/>
             <option value="Другой..." onToggle={() => { setName('');}}/>
          </datalist>
        </div>
        <div>
          <p className="form-text">Сбор завершится</p>
          <div className="form-radio">
            <input onChange={event => {setChecked(event.target.value);}} checked={checked} id="radio-1" type="radio" className="more-radio" value="1" onToggle={() => { setChecked(!checked);}}/>
            <label className="label-more" for="radio-1">Когда соберём сумму</label>
          </div>
          <div className="form-radio">
            <input onChange={event => {setChecked(!event.target.value);}} checked={!checked} id="radio-2" type="radio" className="more-radio" value="2" onToggle={() => { setChecked(!setChecked);}}/>
            <label className="label-more" for="radio-2">В определённую дату</label>
          </div>
        </div>
        <div>
          <p className="form-text">Дата окончания</p>
          <input type="date" className="form-input" placeholder="Выберите дату" onChange={event => {setDate(event.target.value); }}/>
        </div>
        <footer className="Place__footer">
          <input type="button" value="Создать сбор" className="form-button-disabled" onClick={() => { document.location.href = "/Publicate"}} disabled/>
        </footer>
      </div>
  </React.Fragment>
  );
}
};

export default More;

