# Portfolio Professionnel - Hamzah Husam

Ce projet est un portfolio moderne et interactif développé avec **React**, **Tailwind CSS** et propulsé par l'**API Gemini de Google** pour un assistant IA personnalisé.

## 🚀 Fonctionnalités

- **Design Moderne & Responsive** : Interface fluide adaptée à tous les écrans (Mobile, Tablette, Desktop).
- **Mode Sombre/Clair** : Support complet du dark mode.
- **Assistant IA Gemini** : Un chatbot intelligent capable de répondre aux questions sur mon parcours et mes projets en temps réel.
- **Gestion des Projets** : Présentation détaillée de mes réalisations en Data Science, IA et Développement Web.
- **Section Expériences** : Timeline interactive de mon parcours professionnel (AWS, Coallia, etc.).

## 🛠️ Stack Technique

- **Frontend** : React 18, TypeScript, Tailwind CSS.
- **IA** : Google Gemini API (@google/genai).
- **Icônes** : Heroicons (SVG).
- **Polices** : Inter (Google Fonts).

## 📦 Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-username/portfolio-hamzah.git
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez votre clé API Gemini dans un fichier `.env` :
   ```env
   API_KEY=votre_cle_api_ici
   ```

4. Lancez le projet :
   ```bash
   npm run dev
   ```

## 🌐 Déploiement

Ce portfolio est configuré pour être déployé facilement sur **Vercel**.

### Déploiement sur Vercel (Recommandé)

1. **Installation de Vercel CLI** (si nécessaire) :
   ```bash
   npm i -g vercel
   ```

2. **Déploiement** :
   À la racine du projet, lancez :
   ```bash
   vercel
   ```

3. **Variables d'Environnement** :
   Lors du déploiement (ou dans le dashboard Vercel), n'oubliez pas d'ajouter votre variable d'environnement :
   - `GEMINI_API_KEY` : Votre clé API Google Gemini.

### Déploiement sur GitHub Pages
1. Installez le package `gh-pages` : `npm install gh-pages --save-dev`.
2. Ajoutez `"homepage": "https://votre-username.github.io/nom-du-repo"` dans votre `package.json`.
3. Lancez `npm run deploy`.

---
© 2025 Hamzah Husam - Étudiant Master Data Engineer @ ECE Paris