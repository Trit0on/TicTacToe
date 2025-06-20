# Utilise une image officielle Node.js
FROM node:18

# Crée le dossier de l'app dans le conteneur
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers du projet
COPY . .

# Expose le port (le même que ton serveur Express)
EXPOSE 3001

# Démarre l'application
CMD [ "npm", "start" ]