import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Terminal.css'; // Подключаем стили

export default function Terminal() {
  const [progress, setProgress] = useState(0); // Прогресс загрузки (0-100)

  // Эмуляция загрузки
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // Увеличиваем прогресс каждые 70 мс
    return () => clearInterval(interval); // Очистка интервала
  }, []);

  return (
    <div className="terminal">
      {/* Анимация текста */}
      <TypeAnimation
        sequence={[
          'Загрузка системы...',
          500,
          'Инициализация компонентов...',
          500,
          'Подождите немного...',
          2900,
        ]}
        speed={70}
        style={{ fontSize: '24px', color: '#00ff00', fontFamily: 'monospace' }}
        repeat={Infinity}
      />

      {/* Контейнер для границ и заполняющейся строки */}
      <div className="loading-boundary">
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        <span className="loading-counter">{progress}%</span>
      </div>
    </div>
  );
}