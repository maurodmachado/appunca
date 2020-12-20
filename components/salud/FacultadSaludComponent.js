import { faAlignJustify, faArrowLeft, faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Linking, BackHandler } from "react-native";
import { Card, Button, Overlay } from 'react-native-elements'

export default function FacultadSaludComponent({navigation}) {
 
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
  <Card.Title style={{fontSize:20, color: '#0F0F0F'}}> <Button icon={<FontAwesomeIcon icon={faArrowLeft} size={14} color="#ffffff" />} buttonStyle={{left:0, position:'relative', width: 20, height:20,  textAlignVertical:'center'}} onPress={() => {navegarAComponente('Facultad de Derecho')}}/> Facultad de Salud <Button icon={<FontAwesomeIcon icon={faArrowRight} size={14} color="#ffffff" />} buttonStyle={{position:'relative', width: 20, height:20,  textAlignVertical:'center'}} onPress={() => {navegarAComponente('Facultad de Exactas')}}/></Card.Title>
  <Card.Divider style={{backgroundColor: '#0F0F0F'}}/>
  <Card.Image source={{
            uri: 'http://www.huma.unca.edu.ar/images/rotador_2020/Ingreso_2021.jpg',
          
          }}>
    
    
  </Card.Image>
  <Text style={styles.textCard}>
    La Facultad de Ciencias de la Salud sostiene la formación docente a través de las carreras de profesorado. Es una de las facultades con mayor cantidad de carreras de grado y de postgrado y la mayor matrícula de la UNCa.
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
          <Text style={{fontSize:20, fontWeight: 'bold'}}>Facultad de Ciencias de la Salud</Text>
          <Text style={styles.textCardTitle}>Dirección</Text>
          <Text style={styles.textCard}>Ayacucho 774, San Fernando del Valle de</Text><Text style={styles.textCard}>Catamarca, Catamarca, CP: 4700</Text>
          <Text style={styles.textCardTitle}>Contacto</Text>
          <Text style={styles.textCard}>Mesa de Entradas: facsal@salud.unca.edu.ar</Text>
          <Text style={styles.textCard}>Departamento Alumnos: alumnos@salud.unca.edu.ar </Text>
          <Text style={styles.textCard}>Secretaria Académica: academica@salud.unca.edu.ar</Text>
          </View>
      </Overlay>
      <Button  
      type="outline"    
      buttonStyle={{borderRadius: 10, margin:5, borderWidth: 1, borderColor: '#093869', backgroundColor: '#FFFFFF'}}
      title='Inscripciones'
      titleStyle={{color:'#093869'}}
      icon={<FontAwesomeIcon icon={faAlignJustify} size={20} color="#093869" style={{position:'absolute', left:10}}/>}
      onPress={() => Linking.openURL('http://www.salud.unca.edu.ar/index.php?option=com_content&view=article&id=1594&catid=12')}
       
      />
      
    <Button
      
      
      buttonStyle={{borderRadius: 10, margin:5, borderColor:'#0F0F0F', borderWidth:1}}
      title='Ver carreras disponibles'
      onPress={() => navegarAComponente('CarrerasSalud') }
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