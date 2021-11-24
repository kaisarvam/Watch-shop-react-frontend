import React from 'react';
import './AboutUs.css'
import Navbar from '../../shared/Navbar/Navbar'
import Flip from 'react-reveal/Flip';
import Footer from '../../shared/Footer/Footer';
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
      <>
        <Navbar/>
        <div className="mt-2 pt-3">
         <Flip top cascade>
        <div className="container">
            <h1 className="mb-3"><strong> About <span className="text-warning"> Us  </span></strong></h1>
            <p>
            That's the motto at Watches.com. Founded by brothers Mitch & Andrew Greenblatt who are modern horological enthusiasts with a passion for unique timepieces. They've been scouring the globe since 1999 discovering obscure, unusual brands that you've probably never heard of as well as carefully curating the brands you love. Purveyors of wrist-borne time machines, Watches.com is a singular source for unusual modern watches from around the world. A watch says a lot about you and helps you stand out. It's time for YOU to be different.
            </p>
            <br/>
            <h3>Our vision </h3>
            <p>   
            We believe that the modern watch represents more than just a functional mechanism to tell time. The watch is a unique form of art, design and personal expression. We've had a long-standing mission of providing unique and affordable timepieces to adventurous enthusiasts as yourself. As the number one selling independent online watch store, we plan to stay true to our core mission. 
            </p>
            <br/>
            <h3>Keep It Simple</h3>
            <p>
            Watches.com is a singular source for unusual modern watches from around the world. A watch says a lot about you and helps you stand out. It's time for YOU to be different .We've had a long-standing mission of providing unique and affordable timepieces to adventurous enthusiasts as yourself. As the number one selling independent online watch store, we plan to stay true to our core mission.
            </p>
            <br/>
            
        </div>
        </Flip>
        </div>
        <Footer/>
        </>
    );
};

export default AboutUs;