# Encore . 

Application pour l’assistance personnelle pour la gestion du diabète.
L'application vise à aider les personnes diabétiques (En l'occurence ma petite soeur et moi-même) à suivre et à gérer leur état de santé au quotidien de manière efficace et pratique. 

Voici un aperçu des différentes fonctionnalités de l'application :

- Inscription et Connexion :

Permet aux utilisateurs de créer leur propre compte et de se connecter pour accéder à leurs données personnelles de santé.

- Saisie des Données de Glycémie :

Offre une interface pour que les utilisateurs puissent saisir et enregistrer leurs mesures de glycémie à différents moments de la journée.

- Consultation de l'Historique de la Glycémie :

Permet aux utilisateurs de visualiser l'historique de leurs mesures de glycémie, offrant ainsi une perspective sur les tendances et les variations au fil du temps.

- Calcul des Doses d'Insuline :

Propose un calculateur pour déterminer les doses d'insuline nécessaires, en fonction des niveaux de glycémie et des autres paramètres entrés par l'utilisateur (comme l'apport en glucides et les conditions de santé spécifiques).

- Rappels pour la Prise de Médicaments :

Les utilisateurs peuvent configurer des rappels pour prendre leurs médicaments, ce qui est essentiel pour le traitement régulier et la prévention des oublis.

- Exportation des Données :

Cette fonctionnalité permet aux utilisateurs d'exporter leurs données de santé (comme les mesures de glycémie, les doses d'insuline, et les historiques de médication) sous des formats tels que CSV ou PDF, ce qui peut être utile pour les consultations médicales ou le suivi personnel.

--- 

L'application "Encore." est conçue pour être un outil complet pour la gestion quotidienne du diabète, offrant aux utilisateurs une plateforme pour surveiller leur état de santé, suivre leur traitement et recevoir des rappels pour leur médication, le tout dans un format facile à utiliser et accessible.

--- 

## Choix des technologies : 

- Vue.js vous pour le Front-End.
- Node.js avec Express.js pour le Back-End.
- Axios pour les requêtes HTTP et les appels API.
- MongoDB pour la base de données.
- Auth0 pour le processus d'authentification.
- Les Service Workers et Push API pour les notifications en temps réel.
- Pandas pour manipuler les données pour l'exportation.
- Thunder Client (extension vscode) pour le testing.
- GitHub pour le suivi de version et peut aussi servir pour la mise en place de CI/CD.

--- 

Arborescence de structure de l’application : 

<pre>
encore-app/  
│  
├── client/                  
│   ├── public/              
│   ├── src/  
│   │   ├── assets/          
│   │   ├── components/      
│   │   ├── views/           
│   │   ├── router/          
│   │   ├── store/           
│   │   ├── App.vue           
│   │   └── main.js          
│   ├── tests/               
│   └── package.json         
│  
├── server/                    
│   ├── config/               
│   ├── routes/              
│   ├── controllers/         
│   ├── models/              
│   ├── middleware/            
│   ├── utils/               
│   ├── tests/                
│   ├── app.js                
│   └── package.json          
│  
├── .gitignore               
├── README.md                  
</pre>

Cette structure sépare clairement le front-end (**client/**) du back-end (**server/**), ce qui est une bonne pratique pour les applications full-stack. Cela permet également de gérer leurs dépendances de manière indépendante et facilite le déploiement et le développement.

- **Tests** : Chaque partie a son propre dossier de tests pour faciliter les tests unitaires et d'intégration.

- **Configuration** : Les fichiers de configuration séparés aident à maintenir l'organisation et à faciliter les ajustements sans impacter le code principal.

- **Composants et vues** : Dans le front-end, la distinction entre components et views permet de séparer les composants réutilisables des composants spécifiques à une page.

- **Middleware** : Dans le back-end, un dossier dédié aux middlewares facilite la gestion de la sécurité, la journalisation, et d'autres fonctions qui agissent entre les requêtes HTTP entrantes et les réponses sortantes.

- **Modèles** : Les modèles définissent la structure des données et la logique métier, ce qui est crucial pour les interactions avec la base de données.

- **Controllers** : Les contrôleurs séparent la logique de traitement des requêtes des routes, ce qui simplifie la maintenance du code et le rend plus modulaire.

--- 

## Étape 1: Mise en place de l'environnement de développement 

- installation des logiciels de base : Node.js et npm (déjà installé via mon terminal) 

- configuration du contrôle de version avec Git

- initialisation d’un dépôt Git et connexion avec GitHub 

- création du squelette de l’application 
    - utilisation de Vite pour la mise en place de Vue.js 
    - installation de Pinia pour le state management 
    - installation de Bootstrap pour le CSS 
    - installation de Vue-Router pour le routage 
    - installation d’Express



