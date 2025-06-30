# 🎮 Tic Tac Toe — Jeu web avec Node.js, Express et EJS
![Tests](https://github.com/Trit0on/TicTacToe/actions/workflows/tests.yml/badge.svg)

Lien vers le projet -> https://tictactoe-7987.onrender.com

Ce projet est une démonstration d’un jeu web de **Morpion (Tic Tac Toe)** développé avec **Node.js**, **Express** et **EJS**, intégrant de bonnes pratiques Git (commits formels, versionnage sémantique, CI/CD, etc.).

📘 **[Documentation & Wiki](https://github.com/Trit0on/TicTacToe/wiki)**  
📄 Autres documents :  
- [CI/CD](./ci-cd.md)  
- [Sécurité](./security.md)


---

## 🚀 Fonctionnalités

- Interface de jeu responsive avec **Bootstrap**
- Structure claire en **front-end / back-end**
- Hooks `pre-commit` avec `Husky` et `lint-staged`
- Commits formalisés avec `Commitizen`
- Système de versionnage sémantique (`standard-version`)
- Prêt pour un déploiement via Docker

---

## 🛠️ Technologies

- Node.js + Express
- EJS (templates)
- Bootstrap (via npm)
- JavaScript vanilla
- Husky, lint-staged, Commitizen, standard-version

---

## ⚙️ Prérequis

- Node.js ≥ v18
- Git
- npm

---

## 📦 Installation & lancement

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/Trit0on/TicTacToe.git
   cd TicTacToe
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Initialiser Husky :
   ```bash
   npm run prepare
   ```

4. Lancer le serveur :
   ```bash
   node index.js
   ```

Puis ouvrez votre navigateur sur : [http://localhost:3000](http://localhost:3000)

---

## 📁 Arborescence du projet

```
tic-tac-toe/
├── index.js                # Serveur Express
├── views/                  # Templates EJS
│   ├── game.ejs
│   └── partials/           # Header / Footer
├── public/                 # CSS, JS statiques
│   ├── css/style.css
│   └── js/script.js
├── test/                   # Fichiers de test
├── .husky/                 # Hooks Git
├── package.json
├── .dockerignore
├── .gitignore
├── .gitlab-ci.yml
├── .prettierrc
├── CHANGELOG.md
├── dockerfile
└── README.md
```

---

## ✅ Bonnes pratiques Git

- **Commits structurés** avec Commitizen :
  ```bash
  npx cz
  ```
- **Versionnement sémantique** :
  ```bash
  npm version patch | minor | major
  ```
- **Changelog automatique** :
  ```bash
  npx standard-version
  ```

---

## 🔁 Exemple de workflow Git

```bash
# 1. Ajouter les fichiers
git add .

# 2. Commit avec Commitizen
npx cz

# 3. Générer changelog et version
npx standard-version

# 4. Pousser le tout
git push --follow-tags origin main
```

---

## ℹ️ Remarques

> La structure du jeu est en place, mais la logique complète (détection de victoire, IA...) reste à implémenter.

Ce projet est prêt pour des contributions collaboratives avec un pipeline CI/CD GitLab complet et un Dockerfile.
