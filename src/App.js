import React, { useState } from 'react';

function Accordion1() {
  const [isActive, setIsActive] = useState(false);
  return(
  <div>
    <div className="accordion">
      <button onClick={() => setIsActive(!isActive)} className="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu' href='#uml-structure'>Diagrammes de structure</a></div>
      {isActive && <div className='collapsible-content'>
        <a href='#uml-class'>Classe</a> 
        <a href='#uml-comp'>Composants</a> 
        <a href='#uml-deploy'>Déploiement</a> 
        <a href='#uml-objects'>Objets</a> 
        <a href='#uml-package'>Paquetage</a> 
        <a href='#uml-profile'>Profil</a> 
        <a href='#uml-composite'>Structure composite</a>
      </div>}
  </div>
  )
}

function Accordion2() {
  const [isActive, setIsActive] = useState(false);
  return(
  <div>
    <div className="accordion">
      <button onClick={() => setIsActive(!isActive)} className="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu'  href='#uml-behave'>Diagrammes comportementaux</a></div>
      {isActive && <div className='collapsible-content'>
      <a href='#uml-cases'>Cas d’utilisation</a> 
      <a href='#uml-activity'>Activité</a> 
      <a href='#uml-state'>État</a> 
      <a href='#uml-sequence'>Séquence</a> 
      <a href='#uml-comm'>Communication</a> 
      <a href='#uml-interactions'>Présentation des interactions</a> 
      <a href='#uml-time'>Diagramme de temps</a> 
    </div>}
  </div>
  )
}

function Accordion3() {
  const [isActive, setIsActive] = useState(false);
  return(
  <div>
    <div className="accordion">
      <button onClick={() => setIsActive(!isActive)} className="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu'  href='#mer-concept'>Niveau conceptuel</a></div>
      {isActive && <div className='collapsible-content'>
      <a href='#mer-mcd'>Modèle Conceptuel des Données (MCD)</a> 
      <a href='#mer-mct'>Modèle Conceptuel de Traitements (MCT)</a> 
    </div>}
  </div>
  )
}

function Accordion4() {
  const [isActive, setIsActive] = useState(false);
  return(
  <div>
  <div className="accordion">
    <button onClick={() => setIsActive(!isActive)} className="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu' href='#mer-orga'>Niveau organisationnel</a></div>
    {isActive && <div className='collapsible-content'>
    <a href='#mer-mld'>Modèle Organisationnel des Données (MLD)</a> 
    <a href='#mer-mlt'>Modèle Organisationnel de Traitements (MLT)</a> 
    </div>}
  </div>
  )
}

function Accordion5() {
  const [isActive, setIsActive] = useState(false);
  return(
  <div>
    <div className="accordion">
      <button onClick={() => setIsActive(!isActive)} className="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu' href='#mer-logic'>Niveau logique</a></div>
      {isActive && <div className='collapsible-content'>
      <a href='#mer-mld'>Modèle Logique des Données (MLD)</a> 
      <a href='#mer-mlt'>Modèle Logique de Traitements (MLT)</a> 
    </div>}
  </div>
  )
}

function Accordion6() {
  const [isActive, setIsActive] = useState(false);
  return(
  <div>
    <div className="accordion">
      <button onClick={() => setIsActive(!isActive)} className="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu'  href='#mer-phys'>Niveau physique</a></div>
      {isActive && <div className='collapsible-content'>
      <a href='#mer-mld'>Modèle Physique des Données (MPD)</a> 
      <a href='#mer-mlt'>Modèle Physique de Traitements (MPT)</a> 
    </div>}
  </div>
  )
}

function Accordion7() {
  const [isActive, setIsActive] = useState(false);
  return(
    <div>
      <div className="accordion">
        <button onClick={() => setIsActive(!isActive)} className="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu'  href='#mer-other'>Autres modèles</a></div>
        {isActive && <div className='collapsible-content'>
        <a href='#mer-mf'>Modèle des Flux (MF)</a> 
        <a href='#mer-me'>Modèle des États (ME)</a> 
        <a href='#mer-ms'>Modèle de Sécurité (MS)</a> 
      </div>}
    </div>
  )
}

function Sidebar() {
  return(
  <div id ="Sidebar" className="App-sidebar">
    <a href='#uml' className='sideTitle'>Diagrammes UML</a>
    <Accordion1 />
    <Accordion2 />
    <a href='#mer' className='sideTitle'>Diagrammes MERISE</a>
    <Accordion3 />
    <Accordion4 />
    <Accordion5 />
    <Accordion6 />
    <Accordion7 />
  </div>  
  )
}

function Topbar() {
  return(
  <div className="App-topbar">
    <div className="dropdown">
      <button className="dropbtn">    
        <svg width="40" height="40" viewBox="0 0 100 80">
        <path d="M0 0H100V20H0z" fill="white"></path>
        <path d="M0 30H100V50H0z" fill="white"></path>
        <path d="M0 60H100V80H0z" fill="white"></path>
      </svg></button>
      <div className="dropdown-content">
        <a className='sideMenu' href='#uml'>Diagrammes UML</a>
        <a href='#uml-structure'>Diag. de structure</a>
        <a href='#uml-behave'>Diag. comportement</a>
        <a className='sideMenu' href='#mer'>Diagrammes MERISE</a>
        <a href='#mer-concept'>Mod. conceptuel</a> 
        <a href='#mer-orga'>Mod. organisationnel</a> 
        <a href='#mer-logic'>Mod. logique</a> 
        <a href='#mer-phys'>Mod. physique</a>
        <a href='#mer-other'>Autres modèles</a> 
      </div>
    </div>
  </div>
  )
}

function Navbar() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <Topbar /> : <Sidebar />;
}

function AppContent() {
  return (
    <div className="App-body">
      <h1>Catalogue des Diagrammes</h1>
      <h2 id ='uml'>Diagrammes UML</h2>
      <ul>
        <li id ='uml-structure' className="Section">Diagrammes de structure</li>
        <ol>
          <li id='uml-class'>Classe</li>
          <div className='row'>
          <div className='column'>
          <p>Ce type d’exemples de diagrammes UML est souvent appelé le fondement principal de toute solution orientée objet. Son utilisation est pour la modélisation conceptuelle de la structure réelle du système et la modélisation détaillée. Il est également possible avec les diagrammes de classes de faire de la modélisation des données.
Dans ce diagramme, les classes sont divisées en trois compartiments contenus dans une boîte. Le nom doit être en haut, suivi des attributs au milieu et des opérations en bas.</p>
          </div> 
          <div className='column'>
          <img src='https://webusupload.apowersoft.info/gitmind/wp-content/uploads/2021/05/class-diagram.jpg.webp' alt='class diagram example'></img>
          </div></div>
          <li id='uml-deploy'>Composants</li>
          <div className='row'>
          <div className='column'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div> 
          <div className='column'>
          <img src='https://webusupload.apowersoft.info/gitmind/wp-content/uploads/2021/05/class-diagram.jpg.webp' alt='class diagram example'></img>
          </div></div>
          <li id='uml-objects'>Déploiement</li>
          <div className='row'>
          <div className='column'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div> 
          <div className='column'>
          <img src='https://webusupload.apowersoft.info/gitmind/wp-content/uploads/2021/05/class-diagram.jpg.webp' alt='class diagram example'></img>
          </div></div>
          <li id='uml-objects'>Objets</li>
          <div className='row'>
          <div className='column'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div> 
          <div className='column'>
          <img src='https://webusupload.apowersoft.info/gitmind/wp-content/uploads/2021/05/class-diagram.jpg.webp' alt='class diagram example'></img>
          </div></div>
          <li id='uml-package'>Paquetage</li>
          <div className='row'>
          <div className='column'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div> 
          <div className='column'>
          <img src='https://webusupload.apowersoft.info/gitmind/wp-content/uploads/2021/05/class-diagram.jpg.webp' alt='class diagram example'></img>
          </div></div>
          <li id='uml-profile'>Profil</li>
          <div className='row'>
          <div className='column'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div> 
          <div className='column'>
          <img src='https://webusupload.apowersoft.info/gitmind/wp-content/uploads/2021/05/class-diagram.jpg.webp' alt='class diagram example'></img>
          </div></div>
          <li id='uml-composite'>Structure composite</li>
          <div className='row'>
          <div className='column'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div> 
          <div className='column'>
          <img src='https://webusupload.apowersoft.info/gitmind/wp-content/uploads/2021/05/class-diagram.jpg.webp' alt='class diagram example'></img>
          </div></div>
        </ol>
        <li id ='uml-behave' className="Section">Diagrammes comportementaux</li>
        <ol>
          <li id='uml-cases'>Cas d’utilisation</li>
          <li id='uml-activity'>Activité</li>
          <li id='uml-state'>État</li>
          <li id='uml-sequence'>Séquence</li>
          <li id='uml-comm'>Communication</li>
          <li id='uml-interactions'>Présentation des interactions</li>
          <li id='uml-time'>Diagramme de temps</li>
        </ol>
      </ul>
      <h2 id ='mer'>Diagrammes MERISE</h2>
      <ul>
        <li id='mer-concept' className="Section">Niveau conceptuel</li>
        <ol>
          <li id='mer-mcd'>Modèle Conceptuel des Données (MCD)</li>
          <li id='mer-mct'>Modèle Conceptuel de Traitements (MCT)</li>
        </ol>
        <li id='mer-orga' className="Section">Niveau organisationnel</li>
        <ol>
          <li id='mer-mld' >Modèle Organisationnel des Données (MLD)</li>
          <li id='mer-mlt'>Modèle Organisationnel de Traitements (MLT)</li>
        </ol>
        <li id='mer-logic' className="Section">Niveau logique</li>
        <ol>
          <li id='mer-mld'>Modèle Logique des Données (MLD)</li>
          <li id='mer-mlt'>Modèle Logique de Traitements (MLT)</li>
        </ol>
        <li id='mer-phys' className="Section">Niveau physique</li>
        <ol>
          <li id='mer-mpd'>Modèle Physique des Données (MPD)</li>
          <li id='mer-mpt'>Modèle Physique de Traitements (MPT)</li>
        </ol>
        <li id='mer-other' className="Section">Autres modèles</li>
        <ol>
          <li id='mer-mf'>Modèle des Flux (MF)</li>
          <li id='mer-me'>Modèle des États (ME)</li>
          <li id='mer-ms'>Modèle de Sécurité (MS)</li>
        </ol>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppContent />
    </div>
  );
}

export default App;
