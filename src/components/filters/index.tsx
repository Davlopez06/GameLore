import { useEffect, useState } from 'react';

const Filters = () => {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const path = window.location.pathname;
    setIsHome(path === '/games');
  }, []);

  if (!isHome) return null;

  return <div>Filters</div>;
};

export default Filters;
