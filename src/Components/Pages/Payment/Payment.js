import React from 'react';
import './Payment.css';

const Payment = () => {
    return (
        <div className="containerx">
            <h1 className="fw-bold">Payment System coming Soon .....</h1>
           
           
            <div className="xcard">
                <div className="accordion" id="accordionExample">
                    <div className="xcard">
                        <div className="xcard-header p-0" id="headingTwo">
                            <h2 className="mb-0"> <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <div className="d-flex align-items-center justify-content-between"> <span>Paypal</span> <img alt="" src="https://i.imgur.com/7kQEsHU.png" width="30" /> </div>
                                </button> </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="xcard-body"> <input type="text" className="form-control" placeholder="Paypal email" /> </div>
                        </div>
                    </div>
                    <div className="xcard">
                        <div className="xcard-header p-0">
                            <h2 className="mb-0"> <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <div className="d-flex align-items-center justify-content-between"> <span>Credit xcard</span>
                                        <div className="icons"> <img alt="" src="https://i.imgur.com/2ISgYja.png" width="30" /> <img alt="" src="https://i.imgur.com/W1vtnOV.png" width="30" /> <img alt="" src="https://i.imgur.com/35tC99g.png" width="30" /> <img alt="" src="https://i.imgur.com/2ISgYja.png" width="30" /> </div>
                                    </div>
                                </button> </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="xcard-body payment-xcard-body"> <span className="font-weight-normal xcard-text">xcard Number</span>
                                <div className="input"> <i className="fa fa-credit-xcard"></i> <input type="text" className="form-control" placeholder="0000 0000 0000 0000" /> </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col-md-6"> <span className="font-weight-normal xcard-text">Expiry Date</span>
                                        <div className="input"> <i className="fa fa-calendar"></i> <input type="text" className="form-control" placeholder="MM/YY" /> </div>
                                    </div>
                                    <div className="col-md-6"> <span className="font-weight-normal xcard-text">CVC/CVV</span>
                                        <div className="input"> <i className="fa fa-lock"></i> <input type="text" className="form-control" placeholder="000" /> </div>
                                    </div>
                                </div> <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                            </div>
                        </div>
                    </div>
                </div>
           
     
            </div>
        </div>
    );
};

export default Payment;