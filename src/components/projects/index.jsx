import React from 'react';
import './styles.css';
import flowers from '../../media/flowers.jpg';
import university from "../../media/university.png";
class Projects extends React.Component {
    render() {
        return <div id={'projects-grid'}>
            <div className={"projects-divs"} style={{animation: 'fade-in ease 0.5s'}}>
                <h2>Paintings</h2>
            </div>
            <div className={"projects-divs"} style={{animation: 'fade-in ease 1s'}}>
                <h2>Photos</h2>
            </div>
            <div className={"projects-divs"} style={{animation: 'fade-in ease 1.5s'}}>
                <h2>Videos</h2>
            </div>
            <div className={"projects-divs"} style={{animation: 'fade-in ease 2s'}}>
                <h2>Essays</h2>
            </div>
        </div>
    }
}

export default Projects;