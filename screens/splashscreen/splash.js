import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Global from "../../globalstyles/style"

export default function Splash() {
const navigation = useNavigation()
  

  return (
    <View style={[Global.container]} >
      
        <Image source={require('../../assets/download2.jpg')} style={{width:100, height:100}}/>


        {/* view containing button */}
        <View style={styles.button1}>
        <Button title='Get Started' color='#FF7E00' onPress={()=> navigation.navigate('RegisterScreen')}></Button>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
 
  button1:{
   margin: 30,
  }
});
