import { FormSimulatorPage } from './FormSimulatorPage';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/FormSimulatorPage',
  component: FormSimulatorPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};

/**
 * Variações
 */
export const Default = () => <FormSimulatorPage />;
