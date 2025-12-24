import characterPhoto from './thor.jpg'
import mjolnir from './mjolnir.png'
import shield from './shield.png'

import './randomInfo.scss'

const RandomInfo = () => {
    return (
        <div className="container">
            <div className="random-info-wrapper">
                <div className="random-info-character">
                    <div className="img-character">
                        <img src={characterPhoto} alt="photo character" />
                    </div>
                    <div className="character-about">
                        <h3 className='character-name'>Thor</h3>
                        <p className='character-info'>
                            As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                        </p>
                        <div className="button-block">
                            <button className='homepage'>homepage</button>
                            <button className='wiki'>wiki</button>
                        </div>
                    </div>
                </div>
                <div className="action-block">
                    <p className="action-text">
                        Random character for today! <br />
                        Do you want to get to know him better?
                    </p>
                    <span>Or choose another one</span>
                    <button>try it</button>
                    <img src={mjolnir} alt="mjolnir img" className='mjolnir' />
                    <img src={shield} alt="shield img" className='shield' />
                </div>
            </div>
        </div>
    )
}

export default RandomInfo