import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux"
import {store} from './store/index'
import Mystack from './stackscreens/stack'
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
    </Provider>

  );
}


