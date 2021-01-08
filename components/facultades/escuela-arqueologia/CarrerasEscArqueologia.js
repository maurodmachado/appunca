import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking, BackHandler} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {estiloCarreras} from '../../../assets/styles/estiloCarreras';
import { carreras } from '../InformacionApp';

export default function CarrerasEscArqueologia({navigation}) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Escuela de Arqueologia');
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
            <Text style={styleCarreras.titleCarrera}>Licenciaturas</Text>
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.escArqueologia.licenciaturas.arqueologia});
              }}
              title="Licenciatura en Arqueología"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.escArqueologia.licenciaturas.antropologiaSocial});
              }}
              title="Licenciatura en Antropología Social y Cultural"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.escArqueologia.licenciaturas.patrimonioCultural});
              }}
              title="Licenciatura en Patrimonio Cultural"
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
  itemLicenciatura: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFCC00',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
});
