import { faAlignJustify, faArrowLeft, faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Linking, BackHandler, Image } from "react-native";
import { Card, Button, Overlay } from 'react-native-elements'

export default function FacultadTecnologiaComponent({navigation}) {
 
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const navegarAComponente = (route) => {
    navigation.navigate(route)
  }

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Carreras')
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
   <Card containerStyle={{borderWidth: 1, borderColor:'#0f0f0f'}}>
  <Card.Title style={{fontSize:20, color: '#0F0F0F'}}> <Button icon={<FontAwesomeIcon icon={faArrowLeft} size={14} color="#ffffff" />} buttonStyle={{left:0, position:'relative', width: 20, height:20,  textAlignVertical:'center'}} onPress={() => {navegarAComponente('Facultad de Exactas')}}/> Facultad de Tecnologia <Button icon={<FontAwesomeIcon icon={faArrowRight} size={14} color="#ffffff" />} buttonStyle={{position:'relative', width: 20, height:20,  textAlignVertical:'center'}} onPress={() => {navegarAComponente('Facultad de Humanidades')}}/></Card.Title>
  <Card.Divider style={{backgroundColor: '#0F0F0F'}}/>
  <View style={{
    justifyContent: 'center',
    alignItems: 'center'}}><Image source={require('../../assets/facultad-tecnologia.jpg')} style={{width:600, height:200, resizeMode:'contain'}}/>
  </View>
  <Text style={styles.textCard}>
    La Facultad de Tecnologia y Ciencias Aplicadas forma profesionales en areas técnicas, innovadoras y futuristas.
    </Text>
    
  
      <Button
      buttonStyle={{borderRadius: 10, margin:5, borderWidth: 1, borderColor: '#093869', backgroundColor: '#FFFFFF'}}
      icon={<FontAwesomeIcon icon={faPhone} size={20} color="#093869" style={{position:'absolute', left:10}}/>}
      titleStyle={{color:'#093869'}}
      title='Contacto'
      onPress={toggleOverlay}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      <View style={styles.centeredView}>
          <Text style={{fontSize:20, fontWeight: 'bold'}}>Facultad de Tecnología y</Text><Text style={{fontSize:20, fontWeight: 'bold'}}>Ciencias Aplicadas</Text>
          <Text style={styles.textCardTitle}>Dirección</Text>
          <Text style={styles.textCard}>Maximio Victoria 55, San Fernando del Valle de</Text><Text style={styles.textCard}>Catamarca, Catamarca, CP: 4700</Text>
          <Text style={styles.textCardTitle}>Contacto</Text>
          <Text style={styles.textCard}>Tel: +54 383 4435112</Text>
          <Text style={styles.textCard}>Tel: +54 383 4429666</Text>
          <Text style={styles.textCard}>Tel: +54 383 4453631 - Interno: 104</Text>
          <Text style={styles.textCard}>ingresantes@tecno.unca.edu.ar</Text>
          <Text style={styles.textCard}>Horario de Atención: Lunes a Viernes</Text><Text style={styles.textCard}>de 09:00 a 12:30 hs</Text>
          </View>
      </Overlay>
      <Button  
      type="outline"    
      buttonStyle={{borderRadius: 10, margin:5, borderWidth: 1, borderColor: '#093869', backgroundColor: '#FFFFFF'}}
      title='Inscripciones'
      titleStyle={{color:'#093869'}}
      icon={<FontAwesomeIcon icon={faAlignJustify} size={20} color="#093869" style={{position:'absolute', left:10}}/>}
      onPress={() => Linking.openURL('https://daatecnounca.wordpress.com/ingresantes/')}
       
      />
    <Button
      
      
      buttonStyle={{borderRadius: 10, margin:5, borderColor:'#0F0F0F', borderWidth:1}}
      title='Ver carreras disponibles'
      onPress={() => navegarAComponente('CarrerasTecnologia') }
      />  

 
</Card>
   
    </>
  );
}

const styles = StyleSheet.create({
  textCardTitle:{
    marginTop: 5,
    marginBottom: 5,
    fontSize:16,
    fontWeight: 'bold'
  },
  textCard:{
    marginTop: 5,
    marginBottom: 5,
    fontSize:16,
    
  },
  centeredView: {
    
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});