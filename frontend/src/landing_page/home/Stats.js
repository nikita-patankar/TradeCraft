import React from 'react';

function Stats() {
    return ( 
       <div className='container pt-5 pb-5 mt-5 mb-5'>
        <div className='row'>
            <div className='col-5'>
                <h2 className='fs-3'>Trust with confidence</h2>
                <div className='pt-5'>
                    <div className='pb-4'>
                        <h3 className='fs-4'>Customer-first always</h3>
                        <p className='fs-7 text-secondary'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='pb-4'>
                        <h3 className='fs-4'>No spam or gimmicks</h3>
                        <p className='fs-7 text-secondary'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                     <div className='pb-4'>
                        <h3 className='fs-4'>The Zerodha universe</h3>
                        <p className='fs-7 text-secondary'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                     <div className='pb-4'>
                        <h3 className='fs-4'>Do better with money</h3>
                        <p className='fs-7 text-secondary'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>

                </div>
            </div>
             <div className='col-7 pt-2 ps-5'>
                <img src='media/images/ecosystem.png' alt='Ecosystem'style={{width:"95%"}}></img>
                <div className="text-center mt-3">
                   <a href="/products" className="fw-bold fs-6" style={{textDecoration:"none"}}>
                        Explore our products <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <a href="/kite" className="fw-bold fs-6 ms-5 " style={{textDecoration:"none"}}>
                        Try Kite <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>

             </div>

             <img src='media/images/pressLogos.png' alt='Press Logos' style={{width:"65%",marginLeft:"15%"}} className='mb-5' ></img>

        </div>
     );
}

export default Stats;