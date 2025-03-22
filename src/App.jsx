import React, { useState, useEffect, useRef } from 'react';
import Terminal from './components/Terminal';
import Socials from './components/Socials';
import Discord from './components/Discord';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки
  const audioRef = useRef(null);
  
  
  // Через 5 секунд завершаем загрузку
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 5000); // 5 секунд
    return () => clearTimeout(timer); // Очистка таймера
  }, []);

  return (
  
    <div className="app">
      <audio ref={audioRef} src="/music.mp3" loop />
      {/* Загрузка терминала */}
      {isLoading && (
        <div className="loading">
          <Terminal />
        </div>
      )}
      {/* Основной контент */}
      {!isLoading && (
        <div className="content fade-in">
          <Discord />
          <Socials />
        </div>
      )}
    </div>
  );
}