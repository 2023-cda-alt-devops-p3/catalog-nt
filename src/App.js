function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catalogue des Diagrammes</h1>
      </header>
      <body>
        <h2>Diagrammes UML</h2>
        <ul>
          <li className="Section">Diagrammes de structure</li>
          <ol>
            <li>Classe</li>
            <p>Ce type d’exemples de diagrammes UML est souvent appelé le fondement principal de toute solution orientée objet. Son utilisation est pour la modélisation conceptuelle de la structure réelle du système et la modélisation détaillée. Il est également possible avec les diagrammes de classes de faire de la modélisation des données.
Dans ce diagramme, les classes sont divisées en trois compartiments contenus dans une boîte. Le nom doit être en haut, suivi des attributs au milieu et des opérations en bas.</p>
            <li>Composants</li>
            <li>Déploiement</li>
            <li>Objets</li>
            <li>Paquetage</li>
            <li>Profil</li>
            <li>Structure composite</li>
          </ol>
          <li className="Section">Diagrammes comportementaux</li>
          <ol>
            <li>Cas d’utilisation</li>
            <li>Activité</li>
            <li>État</li>
            <li>Séquence</li>
            <li>Communication</li>
            <li>Présentation des interactions</li>
            <li>Diagramme de temps</li>
          </ol>
        </ul>
        <h2>Diagrammes MERISE</h2>
        <ul>
          <li className="Section">Niveau conceptuel</li>
          <ol>
            <li>Modèle Conceptuel des Données (MCD)</li>
            <li>Modèle Conceptuel de Traitements (MCT)</li>
          </ol>
          <li className="Section">Niveau organisationnel</li>
          <ol>
            <li>Modèle Organisationnel des Données (MLD)</li>
            <li>Modèle Organisationnel de Traitements (MLT)</li>
          </ol>
          <li className="Section">Niveau logique</li>
          <ol>
            <li>Modèle Logique des Données (MLD)</li>
            <li>Modèle Logique de Traitements (MLT)</li>
          </ol>
          <li className="Section">Niveau physique</li>
          <ol>
            <li>Modèle Physique des Données (MPD)</li>
            <li>Modèle Physique de Traitements (MPT)</li>
          </ol>
          <li className="Section">Autres modèles</li>
          <ol>
            <li>Modèle des Flux (MF)</li>
            <li>Modèle des États (ME)</li>
            <li>Modèle de Sécurité (MS)</li>
          </ol>
        </ul>
      </body>
    </div>
  );
}

export default App;
