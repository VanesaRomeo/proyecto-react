import { useLocation } from 'react-router-dom';
import { Abount } from '../../component/Abount/Abount';
import AutoPlay from '../../component/carrousel/Carrousel';
import { Hero } from '../../component/Hero/Hero';
import { Product } from '../../component/productos/Product.JSX';
import { HomeConteiner } from './HomeStyles';
import { useEffect } from 'react';

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <HomeConteiner>
      <Hero />
      <Abount />
      <AutoPlay />
      <Product />
    </HomeConteiner>
  );
}

export default Home;
