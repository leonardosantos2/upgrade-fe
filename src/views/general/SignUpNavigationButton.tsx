import { User } from "../../types/user";
import useSignUpNavigationController from "../../viewController/SignUpNavigationController";

type SignUpNavigationButtonProps = {
  fieldsToValidate?: (keyof User)[];
  navigationDirection: 'back' | 'next';
};

const SignUpNavigationButton = ({
  fieldsToValidate,
  navigationDirection,
}: SignUpNavigationButtonProps) => {
  const { handleBackButtonClick, handleNextButtonClick } = useSignUpNavigationController();

  return (
    <button
      type="button"
      onClick={
        navigationDirection === 'back' ?
          handleBackButtonClick :
          handleNextButtonClick(fieldsToValidate)
      }
    >
      {navigationDirection}
    </button>
  );
};

export default SignUpNavigationButton;