import * as React from "react";
import { View, Text, StyleSheet, Linking} from "react-native";
import { Card, Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function DeporteComponent() {

  return (
    <> 
    
    <View style={styles.contenedor}>
    
    <Card>
  <Card.Title><Text style={styles.titleText}>Secretaría de Bienestar Universitario y Asuntos estudiantiles</Text></Card.Title>
  <Card.Divider/>
  
  <Text style={styles.baseText}>Teléfono: (54) 0383-4430657</Text>
  <Divider/>
      <Text style={styles.baseTextTitle}>Actividades</Text>
      <Text style={styles.baseTextList}>Gimnasio pesas - Gimnasia localizada</Text>     
      <Text style={styles.baseTextList}>Danzas clásicas - Ritmos</Text>
      <Text style={styles.baseTextList}>Aero box - Acrobacia en telas</Text>
      <Text style={styles.baseTextList}>Arquería - Defensa personal</Text>
      <Text style={styles.baseTextList}>Futbol - Liga universitaria</Text>
      <Text style={styles.baseTextList}>Vóley - Liga universitaria</Text>
      <Text style={styles.baseTextList}>Hockey - Liga universitaria- Federado</Text>
      <Text style={styles.baseTextList}>Fútsal - Liga universitaria</Text>
      <Text style={styles.baseTextList}>Básquet - Liga universitaria</Text> 
      <Divider/>
      <TouchableOpacity
          style={styles.buttonShortStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('http://www.unca.edu.ar/pagina-1200-deportes-universitarios-71.html?pagina_=0')}
          >
          <Text style={styles.buttonTextStyleCenter}>Más información</Text>
          </TouchableOpacity>
      
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
    fontSize: 16,
    textAlign:"center",
    backgroundColor:'#2ECC71',
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