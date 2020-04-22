import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import axios from 'axios';
import AulaLinha from './AulaLinha';

export default function AulaLista() {
  const [dado, setDado] = useState(null);
  const [lista, setLista] = useState([]);
  const [url] = useState('https://assti-rails-api.herokuapp.com/aulas');

  useEffect(() => {
    const loadAulas = async () => {
      const result = await axios(url);
      setDado(result.data);
      // eslint-disable-next-line no-underscore-dangle
      setLista(result.data._embedded.aulas);
    };

    loadAulas();
  }, []);

  function FormataData(data) {
    let novaData = data.substr(0, 10).split('-');
    novaData = novaData.reverse().join('/');

    return novaData;
  }

  function CabecalhoLista() {
    return (
      <View style={styles.header}>
        <Text style={styles.textoHeader}>{dado ? FormataData(dado.data) : 'Carregando...'}</Text>
        <View style={styles.calendario}>
          <Image
            style={styles.calendarioImagem}
            // eslint-disable-next-line global-require
            source={require('../../../assets/calendario.png')}
          />
        </View>
      </View>
    );
  }
  if (lista.length > 0) {
    return (
      <View>
        <Text style={styles.separador}>
          COL EST DO CAMPO CARLOS HUMBERTO DE MIRANDA PEREIRA MELLO
        </Text>
        <View style={[styles.body, styles.sombra]}>
          {CabecalhoLista()}
          <AulaLinha aulas={lista} />
        </View>
      </View>
    );
  }
  return <View style={[styles.body, styles.sombra]}>{CabecalhoLista()}</View>;
}

function elevationSombra(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.6,
    shadowRadius: 1.5 * elevation,
  };
}

const styles = StyleSheet.create({
  sombra: elevationSombra(10),

  separador: {
    backgroundColor: '#3D83BE',
    padding: 10,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
  },

  body: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderColor: '#d2d1d1',
    borderRadius: 15,
    borderWidth: 3,
  },

  calendario: {
    alignSelf: 'flex-end',
    paddingRight: 40,
  },

  calendarioImagem: {
    width: 30,
    height: 32,
  },

  header: {
    backgroundColor: '#d2d1d1',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    marginTop: 0,
    marginHorizontal: 0,
  },

  textoHeader: {
    flex: 3,
    paddingLeft: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
