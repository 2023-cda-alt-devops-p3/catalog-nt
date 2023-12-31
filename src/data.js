export const dataUMLS = [
    {
        dname: 'Classe',
        dtag: 'uml-class',
        ddesc: `
### Description
Le diagramme de Classe est très utilisé comme **base structurelle**, et est le plus répandu pour représenter un **modèle orientée objet**. Il permet de montrer une vue statique des différentes **classes ou objets** du systèmes, avec ses attributs, ses méthodes, ses relations et ses contraintes avec les autres objets.

### Mode d'emploi
Chaque classe est représentée par une forme rectangulaire qui comporte les points suivants :

* **Partie haute** : Contient le nom de la classe. Il doit être centré, écrit en gras, et sa première lettre doit être en majuscule.
* **Partie centrale** : Contient les attributs. Ils doivent être nommé selon leur usage dans la classe. Leur accessibilité peut être indiqué en rajoutant un symbole de visibilité :  
**+** pour publique, **-** pour privée, **#** pour protégée, et **~** pour le package.
* **Partie basse** : Contient les méthodes. Elles doivent être représentées sous forme de liste, où chaque méthode est écrite sur une ligne.

Une fois les classes en place, il faut définir les **relations** entre elles à l'aide de segments qui représentent les différents types de relations :
* **Héritage/Généralisation** : Relation parent / enfant, qui hérite alors des attributs et méthodes de sa classe parente, sauf si elles sont privées.  
Représenté par un segment terminé par une flèche triangulaire, celle-ci indiquant le parent.
* **Association** : Connexion sémantique entre deux classes, par exemple si l'une fait appel à la méthode d'une autre. Ces connexions peuvent être :  
• Uni-directionnelle, représenté par un segment fléché.  
• Bi-directionnelles, représenté par un trait simple.  
• Une interdiction d'association, représenté par une croix sur le segment.
* **Dépendence** : Lien faible sémantique entre deux classes ou plus, ou le changement sur l'une cause un changement chez les autres.
Représenté par un segment en pointillé fléché.

En plus de ces règles de base, des particularités peuvent se rajouter :

* **Multiplicité** : Une valeur de multiplicité peut être rajouté aux relations, à côté de la classe et du segment. Elle indique combien d'instances de cette classe peuvent être rattachées à l'autre classe.  
Pour une valeur fixe, un nombre suffit. Sinon on note le minimum et le maximum (*"0..1"* pour un min. de 0 et un max. de 1 par exemple).
* **Agrégation** : Cas particulier d'une relation d'héritage, où la classe enfant existe indépendamment de son parent.  
Si l'un est supprimé, l'autre continue d'exister.  
Représenté par un segment terminé par un losange sans remplissage.
* **Composition** : Cas particulier d'une relation d'agrégation, où les classes parents et enfants sont entièrement liées.  
Si l'une est supprimée, alors l'autre aussi.  
Représenté par une segment terminé par une losange plein.

Une classe peut également être **abstraite**, auquel cas aucun objet ne peut être directement instanciée ou déclarée depuis celle-ci. Elle peut être utilisée pour diffuser des fonctionnalités aux autres classes. Pour noter une classe comme abstraite, son nom doit être écrit en italique.

A noter qu'en plus des classes, ce diagramme peut également représenter des **interfaces**, des **types de données**, ou des **composants**.

### Ressources
[Wikipedia](https://fr.wikipedia.org/wiki/Diagramme_de_classes) / [javapoint](https://www.javatpoint.com/uml-class-diagram) / [IBM](https://developer.ibm.com/articles/the-class-diagram/)
`,
        dimg: require('./img/umlclass.webp'),
        dcapt: 'Exemple de diagramme de classe pour un système de compte bancaire'
    },
    {
        dname: 'Composants',
        dtag: 'uml-comp',
        ddesc: `
### Description
Le diagramme de Composants décrit le système comme un **ensemble de composants réutilisables**, ainsi que leurs **relations de dépendance**. C'est un vue statique d'ensemble, et ressemble en cela beaucoup au diagramme de Classe. Cependant un composant répond bien mieux aux problématiques de **réutilisation** qu'une classe. En effet, cette dernière propose des connexions figées et des méthodes spécialisées, alors qu'un composant est défini par un **concept plus large**, intégré dans des systèmes et sous-systèmes, et dont les fonctionnalités vont être génériques pour être le plus facilement réutilisable.

### Mode d'emploi
Un composant est représenté par un rectangle avec à l'intérieur le nom de celui-ci précédé des deux-points *":"* et sur son côté gauche deux rectangles plus petits protubérant. Son fonctionnement interne n'est **pas détaillé** contrairement à une classe. L'important se situe donc dans ses **interfaces et ses ports**, qui représentent les relations avec les autres composants :

* **Interface offerte** : Une interface que le composant peut fournir à un autre.  
Elle est représentée par un court segment terminé par un cercle complet. Le nom de l'interface est écrit au-dessus du segment.
* **Interface requise** : Une interface dont le composant a besoin pour fonctionner.  
Elle est représentée par un court segment terminé par un demi-cercle ouvert. Le nom de l'interface est écrit au-dessus du segment.

Ces composants peuvent être intégrés dans des **sous-sytèmes**, représentés par des rectangles à l'intérieur desquels sont placés ses composants. Les différents sous-systèmes font partis d'un **même environnement** et peuvent être liés. On utilise alors un port, représenté par un carré vide situé à cheval sur la bordure du système, afin de signifier qu'une interface intéragit avec son environnement.  Deux types de liens avec l'environnement existent :

* **Dépendance** : Si un sous-système est dépendant d'un autre, les interfaces et les ports correspondant à cette relation seront reliés par une flèche en pointillé sur le diagramme.
* **Délégation** : Si un sous-système a une interface dont l'implémentation se situe en dehors de l'environnement actuel, on crée alors un connecteur de délégation, représenté par une flèche en trait plein pointant vers un port dont l'interface n'est reliée à rien.

Une autre notation des composants et sous-systèmes consistent en un rectangle avec une **icône de classeur** dans le coin supérieur droit. On inscrit également le type, composant ou sous-système, entre guillemets *"« »"*, appelé **stéréotype**, afin de bien les différencier. Plus rarement, les interfaces peuvent être représentées de cette manière, auquel cas elles détaillent les fonctions qui les composent.

### Ressources
[IBM](https://developer.ibm.com/articles/the-component-diagram/) / [Developpez.com](https://laurent-audibert.developpez.com/Cours-UML/?page=diagrammes-composants-deploiement#fig_composant_05)
`,
        dimg: require('./img/umlcomponent.webp'),
        dcapt: 'Exemple de diagramme de composant pour une commande en magasin'
    },
    {
        dname: 'Déploiement',
        dtag: 'uml-deploy',
        ddesc: `
### Description
Là où d'autres diagrammes UML s'attellent à décrire les composants logiques d'un système, le diagramme de Déploiement représente quant à lui la manière dont sont connectés les **éléments physiques**, comme par exemple un logiciel, un capteur, un serveur, ou un ordinateur. L'architecture visualisée est particulièrement adaptée à des **systèmes embarquées** qui utilisent du hardware contrôlé par des stimuli externes, comme des capteurs, ou plus simplement pour des **modèles client/serveur** qui font la distinction entre l'interface utilisateur et les données persistentes d'un système. 

### Mode d'emploi
Il est important de commencer par **identifier en premier les éléments généraux d'un système**, puis ensuite d'ajouter les relations entre eux appelées **chemins de communication** et représentées par un trait plein, ce qui signifie que les deux éléments reliés **échangent des informations et des signaux**. Ces éléments sont :

* **Noeud** : Ressource matérielle ou logicielle, qui peut exécuter des composants ou des sous-systèmes.  
Représenté par une boîte rectangulaire en relief
* **Dispositif** : Type particulier de noeud, un dispositif est une ressource physique de calcul dans un système, comme un serveur d'application.  
Représenté de la même manière qu'un noeud.

Ensuite, on peut rajouter dans ces systèmes les éventuels **sous-systèmes** qu'ils utilisent ou exécutent, qui peuvent eux-même contenir d'autres éléments. On en retrouve plusieurs types :

* **Artefact** : Unité d'implémentation physique, tel qu'un exécutable, une librairie, des documents, ou des bases de données.  
Représenté par un rectangle avec un symbole de page de document dans le coin supérieur droit.
* **Composant** : Elément logiciel, semblable à ceux décrit dans le [diagramme de Composants](#uml-comp) et représenté de la même manière.  
* **Spécification de déploiement** : Fichier de configuration qui spécifie comment doit être déployer un artefact dans un noeud.  
Représenté par un rectangle sur fond sombre et texte en blanc.

Pour tous les éléments, on spécifie son **stéréotype** en haut entre guillemets *"« »"* suivi de son nom.  

Pour finir, on ajoute les liens entre ces sous-systèmes qui peuvent prendre plusieurs formes :

* **Association** : Indique qu'une instance d'un élément est connectée à une instance d'un autre élément.  
Représenté par un trait plein.
* **Dépendance** : Si un sous-système est dépendant d'un autre, ils seront reliés par une flèche en pointillé.
* **Héritage** : Similaire à une relation d'héritage d'un [diagramme de Classe](#uml-class), elle indique une relation parent / enfant entre deux sous-systèmes.  
Représenté par un segment terminé par une flèche triangulaire vide pointant vers le parent.

### Ressources
[Wikipédia](https://fr.wikipedia.org/wiki/Diagramme_de_d%C3%A9ploiement) / [Creately](https://creately.com/blog/fr/uncategorized-fr/tutoriel-sur-le-diagramme-de-deploiement/) / 
[IBM](https://www.ibm.com/docs/en/rational-soft-arch/9.7.0?topic=diagrams-deployment) / [UML-diagrams.org](https://www.uml-diagrams.org/deployment-diagrams-overview.html)
`,
        dimg: require('./img/umldeploy.webp'),
        dcapt: "Exemple de diagramme de déploiement pour l'utilisation d'un environnement web sur un serveur local"
    },
    {
        dname: 'Objets',
        dtag: 'uml-objects',
        ddesc: `
### Description
Ce diagramme permet de visualiser un **système à un moment figé** dans le temps. Les différents systèmes sont alors **instanciés**, et on peut explorer leur comportement dans un état précis. La représentation de ce diagramme est identique à celle d'un [diagramme de Classes](#uml-class), si ce n'est que les différentes classes sont instanciées. Une utilisation répandue et de faire deux diagrammes d'objets, avant et après une interaction avec le système, afin d'en voir l'évolution.

### Mode d'emploi
L'usage est le même que pour un [diagramme de Classes](#uml-class), avec quelques modifications :

* La partie basse qui contient les méthodes n'est plus utile, on en laisse le contenu vide.
* On précède le nom de la classe du nom de l'objet instancié séparés par les deux points *":"*, et on souligne le tout.
* Dans la partie centrale, les attributs reçoivent des valeurs. Si tous les attributs ne sont pas renseignées, l'objet est dit *partiellement défini*.
* Toutes les relations deviennent des liens simples, représentés par un trait plein.

Un diagramme d'Objet peut être utilisé pour représenter une exception non prévue dans le cadre du diagramme de Classes associé, et peut donc ne pas respecter ou ajouter des règles établies dans le représentation générale.

### Ressources
[Wikipédia](https://fr.wikipedia.org/wiki/Diagramme_d%27objets) / [IBM](https://www.ibm.com/docs/en/rational-soft-arch/9.7.0?topic=diagrams-object) / [Developpez.com](https://laurent-audibert.developpez.com/Cours-UML/?page=diagramme-classes#L3-5)
`,
        dimg: require('./img/umlobjects.webp'),
        dcapt: "Exemple de diagramme d'objets pour un système de compte bancaire"
    },
    {
        dname: 'Paquetage',
        dtag: 'uml-package',
        ddesc: `
### Description
En UML, un Paquetage correspond à un **regroupement d'éléments**, qui peuvent être des classes, des objets, des noeuds, ou d'autres types d'éléments trouvables en langage UML. Ces paquetages peuvent ensuite s'imbriquer dans d'autres paquetages, s'organisant ainsi de manière hiérarchique, et fournissant **un espace de nom** pour les identifier. Cette organisation peut représenter les différentes couches du code d'une application, ou pour regrouper les composants en fonction de leur propriétaire et/ou de leur réutilisation. 

Lorsque l'on rajoute des relations entre ces différents paquetages, on obtient alors un diagramme de Paquetage.

### Mode d'emploi
Un paquetage est représenté par un rectangle surmonté d'une étiquette contenant l'intitulé de l'espace de nom correspondant.

Les relations entre paquetages ressemblent à une **relation de dépendance** classique comme vue dans les [diagrammes de Composants](#uml-comp), mais peuvent adopter des formes particulières :
* **Utilisation** : Cas par défaut d'une relation de Dépendance.
Représenté par une flèche en pointillé surmontée du terme *« use »*.
* **Import** :  Les noms des membres de paquetage de paquetage cible sont importés dans l'espace de nom.  
Représenté par une flèche en pointillé.  
• Si le terme *« import »* est annoté, alors l'import est spécifié comme public.  
• Si le terme *« access »* est annoté,  alors l'import est spécifié comme privé
* **Merge** : Le contenu du paquetage est étendu à celui de l'autre paquetage, de manière similaire à une relation d'Héritage, sauf qu'ici un nouveau paquetage est créé comme étant la fusion des deux. Si deux éléments dans le paquetage ont le même nom, leur définition sera également étendue.  
Représenté par une flèche en pointillé surmontée du terme *« merge »*.

Il est possible de détailler encore plus chaque espace de nom en **listant les éléments** qu'il comporte à l'intérieur de celui-ci. Son intitulé est alors inscrit directement dans l'étiquette.

### Ressources
[Wikipédia](https://fr.wikipedia.org/wiki/Diagramme_des_paquetages) / [uml-diagrams.org](https://www.uml-diagrams.org/package-diagrams-overview.html)
`,
        dimg: require('./img/umlpackage.webp'),
        dcapt: "Exemple de diagramme de paquetage pour un système multiple de vente par correspondance"
    },
    {
        dname: 'Structure composite',
        dtag: 'uml-composite',
        ddesc: `
### Description
Le diagramme de Structure Composite montre la **structure interne d'une classe et décrit son comportement**. Similaire au [diagramme de Classe](#uml-class), ce diagramme dépeint les éléments individuels d'une classe et non pas la classe dans sa globalité. Le concept est de montrer **comment les éléments sont interconnectés lors d'une instance** afin d'accomplir un **objectif commun**.

### Mode d'emploi
Trois types de représentations des classes peuvent être utilisés dans un diagramme de Structure Composite : 
* **Classifieur structuré** : Classe dont le comportement peut être décrit uniquement avec des interactions entre ses éléments internes, ce qui équivaut à une classe abstraite.  
Représenté par un rectangle avec le titre de la classe écrit en haut dans un compartiment à part.
* **Classifieur encapsulé** : Classe qui interagit avec l'environnement extérieur. Le point d'interaction est appelé un port.  
Représenté comme un classifieur structuré, avec en plus un carré à cheval sur la bordure du rectangle pour chacun de ses ports.
* **Collaboration** : Vision plus abstraite d'un classifieur, dans laquelle seuls les rôles et attributs utiles pour accomplir un but particulier sont montrés pour définir la structure interne de la classe. En isolant ces rôles principaux, la collaboration simplifie la structure et clarifie le modèle.  
Représenté par un ovale en pointillé dans lequel se trouvent les rôles et attributs concernés.

Les éléments constituants les classifieurs sont appelés des **parties**, représentées sur le diagramme comme un rectangle avec le nom du rôle à l'intérieur, pouvant être lui-même précédé du nom de l'instance du rôle, le tout séparé par *":"* deux points. Chaque partie décrit **un rôle dans une instance** de la classe, et peut être connectée à d'autres parties en interne ou bien à l'environnement externe **au travers des ports**.  

Une **connection**, représentée par un **trait plein**, indique que les deux éléments reliés **communiquent et interagissent entre eux**. Il est possible d'écrire le type d'information transmise à côté de la connection utilisée. De plus, pour les connections qui sortent de la classe et interagissent avec l'environnement, il est possibile d'utiliser la notation d'interfaces comme dans les [diagrammes de Composant](#uml-comp).

### Ressources
[Wikipédia](https://fr.wikipedia.org/wiki/Diagramme_de_structure_composite) / [IBM](https://www.ibm.com/docs/en/rational-soft-arch/9.7.0?topic=diagrams-composite-structure) / [uml-diagrams.org](https://www.uml-diagrams.org/composite-structure-diagrams.html)
`,
        dimg:  require('./img/umlcomposite.webp'),
        dcapt: "Exemple de diagramme de structure composite pour le fonctionnement interne d'une guitare électrique"
    },
  ]

  export const dataUMLC = [
    {
        dname: 'Cas d’utilisation',
        dtag: 'uml-cases',
        ddesc: `
### Description
Le diagramme de Cas d'utilisation est très utile pour comprendre les **besoins d'un système**. En se basant sur une **vision extérieure d'un utilisateur**, celui-ci exprime un **cas d'utilisation** qui correspond à ses attentes et ses besoins. Le diagramme va ensuite illustrer et définir le contexte à ces besoins dans un système entier ou bien seulement dans ses parties principales. C'est un modèle fréquemment utilisé **tôt dans la phase de conception**, et auquel on va s'y référer tout du long, notamment lors des phases d'analyse, de design, et de tests.

### Mode d'emploi
Les représentations de ce diagramme sont très simples, notamment puisqu'ils doivent souvent parler à des utilisateurs non-informaticiens :

* **Acteur** : Rôle externe qui interagit avec le système. Ce peut être une personne mais aussi une machine, ou une organsation entière.  
Représenté par un bonhomme bâton avec le nom du rôle inscrit dessous.
* **Cas d'utilisation** : Fonction qu'un système utilise pour accomplir l'objectif de son acteur.  
Représenté par une ellipse avec une courte phrase le décrivant à l'intérieur.
* **Système** : Frontière du système représentée par un cadre dans lequel se trouve les cas d'utilisation. Les acteurs sont placés à l'extérieur.

Il faut ensuite associer les acteurs et les cas d'utilisation à l'aide de différents types de relations :

* **Association** : Un acteur est concerné par un cas d'utilisation. Un acteur peut être associé à plusieurs cas, et vice-versa. Une notion de multiplicité peut être ajoutée si l'acteur peut interagir plusieurs fois avec un cas d'utilisation.  
Représenté par un trait plein, accompagné d'un symbole _"*"_ pour indiquer la multiplicité.
* **Inclusion** : Un cas d'utilisation inclut le comportement d'un autre. Similaire à une relation de dépendance.  
Représenté par une flèche en pointillé accompagnée de l'intitulé *« include »*.
* **Extension** : Un cas d'utilisation étend son comportement à un autre. Contrairement à l'inclusion, l'extension est optionnelle est ne force pas l'autre cas à être utilisé si le premier l'est.  
Représenté par une flèche en pointillé accompagnée de l'intitulé *« extend »*. Peut être annotée afin d'ajouter une condition à l'extension.
* **Généralisation** : Entre acteurs, signifie que l'un peut être substitué par l'autre, auquel cas tous les cas d'utilisation liés lui sont transmis.  
Entre cas d'utilisation, signifie qu'une utilisation est un cas particulier d'une autre. Similaire à l'héritage.  
Représenté par un trait plein terminé par une flèche triangulaire vide.

Des détails supplémentaires peuvent être rajoutés, comme la notion d'acteur **principal et secondaire** si plusieurs d'entre eux sont liés au même cas d'utilisation, ou bien l'ajout aux cas d'utilisation d'un **stéréotype** entre guillemets *"« »"* afin de les typer plus précisément. 

### Ressources
[Wikipédia](https://fr.wikipedia.org/wiki/Diagramme_de_cas_d%27utilisation) / [IBM](https://www.ibm.com/docs/en/rational-soft-arch/9.7.0?topic=diagrams-use-case) / [Developpez.com](https://laurent-audibert.developpez.com/Cours-UML/?page=diagramme-cas-utilisation#L2-4-4)
`,
        dimg: require('./img/umlcases.webp'),
        dcapt: "Exemple de diagramme de cas d'utilisation pour le fonctionnement d'un restaurant"
    },
    {
        dname: 'Activité',
        dtag: 'uml-activity',
        ddesc: `
### Description
Un diagramme d'Activité sert à modéliser les comportements d'un système ou d'un cas d'utilisation sous forme d'une **séquence d'actions**. Différents comportements peuvent être représentés en parallèle, permettant ainsi de proposer une représentation visuelle de **systèmes complexes** facilement compréhensible même pour des non-informaticiens. D'ailleurs ce diagramme peut servir pour des cas de **flux de travail** plus généraux que du développement de logiciel ou d'application.

### Mode d'emploi
En premier lieu, il est nécessaire d'identifier les différentes **étapes d'action** :
* **Action** : Activité ou changement d'état dans la séquence.  
Représenté par un rectangle aux coins arrondis dans lequel se trouve le nom d'action.
* **Initial/Final** : Noeud marquant le point d'appel et de fin des flux. Une activité peut avoir plusieurs point initiaux, mais un seul point final.  
Représenté par un disque plein pour le point initial, entouré d'un cercle pour le point final.  
Si le point final ne termine qu'un seul flux et pas l'ensemble de l'activité, il est représenté par un disque barré d'une croix.

Ensuite, il faut spécifier les cas où le flux se retrouve dans des situations particulières où plusieurs actions sont possibles, ou bien si plusieurs actions amènent vers le même résultat :

* **Décision** : Branche d'activité conditionnelle avec une entrée et plusieurs sorties.  
Représentée par un losange, dans lequel est parfois écrite la condition en question.
* **Fusion** : Branche d'activité où se rejoigne plusieurs entrées un une seule sortie.  
Représentée également par un losange.
* **Bifurcation** : Point où un seul flux se change en plusieurs.  
Représenté par une large barre.
* **Union** : Point où un plusieurs flux sont synchronisés en un seul.  
Représenté par une large barre.

Pour passer d'une étape à une autre, on les relie avec une **transition**, représentée par une flèche en trait plein. Les transitions démarrent dès lors que l'action qui la précède est terminée, ce qui provoque automatiquement le début de la prochaine action.

Une autre utilisation du diagramme d'Activité permet non pas de représenter un flux d'activité, mais plutôt une **flux de données**. Dans ce cas là, les noeud d'actions deviennent des **noeuds d'objets**, et ses entrées et sorties sont appelées des **pins**. L'activité ne peut commencer que si tous les pins d'entrée ont une valeur qui leur est affectée. Un pin est représenté par un petit carré en bordure de l'objet, et peut être nommé et typé avec des flèches qui indiquent s'il s'agit d'une entrée ou d'une sortie.

Il est également possible de **partitionner** les noeuds d'activités en les regroupant dans des **couloirs**, afin de mieux organiser le modèle. Ce regroupement n'a pas de règles arrêtées, et peut se faire en colonne ou ligne, présentant le diagramme alors un peu comme un tableau, mais aussi avec des lignes courbes, ou des actions à cheval entre deux partitions par exemple.

### Resources
[Wikipédia](https://en.wikipedia.org/wiki/Activity_diagram) / [Creately](https://creately.com/guides/activity-diagram-tutorial/) / [Developpez.com](https://laurent-audibert.developpez.com/Cours-UML/?page=diagramme-activites)
`,
        dimg: require('./img/umlactivity.webp'),
        dcapt: "Exemple de diagramme d'activité pour un système de réservation de train"
    },
    {
        dname: 'État-transitions',
        dtag: 'uml-state',
        ddesc: `
### Description
Dérivé du concept d'*automate fini* en mathématique, l'idée du diagramme d'États-transitions est de décrire le **comportement interne** d'un appareil, d'un programme, ou de tout autre processus technique, à l'aide d'éléments pouvant se trouver dans un **nombre limités d'états**, et où les transitions entre ces états sont **précisément définies**. Cela signifie que les comportements des éléments ne peuvent pas sortir des scénarii prévus pour eux. Les **transitions** quand à elle sont les réactions à des **évènements** qui sont le moteur de l'évolution du système. Cette approche peut permettre de simplifier énormément le nombre de chemins d'exécution et de conditions testées dans le code. A l'inverse, si elle est utilisée pour un système qui ne ressemble pas à un automate fini, cela va complexifier excessivement le code.

### Mode d'emploi

Il faut commencer par identifier les principaux **états** qui composent notre objet :

* **État élémentaire** : Résultante d'un évènement qui fait évoluer un objet vers un état spécifique.  
Représenté par un rectangle aux coins arrondis.
* **État composite** : Décomposition en régions d'un état contenant plusieurs sous-état.  
Représenté par un cadre qui englobe d'autres états élémentaires, avec son nom écrit dans un compartiment en haut du cadre.
* **État Initial/Final** : Indique l'état de départ de l'objet lorsque le diagramme d'états-transitions démarre, et l'état final lorsqu'il est terminé.  
Représenté par un disque plein pour l'état initial, entouré d'un cercle pour l'état final.  

L'**évolution** de ces états est alors indiqué comme suit :

* **Transition** : Indication d'un changement d'un état vers un autre.  
Représenté par une flèche en trait plein.
* **Événement** : Instance qui déclenche une transition.  
Représenté par une étiquette au-dessus de la transition associée.
* **Garde** : Condition qui autorise ou non une transition.  
Représentée par la définition de la condition écrite au-dessus de la transition gardée.

De même que dans le [diagramme d'Activité](#uml-activity), l'évolution du système peut rencontrer des situations ou **plusieurs transitions sont possibles**, auquel cas on utilise la même notation que dans les diagrammes d'Activité.

Une notion de **concurrence** peut rentrer en jeu lorsque, pour le même état initial, plusieurs flux d'exécution peuvent avoir lieu en parallèle, avec chacun son état initial et final. L'état composite qui regroupe ces flux n'est considéré comme terminé que lorsque l'ensemble des flux ont atteint leur état final. On représente cette concurrence avec un **trait en pointillé** séparant l'état composite entre les différents flux.

### Ressources
[Wikipédia](https://en.wikipedia.org/wiki/UML_state_machine) / [Developpez.com](https://laurent-audibert.developpez.com/Cours-UML/?page=diagramme-etats-transitions#L5-6-5) / [Lucidchart](https://www.lucidchart.com/pages/uml-state-machine-diagram?)
`,
        dimg: require('./img/umlstate.webp'),
        dcapt: "Exemple de diagramme d'états-transitions pour l'enregistrement d'un voyageur à l'aéroport"
    },
    {
        dname: "Interactivité",
        dtag: 'uml-interact',
        ddesc: `
### Description
Un diagramme d'Interactivité, aussi appelé **diagramme global d'interactions**, est une variante au [diagramme d'Activité](#uml-activity) dans le sens où il représente lui aussi une **séquence d'actions** sous forme d'un flux de travail. La différence se trouve dans le fait que les noeuds du diagrammes ne sont pas des actions normales, mais sont des **cadres** représentant des **sous-digrammes d'interaction**.  Le diagramme d'Interactivité peut être alors utile pour **déconstruire un scénario complexe**, qui demanderait trop de chemins conditionnels si l'on utilisait un seul diagramme simple d'interaction.

### Mode d'emploi
Dans la majorité des cas, le diagramme global d'interaction est lui-même un diagramme de Séquence dans lequel ses noeuds vont être des **sous-diagrammes d'interaction**. Ces derniers peuvent être de trois types, décrits plus loin dans la catalogue :

* **[Diagramme de Séquence](#uml-sequence)** (**sd**).
* **[Diagramme de Communication](#uml-comm)** (**cd**).
* **[Diagramme de Temps](#uml-time)** (**td**).

Ils sont représentés par un cadre, avec une étiquette dans le coin supérieur gauche contenant les **initiales** du type de diagramme d'interaction utilisé suivies de son nom. Le contenu des cadres est détaillé pour chaque diagrammes dans son propre chapitre du catalogue. Si le contenu n'est pas **détaillé**, la notation **ref** peut être inscrite dans l'étiquette afin de renvoyer vers une documentation précise du sous-diagramme.

Les transitions entre les noeuds sont les mêmes que pour le [diagramme d'Activité](#uml-activity), avec les embranchements de **décision**, **fusion**, **bifurcation**, et **union**. Il faut également un **noeud initial et final** pour décrire où démarre et termine le flux.

### Ressources
[Wikipédia](https://en.wikipedia.org/wiki/Interaction_overview_diagram) / [Agile Modeling](http://agilemodeling.com/artifacts/interactionOverviewDiagram.htm)
`,
        dimg: require('./img/umlinteract.webp'),
        dcapt: "Exemple de diagramme d'interactivité pour le choix d'un cours à l'université"
    },
    {
        dname: 'Séquence',
        dtag: 'uml-sequence',
        ddesc: `
### Description
Le diagramme de Séquence est le **diagramme d'interaction** le plus répandu. Le but de ce modèle est de définir la **suite logique d'évènements** qui va permettre d'accomplir l'objectif désiré d'un système. Il s'attarde moins sur les interactions en elles-même, mais plutôt sur l'**ordre dans lequel elles surviennent** et sur les **messages** échangés. C'est un diagramme souvent utilisé en complément du [diagramme des Cas d'utilisation](#uml-cases) durant la phase d'identification des besoins, et qui permet d'avoir une vue plus globale de la séquence des évènements qu'avec un [diagramme d'états-transitions](#uml-state) par exemple.

### Mode d'emploi
La première étape est d'identifier les éléments qui vont intervenir pour remplir l'objectif choisi. Ils vont être disposés en ligne en haut du diagramme et vont être composés de deux éléments:

* **Classifieur** : Element qui va envoyer et recevoir des messages. Ce peut être une classe, un objet instancié, un acteur, ou même un cas d'utilisation.  
Représenté par un rectangle avec le nom de l'élément à l'intérieur.  
S'il s'agit d'une instance, le nom de celle-ci est écrite avant le nom de l'élément, et en séparant les deux par *":"* deux points. 
* **Ligne de vie** : Indique la durée de vie d'un classifieur dans le scénario modélisé.  
Représentée par une ligne verticale en pointillée qui part du bas du classifieur associé.

Il est important de classer les classifieurs dans l'**ordre dans lequel ils vont être amenés à intervenir** dans la suite d'évènements, en **partant de la gauche par le premier initiateur**. Le temps qui s'écoule est visualisé par l'axe vertical, le long des lignes de vie.

Ensuite, la séquence d'évènements va évoluer à travers les **messages** que vont s'envoyer les différents classifieurs. Pour se faire, on les représente à l'aide d'une **flèche qui s'étend d'une ligne de vie à une autre** annotée du message en question. Différents types de messages peuvent être utilisés :

* **Message synchrone** : L'envoyeur suspend son activité le temps de recevoir une réponse à son message.  
Représenté par une flèche triangulaire pleine, pointant vers le receveur.
* **Message asynchrone** : L'envoyeur envoie le message et continue son activité sans attendre un retour. Souvent vers des éléments autonomes ou du hardware.  
Représenté par une flèche ouverte ou partielle.  
• Si le message asynchrone sert à créer un nouveau classifieur, le message *"«create»"* est annoté sur la flèche, et celle-ci est dessinée en pointillée.  
• Si le message asynchrone sert à détruire nouveau classifieur, le message *"«destroy»"* est annoté sur la flèche en trait plein, et une croix **X** est indiquée au bout de la ligne de vie ainsi détruite.
* **Message retour** : Réponse à un message d'appel.  
Représenté par une flèche en pointillée ouverte.

Un dernier élément est ajouté pour représenté **le contrôle de flux d'activité**. Tant qu'un classifieur est **actif**, c'est à dire qu'il **exécute un processus** d'envoi ou de réponse à un message, sa ligne de vie est remplacée par un **fin rectangle blanc**, qui se termine lorsque le processus est terminé. Ainsi, la **longueur de ces rectangles** permet de comparer le temps qui prennent les différents processus dans une séquence d'évènements.

Enfin, des sous-zones de diagramme d'interaction, appelées **fragments d'interaction**, peuvent permettre de modéliser des modulations dans la séquence d'évènements, selon l'**opérateur** choisi. Ces fragments sont représentés par un cadre, avec dans le coin supérieur gauche une étiquette qui indique le type d'opérateur utilisé :

* **Loop** : Opérateur de boucle qui répète les messages tant que la condition de garde booléenne est vraie.  
Représenté par terme *"loop"* dans l'étiquette suivi de la condition de la boucle ainsi qu'un compte minimum et maximum.
* **Option** : Opérateur conditionnel, qui exécute son contenu seulement si la condition de garde est vraie.  
Représenté par terme *"opt"* dans l'étiquette, et de la condition de garde entre crochet.
* **Alternative** : Opérateur conditionnel proposant plusieurs sous-fragments en fonction de la condition de garde.  
Représenté par le terme *"alt"* dans l'étiquette, avec une ligne en pointillé pour séparer chaque choix, et la condition écrite entre crochet *[]*.
* **Parallel** : Opérateur possédant au moins deux sous-fragments exécutés simultanément.  
Représenté par le terme *"par"* dans l'étiquette, avec une ligne en pointillé pour séparer chaque sous-fragment.
* **Reference** : Opérateur spécial, permettant de faire référence à un autre diagramme d'interaction. Le cadre de l'opérateur doit couvrir toutes les lignes de vie utilisé dans l'interaction référencée.  
Représenté par le terme *"ref"* dans l'étiquette, et le nom de l'interaction référencée à l'intérieur du cadre.

### Ressources
[Wikipédia](https://en.wikipedia.org/wiki/Sequence_diagram) / [Agile Modeling](http://agilemodeling.com/artifacts/sequenceDiagram.htm) / [Developpez.com](https://laurent-audibert.developpez.com/Cours-UML/?page=diagrammes-interaction#L7-3) / [uml-diagrams.org](https://www.uml-diagrams.org/sequence-diagrams.html)     
`,
        dimg: require('./img/umlsequence.webp'),
        dcapt: "Exemple de diagramme de séquence pour un appel téléphonique"
    },
    {
        dname: 'Communication',
        dtag: 'uml-comm',
        ddesc: `
### Description
Anciennement appelé diagramme de collaboration, le diagramme de Communication permet de représenter les **interactions entre objets** en regardant les **messages** qu'ils s'envoient. En cela, il est une **version alternative et plus simple du [diagramme de Séquence](#uml-sequence)** puisqu'il retire la notion de temps qui s'écoule verticalement et permet d'agencer les différents éléments **librement dans l'espace**. C'est un diagramme qui s'utilise généralement en complément du [diagramme de Classes](#uml-cases), puisqu'il permet d'en visualiser le **comportement** dans le cadre d'un cas d'utilisation ayant pour but d'**accomplir un objectif** spécifique.

### Mode d'emploi
La **même notation que pour le [diagramme de Séquence](#uml-sequence)** est utilisée pour représentée les éléments qui vont interagir entre eux. Une relation entre deux éléments est représentée par un trait plein qui les relie.

La représentation est aussi identique pour les messages, à l'exception qu'ici les **flèches sont annotées** au-dessus du trait de relation, accompagnées de la **liste des messages transmis**. Pour plus de précision, il est possible d'ajouter l'**ordre chronologique de la séquence** de messages en leur ajoutant un chiffre.

### Ressources
[Wikipédia](https://en.wikipedia.org/wiki/Communication_diagram) / [Agile Modeling](https://agilemodeling.com/artifacts/communicationDiagram.htm) / [Developpez.com](https://laurent-audibert.developpez.com/Cours-UML/?page=diagrammes-interaction#L7-2)
`,
        dimg: require('./img/umlcomm.webp'),
        dcapt: "Exemple de diagramme de communication pour une boutique en ligne"
    },
    {
        dname: 'Temps',
        dtag: 'uml-time',
        ddesc: `
### Description
Le diagramme de Temps est utilisé pour représenté le **comportement d'objets** tout au long d'une certaine **période de temps**. C'est là aussi une **alternative plus simple du [diagramme de Séquence](#uml-sequence)**, à la différence que dans ce modèle l'axe temporel est inversé et le **temps s'écoule linéairement et horizontalement** de gauche à droite.

### Mode d'emploi
Deux types de notation sont possibles pour ce diagramme, concise et robuste, mais seule la **notation robuste** est détaillée ici.

Commme pour tous les diagrammes d'interactions, il faut d'abord identifier les éléments qui participent à la **séquence d'évènements** et les représenter :
* **Couloir** : Cadre d'observation de l'état d'un classifieur ainsi que des messages envoyés et reçus.  
Représenté par un cadre avec le nom du classifieur inscrit à la verticale tout à gauche.
* **États** : État discret du classifieur, pouvant être un attribut ou une condition à tester par exemple.  
Représenté sous forme de liste à droit du nom du classifieur dans le couloir associé.
* **Ligne temporelle** : Visualisation de l'évolution temporelle des états d'un classifieur.
Représenté par une ligne pleine qui bouge de gauche à droite dans le temps, et de haut en bas en fonction des changements d'état.

Afin de faire **évoluer la ligne temporelle** et les états de chaque classifieur, il faut rajouter les **messages** qui vont induire ces changements. Leur **notation est la même** que pour un [diagramme de Séquence](#uml-sequence), à l'exception qu'il point ainsi d'un **endroit particulier d'une ligne temporelle** sur un couloir vers un autre moment d'un autre couloir. Les messages sont donc ici les **déclencheurs** ou **stimuli** d'évènements qui vont faire évoluer les états des classifieurs. 

Une **échelle de temps** est indiquée sur la bordure basse du couloir le plus bas, qui permet d'**analyser temporellement** la séquence d'évènement. Ainsi, les temps entre deux messages, ou la durée durant laquelle un objet reste bloqué dans un certain état peuvent être mesurés. Des **contraintes de durée** peuvent d'ailleurs être ajoutées pour spécifier certains le temps entre deux changements d'état non induits par un message par exemple.

### Ressources
[Wikipédia](https://en.wikipedia.org/wiki/Timing_diagram_(Unified_Modeling_Language)) / [Agile Modeling](http://agilemodeling.com/artifacts/timingDiagram.htm) / [uml-diagrams.org](https://www.uml-diagrams.org/timing-diagrams.html)
`,
        dimg: require('./img/umltime.webp'),
        dcapt: "Exemple de diagramme de temps pour une machine à café"
    }
  ]

  export const dataMERC = [
    {
        dname: 'Modèle Conceptuel des Données (MCD)',
        dtag: 'mer-mcd',
        ddesc: 'Le MCD est axé sur la modélisation des données et de leurs relations dans le système. Il utilise des concepts tels que les entités (objets), les attributs (propriétés), et les relations pour représenter la structure des données. Par exemple, dans un MCD pour une bibliothèque, vous auriez des entités telles que "Livre", "Auteur", "Emprunteur", et des relations comme "Emprunter" entre elles.',
        dimg: ''
    },
    {
        dname: 'Modèle Conceptuel de Traitements (MCT)',
        dtag: 'mer-mct',
        ddesc: "Le MDT décrit les fonctions, les processus ou les traitements qui sont exécutés par le système. Il indique comment les données sont transformées d'un état à un autre. Chaque traitement est documenté avec ses règles, ses entrées, ses sorties et ses dépendances.",
        dimg: ''
    }
]
export const dataMERL = [
    {
        dname: 'Modèle Logique des Données (MLD)',
        dtag: 'mer-mld',
        ddesc: 'La traduction du MCD vers le MLD a pour but de rendre plus clair les liaisons entre les entités. Le MLD permet de mettre en évidence les associations n,n qui donnent alors naissance à des entités à part entière. Il permet aussi de mettre en évidence les clés étrangères et donc les interactions entre les entités. La construction du MLD se fait à partir de la lecture du MCD. Chaque Entité donne une ligne où l’on détaille la clé primaire par le nom de l’attribut qui sera alors souligné. Les clés étrangères sont identifiées par un # avant le nom de l’attribut.',
        dimg: ''
    },
    {
        dname: 'Modèle Logique de Traitements (MLT)',
        dtag: 'mer-mlt',
        ddesc: 'Le modèle logique de traitement se préoccupe d’une vision interne des moyens que l’informaticien va utiliser pour construire le logiciel correspondant aux activités informatisées définit dans le MOT. Ce modèle logique de traitement MLT doit spécifier avec rigueur et en détail des contenues des traitements informatisés associes a chaque taches organisationnelle.',
        dimg: ''
    }
]

export const dataMERP = [
    {
        dname: 'Modèle Physique des Données (MPD)',
        dtag: 'mer-mpd',
        ddesc: "Le MPT décrit la planification des tâches et des processus du système. Il permet de modéliser les dépendances entre les tâches, les horaires d'exécution, les priorités, et facilite la gestion des flux de travail et des processus automatisés.",
        dimg: ''
    },
    {
        dname: 'Modèle Opérationnel de Traitement (MOT)',
        dtag: 'mer-mot',
        ddesc: "Un modèle opérationnel de traitement représente la manière dont les opérations ou les activités seront effectuées dans le système d'information. Il se concentre sur les processus, les flux de données, les règles métier et les interactions entre les différentes entités impliquées dans le système.  Il sert de base pour la conception détaillée du système et est un élément clé de la phase de modélisation fonctionnelle dans la méthodologie MERISE.",
        dimg: ''
    }
]