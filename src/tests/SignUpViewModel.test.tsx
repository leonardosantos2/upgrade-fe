import { renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import useSignUpViewModel from "../viewModels/SignUpViewModel";
import { User } from "../types/user";
import { NAME_MIN_LENGTH, PASSWORD_MIN_LENGTH } from "../constants";

describe('useSignUpViewModel', () => {
  describe('validateUserField', () => {
    test('should return undefined when email is valid', () => {
      const { result } = renderHook(() => useSignUpViewModel(), {
        wrapper: RecoilRoot
      });

      const response = result.current.validateUserField('email', 'abc@def.com');
      expect(response).toBeUndefined();
    });

    test('should return error message when email is invalid', () => {
      const { result } = renderHook(() => useSignUpViewModel(), {
        wrapper: RecoilRoot
      });

      const response = result.current.validateUserField('email', 'abc');
      expect(response).toBe('Invalid email.');
    });
  });

  describe('validateUserInfo', () => {
    test('should return errors for all fields when all fields are invalid', () => {
      const { result } = renderHook(() => useSignUpViewModel(), {
        wrapper: RecoilRoot
      });

      const user: User = {
        email: 'wrongemail',
        name: '',
        password: '123',
        terms: false,
        color: undefined,
      };

      const response = result.current.validateUserInfo(user);
      expect(response).toEqual({
        email: 'Invalid email.',
        name: `A minimum ${ NAME_MIN_LENGTH } characters name is required.`,
        password: `A minimum ${ PASSWORD_MIN_LENGTH } characters password is required.`,
        terms: 'You must accept the terms.',
        color: 'Color is required.',
      });
    });
  });
});;