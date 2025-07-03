import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const ScrollToTop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToTop;
