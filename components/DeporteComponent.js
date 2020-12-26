import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Linking} from "react-native";
import { Card, Divider } from "react-native-elements";
import { normalize } from "./utils/utils";


export default function DeporteComponent() {

  return (
    <> 
    
    <View style={styles.container}>
    
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
    fontSize: normalize(16),
    textAlign:"center",
    marginBottom:10,
  },
  baseTextList: {
    fontSize: normalize(16),
    textAlign:"center",
    backgroundColor:'#2ECC71',
    margin:2
    
  },
  baseTextTitle: {
    marginTop:'2%',
    marginBottom:'2%',
    fontSize: normalize(16),
    fontWeight:'bold',
    textAlign:"center"
  },
  buttonShortStyle:{
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: '#1999d0',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    height: '10%',
    borderRadius: 5,
    margin: '2%',
  },
  buttonTextStyleCenter: {
    color: '#FFFFFF',
    textAlignVertical:'center',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: normalize(17),
    marginRight:20,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize: normalize(21),
    fontWeight: "bold",
    textAlign:"center",
    marginBottom:10,
  }
});