import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomDrawer from "../components/customdrawer/customdrawer";
import Bottomtab from "./bottomNavigator";



const Drawer = createDrawerNavigator();



function SideTab(){

    
    return(
        <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
            headerShown: true,
            drawerActiveBackgroundColor: '#FF7E00',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
              marginLeft: -25,
              fontSize: 15,
              fontFamily: 'normal'
            },
            
        }}
        >
            <Drawer.Screen 
            
            name="HomeScreen"
            component={Bottomtab} 
            options={{
                drawerIcon: ({color}) => (
                    <FontAwesome5 name="home" size={22} color={color} />
                  ),
                
                  
            }}
            />

       

            
            </Drawer.Navigator>
    );

}

export default SideTab;
