import React from 'react';
import whiteLogo from './assets/white-logo.png';
import darkLogo from './assets/dark-logo.png';
import whiteMenuIcon from './assets/menu-white.svg';
import blackMenuIcon from './assets/menu-black.svg';
import toggleOffIcon from './assets/toggle-off.svg';
import toggleOnIcon from './assets/toggle-on.svg';
import coverImage from './assets/cover.webp';

const App = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    const icon = document.getElementById("icon");
    const logo = document.getElementById("logo");
    const btnMenu = document.getElementById("btn-menu");

    if (document.body.classList.contains("dark-theme")) {
      icon.src = toggleOffIcon;
      logo.src = whiteLogo;
      btnMenu.src = whiteMenuIcon;
    } else {
      icon.src = toggleOnIcon;
      logo.src = darkLogo;
      btnMenu.src = blackMenuIcon;
    }
  };

  const showMenu = () => {
    document.querySelector(".menu").classList.toggle("show_menu");
  };

  return (
    <div className={document.body.classList.contains("dark-theme") ? 'dark-theme' : ''}>
      <header>
        <div className='container'>
          <div className="logo">
            <img src={document.body.classList.contains("dark-theme") ? whiteLogo : darkLogo} alt="logo" id="logo" />
          </div>
          <div className="menu">
            <img src={document.body.classList.contains("dark-theme") ? whiteMenuIcon : blackMenuIcon} id="btn-menu" onClick={showMenu} />
            <div id="bars-menu"></div>
            <nav id="nav">
              <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><img src={document.body.classList.contains("dark-theme") ? toggleOffIcon : toggleOnIcon} alt="icon" id="icon" onClick={toggleTheme} /></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="container-cover">
          <div className="cover">
            <div className="text">
              <h1>Create beautiful, branden emails that make you look like a pro</h1>
              <p>Keep your audience engaged with email marketing. Mailchimp's campaign builder is easy to use,
                packed full of features, and designed to grow with your business.</p>
              <input type="button" value="Learn more" />
            </div>
            <div className="svg">
            <img src={coverImage} id="picture" alt="Cover" />
            </div>
          </div>
        </div>
      </main>

      {document.body.classList.contains("dark-theme") && (
        <div className="menu show_menu">
          { /*  */}
        </div>
      )}
    </div>
  );
};

export default App;