import {faArrowLeft, faArrowRight, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {Text, View, BackHandler, Image, TouchableOpacity} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {estiloFacultades} from '../../../assets/styles/estiloFacultades';
import {normalize} from '../../utils/utils';
import {facultades} from '../InformacionFacultades';
import ContactoFacultad from '../contacto/ContactoFacultad';

export default function FacultadHumanidadesComponent({navigation}) {
  const {nombre, textFacultad} = facultades.facultadHumanidades;

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
        <Card containerStyle={styles.cardContainer}>
          <View>
            <Card.Title>
              <Button
                icon={
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size={normalize(13)}
                    color="#ffffff"
                  />
                } 
                buttonStyle={{marginRight: 1}}
                onPress={() => {
                  navegarAComponente('Facultad de Tecnologia');
                }}
              />
              <View style={styles.alignVertical}>
                <Text style={styles.textCartTitleStyle}>{nombre}</Text>
              </View>
              <Button
                icon={
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size={normalize(13)}
                    color="#ffffff"
                  />
                }
                buttonStyle={{marginLeft: 1}}
                onPress={() => {
                  navegarAComponente('Escuela de Arqueologia');
                }}
              />
            </Card.Title>
          </View>
          <Card.Divider style={{backgroundColor: '#0F0F0F'}} />
          <Image
            source={require('../../../assets/humanidades.png')}
            style={styles.responsiveImage}></Image>
          <ScrollView style={{height: '10%'}}>
            <Text style={styles.textCard}>{textFacultad}</Text>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonShortStyle}
              activeOpacity={0.5}
              onPress={() => navegarAComponente('CarrerasHumanidades')}>
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
          <ContactoFacultad facultad={facultades.facultadHumanidades} />
        </Card>
      </View>
    </>
  );
}

const styles = estiloFacultades;
