import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {Ionicons} from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';





const CustomDrawer = props => {
  const navigation = useNavigation()


  const handleSignOut = () => {
    
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FF7E00'}}>
          
          <ImageBackground
          source={require('../../assets/menu-bg.jpeg')}
          style={{padding: 20}}>

          <Image
            source={require('../../assets/user-profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
         
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
            }}>
            Email: shazaniyu@gmail.com
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                marginRight: 5,
              }}>
             
            </Text>
          </View>

          {/**close imgb */}
          </ImageBackground>
       
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Ionicons name="exit-outline" size={22} /> */}
    
              <Button title='Log Out' color='#FF7E00' onPress={handleSignOut}></Button>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;