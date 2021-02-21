/**
 * Global Imports
*/

import React, { Context, Dispatch, SetStateAction, useContext } from 'react';
import { Formik, FormikProps } from 'formik';

/**
 * Local Imports
*/

import { Checkbox, Form, Input, Password, Submit } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';

/**
 * Types/Interfaces
*/

export interface LoginFields {
  identity: {
    type: 'email' | 'mobile' | 'oauth';
    value: string;
  },
  secret: {
    type: 'password' | 'totp';
    value: string;
  }
}

export interface LoginFormContext {
  remember: boolean;
  setRemember: Dispatch<SetStateAction<boolean>>;
}

export interface LoginFormProps {
  context: Context<LoginFormContext>;
  onSubmit: FormikSubmit<LoginFields>;
}

/**
 * Locals
*/
  
const initialValues:LoginFields = {
  identity: {
    type: 'email',
    value: ''
  },
  secret: {
    type: 'password',
    value: ''
  }
};

/**
 * Exports
*/

export function LoginForm(props:LoginFormProps) {
  /** Contexts **/

  const context = useContext(props.context);

  /** Renderers **/
  
  const renderForm = (formik:FormikProps<LoginFields>) => (
    <Form>
      <Input
        name='identity.value'
        label='Email Address'
        labelPosition='after'
        tailwind={{
          field: 'input'
        }}
      />
      <Password
        name='secret.value'
        label='Password'
        labelPosition='after'
        tailwind={{
          field: 'input'
        }}
      />
      <Checkbox
        name='remember_me'
        label='Remember Me'
        labelPosition='after'
        onChangeValue={ value => context.setRemember(value === 'true') }
        tailwind={{
          container: 'flex-row items-center mt-8',
          label: 'ml-4 text-base'
        }}
      />
      <Submit
        label='Login'
        tailwind={{
          container: 'self-center btn mt-8 rounded-full bg-purple-800',
          label: 'btn-text text-white'
        }}
      />
    </Form>
  );
  
  /** Output **/
  
  return (
    <Formik initialValues={ initialValues } onSubmit={ props.onSubmit }>
      { renderForm }
    </Formik>
  );
}
