# 🔐 Politique de Sécurité

## 🚨 Que faire en cas d'incident de sécurité

1. **Isoler le système** : Désactiver temporairement l'accès public ou interrompre les déploiements.
2. **Contacter immédiatement** :
   - Responsable du projet : Shun Lassal – Dylan - Jopcelin - Samy Boudaoud 
   - Équipe de développement : via GitHub ou Discord du projet
3. **Diagnostiquer** : Identifier les commits ou comportements suspects dans le code.
4. **Redémarrer ou restaurer** : Revenir à un commit stable ou restaurer une sauvegarde propre.
5. **Documenter** : Créer une issue GitHub décrivant l’incident et les actions entreprises.

---

## 🧯 Étapes de Rétablissement

- Restaurer depuis le dernier commit propre et fonctionnel.
- Supprimer ou corriger les fichiers compromis.
- Régénérer et remplacer les clés/API ou secrets compromis si nécessaire.

---

## 🛡️ Bonnes Pratiques de Prévention

- Aucun fichier `.env` n’est versionné dans le dépôt.
- Un fichier `.env.example` est fourni pour permettre une configuration sûre (dans l'idéal mais pas dans notre cas).
- Aucun secret ou token sensible n’est codé en dur dans le code.
- Les entrées utilisateur sont filtrées et échappées côté client et côté serveur.
- Une validation stricte des données est appliquée.

---

## 🧪 Incident simulé : Défiguration de la page d'accueil

### Symptômes :
- Message affiché : “YOU HAVE BEEN HACKED” sur la page d'accueil.
- Redirection vers un lien externe malveillant.

### Cause suspectée :
- Vulnérabilité XSS causée par l'absence de filtrage des entrées utilisateur.

### Actions mises en place :
- Champ d'entrée vulnérable identifié.
- Application du filtrage (`sanitize`) et validation des données utilisateur.
- Code mis à jour et version sécurisée committée.

---

## 🔁 Résumé du Protocole de Réponse

1. Détecter l’anomalie
2. Isoler les parties affectées
3. Alerter l’équipe et escalader si nécessaire
4. Corriger et restaurer
5. Documenter et empêcher que cela se reproduise

