import React, { useState } from 'react';

function Accordion1() {
  const [isActive, setIsActive] = useState(false);
  return(
  <div>
    <div className="accordion">
      <button onClick={() => setIsActive(!isActive)} class="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu' href='#uml-structure'>Diagrammes de structure</a></div>
      {isActive && <div class='collapsible-content'>
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
      <button onClick={() => setIsActive(!isActive)} class="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu'  href='#uml-behave'>Diagrammes comportementaux</a></div>
      {isActive && <div class='collapsible-content'>
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
      <button onClick={() => setIsActive(!isActive)} class="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu'  href='#mer-concept'>Niveau conceptuel</a></div>
      {isActive && <div class='collapsible-content'>
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
    <button onClick={() => setIsActive(!isActive)} class="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu' href='#mer-orga'>Niveau organisationnel</a></div>
    {isActive && <div class='collapsible-content'>
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
      <button onClick={() => setIsActive(!isActive)} class="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu' href='#mer-logic'>Niveau logique</a></div>
      {isActive && <div class='collapsible-content'>
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
      <button onClick={() => setIsActive(!isActive)} class="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu'  href='#mer-phys'>Niveau physique</a></div>
      {isActive && <div class='collapsible-content'>
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
        <button onClick={() => setIsActive(!isActive)} class="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu'  href='#mer-other'>Autres modèles</a></div>
        {isActive && <div class='collapsible-content'>
        <a href='#mer-mf'>Modèle des Flux (MF)</a> 
        <a href='#mer-me'>Modèle des États (ME)</a> 
        <a href='#mer-ms'>Modèle de Sécurité (MS)</a> 
      </div>}
    </div>
  )
}

function Sidebar() {
  return(
  <div className="App-sidebar">
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

function AppContent() {
  return (
    <div className="App-body">
      <h1>Catalogue des Diagrammes</h1>
      <h2 id ='uml'>Diagrammes UML</h2>
      <ul>
        <li id ='uml-structure' className="Section">Diagrammes de structure</li>
        <ol>
          <li id='uml-class'>Classe</li>
          <p>Ce type d’exemples de diagrammes UML est souvent appelé le fondement principal de toute solution orientée objet. Son utilisation est pour la modélisation conceptuelle de la structure réelle du système et la modélisation détaillée. Il est également possible avec les diagrammes de classes de faire de la modélisation des données.
Dans ce diagramme, les classes sont divisées en trois compartiments contenus dans une boîte. Le nom doit être en haut, suivi des attributs au milieu et des opérations en bas.</p>
          <li id='uml-deploy'>Composants</li>
          <li id='uml-objects'>Déploiement</li>
          <li id='uml-objects'>Objets</li>
          <li id='uml-package'>Paquetage</li>
          <li id='uml-profile'>Profil</li>
          <li id='uml-composite'>Structure composite</li>
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
      <body>       
        <Sidebar />
        <AppContent />
      </body>
    </div>
  );
}

export default App;
