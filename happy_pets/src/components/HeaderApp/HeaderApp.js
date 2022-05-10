import React from "react";

export default function AppHeader(props) {
  const { onRequestCall, signService } = props;
  return (
    <div className="app-header-wrapper">
      <div className="App">
        <div className="app-header">
          <div className="company-name">Атлант-М Боровая</div>
          <div className="address-main">Минский р-н, р-н д.Боровая, 2</div>
          <div className="telephone-number">
            {" "}
            <a href="tel:+375445509337">+375 44 550 93 37</a>
          </div>
          <div className="request-call">
            <button type="button" onClick={onRequestCall}>
              Заказать звонок
            </button>
          </div>
          <div className="sign-service">
            <button type="button" onClick={signService}>
              Записаться на сервис
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
