import { faAlignJustify, faArrowLeft, faArrowRight, faCalculator, faChevronRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Linking, BackHandler, Image, TouchableOpacity } from "react-native";
import { Card, Button, Overlay } from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";
import { estiloFacultades } from "../../assets/styles/estiloFacultades";
import { normalize } from "../utils/utils";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FacultadHumanidadesComponent({navigation}) {
 
  const [visible, setVisible] = useState(false);
  const telefonoHumanidades = '3834422708';
  const emailHumanidades = 'humanidades@unca.edu.ar';
  const wspHumanidades = '543834545986';
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
    <View style={styles.container}>
   <Card containerStyle={styles.cardContainer}>
  <View>
  <Card.Title> 
<Button icon={<FontAwesomeIcon icon={faArrowLeft} size={normalize(16)} color="#ffffff" />} 
buttonStyle={{width: '100%', height:undefined, marginRight:5}} onPress={() => {navegarAComponente('Facultad de Tecnologia')}}/> 

<Text style={styles.textCartTitleStyle}>Facultad de Humanidades</Text> 

<Button icon={<FontAwesomeIcon icon={faArrowRight} size={normalize(16)} color="#ffffff" />} 
buttonStyle={{width: '100%', height:undefined, marginLeft:5}} onPress={() => {navegarAComponente('Escuela de Arqueologia')}}/>
</Card.Title>


  </View>
  <Card.Divider style={{backgroundColor: '#0F0F0F'}}/>
  <Image source={{
            uri: 'http://www.huma.unca.edu.ar/images/rotador_2020/Ingreso_2021.jpg',
            }}
            style={styles.responsiveImage}>
              
  </Image>
  <ScrollView style={{height:'10%'}}>
  <Text style={styles.textCard}>
    La Facultad de Humanidades sostiene la formación docente a través de las carreras de profesorado. 
    Es una de las facultades con mayor cantidad de carreras de grado y de postgrado y la mayor matrícula de la UNCa.
    Es una de las facultades con mayor cantidad de carreras de grado y de postgrado y la mayor matrícula de la UNCa.
    Es una de las facultades con mayor cantidad de carreras de grado y de postgrado y la mayor matrícula de la UNCa.
    Es una de las facultades con mayor cantidad de carreras de grado y de postgrado y la mayor matrícula de la UNCa.
    </Text>
    </ScrollView>
   
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortStyle}
          activeOpacity={0.5}
          onPress= {() => navegarAComponente('CarrerasHumanidades') }>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faChevronRight} size={normalize(20)} color={"black"} style={{position:'relative'}}/></View>
            <View style={styles.buttonTextStyle}>
          <Text style={styles.textStyle}>Ver carreras disponibles</Text>
          </View>
        </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortOutlineStyle}
          activeOpacity={0.5}          
          onPress={toggleOverlay}>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faPhone} size={normalize(20)} color={"#1999d0"} style={{position:'relative'}}/></View>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      <View style={styles.centeredView}>
          <Text style={{fontSize:20, fontWeight: 'bold'}}>Facultad de Humanidades</Text>
         
          <Text style={styles.textCardTitle}>Dirección</Text>
          <Text style={styles.textCard}>Av. Belgrano 300, San Fernando del Valle de</Text>
          <Text style={styles.textCard}>Catamarca, Catamarca, CP: 4700</Text>
          <Text style={styles.textCardTitle}>Contacto</Text>
          <View style={styles.buttonWhitIcon}>
          <Icon.Button name="envelope" backgroundColor="#1999d0" onPress={()=> Linking.openURL(`mailto: ${emailHumanidades}`)}>Email</Icon.Button>
          </View>
          <View style={styles.buttonWhitIcon}>
          <Icon.Button name="phone" backgroundColor="#1999d0" onPress={()=> Linking.openURL(`tel: ${telefonoHumanidades}`)}>Telefono</Icon.Button>     
          </View>
          <View style={styles.buttonWhitIcon}>
          <Icon.Button name="whatsapp" backgroundColor="#00bb2d" onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=${wspHumanidades}`)}> Whatsapp</Icon.Button>
          </View>
        
          </View>
      </Overlay>
            <View style={styles.buttonTextStyle}>
          <Text style={styles.textOutlineStyle}>Contacto</Text>
          </View>
        </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortOutlineStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('http://preinscripcion.unca.edu.ar/')}>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faAlignJustify} size={normalize(20)} color={"#1999d0"}/>
         
            </View>
            <View style={styles.buttonTextStyle}>
            <Text style={styles.textOutlineStyle}>Inscripción</Text>
            </View>
         
        </TouchableOpacity>
    </View>
</Card>
</View>
    </>
  );
}

const styles = estiloFacultades;