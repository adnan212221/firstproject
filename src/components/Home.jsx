import React from 'react'
import '../styles/Home.scss'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
          <h1>ITBUDDY</h1>
          <p>Solutions to all your problem</p>
        </main>
    </div>

    <div className="home2">
    <img src={vg} alt="graphics" />

    <div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ab amet quasi vero tenetur deleniti tempora quae aut exercitationem optio cumque repudiandae, laudantium velit quam dignissimos omnis autem, illum minima.</p>
    </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are ?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, nihil dolorum excepturi aliquid inventore dolores dolore dignissimos ipsam, iure cumque eveniet natus nisi velit minus facilis quos aut consequuntur sapiente?</p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
      <h1>Brands</h1>
      <article>
        <div style={{animationDelay:'0.3s'}}>
          <AiFillGoogleCircle />
          <p>Google</p>

        </div>

        <div style={{animationDelay:'0.5s'}}>
          <AiFillYoutube />
          <p>Youtube</p>

        </div>

        <div style={{animationDelay:'0.7s'}}>
          <AiFillInstagram />
          <p>Instagram</p>

        </div>

        <div style={{animationDelay:'1s'}}>
          <AiFillAmazonCircle />
          <p>Amazon</p>

        </div>
      </article>
    </div>
    </div>
    </>
  )
}

export default Home