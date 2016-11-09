import App from './app/components/app-component';
import Home from './app/components/app-component-home';
import ReportView from './report/report-component-view';


const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { indexRoute: { component: Home } },
    { path: '/reports', component: ReportView },
  ]
}

export default routes;
