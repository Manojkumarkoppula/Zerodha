import React from "react";
import './Main.css';

function Main()
{
    return(
        <>
            <div id="first">
                <img src="https://zerodha.com/static/images/landing.png" width={550}></img>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button>Sign up for free</button>
            </div>

            <div id="second">
                <div id="second_1">
                    <h1>Trust with confidence</h1>
                    <h3>Customer-first always</h3>
                    <p>
                    That's why 1.5+ crore customers trust Zerodha with<br></br> 
                    ₹4.5+ lakh crores of equity investments and contribute <br></br>
                    to 15% of daily retail exchange volumes in India.
                    </p>
            
                    <br></br>
                   
                    <h3>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push <br></br>
                        notifications. High quality apps that you use at <br></br>
                        your pace, the way you like.</p>
                    
                    
                    <br></br>
        
                    <h3>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments <br></br>
                        in 30+ fintech startups offer you tailored services <br></br>
                        specific to your needs.</p>
                 
                    <br></br>
                   
                    <h3>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just<br></br>
                         facilitate transactions, but actively help you do better<br></br>
                          with your money</p>
                </div>
                <div id="second_2">
                    <img src="https://zerodha.com/static/images/ecosystem.png" width={600}></img>
                    <div id="links">
                        <a href="#">Explore our products-></a>
                        <a href="#">Try Kite demo-></a>
                    </div>
                </div>
            </div>
            <div id="thirds">
                <img src="https://zerodha.com/static/images/press-logos.png"></img>
            </div>
            <div id="fourth">
                <div id="fourth1">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price <br></br>
                        transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div id="fourth2">
                    <img src="https://zerodha.com/static/images/pricing-eq.svg" width={100}></img>
                    <p>Free account<br></br>
                    opening</p>
                </div>
                <div id="fourth3">
                    <img src="https://zerodha.com/static/images/pricing-eq.svg" width={100}></img>
                    <p>Free equity delivery<br></br>
                    and direct mutual funds</p>
               </div>
               <div id="fourth4">
                    <img src="https://zerodha.com/static/images/other-trades.svg" width={100}></img>
                    <p>Intraday and<br></br>
                    F&O</p>
               </div>
              
            </div>

            <div id="new"><a href="#">See pricing -></a></div>

            <div id="five">

                <div id="five1">
                    <img src="https://zerodha.com/static/images/index-education.svg"></img>
                </div>
                <div id="five2">
                    <h1>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world <br></br>
                        covering everything from the basics to advanced trading.</p>
                        <a href="#">Varsity-></a>
                        <p>TradingQ&A, the most active trading and investment community in <br></br>
                            India for all your market related queries.</p>
                            <a href="#">TradingQ&A-></a>
                </div>
            </div>
            <div id="six">
                <h1>
                Open a Zerodha account
                </h1><br></br>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <br></br>
                <button>Sign up for free</button>
            </div>
        </>
    );
}
export default Main;