import { faAlignJustify, faArrowLeft, faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Linking, BackHandler } from "react-native";
import { Card, Button, Overlay } from 'react-native-elements'

export default function FacultadExactasComponent({navigation}) {
 
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const toggleOverlay2 = () => {
    setVisible2(!visible2);
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
  <Card.Title style={{fontSize:20, color: '#0F0F0F'}}> <Button icon={<FontAwesomeIcon icon={faArrowLeft} size={14} color="#ffffff" />} buttonStyle={{left:0, position:'relative', width: 20, height:20,  textAlignVertical:'center'}} onPress={() => {navegarAComponente('Facultad de Salud')}}/> Facultad de Exactas <Button icon={<FontAwesomeIcon icon={faArrowRight} size={14} color="#ffffff" />} buttonStyle={{position:'relative', width: 20, height:20,  textAlignVertical:'center'}} onPress={() => {navegarAComponente('Facultad de Tecnologia')}}/></Card.Title>
  <Card.Divider style={{backgroundColor: '#0F0F0F'}}/>
  <Card.Image source={{
            uri: 'http://www.huma.unca.edu.ar/images/rotador_2020/Ingreso_2021.jpg',
          
          }}>
    
    
  </Card.Image>
  <Text style={styles.textCard}>
    La Facultad de Tecnologia sostiene la formación docente a través de las carreras de profesorado. Es una de las facultades con mayor cantidad de carreras de grado y de postgrado y la mayor matrícula de la UNCa.
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
          <Text style={{fontSize:20, fontWeight: 'bold'}}>Facultad de Ciencias Exactas</Text>
          <Text style={styles.textCardTitle}>Dirección</Text>
          <Text style={styles.textCard}>Av. Belgrano 300, San Fernando del Valle de</Text><Text style={styles.textCard}> Catamarca, Catamarca, CP: 4700</Text>
          <Text style={styles.textCardTitle}>Contacto</Text>
          <Text style={styles.textCard}>Tel: +54 383 4420900</Text>
          <Text style={styles.textCard}>multimedios@exactas.unca.edu.ar</Text>
          </View>
      </Overlay>
      <Button
      type="outline"    
      buttonStyle={{borderRadius: 10, margin:5, borderWidth: 1, borderColor: '#093869', backgroundColor: '#FFFFFF'}}
      title='Inscripciones'
      titleStyle={{color:'#093869'}}
      icon={<FontAwesomeIcon icon={faAlignJustify} size={20} color="#093869" style={{position:'absolute', left:10}}/>}
      title='Inscripciones'
      onPress={toggleOverlay2}
      />
      <Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
      <View style={styles.centeredView}>
          <Text style={{fontSize:20, fontWeight: 'bold'}}>Para Inscribirse:</Text>
          <Text style={styles.textCard}>Fotocopia DNI</Text>
          <Text style={styles.textCard}>Partida de Nacimiento Legalizada</Text>
          <Text style={styles.textCard}>Título secundario (provisoriamente Constancia de terminación de estudios)</Text>
          <Text style={styles.textCard}>Certificado de Domicilio</Text>
          <Text style={styles.textCard}>Fotos carnet de 4x4 (cuatro)</Text>
          <Text style={styles.textCard}>Formulario de Inscripción</Text>
          <Text style={styles.textCard}>Enviar por E-mail a: inscripcion@exactas.unca.edu.ar</Text>
          </View>
      </Overlay>
    <Button
      
      
      buttonStyle={{borderRadius: 10, margin:5, borderColor:'#0F0F0F', borderWidth:1}}
      title='Ver carreras disponibles'
      onPress={() => navegarAComponente('CarrerasExactas') }
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