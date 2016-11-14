import AppContainer from './app/app-container.js';
import ReportContainer from './report/report-container';


const routes = {
  path: '/',
  component: AppContainer,
  childRoutes: [
    { indexRoute: { component: ReportContainer } },
    { path: '/reports', component: ReportContainer },
  ]
}

export default routes;
