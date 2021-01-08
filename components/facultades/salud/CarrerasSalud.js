import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking, BackHandler} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {estiloCarreras} from '../../../assets/styles/estiloCarreras';
import { carreras } from '../InformacionApp';

export default function CarrerasSalud({navigation}) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Salud');
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
            <Text style={styleCarreras.titleCarrera}>Oferta académica</Text>
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.salud.enfermeria});
              }}
              title="Licenciatura en Enfermería"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.salud.nutricion});
              }}
              title="Licenciatura en Nutrición"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.salud.bromatologia});
              }}
              title="Licenciatura en Bromatología"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.salud.eduFisica});
              }}
              title="Ciclo Licenciatura en Educación Física"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.salud.tecHemoterapia});
              }}
              title="Técnico en Hemoterapia"
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
    backgroundColor: '#a9294f',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
  itemColor2: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#e5707e',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
});
