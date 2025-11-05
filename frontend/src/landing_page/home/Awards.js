import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Broker img' style={{width : "90%"}} className='img-fluid'/>
                </div>
                <div className='col-6 ps-5 mt-5'>
                    <h2>Largest stock broker in India</h2>
                    <p> 2+ million Zerodha clients contribute to over 15% of daily retail volume on India daily by trading and investing in : </p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options </p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stock & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                         <img src='media/images/pressLogos.png' alt='Press Logos' style={{width : "70%"}} ></img>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;