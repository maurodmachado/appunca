import {faAtom, faBalanceScale, faCalculator, faGlobeAmericas, faHeartbeat, faLaptop, faSearch, faTractor} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { normalize } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default function CarrerasComponent({navigation}) {
  const colorTecnologia = '#00CCCC';
  const colorHumanidades = '#00D29D';
  const colorEscArqueologia = '#FFFF33';
  const colorEconomicas = '#9484CE';
  const colorAgrarias = '#ABDE4A';
  const colorDerecho = '#FF9635';
  const colorSalud = '#C22323';
  const colorExactas = '#2B99FF';

  const navegarAComponent = (nombreFacultad) => {
    navigation.navigate(nombreFacultad);
  };

  return (
    <>
      <ScrollView style={styles.container}>
      {Platform.OS === 'ios' && <View style={{marginTop: '10%'}}></View>}
        <View style={{flex: 80, marginTop:10}}>
          <Text style={styles.titleText}>¿Qué facultad querés recorrer?</Text>
        </View>
        {/* Facultad de Tecnologia */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              ...styles.buttonShortStyle,
              backgroundColor: colorTecnologia,
            }}
            activeOpacity={0.5}
            onPress={() => navegarAComponent('Facultad de Tecnologia')}>
            <View style={styles.buttonImageShortIconStyle}>
              <FontAwesomeIcon
                icon={faLaptop}
                size={normalize(24)}
                color={'black'}
              />
            </View>

            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyleBlack}>
              Facultad de Tecnología y Ciencias Aplicadas
            </Text>
          </TouchableOpacity>
        </View>

        {/* Facultad de Humanidades */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              ...styles.buttonShortStyle,
              backgroundColor: colorHumanidades,
            }}
            activeOpacity={0.5}
            onPress={() => navegarAComponent('Facultad de Humanidades')}>
            <View style={styles.buttonImageShortIconStyle}>
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                size={normalize(24)}
                color={'black'}
              />
            </View>

            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyleBlack}>
              Facultad de Humanidades
            </Text>
          </TouchableOpacity>
        </View>

        {/* Escuela de arqueologia */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              ...styles.buttonShortStyle,
              backgroundColor: colorEscArqueologia,
            }}
            activeOpacity={0.5}
            onPress={() => navegarAComponent('Escuela de Arqueologia')}>
            <View style={styles.buttonImageShortIconStyle}>
              <FontAwesomeIcon
                icon={faSearch}
                size={normalize(24)}
                color={'black'}
              />
            </View>

            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyleBlack}>
              Escuela de Arqueología
            </Text>
          </TouchableOpacity>
        </View>

        {/* Facultad de Ciencias Economicas */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              ...styles.buttonShortStyle,
              backgroundColor: colorEconomicas,
            }}
            activeOpacity={0.5}
            onPress={() => navegarAComponent('Facultad de Economicas')}>
            <View style={styles.buttonImageShortIconStyle}>
              <FontAwesomeIcon
                icon={faCalculator}
                size={normalize(24)}
                color={'black'}
              />
            </View>

            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyleBlack}>
              Facultad de Ciencias Económicas
            </Text>
          </TouchableOpacity>
        </View>

        {/* Facultad de Agrarias */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{...styles.buttonShortStyle, backgroundColor: colorAgrarias}}
            activeOpacity={0.5}
            onPress={() => navegarAComponent('Facultad de Agrarias')}>
            <View style={styles.buttonImageShortIconStyle}>
              <FontAwesomeIcon
                icon={faTractor}
                size={normalize(24)}
                color={'black'}
              />
            </View>

            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyleBlack}>
              Facultad de Ciencias Agrarias
            </Text>
          </TouchableOpacity>
        </View>

        {/* Facultad de Derecho */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{...styles.buttonShortStyle, backgroundColor: colorDerecho}}
            activeOpacity={0.5}
            onPress={() => navegarAComponent('Facultad de Derecho')}>
            <View style={styles.buttonImageShortIconStyle}>
              <FontAwesomeIcon
                icon={faBalanceScale}
                size={normalize(24)}
                color={'black'}
              />
            </View>

            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyleBlack}>
              Facultad de Derecho{' '}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Facultad de Ciencias de la Salud */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{...styles.buttonShortStyle, backgroundColor: colorSalud}}
            activeOpacity={0.5}
            onPress={() => navegarAComponent('Facultad de Salud')}>
            <View style={styles.buttonImageShortIconStyle}>
              <FontAwesomeIcon
                icon={faHeartbeat}
                size={normalize(22)}
                color={'black'}
              />
            </View>

            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyleBlack}>
              Facultad de Ciencias de la Salud
            </Text>
          </TouchableOpacity>
        </View>

        {/* Facultad de Ciencias Exactas */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{...styles.buttonShortStyle, backgroundColor: colorExactas}}
            activeOpacity={0.5}
            onPress={() => navegarAComponent('Facultad de Exactas')}>
            <View style={styles.buttonImageShortIconStyle}>
              <FontAwesomeIcon
                icon={faAtom}
                size={normalize(22)}
                color={'black'}
              />
            </View>

            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyleBlack}>
              Facultad de Ciencias Exactas y Naturales
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#0F0F0F',
    width: 1,
    height: '80%',
  },
  buttonImageShortIconStyle: {
    margin: '4%',
  },
  buttonStyle: {
    backgroundColor: '#093869',
    borderWidth: 2,
    borderColor: '#0F0F0F',
    borderRadius: 5,
  },
  buttonTextStyleBlack: {
    flex: 1,
    color: '#0F0F0F',
    margin: '2%',
    fontSize: RFValue(17, 580),
    fontFamily: 'GoogleSans-Regular',
    textAlign: 'center',
  },
  buttonTextStyleWhite: {
    flex: 1,
    color: '#FFFFFF',
    marginLeft: '2%',
    marginRight: '2%',
    fontSize: RFValue(17, 580),
    fontFamily: 'GoogleSans-Regular',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowRadius:5,
  },
  buttonShortStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0F0F0F',
    width: '80%',
    height: '90%',
    borderRadius: 5,
    
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  titleText: {
    flex:1,
    fontSize: RFValue(17, 580),
    fontFamily: 'KeepCalm-Medium',    
    textAlignVertical: 'center',
    textAlign: 'center'
  },
});
