import NavigationButton from "../../general/SignUpNavigationButton";
import SignUpInputField from "../../general/SignUpInputField";

const SignUpView = () => {
  return (
    <>
      <h1>{'Sign Up'}</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <SignUpInputField field="name" />
        <SignUpInputField field="email" />
        <SignUpInputField field="password" />

        <NavigationButton
          fieldsToValidate={['name', 'email', 'password']}
          navigationDirection="next"
        />
      </form>
    </>
  );
};

export default SignUpView;