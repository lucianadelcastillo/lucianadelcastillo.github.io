import React from 'react';
import './styles.css';
import swing from '../../media/swing.jpg';
class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id='about'>
            <h1 id="name">Luciana del Castillo</h1>
            <p className={'about-paragraphs'}>I am a fashion stylist. I come from Cartagena,
                a city on Colombian coast. I love to help people  discover their
            internal beauty by accentuating it with their outfit.</p>
        </div>
    };
}

export default About;