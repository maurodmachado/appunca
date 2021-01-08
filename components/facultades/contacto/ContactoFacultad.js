import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAlignJustify, faArrowRight, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Linking} from 'react-native';
import {Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {normalize} from '../../utils/utils';
import {estiloFacultades} from '../../../assets/styles/estiloFacultades';

export default function ContactoFacultad({facultad}) {

  const {nombreCompleto, telefono, email, direccion, wsp} = facultad;
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const [visible2, setVisible2] = useState(false);
  const toggleOverlay2 = () => {
    setVisible2(!visible2);
  };
  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonShortOutlineStyle}
          activeOpacity={0.5}
          onPress={toggleOverlay}>
          <View style={styles.buttonImageShortIconStyle}>
            <FontAwesomeIcon
              icon={faPhone}
              size={normalize(20)}
              color={'#1999d0'}
              style={{position: 'relative'}}
            />
          </View>
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <View style={styles.centeredView}>
              <Text style={styles.textCartTitleStyle}>
                {nombreCompleto}
              </Text>

              <Text style={styles.textCardTitle}>Dirección</Text>
              <Text style={styles.textCard}>
                {direccion}, San Fernando del Valle de Catamarca, Catamarca, CP: 4700
              </Text>
              <Text style={styles.textCardTitle}>Contacto</Text>
              <View style={{...styles.buttonContainer, width:180, alignSelf:'center'}}>
            <TouchableOpacity
              style={{...styles.buttonShortStyle}}
              activeOpacity={0.5}
              onPress={() => Linking.openURL(`mailto: ${email}`)}>
              <View style={styles.buttonImageShortIconStyle}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={normalize(20)}
                  color={'white'}
                  style={{position: 'relative'}}
                />
              </View>
              <View style={styles.buttonTextStyle}>
                <Text style={styles.textStyle}>Email</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{...styles.buttonContainer, width:180, alignSelf:'center'}}>
            <TouchableOpacity
              style={{...styles.buttonShortStyle}}
              activeOpacity={0.5}
              onPress={() => Linking.openURL(`tel: ${telefono}`)}>
              <View style={styles.buttonImageShortIconStyle}>
                <FontAwesomeIcon
                  icon={faPhone}
                  size={normalize(20)}
                  color={'white'}
                  style={{position: 'relative'}}
                />
              </View>
              <View style={styles.buttonTextStyle}>
                <Text style={styles.textStyle}>Teléfono</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{...styles.buttonContainer, width:180, alignSelf:'center'}}>
            <TouchableOpacity
              style={{...styles.buttonShortStyle, backgroundColor:'#00bb2d'}}
              activeOpacity={0.5}
              onPress={() =>
                Linking.openURL(
                  `https://api.whatsapp.com/send?phone=${wsp}`,
                )
              }>
              <View style={{margin: '3%'}}>
              <Icon name="whatsapp" size={normalize(20)} color={'white'}/>
               
              </View>
              <View style={styles.buttonTextStyle}>
                <Text style={styles.textStyle}>Whatsapp</Text>
              </View>
            </TouchableOpacity>
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
          onPress={toggleOverlay2}>
          <View style={styles.buttonImageShortIconStyle}>
            <FontAwesomeIcon
              icon={faAlignJustify}
              size={normalize(20)}
              color={'#1999d0'}
              style={{position: 'relative'}}
            />
          </View>
          <Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
            <View style={styles.centeredView}>
              <Text style={styles.textCartTitleStyle}>
                {nombreCompleto}
              </Text>

              <Text style={styles.textCardTitle}>Requisitos a presentar</Text>
              <Text style={styles.textCard}>
              <Icon name="arrow-right" size={normalize(20)} color={'black'}/> Copia de frente y dorso del DNI actualizado.</Text>
              <Text style={styles.textCard}>
              <Icon name="arrow-right" size={normalize(20)} color={'black'}/> Partida de Nacimiento actualizada (Legalizada para quienes hayan nacido en otra provincia).</Text>
              <Text style={styles.textCard}>
              <Icon name="arrow-right" size={normalize(20)} color={'black'}/> Copia legalizada o constancia de certificado en trámite del Nivel Medio o Polimodal Aprobado.</Text>
              <Text style={styles.textCard}>
              <Icon name="arrow-right" size={normalize(20)} color={'black'}/> Cuatro (4) fotos Tipo carnet (4x4) en papel fotográfico.</Text>
              <Text style={styles.textCard}>
              <Icon name="arrow-right" size={normalize(20)} color={'black'}/> Libreta Universitaria (Adquirir en Secretaria de Extensión Universitaria - Prado Nº 155 – Tel 3834430833).
              </Text>
              
              <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonShortOutlineStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('http://preinscripcion.unca.edu.ar/')}>
          <View style={styles.buttonImageShortIconStyle}>
            <FontAwesomeIcon
              icon={faArrowRight}
              size={normalize(20)}
              color={'#1999d0'}
            />
          </View>
          <View style={styles.buttonTextStyle}>
            <Text style={styles.textOutlineStyle}>Inscribirse</Text>
          </View>
        </TouchableOpacity>
      </View>

            </View>
          </Overlay>
          <View style={styles.buttonTextStyle}>
            <Text style={styles.textOutlineStyle}>Inscripción</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = estiloFacultades;
