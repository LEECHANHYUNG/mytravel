import AddNewTravelButton from '@/client/components/NewTravel/AddNewTravelButton';
import AddNewTravelModal from '@/client/components/NewTravel/AddNewTravelModal';
import store from '@/client/utils/store';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <AddNewTravelButton />
      <AddNewTravelModal />
    </Provider>
  );
}
