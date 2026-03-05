
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Hamzah Husam",
  title: "Étudiant en Mastère Data Engineering & Intelligence Artificielle",
  bio: "Étudiant en Mastère Data Engineering & IA à l'EFREI Paris, passionné par la Data Science, l'IA et les infrastructures Cloud. À la recherche d'une alternance en Data Engineering ou IA pour 2026.",
  about: "Actuellement en Mastère Data Engineering & Intelligence Artificielle à l'EFREI Paris (rentrée 2026), je combine une expertise en développement full-stack (React, Node.js, Java) avec des compétences solides en Data Engineering et Machine Learning (XGBoost, SVM, LLM). Mon expérience chez AWS m'a permis de maîtriser les environnements cloud à grande échelle, la résolution d'incidents complexes et l'automatisation via Python. J'ai réduit le temps de résolution d'incidents de ~30% grâce à des scripts d'automatisation, et j'ai conçu des projets ML et LLM de bout en bout, du pipeline de données à la mise en production.",
  email: "alhamzah.husamuldeen@edu.ece.fr",
  linkedin: "https://linkedin.com/in/hamzahhusam",
  skills: [
    {
      category: "Data & IA",
      items: ["Python", "Pandas", "Scikit-learn", "XGBoost", "PyTorch", "NumPy", "PCA", "Feature Engineering", "LLM API (OpenAI, Groq)", "Prompt Engineering", "NetworkX", "Matplotlib", "Seaborn", "Shapely"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["AWS (EC2, S3, IAM, CloudWatch)", "Linux (Admin)", "Shell Scripting", "Monitoring & Logs", "PostgreSQL", "MySQL", "Firebase", "automatisation système"]
    },
    {
      category: "Développement Web & Backend",
      items: ["React 18", "Node.js", "Express", "Flask", "Java", "PHP", "JavaScript", "Tailwind CSS", "JWT", "bcrypt", "REST API", "Git"]
    },
    {
      category: "Soft Skills & Langues",
      items: ["Français (natif)", "Anglais C1 – TOEIC", "Certified Business & Computer Science in English (OMNES)", "Gestion de projet Agile", "Résolution de problèmes", "Travail en équipe multiculturelle"]
    }
  ],
  experience: [
    {
      company: "Amazon Web Services (AWS)",
      role: "Cloud Support Associate (Stage)",
      period: "2025",
      description: [
        "Développé des scripts Python d'automatisation et de diagnostic, réduisant le temps de résolution d'incidents de ~30%.",
        "Supporté +50 services cloud AWS critiques en environnement Linux ; analysé et résolu des incidents complexes sur infrastructures cloud et backends Java.",
        "Mis en place des tableaux de bord de monitoring et gestion des logs pour anticiper les dégradations de service et améliorer la stabilité des systèmes.",
        "Surveillance proactive des performances et amélioration continue de la fiabilité des environnements de production."
      ]
    },
    {
      company: "Association Coallia",
      role: "Agent Informatique (Job Étudiant)",
      period: "2024",
      description: [
        "Développé et maintenu le frontend de 3 applications internes en React 18, améliorant l'expérience utilisateur pour +100 employés.",
        "Géré et optimisé des bases de données SQL traitant des milliers d'enregistrements ; contribué au développement backend en Java.",
        "Corrigé des bugs critiques et optimisé les performances applicatives, réduisant les temps de chargement de manière significative.",
        "Collaboré avec les équipes techniques pour documenter et faire évoluer les outils internes de l'organisation."
      ]
    },
    {
      company: "OMNES EDUCATION London School",
      role: "Mobilité Internationale – Programme Intensif Anglais",
      period: "2024",
      description: [
        "Suivi un programme certifiant Business & Computer Science in English (OMNES EDUCATION) en immersion totale.",
        "Réalisé des études de cas en équipe sur des problématiques data-driven et les enjeux éthiques et stratégiques de l'IA.",
        "Développé une aisance en environnement multiculturel et anglophone dans un contexte technologique."
      ]
    }
  ],
  projects: [
    {
      id: "edubot-ia",
      title: "EduBot IA — Chatbot LLM d'Orientation E-Learning",
      description: "Application web multi-pages (Chat, Dashboard, Profil) intégrant un LLM pour orienter les apprenants dans leurs parcours de formation, avec authentification complète via Supabase.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      tags: ["React 18", "TypeScript", "Supabase", "LLM API", "Prompt Engineering", "shadcn-ui", "Vite"],
      fullDescription: [
        {
          title: "Le Concept",
          content: "EduBot IA est une solution innovante visant à personnaliser l'orientation des étudiants. L'IA agit comme un coach pédagogique capable de comprendre le niveau actuel de l'utilisateur et ses aspirations pour lui recommander les modules e-learning les plus pertinents. L'application inclut des pages dédiées : Landing, Login, Signup, Chat IA, Dashboard de suivi et Profil utilisateur."
        },
        {
          title: "Architecture Full-Stack",
          content: [
            "Frontend : Interface React 18 + TypeScript avec Vite, composants UI avec shadcn-ui et Tailwind CSS.",
            "Backend-as-a-Service : Supabase pour la base de données PostgreSQL, l'authentification et le stockage en temps réel.",
            "Routing : Navigation multi-pages (/, /login, /signup, /chat, /dashboard, /profile) avec React Router.",
            "State Management : React Query (@tanstack/react-query) pour la gestion du cache et des requêtes asynchrones."
          ]
        },
        {
          title: "Intégration de l'IA & Prompt Engineering",
          content: [
            "Connexion via API à des modèles de langage avancés pour des recommandations pédagogiques personnalisées.",
            "Mise en place d'une stratégie de Prompt Engineering pour garantir des réponses précises et contextualisées.",
            "Gestion du contexte de conversation pour un suivi cohérent des échanges multi-tours."
          ]
        },
        {
          title: "Défi Technique — UX & Temps Réel",
          content: "Gestion de la latence des réponses IA avec indicateurs de chargement optimisés, et synchronisation en temps réel des données utilisateur via Supabase Realtime pour maintenir l'engagement tout au long du parcours."
        }
      ]
    },
    {
      id: "nba-prediction",
      title: "NBA SwishBrain — Prédicteur IA Full-Stack en Temps Réel",
      description: "Application full-stack (Flask API + React) prédisant les résultats NBA en temps réel via XGBoost, avec scraping ESPN live, analyse des blessures et interface utilisateur interactive.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "Flask", "XGBoost", "React", "Scikit-learn", "ESPN API", "Web Scraping", "Pandas"],
      fullDescription: [
        {
          title: "Application Full-Stack Live",
          content: "NBA SwishBrain est bien plus qu'un simple modèle ML : c'est une application complète avec un backend Flask exposant une API REST et un frontend React (Vite) permettant de visualiser les matchs du jour, obtenir des prédictions et analyser les statistiques en temps réel à partir de l'API ESPN."
        },
        {
          title: "Pipeline Data & Feature Engineering",
          content: [
            "Scraping live : Récupération des matchs du jour et de demain depuis l'API ESPN via des endpoints dédiés (/api/schedule).",
            "Données blessures : Scraping Rotowire pour intégrer l'impact des absences de joueurs clés sur les prédictions.",
            "Feature Engineering : Moyennes glissantes, avantage terrain, taux de victoire récent, fatigue back-to-back, statistiques d'équipe avancées.",
            "Nettoyage : Pipeline multi-fichiers (cleaning.py, cleaning2.py...) pour normaliser et consolider les données multi-saisons."
          ]
        },
        {
          title: "Modélisation XGBoost",
          content: [
            "Classification : XGBClassifier prédit le vainqueur avec un score de confiance en pourcentage.",
            "Régression : XGBRegressor estime le score exact de chaque équipe et le total de points.",
            "Analyse paris : Calcul automatique du niveau de risque (Secure/Risky) et signal Over/Under.",
            "Impact blessures : Pondération de l'impact des absences directement dans le calcul de prédiction."
          ]
        },
        {
          title: "Interface & Résultats",
          content: "Le frontend React permet de cliquer sur un match en direct depuis le planning ESPN pour obtenir une prédiction complète (vainqueur, scores, confiance %, analyse paris) ou de créer un matchup personnalisé entre deux équipes. Précision >70% sur la prédiction du vainqueur."
        }
      ]
    },
    {
      id: "data-viz-flask",
      title: "Visualisation de Données — Graphes & Géospatial",
      description: "Interface Flask pour visualiser des réseaux de données complexes avec NetworkX, Pandas, Matplotlib et traitement géospatial via Shapely.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "Flask", "NetworkX", "Matplotlib", "Pandas", "Shapely", "Seaborn"],
      fullDescription: [
        {
          title: "Mission",
          content: "Développer une interface légère et rapide pour permettre aux analystes de visualiser des relations complexes au sein de jeux de données hétérogènes, sans dépendance à des outils lourds de BI."
        },
        {
          title: "Analyse de Graphes avec NetworkX",
          content: "Modélisation de réseaux de données pour visualiser les interconnexions entre différentes entités (clusters, nœuds, relations). Identification des hubs et des patterns structurels dans les données."
        },
        {
          title: "Stack Technique",
          content: [
            "Framework : Flask pour un déploiement rapide et léger.",
            "Analyse : Pandas pour le filtrage dynamique et la manipulation des données.",
            "Graphisme : Matplotlib et Seaborn générant des visuels intégrés directement dans l'interface web.",
            "Géospatial : Intégration de Shapely pour le traitement et la visualisation de données géographiques."
          ]
        }
      ]
    },
    {
      id: "spendwise",
      title: "SpendWise — Gestion Financière Full-Stack",
      description: "Outil complet de suivi budgétaire avec authentification Firebase, tableau de bord temps réel et génération automatique de rapports PDF.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      tags: ["PHP", "MySQL", "Firebase", "TCPDF"],
      fullDescription: [
        {
          title: "Objectif du Projet",
          content: "Offrir aux particuliers un outil simple mais puissant pour visualiser leurs flux de trésorerie, catégoriser leurs dépenses et générer des rapports financiers mensuels automatisés."
        },
        {
          title: "Fonctionnalités Clés",
          content: [
            "Authentification : Firebase Auth pour une sécurité maximale sans gestion manuelle des sessions.",
            "Gestion des Flux : Ajout, modification et catégorisation des revenus et dépenses en temps réel.",
            "Reporting PDF : Génération automatique de rapports mensuels via la bibliothèque TCPDF.",
            "Tableau de bord : Visualisation en temps réel du solde, historique et prévisions financières."
          ]
        },
        {
          title: "Base de Données",
          content: "Modélisation d'une base de données relationnelle MySQL optimisée pour gérer des milliers de transactions par utilisateur, avec des requêtes SQL performantes et des index adaptés."
        }
      ]
    },
    {
      id: "pokemon-classification",
      title: "Pokémon Image Classification — SVM & PCA",
      description: "Pipeline modulaire de Computer Vision sur 8 000 images et 150 classes. PyTorch pour le chargement, PCA pour la réduction de dimension, SVM RBF avec GridSearchCV pour la classification.",
      image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "PCA", "SVM", "Computer Vision", "Scikit-learn", "PyTorch", "GridSearchCV", "NumPy"],
      fullDescription: [
        {
          title: "Approche — ML Classique vs Deep Learning",
          content: "Ce projet démontre qu'il est possible d'atteindre de bonnes performances en Computer Vision sans réseau de neurones profond. L'objectif est de maîtriser les fondamentaux : extraction de features manuelles, réduction de dimension, et classification supervisée avec SVM — en comprenant chaque étape du pipeline."
        },
        {
          title: "Architecture Modulaire du Pipeline",
          content: [
            "Chargement : PyTorch DataLoader pour un chargement efficace des 8 000 images réparties en 150 classes (une par Pokémon).",
            "Prétraitement : Redimensionnement uniforme, conversion en niveaux de gris et vectorisation via les transformations PyTorch.",
            "PCA (src/models/pca.py) : Réduction de dimensionnalité — les composantes principales sont sauvegardées (pca_model.pkl) pour une réutilisation en inférence.",
            "SVM RBF (src/models/svm.py) : Optimisation des hyperparamètres (C, gamma) par GridSearchCV — résultats sauvegardés dans gridsearch_results.json.",
            "Évaluation (src/evaluation/) : Génération de la matrice de confusion (PNG), rapport de classification par classe et fichier d'accuracy."
          ]
        },
        {
          title: "Résultats & Apprentissages",
          content: [
            "Métriques complètes : Accuracy globale, précision/rappel/F1 par classe et matrice de confusion visualisée.",
            "Performance : Les features PCA permettent d'accélérer l'entraînement tout en maintenant une bonne capacité de généralisation sur 150 classes.",
            "Leçon clé : Maîtrise du compromis biais-variance et du pipeline ML de bout en bout, du prétraitement à la sauvegarde des modèles."
          ]
        }
      ]
    }
  ],
  education: [
    {
      school: "EFREI Paris",
      degree: "Mastère Data Engineering & Intelligence Artificielle",
      period: "2026 – présent"
    },
    {
      school: "ECE Paris",
      degree: "Bachelor Développeur Data & AI",
      period: "2023 – 2026"
    },
    {
      school: "ECE Paris",
      degree: "Classes Préparatoires aux Grandes Écoles (CPGE)",
      period: "2022 – 2023"
    },
    {
      school: "Lycée Richelieu",
      degree: "BAC STI2D – Ingénierie & Systèmes Informatiques",
      period: "2019 – 2022"
    }
  ]
};
