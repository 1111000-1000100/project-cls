import React, { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import Socials from './components/Socials';
import Discord from './components/Discord';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  
  // Через 9 секунд завершаем загрузку
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 3 секунды
    return () => clearTimeout(timer); // Очистка таймера
  }, []);

return (
  
    <div className="app">
      {/* Загрузка терминала */}
      {isLoading && (
        <div className="loading">
          <Terminal />
        </div>
      )}

      {/* Основной контент */}
      {!isLoading && (
        <div className="content fade-in">
            <Socials />
          <Discord />
        </div>
      )}
    </div>
  );
}