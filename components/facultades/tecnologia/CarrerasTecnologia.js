import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking, BackHandler} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {estiloCarreras} from '../../../assets/styles/estiloCarreras';
import { carreras } from '../InformacionApp';

export default function CarrerasTecnologia({navigation}) {
  
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Tecnologia');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const navegarAComponente = (route, carrera) => {
    navigation.navigate(route, {carrera});
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styleCarreras.containerButton}>
            <Text style={styleCarreras.titleCarrera}>Carreras de pregrado</Text>
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.facultadTecnologia.pregrado.tecIndustrial});
              }}
              title="Tecnicatura Universitaria Industrial"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.facultadTecnologia.pregrado.tecMinas});
              }}
              title="Tecnicatura Universitaria de Minas"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.facultadTecnologia.pregrado.tecHigieneSeguridad});
              }}
              title="Tecnicatura Universitaria en Gestión de Riesgo, Higiene y seguridad en el trabajo"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Carreras de grado</Text>
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.facultadTecnologia.grado.ingInformatica});
              }}
              title="Ingeniería en Informática"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.facultadTecnologia.grado.arquitectura});
              }}
              title="Arquitectura"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.facultadTecnologia.grado.ingElectronica});
              }}
              title="Ingeniería en Electrónica"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.facultadTecnologia.grado.ingAgrimensura});
              }}
              title="Ingeniería en Agrimensura"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.facultadTecnologia.grado.ingMinas});
              }}
              title="Ingeniería en Minas"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.facultadTecnologia.grado.licGeologia});
              }}
              title="Licenciatura en Geología"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styleCarreras = estiloCarreras;

const styles = StyleSheet.create({
  itemColor1: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#65d6ce',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
  itemColor2: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#00303f',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
});
