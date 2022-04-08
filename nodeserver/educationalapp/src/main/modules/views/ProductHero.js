import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Link from '@mui/material/Link';


const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center" sx={{'font-family' : "Lalezar"}}>
      هیچ وقت برای یادگیری دیر نیست        
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 4 } }}
      >
        از همین الان شروع کن
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup/"
        sx={{ minWidth: 200 }}
      >
        ثبت نام
      </Button>
      <Link  href="#" color="inherit" sx={{ mt: 2 }}>
        قبلا ثبت نام کرده اید؟
      </Link>
    </ProductHeroLayout>
  );
}
