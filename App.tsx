
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import { PORTFOLIO_DATA } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderProjectDetail = (project: Project) => {
    return (
      <div className="page-transition max-w-4xl mx-auto px-6 space-y-8 pb-10">
        <button
          onClick={() => setSelectedProjectId(null)}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:translate-x-[-4px] transition-transform mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Retour aux projets
        </button>

        <div className="rounded-3xl overflow-hidden h-64 md:h-96 w-full mb-8 shadow-2xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase">
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-bold text-sm hover:opacity-80 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              Voir sur GitHub
            </a>
          )}
        </div>

        <div className="grid gap-8 mt-10">
          {project.fullDescription ? (
            project.fullDescription.map((section, idx) => (
              <section key={idx} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{section.title}</h3>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{section.content}</p>
                )}
              </section>
            ))
          ) : (
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{project.description}</p>
          )}
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="page-transition space-y-16">
            <section className="text-center pt-24 flex flex-col items-center">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20">
                Alternance 2026 – Mastère Data Engineering & IA
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-gray-900 dark:text-white">
                <span className="text-gradient">{PORTFOLIO_DATA.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                {PORTFOLIO_DATA.bio}
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <button onClick={() => setCurrentPage('projects')} className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/20 hover:scale-105 active:scale-95">
                  Découvrir mes projets
                </button>
                <button onClick={() => setCurrentPage('contact')} className="px-10 py-5 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all hover:scale-105 active:scale-95">
                  Me contacter
                </button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-20">
              <div onClick={() => setCurrentPage('about')} className="p-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] cursor-pointer hover:border-blue-500 hover:shadow-2xl transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -mr-10 -mt-10 rounded-full group-hover:scale-150 transition-transform"></div>
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-6 group-hover:scale-125 transition-transform">🎓</div>
                <h3 className="font-bold text-2xl mb-2">Parcours</h3>
                <p className="text-gray-500 font-medium">Bachelor et master</p>
              </div>
              <div onClick={() => setCurrentPage('projects')} className="p-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] cursor-pointer hover:border-blue-500 hover:shadow-2xl transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 -mr-10 -mt-10 rounded-full group-hover:scale-150 transition-transform"></div>
                <div className="text-purple-600 dark:text-purple-400 text-4xl mb-6 group-hover:scale-125 transition-transform">📊</div>
                <h3 className="font-bold text-2xl mb-2">Projets Data</h3>
                <p className="text-gray-500 font-medium">ML, Data visualization</p>
              </div>
              <div onClick={() => setCurrentPage('experience')} className="p-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] cursor-pointer hover:border-blue-500 hover:shadow-2xl transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/5 -mr-10 -mt-10 rounded-full group-hover:scale-150 transition-transform"></div>
                <div className="text-green-600 dark:text-green-400 text-4xl mb-6 group-hover:scale-125 transition-transform">💼</div>
                <h3 className="font-bold text-2xl mb-2">Expérience</h3>
                <p className="text-gray-500 font-medium">AWS Support & Dev</p>
              </div>
            </section>
          </div>
        );

      case 'about':
        return (
          <div className="page-transition max-w-4xl mx-auto space-y-12 pb-10 pt-10">
            <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-12 rounded-[2.5rem] shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">À propos</h2>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">{PORTFOLIO_DATA.about}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-10">
              <section className="space-y-8">
                <h3 className="text-2xl font-bold border-b pb-4 border-gray-200 dark:border-gray-800">Éducation</h3>
                <div className="space-y-8">
                  {PORTFOLIO_DATA.education.map((edu, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-blue-600 py-1">
                      <div className="font-bold text-xl">{edu.degree}</div>
                      <div className="text-blue-500 font-semibold mt-1">{edu.school}</div>
                      <div className="text-sm text-gray-500 italic mt-2">{edu.period}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-8">
                <h3 className="text-2xl font-bold border-b pb-4 border-gray-200 dark:border-gray-800">Compétences</h3>
                <div className="flex flex-wrap gap-3">
                  {PORTFOLIO_DATA.skills.flatMap(s => s.items).map((skill, i) => (
                    <span key={i} className="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-2xl text-sm font-semibold border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case 'projects':
        if (selectedProjectId) {
          const project = PORTFOLIO_DATA.projects.find(p => p.id === selectedProjectId);
          return project ? renderProjectDetail(project) : null;
        }
        return (
          <div className="page-transition max-w-6xl mx-auto px-6 pt-10">
            <h2 className="text-5xl font-black mb-4 text-center tracking-tight">Mes Réalisations</h2>
            <p className="text-gray-500 text-center mb-20 text-lg">Cliquez sur un projet pour explorer mon travail technique</p>
            <div className="grid md:grid-cols-2 gap-12">
              {PORTFOLIO_DATA.projects.map(project => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[3rem] overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.2)] hover:border-blue-500 transition-all cursor-pointer"
                >
                  <div className="h-72 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all font-black text-lg">
                      Voir le cas d'étude →
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[11px] font-black uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-xl">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-2 leading-relaxed text-lg">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-black text-sm uppercase tracking-widest">
                        Détails techniques <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl text-xs font-bold hover:opacity-80 transition-opacity"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="page-transition max-w-4xl mx-auto px-6 space-y-10 pb-20 pt-10">
            <h2 className="text-5xl font-black text-center mb-20 tracking-tight">Parcours Pro</h2>
            <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-blue-600 before:to-transparent">
              {PORTFOLIO_DATA.experience.map((exp, i) => (
                <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 bg-blue-600 text-white shadow-2xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div className="font-black text-xl text-gray-900 dark:text-white leading-tight">{exp.role}</div>
                      <time className="text-xs font-black text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full uppercase whitespace-nowrap">{exp.period}</time>
                    </div>
                    <div className="text-blue-500 font-black mb-6 flex items-center gap-2">
                      <span className="w-4 h-0.5 bg-blue-500"></span>
                      {exp.company}
                    </div>
                    <ul className="text-gray-600 dark:text-gray-400 text-base space-y-4 font-medium">
                      {exp.description.map((item, idx) => <li key={idx} className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> {item}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="page-transition max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 pt-16 pb-20">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl font-black mb-8 tracking-tighter leading-none">Parlons de<br />votre futur projet</h2>
                <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed font-medium">
                  Je recherche activement une alternance en Data Engineering & IA pour 2026. Passionné par la donnée, le machine learning et les LLMs, prêt à transformer vos données en valeur business concrète.
                </p>
              </div>
              <div className="space-y-10">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xl shadow-blue-600/20">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email Direct</div>
                    <div className="font-bold text-xl">{PORTFOLIO_DATA.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-[1.5rem] flex items-center justify-center group-hover:-rotate-12 transition-transform border border-blue-600/20">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">LinkedIn</div>
                    <a href={PORTFOLIO_DATA.linkedin} target="_blank" className="font-black text-xl text-blue-600 hover:text-blue-400 transition-colors">linkedin.com/in/hamzahhusam</a>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-12 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] space-y-8">
              <div className="space-y-3">
                <label className="text-sm font-black uppercase text-gray-400 tracking-tighter">Votre Nom</label>
                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-transparent dark:border-gray-800 rounded-2xl px-6 py-5 outline-none focus:border-blue-600 transition-all font-bold" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black uppercase text-gray-400 tracking-tighter">Email Pro</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-transparent dark:border-gray-800 rounded-2xl px-6 py-5 outline-none focus:border-blue-600 transition-all font-bold" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black uppercase text-gray-400 tracking-tighter">Message</label>
                <textarea rows={4} placeholder="Parlez-moi de votre opportunité..." className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-transparent dark:border-gray-800 rounded-2xl px-6 py-5 outline-none focus:border-blue-600 transition-all resize-none font-bold"></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-[1.5rem] shadow-2xl shadow-blue-600/40 transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-sm">
                Envoyer le message
              </button>
            </form>
          </div>
        );

      default:
        return <div>Page non trouvée</div>;
    }
  };

  useEffect(() => {
    setSelectedProjectId(null);
  }, [currentPage]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main className="pt-28 pb-20 px-6 min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>

      <footer className="py-20 border-t border-gray-200 dark:border-gray-800 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
          <div className="text-3xl font-black text-gradient tracking-tighter">HH.</div>
          <div className="text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name} • EFREI Paris • Mastère Data Engineering & IA
          </div>
          <div className="flex space-x-8 text-sm font-black uppercase tracking-widest text-gray-400 dark:text-gray-600">
            <a href={PORTFOLIO_DATA.linkedin} target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="hover:text-blue-600 transition-colors">Email</a>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
