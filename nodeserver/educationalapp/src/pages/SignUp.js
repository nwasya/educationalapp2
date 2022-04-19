import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {  Form, FormSpy } from 'react-final-form';
import Typography from '../components/Typography';
import AppFooter from '../components/views/AppFooter';
import AppForm from '../components/views/AppForm';
import FormButton from '../components/form/FormButton';
import FormFeedback from '../components/form/FormFeedback';
import withRoot from '../main/modules/withRoot';
import TextField from '@mui/material/TextField';
import { bixious } from '../services/main';

function SignUp() {

  const [sent, setSent] = React.useState(false);
  const [formData, setFormData] = React.useState(
      {
      name: "",
      last_name: "",
      id_num:"",
      password:""
    }
    )

  React.useEffect(() => {
    bixious.get("/signup").then((response) => {
      setSent(true);
    });
  }, []);


  function createPost() {
    bixious
      .post("/signup", {
        "name" : formData.name,
        "last_name" : formData.last_name,
        "id_num" : formData.id_num,
        "password" : formData.password
      })
      .then((response) => {
        setSent(true);
      });
  }
  





  const handleSubmit = () => {
    setSent(true);
  };


  return (
    <React.Fragment>
      <div style={{backgroundImage : `url("https://mui.com/static/themes/onepirate/productCurvyLines.png")`}}>
           <AppForm>
        <React.Fragment>
          <Typography style={{fontFamily : "Lalezar"}} variant="h3" gutterBottom marked="center" align="center">
            ثبت نام
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/signin/" underline="always">
              قبلا ثبت نام کرده اید؟
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
onChange={(e) => setFormData({...formData, name: e.target.value})}                  autoFocus 
                  autoComplete
                  id="name"
                  label="نام"
                  variant="outlined"  
                  value={formData.name} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
onChange={(e) => setFormData({...formData, last_name: e.target.value})}                  autoFocus 
                  autoComplete
                  id="last_name"
                  label="نام خانوادگی"
                  variant="outlined"   
                  value={formData.last_name}
                  />
                </Grid>
              </Grid>
              <TextField
onChange={(e) => setFormData({...formData, id_num: e.target.value})}                  autoFocus 
                  autoComplete
                  id="id_num"
                  label="کد ملی"
                  variant="outlined" 
                  fullWidth  
                  value={formData.id_num}
                  sx={{
                    my : 4
                  }}
                  />
              <TextField
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              autoFocus
              id="pass"
              label="رمز عبور"
              variant="outlined" 
              type="password"
              fullWidth  
              value={formData.password}
              
                  />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
              onClick={createPost}
                sx={{ mt: 3, mb: 2 }}
                
                color="secondary"
                fullWidth
              >
                {submitting || sent==="no" ? 'در حال ثبت نام' : 'ثبت نام کن'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      </div>
   
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignUp);
