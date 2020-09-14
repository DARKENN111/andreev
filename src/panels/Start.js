import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Start.css';

const Start = () => (
  <React.Fragment>      
      <div className="header">
        <p className="header-text">Пожертвования</p>
      </div>
      <div className="main">
      <p className="main-text">У Вас пока нет сборов.</p>
      <p className="main-text">Начните доброе дело.</p>
        <input type="button" value="Создать сбор" className="start-btn"
        onClick={() => { 
          document.location.href = "/select"
        }}/>
      </div>
  </React.Fragment>
);

export default Start;

