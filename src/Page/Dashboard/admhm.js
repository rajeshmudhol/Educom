import React from 'react';
import "./admhm.css";

function Admhm() {
  return (
    <div className='hd-container'>
      <div className='hd-head'>
        <div className='edu-adm-head-logo'>
        <a href='Admhm'><img src='logo.png'></img></a>
        </div>

        {/* <div class="dropdown">
          <button class="dropbtn"><i style={{ color: 'black' }} class="fa fa-bars"></i></button>
          <div class="dropdown-content"> */}
            {/* <a href="QuizHome">Quiz</a> */}
            {/* <a href="Dashboard">Dashbord</a>
            <a href="Jobdetails">Logout</a>
          </div> */}





{/* 
        </div> */}

        <div className='adm-home-head-button'>
          <div className='adm-home-head-dashboard'>
          <a href='Dashboard'><i style={{fontSize:'25px',color:'black' }} class="fa fa-bar-chart"></i></a><br></br>
          <a href='Dashboard'><p style={{position:'relative',top:'5px',color:'black', fontSize:'20px',width:'150px',border:'none'}}>Dashboard</p></a>
          </div>
          <div className='adm-home-head-logout'>
<i style={{fontSize:'30px',}} class='fa fa-power-off'></i><br/>
<p style={{position:'relative',fontSize:'20px', width:'150px',border:'none'}}>Logout</p>
</div>
        </div>
      </div>


      <div className='adm-home-banner'>
{/* <img style={{width:'100%',height:'450px'}} src='https://media.istockphoto.com/id/1130125265/vector/landing-page-template-of-financial-administration-concept-balance-financial-value-management.jpg?s=1024x1024&w=is&k=20&c=uchnAN3aVcR5-WeHB9b5Qa4og40FNcC0Qz2a0jmMom0='></img> */}
      </div>

      <div className='adm-home-footer-container'>
        <div className='adm-home-footer'>
          <div className='adm-home-footer-main'>
            <div style={{position:'relative',top:'10px',height: '30px'}} ><p>Home</p></div>
            <div style={{position:'relative',top:'10px',height: '20px'}} className='adm-home-footer-border'></div>
            <div style={{position:'relative',top:'10px',height: '30px'}} ><p>Peivacy policy</p></div>

          </div><br></br><br></br>
        </div>

        <div className='adm-home-footer-copyright'>
          <p>@ Copyright 2013-2014 Educom</p>
        </div>
        <div  className='adm-home-footer-icons'>
        <i class="fa fa-twitter-square"></i>
        <i class="fa fa-facebook-f"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-youtube-play"></i>
        </div>
      </div>

    </div>
  )
}

export default Admhm;