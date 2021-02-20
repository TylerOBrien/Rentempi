/**
 * Global Imports
*/

import React, { useEffect, useState }  from 'react';
import { FormikHelpers } from 'formik';
import FaIcon from 'react-native-vector-icons/FontAwesome';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { WelcomeGuestLayout } from '~/layouts/Guest';
import { ForgotPasswordFields, ForgotPasswordForm, ForgotPasswordFormContext } from '~/forms/Guest/ForgotPasswordForm';
import { Recovery } from '~/services';
import { useForm } from '~/hooks';

/**
 * Types/Interfaces
*/

export interface ForgotPasswordProps {
  
}

/**
 * Locals
*/

const ForgotPasswordContext = React.createContext<ForgotPasswordFormContext>(undefined);

/**
 * Exports
*/

export function ForgotPassword(props:ForgotPasswordProps) {
  /** Hooks **/
  
  const form = useForm();
  
  /** States **/

  const [ isSuccess, setIsSuccess ] = useState<boolean>();
  
  /** Side-Effects **/

  useEffect(() => form.clearErrors, []);
  
  /** Event Handlers **/
  
  /**
   * @return {void}
   */
  const handleSuccess = (response):void => {
    setIsSuccess(true);
  };
  
  /**
   * @return {void}
   */
  const handleSubmit = (values:ForgotPasswordFields, formik:FormikHelpers<ForgotPasswordFields>):void => {
    Recovery.store(values);
  };
  
  /** Output **/
  
  return (
    <ForgotPasswordContext.Provider value={{  }}>
      <WelcomeGuestLayout>
        <View tailwind='flex-auto'>
          <View tailwind='items-center mt-4'>
            <FaIcon name='info-circle' size={ 64 } />
          </View>
          <View tailwind='m-4 p-4 rounded-xl bg-gray-200'>
            <Text tailwind='font-bold text-center text-lg'>
              Can't access your account?
            </Text>
            <Text tailwind='text-center text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacinia nulla. Ut et porta orci. Morbi
              consectetur est mattis neque vulputate, vitae placerat velit pulvinar.
            </Text>
          </View>
        </View>
        <ForgotPasswordForm
          context={ ForgotPasswordContext }
          onSubmit={ handleSubmit }
        />
      </WelcomeGuestLayout>
    </ForgotPasswordContext.Provider>
  );
}
