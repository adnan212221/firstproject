import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>ItBuddy</h1>
            <p>@all rights reserved</p>
        </div>

        <div className='sec'>
            <h5>follow us</h5>
            <div>
                <a href="https://www.linkedin.com/in/adnan-sheikh-917b17209/" target={'blank'}>instagram</a>
                <a href="https://www.linkedin.com/in/adnan-sheikh-917b17209/" target={'blank'}>Linkdin</a>

            </div>
        </div>
    </footer>
  )
}

export default Footer