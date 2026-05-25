import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Biblioteca from './components/Biblioteca';
import TrialsTable from './components/TrialsTable';
import EvidenceMap from './components/EvidenceMap';
import ArticleDetail from './components/ArticleDetail';
import Formacion from './components/Formacion';

import { mockArticles } from './data/mockData';
import { 
  Activity, Bookmark, Calendar, Layers, 
  Award 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('publicaciones');
  const [savedArticleIds, setSavedArticleIds] = useState(['art-1', 'art-3']); // pre-fill some saved ones
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [detailTab, setDetailTab] = useState('practica');

  const handleOpenArticleDetail = (article, subTab = 'practica') => {
    setSelectedArticle(article);
    setDetailTab(subTab);
  };

  const handleToggleSaveArticle = (id) => {
    setSavedArticleIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const tabs = [
    { id: 'publicaciones', label: 'Publicaciones', icon: Activity },
    { id: 'biblioteca', label: 'Biblioteca & Alertas', icon: Bookmark },
    { id: 'formacion', label: 'Formación Continuada', icon: Award },
    { id: 'ensayos', label: 'Ensayos Clínicos', icon: Calendar },
    { id: 'mapa', label: 'Mapa de Evidencia', icon: Layers }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* System Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        progressPercent={58} 
      />

      {/* Navigation Tabs Bar */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-[138px] lg:top-[128px] md:top-[128px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 py-2 overflow-x-auto whitespace-nowrap scrollbar-none" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-100'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Render Tab Views */}
        {activeTab === 'publicaciones' && (
          <Dashboard 
            articles={mockArticles}
            onOpenArticle={handleOpenArticleDetail}
            savedArticles={savedArticleIds}
            onToggleSaveArticle={handleToggleSaveArticle}
          />
        )}

        {activeTab === 'biblioteca' && (
          <Biblioteca 
            articles={mockArticles}
            savedArticleIds={savedArticleIds}
            onOpenArticle={handleOpenArticleDetail}
            onToggleSaveArticle={handleToggleSaveArticle}
          />
        )}

        {activeTab === 'formacion' && (
          <Formacion />
        )}

        {activeTab === 'ensayos' && (
          <TrialsTable />
        )}

        {activeTab === 'mapa' && (
          <EvidenceMap />
        )}



      </main>

      {/* Clinical Article Detailed Modal */}
      {selectedArticle && (
        <ArticleDetail 
          article={selectedArticle}
          initialTab={detailTab}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {/* System Footer & Legal Disclaimer */}
      <Footer />

    </div>
  );
}
