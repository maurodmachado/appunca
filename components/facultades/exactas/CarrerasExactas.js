import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking, BackHandler} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import { estiloCarreras } from '../../../assets/styles/estiloCarreras';

export default function CarrerasExactas({navigation}) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Exactas');
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
                  'http://www.exactas.unca.edu.ar/academ/carreras/pb.html',
                )
              }
              title="Profesorado en Biología"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/pf.html',
                )
              }
              title="Profesorado en Física"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/pm.html',
                )
              }
              title="Profesorado en Matemática"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/pq.html',
                )
              }
              title="Profesorado en Química"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Licenciaturas</Text>
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/lca.html',
                )
              }
              title="Licenciatura en Ciencias Ambientales"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/lb.html',
                )
              }
              title="Licenciatura en Ciencias Biológicas"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/lf.html',
                )
              }
              title="Licenciatura en Física"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/lm.html',
                )
              }
              title="Licenciatura en Matemática"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/lq.html',
                )
              }
              title="Licenciatura en Química"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Tecnicaturas</Text>
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/tca.html',
                )
              }
              title="Tecnicatura en Ciencias Ambientales"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/ti-dw.html',
                )
              }
              title="Tecnicatura en Informática - Orientación Diseño Web"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/ti-me.html',
                )
              }
              title="Tecnicatura en Informática - Orientación Mantenimiento de Equipos"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/ti-r.html',
                )
              }
              title="Tecnicatura en Informática - Orientación Redes"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/ter.html',
                )
              }
              title="Tecnicatura Universitaria en Energías Renovables"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/tqu.html',
                )
              }
              title="Tecnicatura Química Universitaria"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />

            <Text style={styleCarreras.titleCarrera}>
              Ciclos de Complementación Curricular
            </Text>
            <Button
              buttonStyle={styles.itemCCC}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/cpc.html',
                )
              }
              title="Ciclo Profesorado en Computación"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemCCC}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/clece.html',
                )
              }
              title="Ciclo de Licenciatura en Enseñanza de las Ciencias Experimentales"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemCCC}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/clem.html',
                )
              }
              title="Ciclo de Licenciatura en Enseñanza de la Matemática"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemCCC}
              onPress={() =>
                Linking.openURL(
                  'http://www.exactas.unca.edu.ar/academ/carreras/leccl.html',
                )
              }
              title="Ciclo de Licenciatura en Enseñanza de la Computación"
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
  itemProfesorado: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#283747',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
  itemLicenciatura: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#5DADE2',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
  itemTecnicaturas: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#1F618D',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
  itemCCC: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#3498DB',
    borderWidth: 1,
    borderColor: '#0F0F0F',
  },
});
