import React from 'react';
import { Link } from 'react-router-dom';

export default class SingleLesson extends React.Component{
    render(){
            return(
                <>
                    <nav role="navigation">Nav</nav>
                    <main role="main">
                        <header>
                            <h2>Class Plan Title</h2>
                            <h3>Date of Class</h3>
                        </header>
                        <section>
                            <h4>Name</h4>
                            <h5>Date</h5>
                            <h5>Class</h5>
                            <div class="class-section">
                                <h5>Warm-Up</h5>
                                <p>Sample warm-up ideas!</p>
                            </div>
                            <div class="class-section">
                                <h5>Skills</h5>
                                <p>Sample skill ideas!</p>
                            </div>
                            <div class="class-section">
                                <h5>Notes for Next Class</h5>
                                <p>Sample notes here!</p>
                            </div>
                            <div class="class-section">
                                <h5>Student Notes</h5>
                                <p>Sample student notes!</p>
                            </div>
                            <Link to='/main'>
                                <button>Edit</button>
                            </Link>
                            <Link to ='/main'>
                                <button>Delete</button>
                            </Link>
                        </section>
                    </main>
                    <footer role="content-info">Footer</footer>
                </>
            )
        }
    }