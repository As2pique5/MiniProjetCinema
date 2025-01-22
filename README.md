# 🎬 Mini Projet Cinéma

## 📚 Description
Ce projet consiste en la création d'une application web pour un cinéma de village. L'application permet aux utilisateurs de consulter les films tendances, rechercher des films en temps réel et afficher les détails complets d'un film. Le but est d'attirer davantage de jeunes des villages alentours.

## 📊 Fonctionnalités
- 🎬 **Page d'accueil (index.html)** : Affiche les films tendances de 2024 avec leurs affiches et titres.
- 🔍 **Page de recherche (search.html)** : Recherche de films en temps réel.
- 📚 **Page de détails (movie.html)** : Affiche les informations complètes d'un film (titre, poster, résumé, genre, acteurs, note IMDb, date de sortie DVD).

### 🔄 Améliorations ajoutées :
- 🔍 **Bouton d'accès à la recherche** ajouté sur la page d'accueil.
- 🌟 **Mode clair/sombre** pour une expérience utilisateur adaptée.
- 👤 **Lien de retour à l'accueil** ajouté sur les pages **recherche** et **détails du film**.

## 🛠️ Technologies utilisées
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **OMDb API** pour récupérer les données des films
- **Git & GitHub** pour la gestion de version

## 💻 Installation et utilisation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/As2pique5/MiniProjetCinema.git
   ```

2. **Se rendre dans le dossier du projet :**
   ```bash
   cd MiniProjetCinema
   ```

3. **Installer un serveur local :**
   - Utiliser l'extension **Live Server** sur **VS Code**
   - Ou lancer un serveur local avec **serve** :
     ```bash
     npm install -g serve
     serve
     ```

4. **Ajouter votre clé OMDb API dans `api.js` :**
   ```javascript
   const API_KEY = "VOTRE_API_KEY";
   ```

5. **Démarrer le serveur** et accéder à :
   ```
   http://127.0.0.1:5500/index.html
   ```


## 👨‍💻 Contributeurs
- **DANG Job Césaire** - Contributeur n°1
- **RAVELOARISON Mélodie** - Contributeur n°2

## 🔒 Licence
Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.

