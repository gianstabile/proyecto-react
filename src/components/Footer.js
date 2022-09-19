import React from "react";
import "./Footer.css";
import "boxicons";

const Footer = () => {
  return (
    <div className="container-sm text-light shadow p-3 mb-4 bg-black rounded mb-0">
      <div className="row">
        <div className="col-4 d-flex justify-content-center p-2">
          <div>
            <div>
              <h5 className="text-center footer__title">NOSOTROS</h5>
              <ul className="list-group list-unstyled">
                <li className="">
                  <a href="#" className="link">
                    Acerca de GREED SEXSHOP
                  </a>
                </li>
                <li className="">
                  <a href="#" className="link">
                    Sucursales y envíos
                  </a>
                </li>
                <li className="">
                  <a href="#" className="link">
                    Contacto y ayuda
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="text-center footer__title">AYUDA</h5>
              <ul className="list-group list-unstyled">
                <li className="">
                  <a href="#" className="link">
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    Política de devolución
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center p-2">
          <div>
            <h5 className="text-center footer__title">MEDIOS DE PAGO</h5>
            <div className="container">
              <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 ">
                <img className="img__pay" src="https://res.cloudinary.com/dghlpjgni/image/upload/v1663522505/logos/mediosdepago/mercadopago_fhdotm.jpg" />
                <img className="img__pay" src="https://res.cloudinary.com/dghlpjgni/image/upload/v1663522505/logos/mediosdepago/todopago_wnskze.jpg" />
                <img className="img__pay" src="https://res.cloudinary.com/dghlpjgni/image/upload/v1663522505/logos/mediosdepago/lemon_mnrfnl.jpg" />
                <img className="img__pay" src="https://res.cloudinary.com/dghlpjgni/image/upload/v1663522505/logos/mediosdepago/banelco_ltpgm2.jpg" />
                <img className="img__pay" src="https://res.cloudinary.com/dghlpjgni/image/upload/v1663522505/logos/mediosdepago/link_dnpkxs.jpg" />
                <img className="img__pay" src="https://res.cloudinary.com/dghlpjgni/image/upload/v1663522505/logos/mediosdepago/nacion_icgwm5.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center p-2">
          <div className="d-flex flex-column align-items-center">
            <h5 className="text-center footer__title">GREED SEXSHOP</h5>
            <div>

              <p>
              <box-icon name='building-house' type='solid' color="white"></box-icon>
                 <strong> Sucursal: </strong> San Martin 1420, CABA
              </p>
              <p><box-icon type='solid' name='box' color="white"></box-icon> Retiros en sucursal de 9 a 16hs.</p>
              <p> <box-icon name='envelope' type='solid' color="white"></box-icon>
                <strong> Email: </strong>
                <a className="link" href="mailto:info@greedshop.com.ar">
                  info@greedshop.com.ar
                </a>{" "}
              </p>
              <p><box-icon type='solid' name='phone' color="white"></box-icon>
                <strong> Tel/cel: </strong> (11) 426 3659{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <hr className="my-4 w-50" />
        <p className="text-center mb-0">
          GREED SEXSHOP 2022 © Todos los derechos Reservados{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
