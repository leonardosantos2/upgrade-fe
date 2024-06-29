import { createBrowserRouter, RouteObject } from "react-router-dom";

import SignUpView from "./views/pages/SignUpHome/SignUpView";
import SignUpAditionalInfoView from "./views/pages/SignUpAditionalInfo/SignUpAditionalInfoView";
import SignUpConfirmationView from "./views/pages/SignUpConfirmation/SignUpConfirmationView";
import SuccessPage from "./views/pages/Success/SuccessPage";
import ErrorPage from "./views/pages/Error/ErrorPage";

export const HOME_PATH = '/';
export const MORE_INFO_PATH = '/more-info';
export const CONFIRMATION_PATH = '/confirmation';
export const SUCCESS_PATH = '/success';
export const ERROR_PATH = '/error';
export const TERMS_AND_CONDITIONS_PATH = '/terms-and-conditions';

const routes: RouteObject[] = [{
  path: HOME_PATH,
  Component: () => <SignUpView />,
}, {
  path: MORE_INFO_PATH,
  Component: () => <SignUpAditionalInfoView />,
}, {
  path: CONFIRMATION_PATH,
  Component: () => <SignUpConfirmationView />,
}, {
  path: SUCCESS_PATH,
  Component: () => <SuccessPage />,
}, {
  path: ERROR_PATH,
  Component: () => <ErrorPage />,
}, {
  path: TERMS_AND_CONDITIONS_PATH,
  Component: () => (<h1>{'Terms and Conditions coming soon ...'}</h1>),
}];

const router = createBrowserRouter(routes);

export default router;