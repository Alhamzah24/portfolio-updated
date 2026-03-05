
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
      description: "Application Full-Stack intégrant des LLMs (OpenAI, Groq) pour guider les apprenants dans leurs parcours de formation via Prompt Engineering.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      tags: ["React 18", "Node.js", "PostgreSQL", "LLM API", "Prompt Engineering", "JWT", "Vite"],
      fullDescription: [
        {
          title: "Le Concept",
          content: "EduBot IA est une solution innovante visant à personnaliser l'orientation des étudiants. L'IA agit comme un coach pédagogique capable de comprendre le niveau actuel de l'utilisateur et ses aspirations pour lui recommander les modules e-learning les plus pertinents."
        },
        {
          title: "Architecture Full-Stack",
          content: [
            "Frontend : Interface développée avec React 18 et Tailwind CSS pour une expérience utilisateur fluide et moderne.",
            "Backend : Serveur Node.js avec Express gérant la logique métier et les appels API sécurisés.",
            "Base de données : PostgreSQL pour stocker les profils utilisateurs, les historiques de chat et les catalogues de cours.",
            "Sécurité : Authentification via JWT (JSON Web Tokens) et hachage des mots de passe avec bcrypt."
          ]
        },
        {
          title: "Intégration de l'IA & Prompt Engineering",
          content: [
            "Connexion via API à des modèles de langage avancés (Groq, OpenAI).",
            "Mise en place d'une stratégie de Prompt Engineering pour garantir des réponses pédagogiques précises et contextualisées.",
            "Gestion du contexte de conversation pour un suivi cohérent des échanges multi-tours."
          ]
        },
        {
          title: "Défi Technique — Latence IA",
          content: "Le principal défi a été la gestion de la latence des réponses de l'IA. Implémentation d'un système de streaming de texte et d'indicateurs de chargement optimisés pour maintenir l'engagement de l'utilisateur et réduire la latence perçue."
        }
      ]
    },
    {
      id: "nba-prediction",
      title: "NBA Match Prediction — Pipeline ML & XGBoost",
      description: "Pipeline data complet (ingestion, nettoyage, feature engineering) et modèles XGBoost pour prédire vainqueur et scores avec +70% de précision.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Feature Engineering", "Linux"],
      fullDescription: [
        {
          title: "Problématique",
          content: "Prédire le résultat d'un match NBA est complexe car il dépend de multiples facteurs : forme actuelle, historique des confrontations, fatigue (back-to-back), avantage du terrain, statistiques avancées, etc."
        },
        {
          title: "Pipeline Data Complet",
          content: [
            "Ingestion : Récupération de données historiques multi-saisons via web scraping et datasets publics.",
            "Nettoyage : Traitement des données manquantes, normalisation des statistiques avec Pandas et NumPy.",
            "Feature Engineering : Création de variables personnalisées — moyenne glissante sur 5 matchs, avantage du terrain, taux de victoire récent, fatigue back-to-back."
          ]
        },
        {
          title: "Modélisation XGBoost",
          content: [
            "Classification : XGBClassifier pour prédire le vainqueur (Binary Classification).",
            "Régression : XGBRegressor pour estimer l'écart de points et le score final.",
            "Validation : Cross-validation k-fold et analyse de la matrice de confusion pour minimiser les faux positifs."
          ]
        },
        {
          title: "Résultats",
          content: "Le modèle a atteint une précision supérieure à 70% sur les prédictions de victoire, surpassant les modèles de base traditionnels. Évaluation via accuracy, RMSE et courbes d'apprentissage multi-saisons."
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
      description: "Pipeline complet de Computer Vision sur ~8 000 images et 150 classes : extraction de features, réduction de dimension PCA et classification SVM à noyau RBF.",
      image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "PCA", "SVM", "Computer Vision", "Scikit-learn", "PyTorch", "NumPy"],
      fullDescription: [
        {
          title: "Approche — ML Classique vs Deep Learning",
          content: "Contrairement aux approches Deep Learning modernes, ce projet se focalise sur l'extraction de caractéristiques manuelles et le Machine Learning classique pour comprendre les fondements de la Computer Vision et maîtriser le compromis biais-variance."
        },
        {
          title: "Pipeline de Traitement",
          content: [
            "Dataset : ~8 000 images réparties sur 150 classes de Pokémon.",
            "Prétraitement : Redimensionnement, conversion en niveaux de gris et vectorisation des images.",
            "PCA : Réduction de dimensionnalité pour conserver les composantes les plus discriminantes et accélérer l'entraînement.",
            "SVM RBF : Classification avec optimisation des hyperparamètres par validation croisée."
          ]
        },
        {
          title: "Évaluation du Modèle",
          content: [
            "Métriques : Accuracy globale, rapport de classification par classe et matrice de confusion.",
            "Apprentissages : Maîtrise du compromis biais-variance et de l'importance cruciale de la réduction de dimension pour éviter le surapprentissage (overfitting)."
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
