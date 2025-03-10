import { useEffect, useState } from 'react';
import logoWhite from './assets/images/logos/logoWhite.svg';
import logoBlack from './assets/images/logos/logoBlack.svg';
import blueMoon from './assets/images/icons/blueMoon.svg';
import blueSun from './assets/images/icons/blueSun.svg';
import purpleMoon from './assets/images/icons/purpleMoon.svg';
import purpleSun from './assets/images/icons/purpleSun.svg';
import greenMoon from './assets/images/icons/greenMoon.svg';
import greenSun from './assets/images/icons/greenSun.svg';
import manBlue from './assets/images/profiles/manBlue.svg';
import womanBlue from './assets/images/profiles/womanBlue.svg';
import manPurple from './assets/images/profiles/manPurple.svg';
import womanPurple from './assets/images/profiles/womanPurple.svg';
import manGreen from './assets/images/profiles/manGreen.svg';
import womanGreen from './assets/images/profiles/womanGreen.svg';


function App() {
  const [theme, setTheme] = useState('LightBlue');
  const [styles, setStyles] = useState({});
  const [name, setName] = useState("");
  const [profile, setProfile] = useState({})
  const [color, setColor] = useState("blue");

  useEffect(() => {
    const loadThemeStyles = async () => {
      const styles = await import(`./assets/styles/index-${theme}.module.css`);
      setStyles(styles);
    };

    loadThemeStyles();
  }, [theme]);

  const themeAssets = {
    LightBlue: {
      logo: logoWhite,
      icon: blueMoon,
      man: manBlue,
      woman: womanBlue,
    },
    DarkBlue: {
      logo: logoBlack,
      icon: blueSun,
      man: manBlue,
      woman: womanBlue,
    },
    LightPurple: {
      logo: logoWhite,
      icon: purpleMoon,
      man: manPurple,
      woman: womanPurple,
    },
    DarkPurple: {
      logo: logoBlack,
      icon: purpleSun,
      man: manPurple,
      woman: womanPurple,
    },
    LightGreen: {
      logo: logoWhite,
      icon: greenMoon,
      man: manGreen,
      woman: womanGreen,
    },
    DarkGreen: {
      logo: logoBlack,
      icon: greenSun,
      man: manGreen,
      woman: womanGreen,
    },
  };

  const assets = themeAssets[theme];

  const toggleDarkMode = () => {
    setTheme((prevTheme) =>
      prevTheme.includes('Light')
        ? prevTheme.replace('Light', 'Dark')
        : prevTheme.replace('Dark', 'Light')
    );
  };


  const changeColor = (color) => {
    setTheme((prevTheme) =>
      prevTheme.includes('Light') ? `Light${color}` : `Dark${color}`
    );
  };

  const sendForm = () => {
    setName(document.getElementById("name").value);
    setProfile(document.getElementsByName("profile").value);
    setColor(document.getElementsByName("color").value);
  }

  return (
    <>
      <header className={styles.header}>
        <img 
          src={assets.icon} 
          alt="Icon" className={styles.icon} 
          onClick={toggleDarkMode}
        />
      </header>
      <div className={styles.box}>
        <div className={styles.cover}>
          <img 
            src={assets.logo} 
            alt="Logo" 
            className={styles.logo} 
          />
        </div>
        <div className={styles.login}>
          <h1 className={styles.name}>Chatter</h1>
          <form className={styles.form} action='./pages/chat.html'>
            <label htmlFor="nick" className={styles.label}>
              Nickname:
            </label>
            <input 
              type="text" 
              className={styles.inputText} 
              id='name' 
              onChange={() => setName(document.getElementById('name').value)}
            />

            <label htmlFor="profile" className={styles.label}>
              Avatar:
            </label>
            <div className={styles.boxProfiles}>
              <label>
                <input type="radio" name="profile" className={styles.radio} value={assets.man} onChange={(e) => setProfile(e.target.value)}/>
                <img
                  src={assets.man}
                  alt="Man Avatar"
                  className={styles.radioImage}
                />
              </label>
              <label>
                <input type="radio" name="profile" className={styles.radio} value={assets.woman} onChange={(e) => setProfile(e.target.value)}/>
                <img
                  src={assets.woman}
                  alt="Woman Avatar"
                  className={styles.radioImage}
                />
              </label>
            </div>

            <label htmlFor="color" className={styles.label}>
              Color:
            </label>
            <div className={styles.boxColors}>
              <label>
                <input
                  type="radio"
                  name="color"
                  id="blue"
                  onChange={(e) => {
                    setColor(e.target.value);
                    changeColor('Blue'); 
                  }}
                />
                <span>Blue</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="color"
                  id="purple"
                  onChange={(e) => {
                    setColor(e.target.value);
                    changeColor('Purple'); 
                  }}
                />
                <span>Purple</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="color"
                  id="green"
                  onChange={(e) => {
                    setColor(e.target.value);
                    changeColor('Green'); 
                  }}
                />
                <span>Green</span>
              </label>
            </div>

            <input type="submit" className={styles.button} value="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
