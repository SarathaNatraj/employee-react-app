import React, { useContext } from 'react';
import { ThemeContext } from './themecontext';
import { AftenpostenPost, TechCrunchPost } from '../App';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <TechCrunchPost title='TechCrunch'/>
      <AftenpostenPost title='AftenpostTen'/>
      
    </div>
  );
};

export default ThemeToggle;
