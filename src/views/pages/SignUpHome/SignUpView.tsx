import NavigationButton from "../../general/SignUpNavigationButton";
import SignUpInputField from "../../general/SignUpInputField";
import { PageWrapper } from "../../../styles/page";

const SignUpView = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default SignUpView;