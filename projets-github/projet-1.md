# Analyse du projet GitHub : [shopware/shopware](https://github.com/shopware/shopware)

## Structure du projet

- Utilisation de **GitHub** pour la gestion du projet (issues, branches, PR)
- Création d’**une branche par issue** : permet un suivi clair et un historique propre
- Structure modulaire avec des dossiers bien organisés (`src/`, `tests/`, etc.)
- Projet basé sur **Symfony**, organisé en modules/plugins

## Conventions Git

- Utilisation de **Commitizen** pour des commits standardisés (`feat`, `fix`, `chore`, etc.)
- Historique Git propre, lisible, compatible avec la génération de changelogs

## CI / CD

- Présence de **GitHub Actions** dans `.github/workflows/`
- Tests automatisés à chaque PR (unitaires, intégration)
- Outils de qualité de code intégrés (PHPStan, PHPUnit, ESLint)
- Déploiement structuré avec gestion des versions et des tags

## Gouvernance et qualité

- Branches protégées (`trunk-based development`)
- Merge uniquement via **pull requests** + validation humaine
- Suivi des versions avec **semver** et gestion stable/unstable

## Tests

- Large couverture de tests unitaires et fonctionnels
- Utilisation de **PHPUnit** (backend) et **Cypress** (frontend)
- Tests critiques sur les modules principaux

## Documentation

- README clair et détaillé avec instructions d’installation
- Wiki accessible aux développeurs
- Conventions de développement bien définies

## Points forts

- Workflow Git bien structuré
- Standardisation des commits (Commitizen)
- Processus CI/CD complet
- Bonne documentation
- Organisation professionnelle

## Points à surveiller

- Courbe d’apprentissage élevée (Symfony + architecture modulaire)
- Complexité pour les nouveaux contributeurs