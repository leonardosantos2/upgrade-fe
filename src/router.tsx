import { createBrowserRouter, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [{
  path: '/',
  Component: () => (<h1>{'Welcome to Upgrade challenge'}</h1>),
}, {
  path: '/more-info',
  Component: () => (<h1>{'More info page'}</h1>),
}, {
  path: '/confirmation',
  Component: () => (<h1>{'Confirmation page'}</h1>),
}, {
  path: '/success',
  Component: () => (<h1>{'Success page'}</h1>),
}, {
  path: '/error',
  Component: () => (<h1>{'Error page'}</h1>),
}];

const router = createBrowserRouter(routes);

export default router;