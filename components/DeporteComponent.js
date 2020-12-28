import * as React from "react";
import { TouchableOpacity, View, Text, Linking, ScrollView} from "react-native";
import { Card, Divider } from "react-native-elements";
import { estiloBase } from "../assets/styles/estiloBase";
import { estiloFacultades } from "../assets/styles/estiloFacultades";
import { normalize } from "./utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


export default function DeporteComponent() {
const colorBackgroundItems = '#2ECC71'
const telefonoDeporte = '3834430657'
  return (
    <> 
    
    <ScrollView >
    
    <Card>
      <Text style={styles.titleText}>Secretaría de Bienestar Universitario y Asuntos estudiantiles</Text>
  <Card.Divider/>

              <View style={{...styleButton.buttonContainer, width:180, alignSelf:'center'}}>
            <TouchableOpacity
              style={{...styleButton.buttonShortStyle}}
              activeOpacity={0.5}
              onPress={() => Linking.openURL(`tel: ${telefonoDeporte}`)}>
              <View style={styleButton.buttonImageShortIconStyle}>
                <FontAwesomeIcon
                  icon={faPhone}
                  size={normalize(20)}
                  color={'white'}
                  style={{position: 'relative'}}
                />
              </View>
              <View style={styleButton.buttonTextStyle}>
                <Text style={styleButton.textStyle}>Telefono</Text>
              </View>
            </TouchableOpacity>
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
      
      
        </ScrollView>

    </>
  );
}
const styles = estiloBase
const styleButton = estiloFacultades