import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAward, faBriefcaseMedical, faGraduationCap, faRunning, faUniversity, faUtensils} from '@fortawesome/free-solid-svg-icons';


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
          <Text style={styles.buttonTextStyle}>¿Qué servicios de salud ofrece          la Universidad?</Text>
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
  fontSize: 23,
  textAlign:"center"
},
buttonContainer: {
    justifyContent: "center",
    padding: 10
},
buttonIconSeparatorStyle: {
    backgroundColor: '#1999d0',
    width: 1,
    height: 45,
},
buttonImageShortIconStyle:{
    padding: 5,
  margin: 5,
  marginTop:5,
},
buttonImageIconStyle: {
  padding: 10,
  margin: 5,
  marginTop:10,
},
buttonShortStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#093869',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
},
buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#093869',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    height: 80,
    borderRadius: 5,
    paddingRight:10,
    margin: 4,
},
buttonTextStyle: {
  color: '#FFFFFF',
  marginBottom: 4,
  marginLeft: 10,
  fontSize: 17,
  marginRight:20,
},
container: {
    margin:20,
    textAlignVertical: "center",
    width: "90%", 
    alignSelf:"center"
},
containerHome: {
    margin:180,
    textAlignVertical: "center",
    width: "90%", 
    alignSelf:"center"
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
    backgroundColor: "#ffffff",
    
  },
titleText: {
  fontSize: 21,
  fontWeight: "bold",
  textAlign:"center",
  marginBottom:10,
},
});