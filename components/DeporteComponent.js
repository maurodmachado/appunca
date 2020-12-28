import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Linking} from "react-native";
import { Card, Divider } from "react-native-elements";
import { estiloBase } from "../assets/styles/estiloBase";
import { estiloFacultades } from "../assets/styles/estiloFacultades";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function DeporteComponent() {
const colorBackgroundItems = '#2ECC71'
const telefonoDeporte = '3834430657'
  return (
    <> 
    
    <View style={styles.container}>
    
    <Card>
      <Text style={styles.titleText}>Secretaría de Bienestar Universitario y Asuntos estudiantiles</Text>
  <Card.Divider/>
  <View style={{...styleButton.buttonWhitIcon, alignSelf:'center'}}>
                <Icon.Button
                  name="phone"
                  backgroundColor="#1999d0"
                  onPress={() => Linking.openURL(`tel: ${telefonoDeporte}`)}
                  style={{borderWidth:1, borderColor:'black'}}>
                  Telefono
                </Icon.Button>
              </View>
  <Divider/>
      <Text style={styles.baseTextTitle}>Actividades</Text>
      <Text style={{...styles.baseTextList, backgroundColor: colorBackgroundItems}}>Gimnasio pesas - Gimnasia localizada</Text>     
      <Text style={{...styles.baseTextList, backgroundColor: colorBackgroundItems}}>Danzas clásicas - Ritmos</Text>
      <Text style={{...styles.baseTextList, backgroundColor: colorBackgroundItems}}>Aero box - Acrobacia en telas</Text>
      <Text style={{...styles.baseTextList, backgroundColor: colorBackgroundItems}}>Arquería - Defensa personal</Text>
      <Text style={{...styles.baseTextList, backgroundColor: colorBackgroundItems}}>Futbol - Liga universitaria</Text>
      <Text style={{...styles.baseTextList, backgroundColor: colorBackgroundItems}}>Vóley - Liga universitaria</Text>
      <Text style={{...styles.baseTextList, backgroundColor: colorBackgroundItems}}>Hockey - Liga universitaria- Federado</Text>
      <Text style={{...styles.baseTextList, backgroundColor: colorBackgroundItems}}>Fútsal - Liga universitaria</Text>
      <Text style={{...styles.baseTextList, backgroundColor: colorBackgroundItems}}>Básquet - Liga universitaria</Text> 
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
const styles = estiloBase
const styleButton = estiloFacultades