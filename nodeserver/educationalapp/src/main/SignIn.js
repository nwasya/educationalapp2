import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import { bixious } from '../services/main';
import TextField from '@mui/material/TextField';
import { useCookies } from "react-cookie";

function SignIn() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [sent, setSent] = React.useState(false);
  const [formData, setFormData] = React.useState(
    {
      username: "",
      password: ""
    }
  )

  console.log(formData)

  function createPost() {
    bixious
      .post("/token", {
        "username": formData.username,
        "password": formData.password
      })
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        setSent(true);
      });
  }


  React.useEffect(() => {
    bixious.get("/users/me").then((response) => {
      
      setSent(true);
          return response;
      
    });
  }, []);
  
  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography style={{ fontFamily: "Lalezar" }} variant="h3" gutterBottom marked="center" align="center" >
            ورود به ناحیه کاربری
          </Typography>
          <Typography variant="body2" align="center">
            {'هنوز ثبت نام نکرده اید؟'}
            <Link
              href="/signup"
              align="center"
              underline="always"
            >
              ثبت نام کنید
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <TextField
onChange={(e) => setFormData({...formData, username: e.target.value})}                  autoFocus 
                  autoComplete
                  id="username"
                  label="نام کاربری"
                  variant="outlined" 
                  fullWidth  
                  value={formData.username}
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
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                ورود به حساب کاربری
                {/* {submitting || sent ? 'In progress…' : 'Sign In'} */}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" href="/premium-themes/onepirate/forgot-password/">
            رمز خود را فراموش کردید؟
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
