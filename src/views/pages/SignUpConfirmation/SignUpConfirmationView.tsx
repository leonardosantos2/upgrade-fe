import SignUpNavigationButton from "../../general/SignUpNavigationButton";
import SignUpSubmitButton from "../../general/SignUpSubmitButton";
import UserInfo from "../../general/UserInfo";

const SignUpConfirmationView = () => {
  return (
    <>
      <h1>{"Confirmation"}</h1>

      <UserInfo />

      <SignUpNavigationButton navigationDirection="back" />
      <SignUpSubmitButton />
    </>
  );
};

export default SignUpConfirmationView;