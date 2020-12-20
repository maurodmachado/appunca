import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity, BackHandler, Alert } from "react-native";


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faRoute} from '@fortawesome/free-solid-svg-icons';


export default function HomeComponent({navigation}) {

  const iniciarRecorrido = () => {
    navigation.navigate('Preguntas')
  }

 useEffect(() => {
    const backAction = () => {
      Alert.alert("Atención!", "Estas seguro que deseas cerrar la aplicación?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Cerrar app", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };
    
  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
}, []);

  return (
    <> 

<View style={styles.contenedor}>
      <Text style={styles.titulo}> Conociendo la</Text>
      <View style={styles.imagen}>
      <Image
          source={require('../assets/logo_main.png')}
          style={{width: 341, height:111, resizeMode:"contain"}}
        />
      </View>
      <View style={styles.containerButton}>
      <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => iniciarRecorrido() }>
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faRoute} size={40} color="white"/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Iniciar recorrido</Text>
        </TouchableOpacity>
        </View>
        

    <View>
    <Text style={styles.footerText} onPress={() => Linking.openURL('http://www.unca.edu.ar/')}> www.unca.edu.ar</Text>
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    buttonIconSeparatorStyle: {
      backgroundColor: '#1999d0',
      width: 1,
      height: 45,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    marginTop:10,
  },
  buttonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#093869',
      borderWidth: 1,
      borderColor: '#0F0F0F',
      width:250,
      height: 80,
      borderRadius: 5,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 20,
    marginRight:10,
  },
  contenedor:{
    backgroundColor:'#FFFFFF',
    flex:1
  },
  containerButton: {
    alignItems:'center',
    marginTop: 50,
    marginBottom: 100,
    textAlignVertical: "center",
    
},
footerText: {
  textAlign:"center",
  fontSize: 19,
  color: "#093869"
},
  header: { 
    flex: 1,   
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
     
  },
  imagen: {
    paddingTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: '#0F0F0F',
    marginTop:40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center'
  }
});