import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking, BackHandler} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import { estiloCarreras } from '../../../assets/styles/estiloCarreras';
import {normalize} from '../../utils/utils';

export default function CarrerasHumanidades({navigation}) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Humanidades');
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
            <Text style={styleCarreras.titleCarrera}>Profesorados</Text>
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-ciencias-de-la-educacion',
                )
              }
              title="Profesorado en Ciencias de la Educación"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-filosofia',
                )
              }
              title="Profesorado en Filosofía"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-frances',
                )
              }
              title="Profesorado en Francés"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-geografia',
                )
              }
              title="Profesorado en Geografía"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-historia',
                )
              }
              title="Profesorado en Historia"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-ingles',
                )
              }
              title="Profesorado en Inglés"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-letras',
                )
              }
              title="Profesorado en Letras"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Licenciaturas</Text>
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-ciencias-de-la-educacion',
                )
              }
              title="Licenciatura en Ciencias de la Educación"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/licencicatura-en-frances',
                )
              }
              title="Licenciatura en Francés"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-geografia',
                )
              }
              title="Licenciatura en Geografía"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-historia',
                )
              }
              title="Licenciatura en Historia"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-ingles',
                )
              }
              title="Licenciatura en Inglés"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-letras',
                )
              }
              title="Licenciatura en Letras"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-trabajo-social',
                )
              }
              title="Licenciatura en Trabajo Social"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Traductorados</Text>
            <Button
              buttonStyle={styles.itemTraductorados}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/traductorado-en-frances',
                )
              }
              title="Traductorado Público Nacional en Francés"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTraductorados}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/traductorado-en-frances',
                )
              }
              title="Traductorado Público Nacional en Inglés"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />

            <Text style={styleCarreras.titleCarrera}>
              Ciclos de Complementación Curricular
            </Text>
            <Button
              buttonStyle={styles.itemCCC}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-psicopedagogia-ciclo-de-complementacion-curricular',
                )
              }
              title="Licenciatura en Psicopedagogía"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Carreras a distancia</Text>
            <Button
              buttonStyle={styles.itemCarreraDistancia}
              onPress={() =>
                Linking.openURL(
                  'http://www.huma.unca.edu.ar/oferta-academica/distancia/licenciatura-en-gestion-educativa-ciclo-de-complementacion-curricular',
                )
              }
              title="Licenciatura en Gestión Educativa"
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
  
  itemProfesorado: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#654062',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
  itemLicenciatura: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFD66B',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
  itemTraductorados: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#944e6c',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
  itemCCC: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FF9D72',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },

  itemCarreraDistancia: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#C44830',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
});
