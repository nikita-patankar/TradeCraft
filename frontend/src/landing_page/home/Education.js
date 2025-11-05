import React from 'react';

function Education() {
    return ( 
      <div className='container mt-5 mb-5'>
        <div className='row'>
            <div className='col-5'>
                <img src='media/images/education.svg' alt='Ecosystem'></img>
            </div>
            <div className='col-1'></div>
            <div className='col-6 pt-5 mt-5'>
                <h2>Free and open market education</h2>
                <p className='mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="/products" className="fw-bold fs-6 mt-3" style={{textDecoration:"none"}}>
                      Varsity <i className="fa-solid fa-arrow-right"></i>
                 </a>
                 <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                 <a href="/products" className="fw-bold fs-6 mt-3" style={{textDecoration:"none"}}>
                      TradingQ&A <i className="fa-solid fa-arrow-right"></i>
                 </a>
            </div>
        </div>
      </div>
     );
}

export default Education;