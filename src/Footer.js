import React from "react";
import './Footer.css';

function Footer(){
    return(
        <>
            <div id="containers">
                <div id="first11">
                    <img src="https://zerodha.com/static/images/logo.svg" width={150} ></img>
                    <p>© 2010 - 2024, Zerodha Broking Ltd.<br/>

                       All rights reserved.</p>
                     <div id="images">
                        <img src="https://zerodha.com/static/images/x-twitter.svg"></img>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png" width={22}></img>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346" width={22}></img>
                        <img src="https://thumbs.dreamstime.com/b/whatsapp-logo-icon-vector-black-design-illustration-whatsapp-logo-icon-vector-black-design-illustration-white-background-146099869.jpg" width={22}></img>
                        </div> 
                </div>
                <div id="second11">
                <h2>Company</h2>
                    <h3>About  </h3>
                    <h3>Products</h3>
                    <h3>Pricing</h3>
                    <h3>Referral programme</h3>
                    <h3>Careers</h3>
                    <h3>Zerodha.tech </h3>
                    <h3>Press & media</h3>
                    <h3>Zerodha Cares (CSR)</h3>
                </div>
                <div id="third11">
                    <h2>Support</h2>
                    <h3>Contact us</h3>
                    <h3>Z-Connect blog</h3>
                    <h3>List of charges</h3>
                    <h3>Downloads & resources</h3>
                    <h3>Videos</h3>
                    <h3>Market overview</h3>
                    <h3>How to file a complaint?</h3>
                    <h3>Status of your complaints</h3>
                    <h3>Account</h3>
                    <h3>Open an account</h3>
    
                </div>
                <div id="fourth11">
                        <h2>Account</h2>
                        <h3>Open an account</h3>
                        <h3>Fund transfer</h3>
                </div>
            </div>
        </>
    );

}
export default Footer;

