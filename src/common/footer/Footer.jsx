import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container1'>
          <div className='box1'>
            <h2>For Dev</h2>
            <ul>
              <li>How it works</li>
              <li>How to create a profile</li>
              <li>Find jobs</li>
            </ul>
          </div>
          <div className='box2'>
            <h2>For Clients</h2>
            <ul>
              <li>How it works </li>
              <li>How to post a job </li>
              <li>Find dev </li>
            </ul>
          </div>
          <div className='box3' >
            <h2 style={{ fontSize: '35px' }}>Stay Connected</h2>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-instagram'></i>
                <span>Instagram</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-twitter'></i>
                <span>Twitter</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-facebook'></i>
                <span>Facebook</span>
              </div>
            </div>
          </div>
          
          
        </div>
        <div className='box text-center' style={{ marginTop: '50px'}}>
            <h2>DEVLink</h2>
            <ul style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:'40px'}}>
              <li style={{ marginLeft:'370px',}}>Privacy Policy </li>
              <li style={{ marginLeft:'370px'}}>Terms and Conditions</li>
              <li style={{ marginLeft:'370px'}}>Code of Conduct </li>
            </ul>
          </div>
      </footer>
    </>
  )
}

export default Footer
