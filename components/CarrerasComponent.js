import { faAtom, faBalanceScale, faCalculator, faGlobeAmericas, faHeartbeat, faLaptop, faSearch, faTractor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { normalize } from "./utils/utils";

export default function CarrerasComponent({navigation}) {

  const navegarAComponent = (nombreFacultad) => {
    navigation.navigate(nombreFacultad);
  }

  return (
    <> 
    <View style={styles.container}>
    <View style={{flex:80}}>
    <Text style={styles.titleText}>¿Qué facultad querés recorrer?</Text>
    </View>
    {/* Facultad de Tecnologia */}
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortStyleTecnologia}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('Facultad de Tecnologia') }>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faLaptop} size={normalize(24)} color={"black"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyleBlack}>Facultad de Tecnología y Ciencias Aplicadas</Text>
        </TouchableOpacity>
    </View>

     {/* Facultad de Humanidades */}
     <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortStyleHumanidades}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('Facultad de Humanidades') }>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faGlobeAmericas} size={normalize(24)} color={"black"}/></View>
         
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
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faSearch} size={normalize(24)} color={"black"}/></View>
         
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
        <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faCalculator} size={normalize(24)} color={"black"}/></View>
     
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyleBlack}>Facultad de Ciencias Económicas</Text>
    </TouchableOpacity>
</View>

    {/* Facultad de Agrarias */}
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortStyleAgrarias}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('Facultad de Agrarias') }>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faTractor} size={normalize(24)} color={"black"}/></View>
         
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
        <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faBalanceScale} size={normalize(24)} color={"black"}/></View>
     
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyleBlack}>Facultad de Derecho </Text>
    </TouchableOpacity>
</View>

{/* Facultad de Ciencias de la Salud */}
<View style={styles.buttonContainer}>
  <TouchableOpacity
      style={styles.buttonShortStyleSalud}
      activeOpacity={0.5}
      onPress= {() => navegarAComponent('Facultad de Salud') }>
        <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faHeartbeat} size={normalize(22)} color={"black"}/></View>
     
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
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faAtom}size={normalize(22)} color={"black"}/></View>
         
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyleBlack}>Facultad de Ciencias Exactas</Text>
        </TouchableOpacity>

    </View>
    </View>

    </>
  );
}
const styles = StyleSheet.create({
buttonContainer: {
  flex:80,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'5%',
    marginRight:'5%',
    marginBottom:'2%'
},
buttonIconSeparatorStyle: {
  backgroundColor: '#0F0F0F',
  width: 1,
  height: '80%'
},
buttonImageShortIconStyle: {
  margin: '4%',
},
buttonStyle: {
  
  backgroundColor: '#093869',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  borderRadius: 5,
  
},
buttonTextStyleBlack: {
  flex:1,
  color: '#0F0F0F',
  marginLeft: '2%',
  marginRight: '2%',
  fontSize: normalize(16),
  textAlign:'center',
},
buttonShortStyleHumanidades:{
  flexDirection: 'row', 
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#C44830',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  width: '80%',
  height:'90%',
  borderRadius: 5,
},
buttonShortStyleSalud:{
  flexDirection: 'row', 
  flex: 1,
  alignItems: 'center',
  backgroundColor:'#b90000',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  width: '80%',
  height:'90%',
  borderRadius: 5,
},
buttonShortStyleDerecho:{
  flexDirection: 'row', 
  flex: 1,
  alignItems: 'center',
  backgroundColor:'#DD7F28',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  width: '80%',
  height:'90%',
  borderRadius: 5,
},
buttonShortStyleTecnologia:{
  flexDirection: 'row', 
  flex: 1,
  alignItems: 'center',
  backgroundColor:'#00CCCC',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  width: '80%',
  height:'90%',
  borderRadius: 5,
},
buttonShortStyleArqueologia:{
  flexDirection: 'row', 
  flex: 1,
  alignItems: 'center',
  backgroundColor:'#FFFF33',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  width: '80%',
  height:'90%',
  borderRadius: 5,
},
buttonShortStyleExactas:{
  flexDirection: 'row', 
  flex: 1,
  alignItems: 'center',
  backgroundColor:'#2b99ff',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  width: '80%',
  height:'90%',
  borderRadius: 5,
},
buttonShortStyleAgrarias:{
  flexDirection: 'row', 
  flex: 1,
  alignItems: 'center',
  backgroundColor:'#8AB33D',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  width: '80%',
  height:'90%',
  borderRadius: 5,
},
buttonShortStyleEconomicas:{
  flexDirection: 'row', 
  flex: 1,
  alignItems: 'center',
  backgroundColor:'#9e4f8c',
  borderWidth: 2,
  borderColor: '#0F0F0F',
  width: '80%',
  height:'90%',
  borderRadius: 5,
},
container: {
  backgroundColor: '#FFFFFF',
  flex: 1,
},
titleText: {
  fontSize: normalize(20),
  fontWeight: "bold",
  textAlign:"center",
  paddingTop:15
},
});
