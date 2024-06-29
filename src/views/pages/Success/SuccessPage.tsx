import { PageWrapper } from "../../../styles/page";
import theme from "../../../styles/theme";
import useSignUpNavigationController from "../../../viewController/SignUpNavigationController";
import CheckIcon from "../../icons/check";

const SuccessPage = () => {
  const { handleRestartForm } = useSignUpNavigationController();

  return (
    <PageWrapper>
      <h1>{'Success!'}</h1>
      <CheckIcon
        width={42}
        height={42}
        style={{ fill: theme.colors.primary, margin: 'auto' }}
      />
      <p style={{ textAlign: 'center' }}>
        {"You should receive a confirmation email soon."}
      </p>

      <button type="button" onClick={handleRestartForm}>
        {'Restart'}
      </button>
    </PageWrapper>
  );
};

export default SuccessPage;