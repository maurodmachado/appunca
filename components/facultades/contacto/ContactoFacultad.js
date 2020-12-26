import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAlignJustify, faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Linking } from 'react-native'
import { Overlay } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { normalize } from '../../utils/utils';
import { estiloFacultades } from '../../../assets/styles/estiloFacultades';

export default function ContactoFacultad({facultad}) {
    console.log(facultad);

    const {nombreCompleto, telefono, email, direccion, wsp } = facultad;
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
      setVisible(!visible);
    };
    return (
        <>
            <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortOutlineStyle}
          activeOpacity={0.5}          
          onPress={toggleOverlay}>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faPhone} size={normalize(20)} color={"#1999d0"} style={{position:'relative'}}/></View>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      <View style={styles.centeredView}>
          <Text style={{fontSize:20, fontWeight: 'bold'}}>{nombreCompleto}</Text>
         
          <Text style={styles.textCardTitle}>Dirección</Text>
          <Text style={styles.textCard}>{direccion}, San Fernando del Valle de</Text>
          <Text style={styles.textCard}>Catamarca, Catamarca, CP: 4700</Text>
          <Text style={styles.textCardTitle}>Contacto</Text>
          <View style={styles.buttonWhitIcon}>
          <Icon.Button name="envelope" backgroundColor="#1999d0" onPress={()=> Linking.openURL(`mailto: ${email}`)}>Email</Icon.Button>
          </View>
          <View style={styles.buttonWhitIcon}>
          <Icon.Button name="phone" backgroundColor="#1999d0" onPress={()=> Linking.openURL(`tel: ${telefono}`)}>Telefono</Icon.Button>     
          </View>
          <View style={styles.buttonWhitIcon}>
          <Icon.Button name="whatsapp" backgroundColor="#00bb2d" onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=${wsp}`)}>Whatsapp</Icon.Button>
          </View>
          </View>
      </Overlay>
            <View style={styles.buttonTextStyle}>
          <Text style={styles.textOutlineStyle}>Contacto</Text>
          </View>
        </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.buttonShortOutlineStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('http://preinscripcion.unca.edu.ar/')}>
            <View style={styles.buttonImageShortIconStyle}><FontAwesomeIcon icon={faAlignJustify} size={normalize(20)} color={"#1999d0"}/>
         
            </View>
            <View style={styles.buttonTextStyle}>
            <Text style={styles.textOutlineStyle}>Inscripción</Text>
            </View>
         
        </TouchableOpacity>
    </View>
        </>
    )
}

const styles = estiloFacultades;