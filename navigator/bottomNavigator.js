import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Edit } from "../screens/edit/edit";
import HomeScreen from "../screens/home/home";

const Tab = createBottomTabNavigator();

function BottomTab(){

    return(

        <Tab.Navigator 
        
        screenOptions={({route})=>({
            tabBarStyle:{backgroundColor: 'rgba(34,36,40,1)'},
            tabBarIcon:({focused,size})=>{
              let iconName;
              if(route.name === 'HomeScreen'){
                iconName = 'home'
                size = focused ? 25 :20
                
          
              }else if(route.name === 'Edit'){
                iconName = "pen"
                size = focused ? 25 :20

              }


              return <FontAwesome5 name={iconName} color="#FF7E00" />
              
            }
            
          })}
        
        >

      <Tab.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{title: "Home", headerShown:false}}
        
        />

      

       

        
        </Tab.Navigator>

    );
    

}

export default BottomTab;