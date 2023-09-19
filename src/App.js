function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catalogue des Diagrammes</h1>
      </header>
      <body>
        <h2>Diagrammes UML</h2>
        <ul>
          <li>Diagrammes de structure</li>
          <ol>
            <li>Classe</li>
            <li>Composants</li>
            <li>Déploiement</li>
            <li>Objets</li>
            <li>Paquetage</li>
            <li>Profil</li>
            <li>Structure composite</li>
          </ol>
          <li>Diagrammes comportementaux</li>
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
          <li>Niveau conceptuel</li>
          <ol>
            <li>Modèle Conceptuel des Données (MCD)</li>
            <li>Modèle Conceptuel de Traitements (MCT)</li>
          </ol>
          <li>Niveau organisationnel</li>
          <ol>
            <li>Modèle Organisationnel des Données (MLD)</li>
            <li>Modèle Organisationnel de Traitements (MLT)</li>
          </ol>
          <li>Niveau logique</li>
          <ol>
            <li>Modèle Logique des Données (MLD)</li>
            <li>Modèle Logique de Traitements (MLT)</li>
          </ol>
          <li>Niveau physique</li>
          <ol>
            <li>Modèle Physique des Données (MPD)</li>
            <li>Modèle Physique de Traitements (MPT)</li>
          </ol>
          <li>Autres modèles</li>
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
