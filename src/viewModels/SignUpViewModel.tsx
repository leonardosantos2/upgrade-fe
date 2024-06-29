import { NAME_MIN_LENGTH, PASSWORD_MIN_LENGTH } from "../constants";
import useSignUpModel from "../models/SignUpModel";
import { User } from "../types/user";

const useSignUpViewModel = () => {
  const signUpUtils = useSignUpModel();

  const validateEmail = (email?: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email ?? '') ? undefined : "Invalid email.";
  };

  const validateName = (name?: string) => {
    return name && name.length >= NAME_MIN_LENGTH ? undefined : `A minimum ${ NAME_MIN_LENGTH } characters name is required.`;
  };

  const validatePassword = (password: string) => {
    return password.length >= PASSWORD_MIN_LENGTH ? undefined : `A minimum ${ PASSWORD_MIN_LENGTH } characters password is required.`;
  }

  const validateUserField = (fieldName: keyof User, value?: string | boolean) => {
    switch (fieldName) {
      case "email":
        return typeof value === 'string' ? validateEmail(value) : undefined;
      case "name":
        return typeof value === 'string' ? validateName(value) : undefined;
      case "password":
        return typeof value === 'string' ? validatePassword(value) : undefined;
      case "terms":
        return value ? undefined : "You must accept the terms.";
      case "color":
        return !!value ? undefined : "Color is required.";
      default:
        return undefined;
    }
  };

  const validateUserInfo = (user: User, fieldsToValidate?: (keyof User)[]) => {
    const errors: { [key in keyof User]?: string } = {};

    if (fieldsToValidate?.length) {
      fieldsToValidate.forEach((fieldName) => {
        const error = validateUserField(fieldName, user[fieldName]);
        if (error) {
          errors[fieldName] = error;
        }
      });

      return errors;
    } else {
      Object.keys(user).forEach((key) => {
        const fieldName = key as keyof User;
        const error = validateUserField(fieldName, user[fieldName]);
        if (error) {
          errors[fieldName] = error;
        }
      });
    }

    return errors;
  };

  const getFieldExtraInfo = (field: keyof User, value?: string | boolean) => {
    switch (field) {
      case 'name':
        return {
          type: 'text',
          label: 'First Name',
          valueToDisplay: value,
        };

      case 'email':
        return {
          type: 'text',
          label: 'E-mail',
          valueToDisplay: value,
        };

      case 'password':
        return {
          type: 'password',
          label: 'Password',
          valueToDisplay: '*****',
        };

      case 'color':
        return {
          type: 'select',
          label: 'Favorite Color',
          valueToDisplay: value,
        };

      case 'terms':
        return {
          type: 'checkbox',
          label: 'Accept Terms',
          valueToDisplay: value ? 'Agreed' : 'Not accepted',
        };

      default:
        return {
          type: 'text',
          label: '',
          valueToDisplay: '',
        };
    }
  };

  return {
    ...signUpUtils,
    getFieldExtraInfo,
    validateUserField,
    validateUserInfo,
  };
};

export default useSignUpViewModel;