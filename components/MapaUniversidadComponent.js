import * as React from "react";
import { View, Text, StyleSheet, Linking, Image} from "react-native";
import { Card } from "react-native-elements";


export default function MapaUniversidadComponent() {

  return (
    <> 
    
    <View style={styles.contenedor}>
    
    <Card>
  <Card.Title><Text style={styles.titleText}>Mapa de la Universidad </Text></Card.Title>
 
  <Card.Divider/>
  <Image
          source={require('../assets/mapaunca.jpg')}
          style={{width: 300, height:400, resizeMode:"contain"}}
        />
</Card>
        </View>

    </>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontSize: 16,
    textAlign:"center",
    marginBottom:10,
  },
  baseTextList: {
    fontSize: 15,
    textAlign:"center",
    backgroundColor:'#1999d0',
    
    margin:2
    
  },
  baseTextTitle: {
    marginTop:10,
    marginBottom:10,
    fontSize: 16,
    fontWeight:'bold',
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