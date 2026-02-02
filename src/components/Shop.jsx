import React from 'react';
import styles from './Shop.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Becca_karaoke, bridge_archway, bright_sun_clear_sea_dark, bristol_street_art, church_live_art,
    full_moon_fire, hills_sea_sunset_moon, malta_historic_building, notebook, notes_gig_poster, noteslogo,
    potted_plants, rail_arches, woodland_camping } from '../assets/yolo_shop_photos/images';
import { Link } from 'react-router-dom';

function Shop() {
  return (


    <div className={styles.shopContainer}>
        <header className='text-center'></header>

            <br />
            <br />

            <h1 className="text-center">YOLO</h1>
            <br />

            <p className="text-center"><em>brought to you by</em></p>
            <p className="font-weight-bold text-center"><strong>Notes from Underground</strong></p>
            <br />
            <div className='text-center'>
                <img src={church_live_art} alt="join us" className="img-fluid" 
                style={{ width: '200px', height: '200px' }} />
            </div>
            {/* An image, centered, with slightly rounded edges and an alt message to display 

            <img src={church live art} alt="join us" />
            */}
    
            <br />
            <h3 className="text-center">You Only Live Once!</h3>
            <br />
            <br />

            <div className='text-center'>
                <p>Hey there and welcome to our site!</p>
                <p>Don't worry, we're not suggesting that if you're not staring death in the face that you're not
                'living'!</p>
                <p>Rather that life is short and if there are things you've always wanted to do, we're here to help
                make that happen.</p>
                <p>So, go ahead, browse our options
                and live life experiencing all the things you've always wanted to, without expectations or pressure...
                </p>
            </div>
            <br />
            <br />
    
            {/*-- Creating grids --*/}
            {/* <div className="container-fluid"> */}
                {/* First row */}
                <div className="row">
                    {/* First column of the first row */}
                    <div className="col-md">
                    {/* Adding an image */}
                    <img src={bright_sun_clear_sea_dark} alt="beach sunrise" 
                    style={{ width: '200px', height: '200px' }} />
                        <div className={styles.overlay}>
                            {/* This is the text that will be displayed if the mouse hovers over the image */}
                            <div className="text">The water might be cold at dawn, but who can resist that setting!
                            And don't worry, the sauna is baking hot! You might need another dip afterwards to cool down...
                            </div>
                        </div>
                    </div>
                    
                    {/* Second column of the first row */}
                    <div className="col-md">
                    <img src={potted_plants} alt="potted plants" 
                    style={{ width: '200px', height: '200px' }} />
                    
                        <div className={styles.overlay}>
                            <div className="text">A minature gardening adventure followed by some world class 
                            pickle making? Yes, please!
                            </div>
                        </div>
                    </div>

                    <div className="col-md">
                    <img src={full_moon_fire} alt="full moon fire" 
                    style={{ width: '200px', height: '200px' }} />
                    
                        <div className={styles.overlay}>
                            <div className="text">Hocus pocus... let go of all the bad energy, make space for 
                            good things to come...
                            </div>
                        </div>
                    </div>
                    
                </div>
   

                {/* Creating the second row */}
                <div className="row">
                    {/* This is the text that will be displayed under the image */}
                
                    <div className="col-md">
                        Sea Swimming and<br />Outdoor Sauna<br />£45
                    </div>

                    <div className="col-md">
                        Gardening and<br />Pickle Making<br />£50
                    </div>

                    <div className="col-md">
                        Beach Fire with<br />Full Moon Ceremony<br />£250
                    </div>

                </div>
                
                <div className="row">
                    <div className="col-md">
                        {/* Creating 'Buy Now' buttons which will be displayed under the respective columns
                             of the second row. This is the first column */}
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                </div>
            <br />
            <br />
    
            {/* This begins the second row of images */}
                <div className="row">
                    <div className="col-md">
                    <img src={hills_sea_sunset_moon} alt="hill sunset" 
                    style={{ width: '200px', height: '200px' }} />
                    
                        <div className={styles.overlay}>
                            <div className="text">Craving some time away from the hustle and bustle of life? 
                            Look no further...
                            </div>
                        </div>
                    </div>
                    
                    {/*  The second column */}
                    <div className="col-md">
                    <img src={malta_historic_building} alt="history walk" 
                    style={{ width: '200px', height: '200px' }} />
                    
                        <div className={styles.overlay}>
                            <div className="text">Some old school charm

                            </div>
                        </div>
                    </div>
    
                    {/* The third column */}
                    <div className="col-md">
                    <img src={bridge_archway} alt="archway" 
                    style={{ width: '200px', height: '200px' }} />
                    
                        <div className={styles.overlay}>
                            <div className="text">Learn the rules then put them into practice

                            </div>
                        </div>
                    </div>

                </div>
        
            {/* This is the second row of text displays which fit under the images from the row above */}
                <div className="row">
                    <div className="col-md">
                        Hill Hike plus<br />Bird Watching<br />£75
                    </div>
    
                    <div className="col-md">
                        History Walk and<br />Candlelit Concert<br />£80
                    </div>
                    
                    <div className="col-md">
                        Board Games then<br />Immersive Escape Adventure<br />£350
                    </div>

                </div>
    
            {/* These are the 'Buy Now' buttons which sit under the text displays from the row above */}
                <div className="row">
                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                </div>
            <br />
            <br />
    
            {/* The third row of images */}
                <div className="row">
                    <div className="col-md">
                    <img src={bristol_street_art} alt="street art" 
                    style={{ width: '200px', height: '200px' }} />
                    
                    <div className={styles.overlay}>
                        <div className="text">What's that you say? Art on the streets? 
                            Come find out what it's all about</div>
                    </div>
                    </div>
                    
                    <div className="col-md">
                    <img src={notebook} alt="notes" 
                    style={{ width: '200px', height: '200px' }} />
                    
                    <div className={styles.overlay}>
                        <div className="text">Ever wanted to be on stage, but never given the chance? 
                            Here you go...</div>
                    </div>
                    </div>
    
                    <div className="col-md">
                    <img src={Becca_karaoke} alt="karaoke" 
                    style={{ width: '200px', height: '200px' }} />
                    
                    <div className={styles.overlay}>
                        <div className="text">Take a lesson then show off your new skills!</div>
                    </div>
                    </div>

                </div>

            {/* The third row of text displays */}
                <div className="row">
                    <div className="col-md">
                        Street Art Tour plus<br />Live Art Exhibition<br />£100
                    </div>
    
                    <div className="col-md">
                        Writing Workshop then<br />Open Mic<br />£110
                    </div>
                    
                    <div className="col-md">
                        Singing Lesson before<br />Karaoke Night<br />£120
                    </div>

                </div>
    
            {/* The third row of 'Buy Now' buttons */}
                <div className="row">
                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                </div>
            <br />
            <br />
    
            {/* The fourth row of images */}
                <div className="row">
                    <div className="col-md">
                    <img src={rail_arches} alt="rail arches" 
                    style={{ width: '200px', height: '200px' }} />
                    
                    <div className={styles.overlay}>
                        <div className="text">What's real and what's play?</div>
                    </div>
                    </div>
                    
                    <div className="col-md">
                    <img src={notes_gig_poster} alt="poster" 
                    style={{ width: '200px', height: '200px' }} />
                    
                    <div className={styles.overlay}>
                        <div className="text">Who's that, playing where? 
                            Find out about the hottest new talent, and the coolest underground venues</div>
                    </div>
                    </div>
    
                    <div className="col-md">
                    <img src={woodland_camping} alt="woodland"
                    style={{ width: '200px', height: '200px' }} />
                    
                    <div className={styles.overlay}>
                        <div className="text">It's all very friendly during the day...</div>
                    </div>
                    </div>

                </div>
    
            {/* The fourth row of text displays */}
                <div className="row">
                    <div className="col-md">
                        Interactive Theatre plus<br />Four Course Meal<br />£145
                    </div>

                    <div className="col-md">
                        Underground Gig Venues Tour<br />plus One Off Gig<br />£130
                    </div>

                    <div className="col-md">
                        Outdoor Madness with<br />Ghost Stories<br />£250
                    </div>

                </div>

            {/* The fourth row of 'Buy Now' buttons */}
                <div className="row">
                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                    <div className="col-md">
                        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
                    </div>

                </div>
            <br />
            <br />
            <br />
    
            {/* This is the contact form section */}
                <h2>Contact Us</h2>
                <br />

                {/* Displaying a logo */}
                <img src={noteslogo} alt="notes logo" 
                style={{ width: '200px', height: '200px' }} />
                
                <br />
                <br />

                {/* A message to the user */}
                <p>We'd love to hear from you! Whether you have an idea that you'd like to bring to reality...</p>
                <p>Or you have some feedback you'd like to share...</p>
                <p>Even if you just wanna say 'hey!' &#128513;</p>
                
                <form className="container">

                    {/* Creating the 'Enter Name' section */}
                    <div className="mb-3 col-sm-4 mx-auto text-start">
                        <label htmlFor="name" className='form-label'>Name:</label>
                            < textarea
                                id='name' 
                                name='name' 
                                className='form-control' 
                                placeholder='Enter Name'
                                rows='1'>
                            </textarea> 
                    </div>

                    {/* Creating the 'Enter Email' section */}
                    <div className="mb-3 col-sm-4 mx-auto text-start">
                        <label htmlFor="email" className='form-label'>Email:</label>
                            < textarea 
                                id='email' 
                                name='email' 
                                className='form-control' 
                                placeholder='Enter Email' 
                                rows='1'>
                            </textarea>  
                    </div>

                    {/* Creating the 'Enter Message' section */}
                    <div className="mb-3 col-sm-4 mx-auto text-start">
                        <label htmlFor="message" className='form-label'>Message:</label>
                            < textarea 
                                id='message' 
                                name='message' 
                                className='form-control' 
                                placeholder='Enter Message' 
                                rows='1'>
                            </textarea> 
                    </div>
                    <br />

                    {/* Creating the 'submit' button */}
                    <div className="mb-3 col-sm-4 mx-auto text-start">        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                {/* End of the form */}
                </form>
            {/* </div> */}

            <br/>
            <hr />

            <Link to='/'>
            Home
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/projects'>
            Projects
            </Link>
            <br />
            <br />


        </div>
      )
}

export default Shop
