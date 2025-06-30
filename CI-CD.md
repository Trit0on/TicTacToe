
# 📦 CI / CD

Ce document décrit les workflows CI/CD mis en place pour ce projet : tests, build, analyse, déploiement, notifications, etc.

---

## Structure des workflows

Les workflows disponibles dans `.github/workflows/` :

- **`ci.yml`** – Intégration continue : build, test, lint, analyse.
- **`release.yml`** – Publication d’une release sur GitHub.
- **`deploy.yml`** – Déploiement (vers un server, un hébergeur cloud, Docker, etc.).
- **`security.yml`** – Analyse de sécurité (ex. Trivy, eslint-plugin-security).

---

## 1. CI (Continuous Integration) – `ci.yml`

**Déclencheurs (on):**  
- `push` sur `main` et branches `feature/*`  
- `pull_request`

**Jobs exécutés :**

| Step        | Description |
|-------------|-------------|
| `checkout`  | Récupération du code |
| `setup`     | Installation des dépendances |
| `lint`      | Analyse statique du code (ESLint, flake8, etc.) |
| `test`      | Exécution des tests unitaires |
| `coverage`  | Génération du rapport de couverture |
| `security`  | Scan des vulnérabilités via Trivy/Snyk |

**Artefacts générés :**
- Rapports de test
- Rapports de couverture
- Résultats de sécurité

---

## 2. Release – `release.yml`

**Déclencheurs :**  
- Création de `tag` avec préfixe `v*` (ex. `v1.0.0`)

**Étapes :**
1. `checkout`
2. `build` de l’application
3. Packaging (zip, tar.gz…)
4. Création de l’artefact comme release GitHub
5. Publication des binaires/artefacts attachés

---

## 3. Deployment – `deploy.yml`

**Déclencheurs :**  
- Publish (release)  
- `push` sur `main` éventuellement avec tag `deploy/*`

**Jobs :**
1. `build-docker` : construction de l’image Docker  
2. `push-docker` : push vers Docker Hub / GitHub Container Registry  
3. (optionnel) `deploy-cloud` : déploiement sur un serveur distant via SSH, Terraform, Kubernetes, etc.  
4. `notify` : notifications Slack/Teams sur la réussite ou l’échec

---

## 4. Sécurité – `security.yml`

**Déclencheurs :**  
- `schedule` (quotidien)

**Jobs :**
- `trivy-scan`: scan de l’image ou du code
- `eslint-security`: détection de vulnérabilités via plugin
- `report-security`: génération d’un rapport, éventuellement ouverture d’issue

---

## 5. Notifications

- Sur Slack/Discord : succès/échecs des pipelines  
- Sur GitHub : statuts de checks CI et résultats attachés

---

## Bonnes pratiques et conseils

1. **Découpez les workflows par responsabilité** (CI, release, déploiement, sécurité).  
2. **Centralisez les secrets** dans GitHub : `DOCKERHUB_TOKEN`, `SLACK_WEBHOOK`, `SSH_DEPLOY_KEY`, etc.  
3. **Utilisez des runners adaptés** (self-hosted si besoin, conteneurs Docker, etc.).  
4. **Artefacts versionnés** : binaires, fichiers build, rapports.  
5. **Coverage & sécurité intégrés en CI**, et seuils explicites.  
6. **Tags sémantiques** (`vX.Y.Z`) pour la release automatisée.

---

## 🔄 Exemple de release via CLI

```bash
git tag v1.2.0
git push origin v1.2.0
```

Le workflow `release.yml` se déclenche, génère les binaires, crée la Release GitHub, et déclenche le déploiement si configuré.

---

## À compléter / à personnaliser

- Lancer les tests front-end ou back-end selon votre stack.
- Configurer les scans de conteneurs avec Trivy ou Snyk.
- Déployer sur l’infra de votre choix (Docker, Kubernetes, AWS, etc.).
- Ajouter la génération de documentation (Javadoc, Sphinx, etc.).
- Lancer des benchmarks ou tests de performance automatisés.

---

## Conclusion

Ce fichier CI-CD décrit les étapes essentielles pour assurer l'intégrité, la qualité, la sécurité et le déploiement automatisé de **Trit0on/TicTacToe**.  
