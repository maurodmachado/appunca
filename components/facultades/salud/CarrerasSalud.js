import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking, BackHandler} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {estiloCarreras} from '../../../assets/styles/estiloCarreras';

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
                  'http://www.salud.unca.edu.ar/index.php?option=com_content&view=article&id=16&Itemid=228',
                )
              }
              title="Licenciatura en Enfermería"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() =>
                Linking.openURL(
                  'http://www.salud.unca.edu.ar/index.php?option=com_content&view=article&id=15&Itemid=230',
                )
              }
              title="Licenciatura en Nutrición"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() =>
                Linking.openURL(
                  'http://www.salud.unca.edu.ar/index.php?option=com_content&view=article&id=14&Itemid=229',
                )
              }
              title="Licenciatura en Bromatología"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemColor1}
              onPress={() =>
                Linking.openURL(
                  'http://www.salud.unca.edu.ar/index.php?option=com_content&view=article&id=17&Itemid=231',
                )
              }
              title="Ciclo Licenciatura en Educación Física"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemColor2}
              onPress={() =>
                Linking.openURL(
                  'http://www.salud.unca.edu.ar/index.php?option=com_content&view=article&id=13&Itemid=233',
                )
              }
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
