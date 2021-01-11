import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
  BackHandler,
  Alert,
  Animated
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRoute} from '@fortawesome/free-solid-svg-icons';
import { Platform } from 'react-native';
import { imagenes } from './facultades/InformacionApp';
import { ScrollView } from 'react-native';

export default function HomeComponent({navigation}) {


  const springValue  = useRef(new Animated.Value(1.1)).current 
  const fadeAnim  = useRef(new Animated.Value(0)).current 
  useEffect(() => {
    Animated.spring(
      springValue ,
      {
        toValue: 1,
        friction: 1,
        useNativeDriver: true
      }
    ).start();
    
  }, [springValue])
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
    
  }, [fadeAnim])
  const iniciarRecorrido = () => {
    navigation.navigate('Preguntas');
  };

  const backAction = () => {
    Alert.alert('Atención!', 'Estas seguro que deseas cerrar la aplicación?', [
      {
        text: 'Cancelar',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'Cerrar app', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <View style={{marginTop: '10%'}}></View>}
        
        <Text style={styles.titleText}> Conociendo la</Text>
        <Animated.View style={{...styles.imageView, opacity: fadeAnim }}
        >
          <Image
            source={{uri: imagenes.imagenHome}}
            style={styles.image}
          />
        </Animated.View>
        <Animated.View style={{...styles.containerButton, transform: [{scale: springValue}] }}
        >
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => iniciarRecorrido()}>
            <View style={styles.buttonImageIconStyle}>
              <FontAwesomeIcon icon={faRoute} size={40} color="white" />
            </View>

            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>Iniciar recorrido</Text>
          </TouchableOpacity>
        </Animated.View>

        <Text
          style={styles.footerText}
          onPress={() => Linking.openURL('http://www.unca.edu.ar/')}>
          {' '}
          www.unca.edu.ar
        </Text>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  buttonIconSeparatorStyle: {
    backgroundColor: '#1999d0',
    width: 1,
    height: '80%',
  },
  buttonImageIconStyle: {
    padding: '3%',
    margin: '4%',
    marginTop: '5%',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#093869',
    borderWidth: 1,
    borderColor: '#0F0F0F',
    width: '80%',
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    flex:1,
    textAlign:'center',
    fontSize: RFValue(19, 580),
    fontFamily: 'GoogleSans-Regular',    
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  containerButton: {
    flex:80,
    height:'10%',
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    fontSize: RFValue(19, 580),
    fontFamily: 'GoogleSans-Regular',    
    bottom: 0,
    marginBottom: '10%',
    color: '#093869',
  },
  image: {
    width: '92%',
    height: '45%',
    resizeMode: 'center',
    marginLeft: '4%',
    marginRight: '4%',
  },
  titleText: {
    color: '#0F0F0F',
    marginTop: '5%',
    fontSize: RFValue(23, 580),
    textAlign: 'center',
    fontFamily: 'KeepCalm-Medium',    
  },
});
