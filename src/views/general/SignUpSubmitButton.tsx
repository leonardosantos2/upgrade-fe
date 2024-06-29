import useSignUpConfirmationViewController from "../../viewController/SignUpConfirmationViewController";
import Spinner from "./Spinner";

const SignUpSubmitButton = () => {
  const {
    isFetching,
    handleSubmitForm,
  } = useSignUpConfirmationViewController();

  return (
    <button type="button" onClick={handleSubmitForm} disabled={isFetching}>
      {isFetching ? <Spinner width="12px" /> : 'Submit'}
    </button>
  );
};

export default SignUpSubmitButton;