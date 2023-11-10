import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Global from "../../globalstyles/style"
import Button from '../../components/button'

export default function Splash() {
const navigation = useNavigation()
  

  return (
    <View style={[Global.container]} >
      
        <Image source={require('../../assets/download2.jpg')} style={{width:100, height:100}}/>


        {/* view containing button */}
        <View style={styles.button1}>
        <Button title='Get Started' onPress={()=> navigation.navigate('RegisterScreen')}/>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
 
  button1:{
   margin: 30,
   width:200
  }
});
