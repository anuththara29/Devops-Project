import React from 'react';
import Logo from '../Images/Logo.png';
import '../Home.css';
import Front from '../Images/Front.png';
import Social from '../Images/SocialN.PNG';
import {Link} from "react-router-dom";


function Home() {
  return (
    <div className='home'>
      <div className='leftSide'>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className='rightSide'>
        <Link to="/login"><button>Log In</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
      <div className='body'>
        <div id='right'>
          <img src={Front} alt="Front"/>
        </div>
        <div id='h1'>Unlock</div>
        <div id='h2'>Tomorrow's Skies</div>
        <div id='p'>Your Gateway to Accurate Weather</div>
        <div id='p1'>Forecasts!</div>
        <div className='footer'>
          <div className='sb_footer_section_padding'>
            <div className='sb_footer_links'>
              <div className='sb_footer_links_div'>
                <h4>About Weatheriz</h4>
                <div className='sb_footer'>
                  <a href="/aboutUs"><p>About us</p></a>
                  <a href="/contactUs"><p>Contact us</p></a>
                  <a href="/startUp"><p>Weatheriz for startup</p></a>
                </div>
              </div>
              <div className='sb_footer_links_div'>
                <h4>My Weatheriz</h4>
                <div className='sb_footer'>
                  <a href="/myAccount"><p>My Account</p></a>
                  <a href="/download"><p>Download the app</p></a>
                  <a href="/help"><p>Help</p></a>
                </div>
              </div>
              <div className='sb_footer_links_div'>
                <h4>Coming soon on</h4>
                <div className='sb_footer'>
                  <p><img src={Social} alt="Social Media"/></p>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className='sb_footer_below'>
            <div className='sb_footer_copyright'>
              <p>Weatheriz. All right reserved.</p>
            </div>
            <div className='sb_footer_below_links'>
              <a href="/terms"><div><p>Terms & Conditions</p></div></a>
              <a href="/privacy"><div><p>Privacy</p></div></a>
              <a href="/security"><div><p>Security</p></div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
