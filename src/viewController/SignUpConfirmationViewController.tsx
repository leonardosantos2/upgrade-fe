import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { signUpUserInput } from "../atoms/user";
import useSignUpViewModel from "../viewModels/SignUpViewModel";
import { ERROR_PATH, SUCCESS_PATH } from "../router";

const useSignUpConfirmationViewController = () => {
  const navigate = useNavigate();
  const {
    error: fetchingError,
    isFetching,
    getFieldExtraInfo,
    submitUser,
    validateUserInfo,
  } = useSignUpViewModel();

  const [user] = useRecoilState(signUpUserInput);

  const handleSubmitForm = async () => {
    const errors = validateUserInfo(user);

    if (Object.values(errors).length) {
      navigate(ERROR_PATH);
    }

    const userResponse = await submitUser(user);
    if (userResponse === null || !userResponse.success) {
      navigate(ERROR_PATH);
    } else {
      navigate(SUCCESS_PATH);
    }
  };

  useEffect(() => {
    if (fetchingError) {
      navigate(ERROR_PATH);
    }
  }, [fetchingError]);

  return {
    isFetching,
    user,
    getFieldExtraInfo,
    handleSubmitForm,
  };
};

export default useSignUpConfirmationViewController;