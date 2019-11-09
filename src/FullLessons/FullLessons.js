import React from 'react';
import { Link } from 'react-router-dom';

export default class FullLessons extends React.Component{
    render(){
        return(
            <>
                <section>
                    <header>
                      <h2>Plans</h2>
                    </header>
                    <div>
                        <p>Plan 1</p>
                        <Link to='/lesson/:lessonId'>
                        <button>Full Lesson</button>
                        </Link>
                        <p>Plan 2</p>
                        <p>Plan 3</p>
                    </div>
                    <Link to='newlesson'>
                        <button type='button' >Add Lesson</button>
                    </Link>
                </section>
            </>
        )
    }
    
}

