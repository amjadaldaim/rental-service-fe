"use client"
import {
  Grid,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Copyright,
  Box,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Headline01,
  Description01,
  BaseContainer,
  BaseGridContainer,
  BaseLink,
} from '@components/BaseComponents';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import bannerAuth from '@public/banner-auth.svg';

const SignupContainer = styled(BaseGridContainer)`
  background: ${({ theme }) => theme.palette.background.page};
`;

const SignupForm = styled(BaseContainer)`
  grid-column: 2 / 7;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-row-gap: 8px;
  padding: 32px 0;

  .have-account-section {
    align-items: center;
    justify-content: center;
  }

`

const ImageSectionWrapper = styled(BaseContainer)`
  grid-column: 7 / 13;
  height: calc(100vh - ${({ theme }) => theme.componentSize.header.height});
`

const ImageSection = styled(BaseContainer)`
  grid-column: 7 / 13;
  height: calc(100vh - ${({ theme }) => theme.componentSize.header.height});

  .banner-auth {
    width: 80%;
    height: 80%;
  }
`

const HeadingSection = styled(BaseContainer)`
  grid-row: 1 / 3  ;
  grid-column: span 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .signup-avatar {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`

const InputSection = styled(BaseContainer)`
  grid-row: 3 / 10;
  grid-column: 2 / 12;

  .input {
    margin-top: 8px;
  }
`

const SubmitSection = styled(BaseContainer)`
  // grid-row: 11 / 13;
  grid-column: 2 / 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .submit-button {
    margin-bottom: 8px;
  }
`


function SignupPage() {
  return (
    <SignupContainer className="signup-container">
      <SignupForm className="signup-form-container">
        <HeadingSection className="avatar-section">
          <Avatar className='signup-avatar'>
            <LockOutlinedIcon />
          </Avatar>
          <Headline01 component="h1" variant="h5">
            {"Sign up"}
          </Headline01>
        </HeadingSection>


        <InputSection className="input-section">
          <Box component="form" noValidate >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="name"
              autoFocus
              className='input'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone-number"
              label="Phone Number"
              name="phone-number"
              autoComplete="phone-number"
              className='input'
            />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your email"
              name="phone-number"
              autoComplete="phone-number"

            /> */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className='input'
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Box>
        </InputSection>


        <SubmitSection className="submit-section">
          <Button
            className='submit-button'
            type="submit"
            fullWidth
            variant="contained"
          >
            Sign In
          </Button>
          <Grid container className='have-account-section' >
            <Grid item >
              <Description01 variant="body2">
                {"Already have an account"} <Link href="/auth/signup" variant="body2">{"Login"}</Link>
              </Description01>
            </Grid>
          </Grid>
        </SubmitSection>
        {/* 
        
         */}
      </SignupForm>
      <ImageSectionWrapper>
        <ImageSection>
          <Image src={bannerAuth} className='banner-auth' alt="banner-auth" />
        </ImageSection>
      </ImageSectionWrapper >
    </SignupContainer>
  );
}

export default SignupPage;