import React from 'react';
import './styles.css';
import blueLouisVitton from '../../media/blue-louis-vitton.jpg';
class Contact extends React.Component {
    render() {
        return (
            <div id={'contact'}>
                <h2 id={'contact-message'}>If you would like me to become your personal stylist, you can get in touch with one of my agents</h2>
                <div id={'contacts'}>
                    <a href={`mailto:r.zayt@mail.ru`} className={'agent'}>Agent 1</a>
                    <a href={`mailto:r.zayt@mail.ru`} className={'agent'}>Agent 2</a>
                </div>
            </div>
        );
    }
}

export default Contact;