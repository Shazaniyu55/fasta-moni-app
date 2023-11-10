import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/login';
import Splash from '../screens/splashscreen/splash';
import SideTab from '../navigator/sideNavigator';
import RegistrationScreen from '../screens/register/register';
import HomeScreen from '../screens/home/home';

const stack = createNativeStackNavigator()


export default function MyStack() {

  return (
    <stack.Navigator initialRouteName='Splash'>
    <stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
      <stack.Screen name='RegisterScreen' component={RegistrationScreen} options={{headerShown:false}}/>
      <stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
      <stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>


    </stack.Navigator>

  );
}


