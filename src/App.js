import React, { useState } from 'react';
import {dataUMLS,dataUMLC,dataMERC,dataMERO,dataMERL,dataMERP} from './data.js'; /*data containing diagrams infos*/
import ReactMarkdown from 'react-markdown'

/*Accordions menus components*/
function Accordion1() {
  const [isActive, setIsActive] = useState(false);
  return(
  <div>
    <div className="accordion">
      <button onClick={() => setIsActive(!isActive)} className="collapsible">{isActive ? '▽' : '▷'}</button><a className='sideMenu' href='#uml-structure'>Diagrammes de structure</a></div>
      {isActive && <div className='collapsible-content'>
      {dataUMLS.map(dcard => (<AccContent
              dname={dcard.dname}
              dtag={dcard.dtag}
          ></AccContent>))}
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
      {dataUMLC.map(dcard => (<AccContent
              dname={dcard.dname}
              dtag={dcard.dtag}
          ></AccContent>))}
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
      {dataMERC.map(dcard => (<AccContent
              dname={dcard.dname}
              dtag={dcard.dtag}
          ></AccContent>))}
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
    {dataMERO.map(dcard => (<AccContent
              dname={dcard.dname}
              dtag={dcard.dtag}
          ></AccContent>))}
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
      {dataMERL.map(dcard => (<AccContent
              dname={dcard.dname}
              dtag={dcard.dtag}
          ></AccContent>))}
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
      {dataMERP.map(dcard => (<AccContent
              dname={dcard.dname}
              dtag={dcard.dtag}
          ></AccContent>))}
    </div>}
  </div>
  )
}

/*Accordions menus content automated builder from data file*/
function AccContent({dname,dtag}) {
  return(<a href={`#${dtag}`}>{dname}</a>)
}

/*Sidebar component (only visible on tablet and desktop)*/
function Sidebar() {
  return(
  <div id ="Sidebar" className="App-sidebar">
    <div className='logosb'><img src='simplon-icon-192.png' alt='logo simplon'></img></div>
    <a href='#uml' className='sideTitle'>Diagrammes UML</a>
    <Accordion1 />
    <Accordion2 />
    <a href='#mer' className='sideTitle'>Diagrammes MERISE</a>
    <Accordion3 />
    <Accordion4 />
    <Accordion5 />
    <Accordion6 />
  </div>  
  )
}

/*Topbar component (only visible on mobile)*/
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
      </div>
    </div>
    <div className='logotb'><img src='simplon-icon-192.png' width="40" height="40" alt='logo simplon'></img></div>
  </div>
  )
}

/* Width checker for responsive design, display topbar or sidebar*/
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

/* Diagramcard content automated builder from data file */
function DiagramCard({dname,dtag,ddesc,ddiag}) {
  return(
    <div>
      <li id={dtag}>{dname}</li>
      <div className='row'>
        <div className='column'>
          <p><ReactMarkdown children={ddesc}></ReactMarkdown></p>
        </div> 
        <div className='column'>
          <img src={ddiag} alt={dname}></img>
      </div></div>
    </div>
  )
}

/* Main content component */
function AppContent() {
  return (
    <div className="App-body">
      <h1>Catalogue des Diagrammes</h1>
      <h2 id ='uml'>Diagrammes UML</h2>
      <ul>
        <li id ='uml-structure' className="Section">Diagrammes de structure</li>
        <ol>
          {dataUMLS.map(dcard => (<DiagramCard
              dname={dcard.dname}
              dtag={dcard.dtag}
              ddesc={dcard.ddesc}
              ddiag={dcard.ddiag}
          ></DiagramCard>))}
        </ol>
        <li id ='uml-behave' className="Section">Diagrammes comportementaux</li>
        <ol>
        {dataUMLC.map(dcard => (<DiagramCard
              dname={dcard.dname}
              dtag={dcard.dtag}
              ddesc={dcard.ddesc}
              ddiag={dcard.ddiag}
          ></DiagramCard>))}
        </ol>
      </ul>
      <h2 id ='mer'>Diagrammes MERISE</h2>
      <ul>
        <li id='mer-concept' className="Section">Niveau conceptuel</li>
        <ol>
        {dataMERC.map(dcard => (<DiagramCard
              dname={dcard.dname}
              dtag={dcard.dtag}
              ddesc={dcard.ddesc}
              ddiag={dcard.ddiag}
          ></DiagramCard>))}
        </ol>
        <li id='mer-orga' className="Section">Niveau organisationnel</li>
        <ol>
        {dataMERO.map(dcard => (<DiagramCard
              dname={dcard.dname}
              dtag={dcard.dtag}
              ddesc={dcard.ddesc}
              ddiag={dcard.ddiag}
          ></DiagramCard>))}
        </ol>
        <li id='mer-logic' className="Section">Niveau logique</li>
        <ol>
        {dataMERL.map(dcard => (<DiagramCard
              dname={dcard.dname}
              dtag={dcard.dtag}
              ddesc={dcard.ddesc}
              ddiag={dcard.ddiag}
          ></DiagramCard>))}
        </ol>
        <li id='mer-phys' className="Section">Niveau physique</li>
        <ol>
        {dataMERP.map(dcard => (<DiagramCard
              dname={dcard.dname}
              dtag={dcard.dtag}
              ddesc={dcard.ddesc}
              ddiag={dcard.ddiag}
          ></DiagramCard>))}
        </ol>
      </ul>
    </div>
  )
}

/* Main App component */
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppContent />
    </div>
  );
}

export default App;
