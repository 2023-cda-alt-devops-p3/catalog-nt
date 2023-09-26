# Catalogue de Diagrammes

Demo : https://catalog-nt.netlify.app/

## Diagrammes UML

### Diagrammes de structure

- **Classe**
- Composants
- **Déploiement**
- Objets
- Paquetage
- Profil
- Structure composite
- Diagrammes comportementaux

### Diagrammes comportementaux

- **Cas d’utilisation**
- **Activité**
- État
- **Séquence**
- Communication
- Présentation des interactions
- Diagramme de temps

## Diagrammes MERISE

### Niveau conceptuel

- **Modèle Conceptuel des Données (MCD)**
- Modèle Conceptuel de Traitements (MCT)

### Niveau organisationnel

- Modèle Organisationnel des Données (MOD)
- Modèle Organisationnel de Traitements (MOT)

### Niveau logique

- **Modèle Logique des Données (MLD)**
- Modèle Logique de Traitements (MLT)

### Niveau physique

- **Modèle Physique des Données (MPD)**
- Modèle Physique des Traitements (MPT)

### Autres modèles

- Modèle des Flux (MF)
- Modèle des États (ME)
- Modèle de Sécurité (MS)

# Critères d'évaluation

## Git
- [:heavy_check_mark:] Versionné régulièrement et de manière atomique (Plusieurs "commit" par jour pendant toute la durée du projet) => Vérif Git
- [:heavy_check_mark:] Historique de commit propre => (éviter les doublons, les commits inutiles)
- [:heavy_check_mark:] Mise en plance d'une branche de développement supplémentaire, voire plusieurs selon l'architecture du site => Vérif sur Git
- [:x:] Fonction "pull request" => Check sur Github
- [:x:] Mise en place un Github Action (automatisation de tests intégration, vulnérabilité, ...) => Check sur Github

## Sécurité
- [:x:] Prévenir les vulnérabilités principales (cross site, injection sql, protection des tokens, validation des données) => GoogleSearchConsole, Sucuri
- [:x:] Respect de la protection des données (RGPD, encapsulation)
- [:x:] Utilisation des chemins absolus

## SEO
- [:x:] Mise en place de la stratégie SEO : données structurées, ...
- [:x:] PWA (Progressive Web App) : services workers (microphone, localisation, ...)
- [:x:] HTML sémantique

## Performance
- [:x:] Bon résultat sur PageSpeed Insights
- [:x:] Optimisation images (surtout mobile)
- [:heavy_check_mark:] Limiter le nombre de requêtes

## Accessibilité
- [:x:] Accessibilité : title, aria-label, alt
- [:x:] Optimisation des images : poids et formats adaptés
- [:x:] Fournir un site web avec une bonne expérience utilisateur
- [:x:] Texte lisible : interlinéage suffisant, taille des polices proportionnelles, contraste des couleurs optimale, ...

## Architecture
- [:heavy_check_mark:] Bons principes de structuration respectés, y compris pour le web mobile => vérif des balises (body, header, navbar), et des noms de classes CSS, variables, media queries
- [:heavy_check_mark:] Eviter les répétitions en utilisant des fonctions => check du code source

## Contenu
- [:x:] Contenu vérifié : informations croisées, résumé de plusieurs sources, ...
- [:x:] Détail des étapes pour chaque diagramme

## UI/UX
- [:x:] Features d'animations, transitions, barre de navigation => vérif du site
- [:heavy_check_mark:] Design cohérent (couleur, forme, police)