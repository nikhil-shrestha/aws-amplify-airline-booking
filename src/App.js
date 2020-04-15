import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, Authenticator } from 'aws-amplify-react';

import '@aws-amplify/ui/dist/style.css';

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <Authenticator usernameAttributes="email" />
    </div>
  );
}

const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'First Name',
      key: 'given_name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Last Name',
      key: 'family_name',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Luaggage Preference',
      key: 'luggage_preference',
      required: true,
      displayOrder: 3,
      type: 'string',
      custom: true,
    },
    {
      label: 'Meal Preference',
      key: 'meal_preference',
      required: true,
      displayOrder: 4,
      type: 'string',
      custom: true,
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 5,
      type: 'string',
    },
    {
      label: 'PhoneNumber',
      key: 'phone_number',
      required: true,
      displayOrder: 6,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 7,
      type: 'password',
    },
  ],
};

export default withAuthenticator(App, {
  signUpConfig,
  usernameAttributes: 'email',
});
