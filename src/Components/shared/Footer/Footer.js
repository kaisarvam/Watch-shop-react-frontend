import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="fw-bold">
            <div className=" my-5 mb-0 ">
<footer
        className="text-center container-fluid text-lg-start text-white custom-sts footer-bg"      
        >

  <section
           className="d-flex justify-content-between p-4 custom-stst  rounded-2"
           
           >

    <div className="me-5">
      <span>Get connected with us on social networks:</span>
    </div>



    <div>
      <NavLink to="" activeClassName="inactive" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </NavLink>
      <NavLink to="" activeClassName="inactive"  className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </NavLink>
      <NavLink to="" activeClassName="inactive" className="text-white me-4">
        <i className="fab fa-google"></i>
      </NavLink>
      <NavLink to="" activeClassName="inactive" className="text-white me-4">
        <i className="fab fa-instagram"></i>
      </NavLink>
      <NavLink to="" activeClassName="inactive" className="text-white me-4">
        <i className="fab fa-linkedin"></i>
      </NavLink>
      <NavLink to="" activeClassName="inactive" className="text-white me-4">
        <i className="fab fa-github"></i>
      </NavLink>
    </div>

  </section>



  <section className="">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold">Watch Site</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto custom-S"
              
              />
          <p>
            what is this site for ?
          </p>
        </div>



        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <h6 className="text-uppercase fw-bold">watches</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto custom-S"
              
              />
          <p>
            <NavLink to="/Casio" className="text-white">Casio</NavLink>
          </p>
          <p>
            <NavLink to="/Tessart" className="text-white">Tessart</NavLink>
          </p>
          <p>
            <NavLink to="/Titan" className="text-white">Titan</NavLink>
          </p>
          <p>
            <NavLink to="/Rolex" className="text-white">Rolex</NavLink>
          </p>
        </div>



        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
 
          <h6 className="text-uppercase fw-bold">Useful links</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto custom-S"
             
              />
          <p>
            <NavLink to="/account" className="text-white">Your Account</NavLink>
          </p>
          <p>
            <NavLink to="/watchList" className="text-white">Watch List</NavLink>
          </p>
          <p>
            <NavLink to="/BudgetWatches" className="text-white">Budget watches</NavLink>
          </p>
          <p>
            <NavLink to="/faq" className="text-white">FAQ</NavLink>
          </p>
        </div>



        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold">Contact</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto custom-S"
             
              />
          <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
          <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
        </div>

      </div>

    </div>
  </section>


  <div
       className="text-center p-3 custom-St m-0"
       >
    © 2021 Copyright: 
    <NavLink className="text-success" to="/noplace"
       > MD Kaisar Sarwar</NavLink>
  </div>

</footer>


</div>

        </div>
    );
};

export default Footer;