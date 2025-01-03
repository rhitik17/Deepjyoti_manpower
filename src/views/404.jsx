import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-400 to-slate-600 text-white   max-md:px-4">
      {/* <img src="/images/hero.png" alt="" className='h-40 w-40'/> */}
      <h1 className="text-7xl md:text-9xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-2">Oops... Page Not Found</h2>
      <p className="text-lg  text-justify">The page you were looking for doesn't exist.</p>

      <p className="text-lg mb-8 text-justify">You have mistyped the address or the page may have moved.</p>

      <button
        onClick={handleGoHome}
        className="flex items-center gap-2 bg-white text-primary-web hover:bg-primary-web hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
      >
        <FaHome className="text-xl" />
        Go Back Home
      </button>
    </div>
  );
};

export default PageNotFound;
