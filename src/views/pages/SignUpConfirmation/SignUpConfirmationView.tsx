import { NavigationWrapper } from "../../../styles/buttons";
import { PageWrapper } from "../../../styles/page";
import SignUpNavigationButton from "../../general/SignUpNavigationButton";
import SignUpSubmitButton from "../../general/SignUpSubmitButton";
import UserInfo from "../../general/UserInfo";

const SignUpConfirmationView = () => {
  return (
    <PageWrapper>
      <h1>{"Confirmation"}</h1>

      <UserInfo />

      <NavigationWrapper>
        <SignUpNavigationButton navigationDirection="back" />
        <SignUpSubmitButton />
      </NavigationWrapper>
    </PageWrapper>
  );
};

export default SignUpConfirmationView;