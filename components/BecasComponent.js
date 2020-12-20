import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBus, faDollarSign, faGlobeAmericas, faHome, faUtensils,} from '@fortawesome/free-solid-svg-icons';
import { Card } from "react-native-elements";


export default function BecasComponent({navigation}) {

  const navegarAComponent = (route) => {
    navigation.navigate(route)
  }

  return (
    <> 
    
    <View style={styles.contenedor}>
    

    <Card>
  <Card.Title><Text style={styles.titleText}>Becas disponibles</Text></Card.Title>
  <Card.Title><Text style={styles.baseText}>Tenemos para ofrecerte:</Text></Card.Title>
  <Card.Divider/>
      
         <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('BecaAyudaEconomica') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faDollarSign} size={30} color={"white"}/></View>
            <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas de ayuda económica</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('BecaComedor') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faUtensils} size={30} color={"white"}/></View>
            <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas de Comedor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('BecaTransporte') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faBus} size={30} color={"white"}/></View>
            <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas de Transporte</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5} 
          onPress= {() => navegarAComponent('BecaResidencia') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faHome} size={30} color={"white"}/></View>
            <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas de Residencia Univer.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('BecaCrisco') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faGlobeAmericas} size={30} color={"white"}/></View>
         <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}> Becas CRISCO</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.buttonShortStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('http://www.unca.edu.ar/pagina-1-becas-de-ayuda-econmica.html')}
          >
          <Text style={styles.buttonTextStyleCenter}> Y muchas más...</Text>
          </TouchableOpacity>
  
</Card>
      
      
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
      padding: 5
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
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: '#1999d0',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
      height: 60,
      borderRadius: 5,
      margin: 4,
  },
  buttonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#093869',
      borderWidth: 1, 
      borderColor: '#0F0F0F',
      height: 60,
      borderRadius: 5,
      margin: 4,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 17,
    marginRight:20,
  },
  buttonTextStyleCenter: {
    color: '#FFFFFF',
    textAlignVertical:'center',
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
  }
});