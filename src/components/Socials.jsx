import { FaTelegram, FaDiscord } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="socials">
      <h2 className="welcome-text">Добро пожаловать!</h2>
      <img src="/src/assets/Avatar-cls.jpg" alt="Avatar" className="avatar " />
      <div className="links">
        <a href="https://t.me/ofvoid" target="_blank" rel="noopener noreferrer" className="neon-button">
          <FaTelegram /> @ofvoid
        </a>
        <a href="https://discord-tracker.com/tracker/user/1325128602672697496/" target="_blank" rel="noopener noreferrer" className="neon-button">
          <FaDiscord /> @convictione
        </a>
      </div>
    </div>
  );
}