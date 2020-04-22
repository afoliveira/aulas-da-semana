import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AulaItem from './AulaItem';

export default function AulaLinha(props) {
  const [lista, setLista] = useState(props);

  useEffect(() => {
    setLista(props);
  }, [props]);

  function ImprimeTitulo(linha) {
    if (linha) {
      const novaData = linha.data.split('/');
      const dataTitulo = new Date(novaData[2], novaData[1], novaData[0]);
      const nomeDia = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'QUarta-feira',
        'Quinta-feira',
        'Sexta-Feira',
        'Sábado',
      ];
      const titulo = `${
        nomeDia[dataTitulo.getDay()]
      } >> ${dataTitulo.getDate()}/${dataTitulo.getMonth()}/${dataTitulo.getFullYear()} >> ${
        linha.turno
      }`;
      return titulo;
    }
  }

  function MontaLinha(aulas) {
    if (aulas.length > 0) {
      const linhas = [];
      let contador = -1;
      let dataAnterior = null;
      let turnoAnterior = null;
      let mostraSeparador = false;

      aulas.forEach((item) => {
        if (dataAnterior !== item.dataSemana && turnoAnterior !== item.turno) {
          contador += 1;
          // eslint-disable-next-line no-unneeded-ternary
          mostraSeparador = dataAnterior ? true : false;
          dataAnterior = item.dataSemana;
          turnoAnterior = item.turno;
          linhas[contador] = {
            data: item.dataSemana,
            turno: item.turno,
            aulas: [item],
            separador: mostraSeparador,
          };
        } else if (dataAnterior === item.dataSemana && turnoAnterior !== item.turno) {
          contador += 1;
          turnoAnterior = item.turno;
          linhas[contador] = {
            data: item.dataSemana,
            turno: item.turno,
            aulas: [item],
            separador: false,
          };
        } else {
          linhas[contador].aulas.push(item);
        }
      });
      return linhas;
    }
    return null;
  }

  const SemSeparador = (linha) => (
    <View key={ImprimeTitulo(linha)}>
      <Text style={styles.linha}>{ImprimeTitulo(linha)}</Text>
      <AulaItem arrAulas={linha.aulas} />
    </View>
  );

  const ComSeparador = (linha) => (
    <View key={ImprimeTitulo(linha)} style={styles.separador}>
      <Text style={styles.linha}>{ImprimeTitulo(linha)}</Text>
      <AulaItem arrAulas={linha.aulas} />
    </View>
  );

  const Renderiza = (linha) => {
    if (linha.separador) return ComSeparador(linha);
    return SemSeparador(linha);
  };

  return <View>{MontaLinha(lista.aulas).map((linha) => Renderiza(linha))}</View>;
}

const styles = StyleSheet.create({
  linha: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    marginVertical: 10,
  },
  separador: {
    borderTopWidth: 1,
    borderTopColor: '#828280',
    marginVertical: 10,
    marginHorizontal: 'auto',
    width: '100%',
  },
});
