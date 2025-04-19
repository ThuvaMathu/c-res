import React from 'react';


export function Header() {

    return (
        <div>
            <div className="contact-details">
                <ul className="container">
                    <li className="text">1800 536 663</li>
                    <li className="text">info@localbuying.com.au</li>
                </ul>
            </div>
            <div className="container-logo">
                <a href="https://c-res.com.au">
                <img 
                    alt="Local Buying Program logo" 
                    src={ process.env.PUBLIC_URL + "/logoLBP.png" }
                />
                </a>
                <img 
                    alt="BHP"
                    src={ process.env.PUBLIC_URL + "/logoBHP.png" }
                />
            </div>
        </div>
    );
}
