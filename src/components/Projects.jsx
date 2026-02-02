import React from 'react';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';

  // 'mb-3 text-center'

function Projects() {
  return (        
        
    <div className={styles.projectsContainer}>
        <div className='container mb-3'>
                <section>
                        <h2>PROJECTS</h2>
                        <br />
                        <hr />
                        <p>These are some of the projects I have completed so far. <br />
                                They can all be found on my GitHub:
                        </p>
                        <a href = "https://github.com/yjk16?tab=repositories">My GitHub</a>
                        <br /><br />
                        <p>Alternatively, have a browse below:</p>
                        {/* <hr /> */}
                        <br />
                        <br />
                </section>


                {/* <hr /> */}

                <section>
                        <h3>Computational Neuroscience Project</h3>
                        <br />
                        <p>This was the topic of my MSc in Computer Science (Conversion) dissertation.</p>
                        <p>It presents a comparative study of three computational neuronal models:
                                Leaky Integrate-and-Fire, Hodgkin-Huxley, 
                                and Adaptive Exponential Leaky Integrate-and-Fire.</p>
                        <a href = "https://github.com/yjk16/computational-neuroscience-brian2">
                        Computational Neuroscience Project</a>
                        <br />
                        <br />
                        <br />
                </section>

                {/* <hr /> */}

                <section>
                        <h3>A Python Text-based Game</h3>
                        <br />
                        <p>This was completed as the assignment for the 'Python through Programming'
                                module during my MSc in Computer Science (Conversion).</p>
                        <p>It is a text-based game developed using Python.</p>
                        <a href = "https://github.com/yjk16/text-based-game">A Python Text-based Game</a>
                        <br />
                        <br />
                        <br />
                </section>

                {/* <hr /> */}

                <section>
                        <h3>A Shoes Inventory</h3>
                        <br />
                        <p>This was the fourth Capstone project that was set as part of the HyperionDev 
                        software engineering course.</p>
                        <p>It is an OOP based system that allows the user to view, search for and add new shoes 
                        to an inventory of the current database.</p>
                        <a href = "https://github.com/yjk16/inventory">
                        A Shoes Inventory</a>
                        <br />
                        <br />
                        <br />
                </section>

                {/* <hr /> */}

                <section>
                        <h3>Task Manager II</h3>
                        <br />
                        <p>This was the third Capstone project that was set as part of the HyperionDev software 
                                engineering course.</p>
                        <p>It is an updated version of the second Capstone project, using lists, functions and 
                                string handling<br /> 
                                to allow small businesses to manage tasks assigned to each member of the team.</p>
                        <a href = "https://github.com/yjk16/task-manager2">Task Manager II</a>
                        <br />
                        <br />
                        <br />
                </section>

                {/* <hr /> */}

                <section>    
                        <h3>Task Manager</h3>
                        <br />
                        <p>This was the second Capstone project that was set as part of the HyperionDev software 
                                engineering course.</p>
                        <p>It is a program using external data sources to help small businesses manage tasks 
                                assigned to each member of the team.</p>
                        <a href = "https://github.com/yjk16/task-manager">Task Manager</a>
                        <br />
                        <br />
                        <br />
                </section>
                
                {/* <hr /> */}

                <section>
                        <h3>Financial Calculator</h3>
                        <br />
                        <p>This was the first Capstone project that was set as part of the HyperionDev software 
                                engineering course.</p>
                        <p>It is a program that uses variables and control structres to allow the user to calculate<br /> 
                                either the interest received on an investment or a home loan repayment.</p>
                        <a href = "https://github.com/yjk16/finance-calculator">Financial Calculator</a>
                        <br />
                        <br />
                </section>

                {/*  horizontal line */}
                <hr />

                <Link to='/'>
                Home
                </Link>
                <br />
                <br />
                <Link to='/shop'>
                Shop
                </Link>
                <br />
                <br />
        </div>

    </div>
  )
}

export default Projects
