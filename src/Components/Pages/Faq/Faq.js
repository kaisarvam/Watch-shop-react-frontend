import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';
import { useEffect } from 'react';
import Navbar from '../../shared/Navbar/Navbar';

const Faq = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
          <>
        <Navbar/>
        <div className="mb-0 pb-0 mt-2 pt-3  text-dark">
        <section className="container mt-5 mb-0 pb-0" id="fa-q">
<h1 className="text-center font-weight-bold  pb-5 my-5">Frequently <span className="text-warning"> Asked </span> Questions   </h1>
<div className="row g-5">
    <div className="col-lg-6 col-md-6 col-sm-12 ">
        <div className="d-flex justify-content-center" >
        <LightSpeed left>
 <img className="img-fluid w-75 h-25" src="./faq.png" alt="" />
 </LightSpeed>
    </div>
    </div>
    <Slide right>
    <div className="col-lg-6 col-md-6 col-sm-12 ">
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item  mb-2">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                   <strong>What are we ?  </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                Founded by brothers Mitch & Andrew Greenblatt who are modern horological enthusiasts with a passion for unique timepieces. They've been scouring the globe since 1999 discovering obscure, unusual brands that you've probably never heard of as well as carefully curating the brands you love. Purveyors of wrist-borne time machines, Watches.com is a singular source for unusual modern watches from around the world. A watch says a lot about you and helps you stand out. It's time for YOU to be different.
                </div>
              </div>
            </div>
            <div className="accordion-item pb-2 mb-2">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                   <strong> Are prices shown in my local currency? </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                All products on Watches.com are priced in US Dollars ($ USD). Customers located outside of the United States will see a total amount charged on their bank statement in the default currency their bank deals in. The difference between USD order total and the amount charged on your bank statement is due to currency conversion from your financial institution.
                </div>
              </div>
            </div>
            <div className="accordion-item pb-2 mb-2">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <strong>  Where is my order? </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                All orders are processed and shipped out by 5pm (PST) Monday through Friday. Orders received after 12pm (PST) will be processed the next business day. All shipping times are estimates provided to us by our shipping partners. Weather or missed delivery attempts can often be a factor in delayed shipments. Also international shipments can often be delayed due to high variance with each country’s customs processing. To track your package, just find your shipping confirmation email from us and click Track Package. If you choose Route Package Protection during checkout then find the shipping email from Route to see your upgrading tracking abilities.
                </div>
              </div>
            </div>
            <div className="accordion-item pb-2 mb-2">
                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                   <strong> Can I cancel my order? </strong>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                  <div className="accordion-body">
                  Orders are processed and sent to our fulfillment center within 20 minutes of the order being completed. We can cancel an order at no charge if we are notified within 15 minutes of your order being placed. Please call us at 925-820-4300 between 8am-5pm Pacific Standard Time for immediate assistance. Emails will not guarantee order cancellations, as they are answered in the order they are received. Orders cannot be cancelled after this 15 minute window. Preorders and special orders cannot be cancelled as the funds have already been sent to the manufacturer to secure your watch.
                  </div>
                </div>
                
              </div>
          </div>
        
    </div>
    </Slide>

</div>

</section>
<br/>
<br/>
<br/>
<br/>
        </div>
         </>
    );
};

export default Faq;