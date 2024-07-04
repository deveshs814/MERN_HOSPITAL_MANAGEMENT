import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          ZeeCare Medical Institute has emerged as Asia’s foremost integrated
            healthcare services provider and has a robust presence across the
            healthcare ecosystem, including Hospitals, Pharmacies, Primary Care
            & Diagnostic Clinics and several retail health models. The Group
            also has Telemedicine facilities across several countries, Health
            Insurance Services, Global Projects Consultancy, Medical Colleges,
            Medvarsity for E-Learning, Colleges of Nursing and Hospital
            Management and a Research Foundation. In addition, ‘ASK Apollo’ – an
            online consultation portal and Apollo Home Health provide the care
            continuum. The cornerstones of Apollo’s legacy are its unstinting
            focus on clinical excellence, affordable costs, modern technology
            and forward-looking research & academics. 
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          ZeeCare Medical Institute was among
            the first few hospitals in the world to leverage technology to
            facilitate seamless healthcare delivery. The organization embraced
            the rapid advancement in medical equipments across the world, and
            pioneered the introduction of several cutting edge innovations in
            India. Recently, South East Asia’s first Proton Therapy Centre
            commenced operations at the Apollo Centre in Chennai.
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
