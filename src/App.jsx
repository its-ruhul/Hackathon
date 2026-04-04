import React from 'react';
import { BookOpen, Feather, Compass, Map, Coffee, BookMarked } from 'lucide-react';
import './App.css';

function App() {
  const pages = [
    { title: 'Prologue: Dawn of the Web', icon: <Feather size={28} strokeWidth={1.5} />, page: 'i' },
    { title: 'Chapter I: Structure & Form', icon: <BookOpen size={28} strokeWidth={1.5} />, page: '1' },
    { title: 'Chapter II: The Art of Style', icon: <Compass size={28} strokeWidth={1.5} />, page: '14' },
    { title: 'Chapter III: Interactive Realms', icon: <Map size={28} strokeWidth={1.5} />, page: '42' },
    { title: 'Epilogue: A Neverending Story', icon: <Coffee size={28} strokeWidth={1.5} />, page: '108' },
  ];

  return (
    <div className="book-page">
      <h1 className="index-title">Index</h1>
      
      <div className="divider">
        <BookMarked size={20} className="divider-icon" strokeWidth={1.5} />
      </div>

      <div className="index-list">
        {pages.map((item, i) => (
          <div key={i} className="index-item">
            <div className="item-icon">{item.icon}</div>
            <div className="item-title">{item.title}</div>
            <div className="item-leader"></div>
            <div className="item-page-num">{item.page}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
