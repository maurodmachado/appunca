import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking, BackHandler} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import { estiloCarreras } from '../../../assets/styles/estiloCarreras';
import { carreras } from '../InformacionApp';

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

  const navegarAComponente = (route, carrera) => {
    navigation.navigate(route, {carrera});
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styleCarreras.containerButton}>
            <Text style={styleCarreras.titleCarrera}>Profesorados</Text>
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.profesorados.biologia});
              }}
              title="Profesorado en Biología"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.profesorados.fisica});
              }}
              title="Profesorado en Física"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.profesorados.matematica});
              }}
              title="Profesorado en Matemática"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemProfesorado}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.profesorados.quimica});
              }}
              title="Profesorado en Química"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Licenciaturas</Text>
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.licenciaturas.cienciasAmbientales});
              }}
              title="Licenciatura en Ciencias Ambientales"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.licenciaturas.cienciasBiologicas});
              }}
              title="Licenciatura en Ciencias Biológicas"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.licenciaturas.fisica});
              }}
              title="Licenciatura en Física"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.licenciaturas.matematica});
              }}
              title="Licenciatura en Matemática"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemLicenciatura}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.licenciaturas.quimica});
              }}
              title="Licenciatura en Química"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />

            <Text style={styleCarreras.titleCarrera}>Tecnicaturas</Text>
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.tecnicaturas.cienciasAmbientales});
              }}
              title="Tecnicatura en Ciencias Ambientales"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.tecnicaturas.informaticaWeb});
              }}
              title="Tecnicatura en Informática - Orientación Diseño Web"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.tecnicaturas.informaticaMatenimiento});
              }}
              title="Tecnicatura en Informática - Orientación Mantenimiento de Equipos"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.tecnicaturas.informaticaRedes});
              }}
              title="Tecnicatura en Informática - Orientación Redes"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.tecnicaturas.energiasRenovables});
              }}
              title="Tecnicatura Universitaria en Energías Renovables"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />
            <Button
              buttonStyle={styles.itemTecnicaturas}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.tecnicaturas.quimico});
              }}
              title="Tecnicatura Química Universitaria"
              titleStyle={styleCarreras.itemTitleWhiteStyle}
            />

            <Text style={styleCarreras.titleCarrera}>
              Ciclos de Complementación Curricular
            </Text>
            <Button
              buttonStyle={styles.itemCCC}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.ciclosComplementacion.profesoradoComputacion});
              }}
              title="Ciclo Profesorado en Computación"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemCCC}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.ciclosComplementacion.licCienciasExp});
              }}
              title="Ciclo de Licenciatura en Enseñanza de las Ciencias Experimentales"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemCCC}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.ciclosComplementacion.licMatematica});
              }}
              title="Ciclo de Licenciatura en Enseñanza de la Matemática"
              titleStyle={styleCarreras.itemTitleBlackStyle}
            />
            <Button
              buttonStyle={styles.itemCCC}
              onPress={() => {
                navegarAComponente('CarreraDetail', {...carreras.exactas.ciclosComplementacion.licComputacion});
              }}
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
