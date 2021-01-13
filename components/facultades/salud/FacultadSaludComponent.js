import {
  faArrowLeft,
  faArrowRight,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {Text, View, BackHandler, Image, TouchableOpacity} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {estiloFacultades} from '../../../assets/styles/estiloFacultades';
import {normalize} from '../../utils/utils';
import {facultades} from '../InformacionApp';
import ContactoFacultad from '../contacto/ContactoFacultad';
import { Platform } from 'react-native';

export default function FacultadSaludComponent({navigation}) {
  const {nombre, textFacultad} = facultades.facultadSalud;
  const imagenFacultad = '../../../assets/imagenes/facultades/salud.png';
  const navegarAComponente = (route) => {
    navigation.navigate(route);
  };

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Carreras');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <View style={styles.container}>
      {Platform.OS === 'ios' && <View style={{marginTop: '5%'}}></View>}
        <Card containerStyle={styles.cardContainer}>
          <View style={{alignItems:'center', justifyContent:'center', marginBottom:'2%'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Button
                icon={
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size={normalize(16)}
                    color="#ffffff"
                  />
                }
                buttonStyle={styles.buttonAnterior}
                onPress={() => {
                  navegarAComponente('Facultad de Derecho');
                }}
              />

              <View style={{...styles.alignVertical, minWidth: '75%'}}>
                <Text style={styles.textCartTitleStyle}>{nombre}</Text>
              </View>
              <Button
                icon={
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size={normalize(16)}
                    color="#ffffff"
                  />
                }
                buttonStyle={styles.buttonSiguiente}
                onPress={() => {
                  navegarAComponente('Facultad de Exactas');
                }}
              />
            </View>
          </View>
          <Card.Divider style={{backgroundColor: '#0F0F0F', marginBottom:'2%'}} />
          <Image
            source={require(imagenFacultad)}
            style={styles.responsiveImage}></Image>
          <ScrollView style={{height: '10%'}}>
            <Text style={styles.textCard}>{textFacultad}</Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonShortStyle}
              activeOpacity={0.5}
              onPress={() => navegarAComponente('CarrerasSalud')}>
              <View style={styles.buttonImageShortIconStyle}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={normalize(20)}
                  color={'black'}
                  style={{position: 'relative'}}
                />
              </View>
              <View style={styles.buttonTextStyle}>
                <Text style={styles.textStyle}>Ver carreras disponibles</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ContactoFacultad facultad={facultades.facultadSalud} />
        </Card>
      </View>
    </>
  );
}

const styles = estiloFacultades;
