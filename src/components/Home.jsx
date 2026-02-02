import React from 'react';
import styles from './Home.module.css';
import LinkedInProfilePic from '../assets/home/LinkedInProfilePic.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <div className={styles.homeContainer}>
        <div className='container mt-4'>
            <div className='row mb-4'>
                <div className='col-md-6'>
                    <header className='section-one text-center'>
                        <h1>YOON-JI KIM</h1>
                        <img src={LinkedInProfilePic} alt="Profile" className="img-fluid w-25 rounded-circle" />
                        <p>Hello! <br /> And welcome to my portfolio website.</p>
                    </header>
                </div>

                {/* About sec */}
                <div className='col-md-6'>
                    <section className='section-two text-start'>
                        <h2>About me...</h2>
                        <p>I am passionate about creativity, innovation and connection in all forms.</p>
                        <p>I believe that what we do matters, and I am inspired by the idea of contributing and 
                        collaborating<br />
                        in order to make the world a better place in whichever ways are possible.</p>
                        <p>I am currently transitioning from the Arts to the world of tech as I have seen 
                        how technology can improve lives.</p>
                        <p>Other than than, I am a keen badminton player and cyclist; sometime campaigner and 
                        volunteer for various causes;<br />
                        and an ardent fan of the social deduction game Blood on the Clocktower.</p>
                    </section>
                </div>
            </div>

            {/*  horizontal line */}
            <hr />
            <br />
            <Link to='/projects'>
                Projects
            </Link>
            <br />
            <br />
            <Link to='/shop'>
                Shop
            </Link>
            <br />
            

        </div>
    </div>    
  )
}

export default Home
