import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAward, faBriefcaseMedical, faGraduationCap, faRunning, faUniversity, faUtensils} from '@fortawesome/free-solid-svg-icons';
import { normalize } from "./utils/utils";


export default function PreguntasComponent({navigation}) {

  return (
    <> 
    
    
    <View style={styles.container}>
    <Text style={styles.titleText}>Preguntas Frecuentes</Text>
    <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navigation.navigate('Carreras') }>
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faGraduationCap} size={40} color={"white"} /></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>¿Qué carreras puedo estudiar?</Text>
        </TouchableOpacity>
    <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navigation.navigate('Becas') }>
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faAward} size={40}  color={"white"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>¿Qué becas hay disponibles?</Text>
        </TouchableOpacity>
    <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navigation.navigate('Deporte') }>
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faRunning} size={40} color={"white"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>¿Puedo hacer deporte en la Universidad?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navigation.navigate('Salud') }>
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faBriefcaseMedical} size={40} color={"white"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>¿Qué servicios de salud ofrece la Universidad?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navigation.navigate('MapaUniversidad') }>
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faUniversity} size={40} color={"white"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Mapa de la universidad</Text>
        </TouchableOpacity>
       
       </View>

    
    </>
  );
}

const styles = StyleSheet.create({
  baseText: {
  fontSize: normalize(23),
  fontFamily: 'GoogleSans-Regular',
  textAlign:"center"
},
buttonContainer: {
    justifyContent: "center",
},
buttonIconSeparatorStyle: {
    backgroundColor: '#1999d0',
    width: 1,
    height: '80%',
},
buttonImageIconStyle: {
  padding: '2%',
  margin: '2%',
  marginTop:'2%',
},
buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#093869',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    height: '14%',
    borderRadius: 5,
    margin:'2%',
},
buttonTextStyle: {
  color: '#FFFFFF',
  marginLeft: '3%',
  fontSize: normalize(17),
  fontFamily: 'appFont',
  flex:1,
  textAlign:'center'
},
container: {
    margin: '2%',
    textAlignVertical: "center",
    width: "90%", 
    alignSelf:"center"
},
titleText: {
  fontSize: normalize(21),
  fontFamily: 'titleFont',
  textAlign:"center",
  marginBottom:'4%',  
  marginTop:'2%',
},
});