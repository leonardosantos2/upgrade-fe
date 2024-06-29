import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { defaultUser, fetchingState, signUpUserErrors, signUpUserInput } from "../atoms/user";
import useSignUpViewModel from "../viewModels/SignUpViewModel";
import { CONFIRMATION_PATH, HOME_PATH, MORE_INFO_PATH } from "../router";
import { User } from "../types/user";

const useSignUpNavigationController = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useRecoilState(signUpUserInput);
  const setErrors = useSetRecoilState(signUpUserErrors);
  const setFetchInfo = useSetRecoilState(fetchingState);

  const { validateUserInfo } = useSignUpViewModel();

  const getNavigationButtonsPath = () => {
    switch (location.pathname) {
      case HOME_PATH:
        return {
          backPath: null,
          nextPath: MORE_INFO_PATH,
        };

      case MORE_INFO_PATH:
        return {
          backPath: HOME_PATH,
          nextPath: CONFIRMATION_PATH,
        };

      case CONFIRMATION_PATH:
        return {
          backPath: MORE_INFO_PATH,
          nextPath: null,
        };

      default:
        return {
          backPath: null,
          nextPath: null,
        };
    };
  };

  const handleBackButtonClick = () => {
    const { backPath } = getNavigationButtonsPath();

    if (backPath) {
      navigate(backPath);
    }
  };

  const handleNextButtonClick = (fieldsToValidate?: (keyof User)[]) => () => {
    const errors = validateUserInfo(user, fieldsToValidate);

    if (Object.values(errors).some((error) => !!error)) {
      setErrors(errors);
    } else {
      const { nextPath } = getNavigationButtonsPath();

      if (nextPath) {
        navigate(nextPath);
      }
    }
  }

  const handleRestartForm = () => {
    setUser(defaultUser);
    setErrors({});
    setFetchInfo({ isFetching: false, error: undefined });
    navigate(HOME_PATH);
  };

  return {
    handleBackButtonClick,
    handleNextButtonClick,
    handleRestartForm,
  };
};

export default useSignUpNavigationController;