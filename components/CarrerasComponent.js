import { faAtom, faBalanceScale, faGlobeAmericas, faHeartbeat, faLaptop, faSearch, faTractor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CarrerasComponent({navigation}) {

  const navegarAComponent = (nombreFacultad) => {
    navigation.navigate(nombreFacultad);
  }

  return (
    <> 
    <View style={styles.container}>
    <Text style={styles.titleText}>¿Qué facultad querés recorrer?</Text></View>
    
    {/* Facultad de Tecnologia */}
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortStyleTecnologia}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('Facultad de Tecnologia') }>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faLaptop} size={20} color={"black"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyleBlack}>Fac. de Tecnologia y Cs. Aplicadas</Text>
        </TouchableOpacity>
    </View>

    {/* Facultad de Humanidades */}
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortStyleHumanidades}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('Facultad de Humanidades') }>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faGlobeAmericas} size={20} color={"black"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyleBlack}>Facultad de Humanidades</Text>
        </TouchableOpacity>
    </View>

    {/* Escuela de arqueologia */}
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortStyleArqueologia}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('Escuela de Arqueologia') }>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faSearch} size={20} color={"black"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyleBlack}>Escuela de arqueología</Text>
        </TouchableOpacity>
    </View>

{/* Facultad de Ciencias Economicas */}
<View style={styles.buttonContainer}>
  <TouchableOpacity
      style={styles.buttonShortStyleEconomicas}
      activeOpacity={0.5}
      onPress= {() => navegarAComponent('Facultad de Economicas') }>
        <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faHeartbeat} size={20} color={"black"}/></View>
     
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyleBlack}>Facultad de Ciencias Economicas</Text>
    </TouchableOpacity>
</View>

    {/* Facultad de Agrarias */}
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortStyleAgrarias}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('Facultad de Agrarias') }>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faTractor} size={20} color={"black"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyleBlack}>Facultad de Ciencias Agrarias</Text>
        </TouchableOpacity>
    </View>

{/* Facultad de Derecho */}
<View style={styles.buttonContainer}>
  <TouchableOpacity
      style={styles.buttonShortStyleDerecho}
      activeOpacity={0.5}
      onPress= {() => navegarAComponent('Facultad de Derecho') }>
        <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faBalanceScale} size={20} color={"black"}/></View>
     
      <View style={styles.buttonIconSeparatorStyle} />
      <View ><Text style={styles.buttonTextStyleBlack}>Facultad de Derecho</Text></View>
    </TouchableOpacity>
</View>

{/* Facultad de Ciencias de la Salud */}
<View style={styles.buttonContainer}>
  <TouchableOpacity
      style={styles.buttonShortStyleSalud}
      activeOpacity={0.5}
      onPress= {() => navegarAComponent('Facultad de Salud') }>
        <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faHeartbeat} size={20} color={"black"}/></View>
     
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyleBlack}>Facultad de Ciencias de la Salud</Text>
    </TouchableOpacity>
</View>

    {/* Facultad de Ciencias Exactas */}
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortStyleExactas}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('Facultad de Exactas') }>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faAtom} size={20} color={"black"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyleBlack}>Facultad de Ciencias Exactas</Text>
        </TouchableOpacity>

    </View>


    </>
  );
}
const styles = StyleSheet.create({
  centerButton:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  baseText: {
  fontSize: 23,
  textAlign:"center"
},
buttonContainer: {
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    padding: 10
},
buttonIconSeparatorStyle: {
    backgroundColor: '#0F0F0F',
    width: 2,
    height: 40,
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
    borderWidth: 2,
    borderColor: '#0F0F0F',
    height: 40,
    borderRadius: 5,
},
buttonShortStyleHumanidades:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'#c44830',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  height: 40,
  borderRadius: 5,
},
buttonShortStyleSalud:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'#990000',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  height: 40,
  borderRadius: 5,
},
buttonShortStyleDerecho:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'#DD7F28',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  height: 40,
  borderRadius: 5,
},
buttonShortStyleTecnologia:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'#00CCCC',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  height: 40,
  borderRadius: 5,
},
buttonShortStyleArqueologia:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'#FFFF33',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  height: 40,
  borderRadius: 5,
},
buttonShortStyleExactas:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'#2b99ff',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  height: 40,
  borderRadius: 5,
},
buttonShortStyleAgrarias:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'#8AB33D',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  height: 40,
  borderRadius: 5,
},
buttonShortStyleEconomicas:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'#914f8c',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  height: 40,
  borderRadius: 5,
},
buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#093869',
    borderWidth: 2,
  borderColor: '#0F0F0F',
    height: 80,
    borderRadius: 5,
    margin: 4,
},
buttonTextStyleBlack: {
  color: '#0F0F0F',
  marginBottom: 4,
  marginLeft: 10,
  fontSize: 17,
  textAlign:'center',
  marginRight:20,
},
buttonTextStyleWhite: {
  color: '#FFFFFF',
  marginBottom: 4,
  marginLeft: 10,
  fontSize: 17,
  textAlign:'center',
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
},
});
