import * as React from 'react';

import ProductCategories from '../components/views/ProductCategories';
import ProductSmokingHero from '../components/views/ProductSmokingHero';
import AppFooter from '../components/views/AppFooter';
import ProductHero from '../components/views/ProductHero';
import ProductValues from '../components/views/ProductValues';
import ProductHowItWorks from '../components/views/ProductHowItWorks';
import ProductCTA from '../components/views/ProductCTA';
import withRoot from '../main/modules/withRoot';
import "../styles/slick.css"; 
import "../styles/slick-theme.css";
import Carousel from '../components/carousel'
import PersistentDrawerLeft from '../components/AppBar/AppBar'

function Index() {
  return (
    <>
    <React.Fragment  >
      <PersistentDrawerLeft />
  
      <ProductHero />
      <ProductValues />
      <Carousel />
      <ProductCategories />
      <Carousel />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>


  
    </>
    
    
  );
}

export default withRoot(Index);
