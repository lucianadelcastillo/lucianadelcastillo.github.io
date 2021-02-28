import React from 'react';
import {Parallax} from 'react-parallax';
import './styles.css';
import starryNight from '../../media/van-gogh-starry-night-low.jpg';
import terrace from '../../media/van-gogh-terrace.jpg';
import moon from '../../media/moon.svg'
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <div id={"luna-div"}>
                <p id={'ldc'}>Luciana</p>
                <img src={moon} id={'moon'}/>
            </div>
            <Parallax bgImage={starryNight}  bgImageStyle={{width : '100vw', height : 'auto'}} strength={500}>
                <div style={{height: '650px'}}/>
                <div className={'quote'}>
                <p id={'quote'}>"On ne voit bien qu'avec le coeur.
                        L'essentiel est invisible pour les yeux."
                </p>
            </div>
            </Parallax>

            <Parallax bgImage={terrace}  bgImageStyle={{width : '100vw', height : 'auto'}} strength={500}>
                <div style={{height : '1700px'}}></div>
                <div id="footer">
                    <p className="footer-text" style={{'margin' : '10px'}}>Luciana del Castillo</p>
                    <p className="footer-text" style={{'margin' : '10px'}}>lucianadelcastillo@gmail.com</p>
                </div>
            </Parallax>
        </div>


    };
}

export default Home;

