import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';
import { BiSun } from 'react-icons/bi';

import { useGlobalContext } from '../context/Context';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        <span className='toggle-icon'>
          {isDarkTheme ? (
            <FaMoon />
          ) : (
            <BiSun style={{ color: '#1B1B1D', fontSize: '1.5rem' }} />
          )}
        </span>
      </button>
    </section>
  );
};
export default ThemeToggle;
