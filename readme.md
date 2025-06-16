# 🎮 Tic Tac Toe – Projet Node.js + EJS

Ce projet est une base structurée pour un jeu de **Morpion (Tic Tac Toe)** développé avec **Node.js**, **Express** et **EJS**. Il a été conçu pour démontrer de bonnes pratiques Git : messages de commit formels, versionnage sémantique, et intégration de hooks `pre-commit`.

---

## 📦 Fonctionnalités prévues

- Interface du jeu en **HTML/CSS/Bootstrap**
- Structure **front/back** propre
- Logique de jeu à compléter en JavaScript
- Système prêt à accueillir une IA ou des scores plus tard

---

## 🔧 Technologies utilisées

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Bootstrap (via npm)
- JavaScript vanilla
- Husky, lint-staged, Commitizen (pour la qualité Git)

---

## ⚙️ Prérequis

- Node.js (v18 recommandé)
- Git
- npm

---

## 🚀 Installation & lancement

```bash
# Cloner le projet
git clone https://gitlab.com/VOTRE_UTILISATEUR/tic-tac-toe.git
cd tic-tac-toe

# Installer les dépendances
npm install

# Activer Husky si nécessaire
npm run prepare

# Lancer l'application
node index.js
```

Puis ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 📁 Structure du projet

```
tic-tac-toe/
├── index.js                # Serveur Express
├── views/                  # Templates EJS
│   ├── game.ejs
│   └── partials/           # Header/Footer
├── public/                 # Fichiers statiques
│   ├── css/style.css
│   └── js/script.js
├── .husky/                 # Hooks Git
├── package.json
├── .gitignore
└── README.md
```

---

## ✅ Git & Bonnes pratiques

- Utilisation de `commitizen` pour des commits formels :
  ```bash
  npx cz
  ```
- Version sémantique via :
  ```bash
  npm version patch | minor | major
  ```
- Hooks `pre-commit` avec `husky` + `lint-staged` :
  vérifient que le code est propre avant chaque commit

---

## 📌 Remarques

> Le projet est fonctionnel côté structure, mais la logique complète du jeu reste à développer (clique sur les cases, détection de victoire, IA éventuelle...).

Ce dépôt est prêt pour la collaboration, le développement incrémental, et les bonnes pratiques Git/GitLab.

---