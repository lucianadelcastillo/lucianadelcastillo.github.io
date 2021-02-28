import React from 'react';
import './styles.css';
import university from '../../media/university.png';
class Portfolio extends React.Component {
    render() {
        return <div id="portfolio-grid">
            <div className={"portfolio-divs"} style={{animation: 'fade-in ease 0.5s'}}>
                <h2>
                    University application
                </h2>
                <img src={university} className={'portfolio-divs-img'}/>
            </div>
            <div className={"portfolio-divs"} style={{animation: 'fade-in ease 1s'}}>
                <h2>
                    School work
                </h2>
            </div>
            <div className={"portfolio-divs"} style={{animation: 'fade-in ease 1.5s'}}>
                <h2>
                    Summer school
                </h2>
            </div>
            <div className={"portfolio-divs"} style={{animation: 'fade-in ease 2s'}}>
                <h2>
                    Academic article
                </h2>
            </div>
        </div>
    }
}

export default Portfolio;