import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking, BackHandler} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {estiloCarreras} from '../../../assets/styles/estiloCarreras';
import { carreras } from '../InformacionApp';

export default function CarrerasAgrarias({navigation}) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Agrarias');
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
              buttonStyle={styles.itemColor1}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.agrarias.pregrado.tecParqJard});
              }}
              title="Tecnicatura universitaria en Parques y Jardines"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.agrarias.pregrado.tecProcAgro});
              }}
              title="Tecnicatura Universitaria en Procesamiento Agroalimentario"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Carreras de grado</Text>
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.agrarias.grado.ingAgronomica});
              }}
              title="Ingeniería Agronómica"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.agrarias.grado.ingPaisajes});
              }}
              title="Ingeniería de Paisajes"
              titleStyle={styleCarreras.itemTitleBlackStyle}
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
    backgroundColor: '#8db596',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
  itemColor2: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#6DAB3C',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
});
