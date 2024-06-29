import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { User } from "../types/user";
import useSignUpViewModel from "../viewModels/SignUpViewModel";
import { signUpUserSelector } from "../atoms/user";
import { useEffect } from "react";
import { ERROR_PATH, MORE_INFO_PATH, SUCCESS_PATH } from "../router";

const useSignUpViewController = (fieldName: keyof User) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [fieldInfo, setFieldInfo] = useRecoilState(signUpUserSelector(fieldName));
  const {
    colors,
    isFetching,
    error: fetchingError,
    getColors,
    getFieldExtraInfo,
    validateUserField,
  } = useSignUpViewModel();

  const handleFieldChange = (validate?: boolean) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = fieldName === 'terms' && 'checked' in e.target ? e.target.checked : e.target.value;

    setFieldInfo((prevState) => ({
      ...prevState,
      value: newValue,
      error: validate ? validateUserField(fieldName, newValue) : prevState.error,
    }));
  };

  const handleFieldOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFieldInfo((prevState) => ({ ...prevState, error: validateUserField(fieldName, e.target.value) }));
  };

  useEffect(() => {
    if (fieldName === 'color' && location.pathname === MORE_INFO_PATH) {
      getColors();
    }
  }, []);

  useEffect(() => {
    if (
      fetchingError &&
      location.pathname !== ERROR_PATH &&
      location.pathname !== SUCCESS_PATH
    ) {
      navigate(ERROR_PATH);
    }
  }, [fetchingError]);

  return {
    colors,
    fieldInfo: {
      ...fieldInfo,
      ...getFieldExtraInfo(fieldName),
    },
    isFetching,
    handleFieldOnBlur,
    handleFieldChange,
  };
};

export default useSignUpViewController;