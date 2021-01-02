import * as React from "react";
import { TouchableOpacity, View, Text, Linking, ScrollView, Image} from "react-native";
import { Card, Divider } from "react-native-elements";
import { estiloBase } from "../assets/styles/estiloBase";
import { estiloFacultades } from "../assets/styles/estiloFacultades";
import { normalize } from "./utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function DeporteComponent() {
const colorBackgroundItems = '#2ECC71';
const telefonoDeporte = '3834430657';
const wspDeporte = '3834545986'
  return (
    <> 
    
    <ScrollView >
    {Platform.OS === 'ios' && <View style={{marginTop: '5%'}}></View>}
    <Card >
    <Text style={styles.titleText}>Secretaría de Bienestar Universitario y Asuntos estudiantiles</Text>
    <Image
            source={require('../assets/deportes.jpg')}
            style={styles.responsiveImage}></Image>
      

              <View style={{...styleButton.buttonContainer, width:'100%', alignSelf:'center', margin:'5%', flexDirection:'row'}}>
            <TouchableOpacity
              style={{...styleButton.buttonShortStyle, flex:100, marginRight:'5%'}}
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
                <Text style={styleButton.textStyle}>Teléfono</Text>
              </View>
            </TouchableOpacity> 
            <TouchableOpacity
              style={{...styleButton.buttonShortStyle, backgroundColor:'#00bb2d', flex:100}}
              activeOpacity={0.5}
              onPress={() =>
                Linking.openURL(
                  `https://api.whatsapp.com/send?phone=${wspDeporte}`,
                )
              }>
              <View style={{margin:'3%'}}>
              <Icon name="whatsapp" size={normalize(20)} color={'white'}/>
               
              </View>
              <View style={styleButton.buttonTextStyle}>
                <Text style={styleButton.textStyle}>Whatsapp</Text>
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
          <Text style={styles.buttonTextStyle}>Más información</Text>
          </TouchableOpacity>
          <Text style={styles.buttonTextStyle}></Text>
</Card>
      
      
        </ScrollView>

    </>
  );
}
const styles = estiloBase
const styleButton = estiloFacultades