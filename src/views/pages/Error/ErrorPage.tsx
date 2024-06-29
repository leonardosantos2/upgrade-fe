import theme from "../../../styles/theme";
import useSignUpNavigationController from "../../../viewController/SignUpNavigationController";
import CancelIcon from "../../icons/cancel";

const ErrorPage = () => {
  const { handleRestartForm } = useSignUpNavigationController();

  return (
    <>
      <h1>{'Error'}</h1>
      <CancelIcon
        width={42}
        height={42}
        style={{ fill: theme.colors.red }}
      />
      <p>{"Uh oh, something went wrong. Please try again later."}</p>

      <button type="button" onClick={handleRestartForm}>
        {'Restart'}
      </button>
    </>
  );
};

export default ErrorPage;