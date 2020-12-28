import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking, BackHandler} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {estiloCarreras} from '../../../assets/styles/estiloCarreras';

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
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styleCarreras.containerButton}>
            <Text style={styleCarreras.titleCarrera}>Carreras de pregrado</Text>
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() =>
                Linking.openURL(
                  'http://tecno.unca.edu.ar/tecnicatura-universitaria-industrial/',
                )
              }
              title="Tecnicatura Universitaria Industrial"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() =>
                Linking.openURL(
                  'http://tecno.unca.edu.ar/tecnicatura-universitaria-de-minas/',
                )
              }
              title="Tecnicatura Universitaria de Minas"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() =>
                Linking.openURL(
                  'http://tecno.unca.edu.ar/tecnico-universitario-en-gestion-de-riesgo-higiene-y-seguridad-en-el-trabajo/',
                )
              }
              title="Tecnicatura Universitaria en Gestión de Riesgo, Higiene y seguridad en el trabajo"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Carreras de grado</Text>
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() =>
                Linking.openURL(
                  'http://tecno.unca.edu.ar/ingenieria-en-informatica/',
                )
              }
              title="Ingeniería en Informática"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() =>
                Linking.openURL('http://tecno.unca.edu.ar/arquitectura/')
              }
              title="Arquitectura"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() =>
                Linking.openURL(
                  'http://tecno.unca.edu.ar/ingenieria-electronica/',
                )
              }
              title="Ingeniería en Electrónica"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() =>
                Linking.openURL(
                  'http://tecno.unca.edu.ar/ingenieria-en-agrimensura/',
                )
              }
              title="Ingeniería en Agrimensura"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() =>
                Linking.openURL('http://tecno.unca.edu.ar/ingenieria-de-minas/')
              }
              title="Ingeniería en Minas"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() =>
                Linking.openURL(
                  'http://tecno.unca.edu.ar/licenciatura-en-geologia/',
                )
              }
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
