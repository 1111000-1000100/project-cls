import React, { useState } from 'react';
import { FaTelegram, FaDiscord } from 'react-icons/fa';

export default function Discord() {
  const [showDiscordMenu, setShowDiscordMenu] = useState(false);
  const [showTelegramMenu, setShowTelegramMenu] = useState(false);

  return (
    <div className="discord">
      <h2 className="welcome-text">Welcome!</h2>
      <img src="/src/assets/Avatar-cls.jpg" alt="Avatar" className="avatar" />
      <h2 className="welcome-text">Owner:</h2>

      {/* Discord иконка с выпадающим меню */}
      <div
        className="icon-container"
        onMouseEnter={() => setShowDiscordMenu(true)}
        onMouseLeave={() => setShowDiscordMenu(false)}
      >
        <a href="#" className="neon-link">
          <FaDiscord />
        </a>
        {showDiscordMenu && (
          <div className="dropdown-menu">
            <a href="https://discord.gg/1017kingd0m" target="_blank" rel="noopener noreferrer" className="dropdown-item">
              #1017
            </a>
            <a href="https://discord.gg/corpses" target="_blank" rel="noopener noreferrer" className="dropdown-item">
              #444
            </a>
            <a href="https://discord.gg/inaari" target="_blank" rel="noopener noreferrer" className="dropdown-item">
              INARI
            </a>
          </div>
        )}
      </div>

      {/* Telegram иконка с выпадающим меню */}
      <div
        className="icon-container"
        onMouseEnter={() => setShowTelegramMenu(true)}
        onMouseLeave={() => setShowTelegramMenu(false)}
      >
        <a href="#" className="neon-link">
          <FaTelegram />
        </a>
        {showTelegramMenu && (
          <div className="dropdown-menu">
            <a href="https://t.me/+QBr8IQ2JRjA5NjUx" target="_blank" rel="noopener noreferrer" className="dropdown-item">
              #1017
            </a>
          </div>
        )}
      </div>
    </div>
  );
}