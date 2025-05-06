import React from 'react'

const App = () => {
  return (
    <div>
    <header className='header'>
        <div className='nav'>
      <img src="./src/assets/logoo.png" alt="" className='img'/>
      <ul className='ul'>
        <li className='li'>Home</li>
        <li className='li'>Features</li>
        <li className='li'>Community</li>
        <li className='li'>Blog</li>
        <li className='li'>Pricing</li>
      </ul>
      <button className='btn'>Register Now</button>
      </div>
      <div className='header_content'>
      <h1>
  Lessons and insights <span style={{ color: '#4CAF4F' }}>from 8 years</span>
</h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <button className='register'>Register</button>
        <img src="./src/assets/stration.png" alt="" className='img1' />
      </div>
      <div className='header_content2'>
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <img src="./src/assets/Clients Logos.png" alt="" />
        <h3>Manage your entire community in a single system</h3>
        <div className="header_content3_cards">
          <div className="header_content3_card">
            <img src="./src/assets/icon.png" alt="" />
            <h2>Membership Organisations</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="header_content3_card">
            <img src="./src/assets/icon1.png" alt="" />
            <h2>National Associations</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="header_content3_card">
            <img src="./src/assets/icon2.png" alt="" />
            <h2>Clubs And Groups</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="header_content_4">
            <img src="https://nexcent-page.netlify.app/assets/Frame%2035.png" alt="" />
            <div className="header_text">
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="learn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>

  )
}
export default App