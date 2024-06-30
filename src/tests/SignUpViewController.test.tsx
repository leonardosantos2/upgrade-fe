import { act, renderHook } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import useSignUpViewController from "../viewController/SignUpViewController";
import { NAME_MIN_LENGTH } from "../constants";

describe('useSignUpViewController', () => {
  describe('handleFieldChange', () => {
    test('should update name fieldInfo to new value', () => {
      const wrapper = ({ children }: { children?: React.ReactNode }) => (
        <RecoilRoot>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </RecoilRoot>
      );

      const { result } = renderHook(() => useSignUpViewController('name'), {
        wrapper,
      });

      act(() => {
        result.current.handleFieldChange()({ target: { value: 'Leo' } } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.fieldInfo.value).toBe('Leo');
    });
  });

  describe('handleFieldOnBlur', () => {
    test('should update name error after an invalid name is typed', () => {
      const wrapper = ({ children }: { children?: React.ReactNode }) => (
        <RecoilRoot>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </RecoilRoot>
      );

      const { result } = renderHook(() => useSignUpViewController('name'), {
        wrapper,
      });

      act(() => {
        result.current.handleFieldOnBlur({ target: { value: '' } } as React.FocusEvent<HTMLInputElement>);
      });

      expect(result.current.fieldInfo.error).toBe(`A minimum ${ NAME_MIN_LENGTH } characters name is required.`);
    });
  });
});