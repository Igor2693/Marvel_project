import "./mainBlockCharacters.scss";

import abyss from "./abyss.jpg";
import adam from "./adam.png";
import bg from "./bg-main.png";
import boom from "./boom.png";
import calipso from "./calipso.png";
import colleen from "./colleen.png";
import daimon from "./daimon.png";
import damage from "./damage.png";
import hulk from "./hulk.png";
import loki from "./loki.png";

const MainBlockCharacters = () => {
  return (
    <div className="container">
      <div className="main-block-wrapper">
        <img src={bg} alt="background" className="bg-visn"/>
        <div className="main-block-characters">
          <div className="all-characters">
            <div className="character-card">
              <img src={abyss} alt="character" />
              <span>abyss</span>
            </div>
            <div className="character-card">
              <img src={adam} alt="character" />
              <span>adam</span>
            </div>
            <div className="character-card">
              <img src={boom} alt="character" />
              <span>boom</span>
            </div>
            <div className="character-card">
              <img src={calipso} alt="character" />
              <span>calipso</span>
            </div>
            <div className="character-card">
              <img src={colleen} alt="character" />
              <span>colleen</span>
            </div>
            <div className="character-card">
              <img src={daimon} alt="character" />
              <span>daimon</span>
            </div>
            <div className="character-card">
              <img src={damage} alt="character" />
              <span>damage</span>
            </div>
            <div className="character-card">
              <img src={hulk} alt="character" />
              <span>hulk</span>
            </div>
            <div className="character-card">
              <img src={loki} alt="character" />
              <span>loki</span>
            </div>
          </div>
          <button>load more</button>
        </div>
        <aside className="choose-characters-block">
          <div className="choose-character-block-top">
            <div className="choose-block-img">
              <img src={loki} alt="characters" />
              <div className="right-side">
                <span>loki</span>
                <div className="button-block-right-side">
                  <button className="homepage">homepage</button>
                  <button className="wiki">wiki</button>
                </div>
              </div>
            </div>
            <p>
              In Norse mythology, Loki is a god or jötunn (or both). Loki is the
              son of Fárbauti and Laufey, and the brother of Helblindi and
              Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the
              wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is
              the father of Nari and/or Narfi and with the stallion Svaðilfari
              as the father, Loki gave birth—in the form of a mare—to the
              eight-legged horse Sleipnir. In addition, Loki is referred to as
              the father of Váli in the Prose Edda.
            </p>
          </div>
          <div className="comics-list">
            <span>Comics:</span>
            <ul>
                <li>All-Winners Squad: Band of Heroes (2011) #3</li>
                <li>Alpha Flight (1983) #50</li>
                <li>Amazing Spider-Man (1999) # 503</li>
                <li>Amazing Spider-Man (1999) # 504</li>
                <li>AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
                <li>Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
                <li>Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
                <li>Vengeance (2011) #4</li>
                <li>Avengers (1963) #1</li>
                <li>Avengers (1996) #1</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainBlockCharacters;
