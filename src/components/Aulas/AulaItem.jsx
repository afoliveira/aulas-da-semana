import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
export default function AulaItem({ arrAulas }) {
  const [aulas, setAulas] = useState(arrAulas);

  useEffect(() => {
    setAulas(arrAulas);
  }, [arrAulas]);

  function VerificaHorario(array) {
    if (array.length === 5) return array;
    const aulasCompletas = array;
    const grade = [1, 2, 3, 4, 5];
    const horarios = [];
    aulasCompletas.map((aula) => {
      horarios.push(aula.horario);
    });
    grade.map((horario, index) => {
      if (!horarios.includes(horario)) {
        aulasCompletas.push(array[index]);
        aulasCompletas[index] = '';
      }
    });
    return aulasCompletas;
  }

  function Renderiza(aula) {
    return ImprimeAulas(aula);
  }

  function ImprimeAulas(aulaItem) {
    return (
      <View
        key={aulaItem ? aulaItem.id : Date.now()}
        style={aulaItem ? styles.comAula : styles.semAula}
      >
        <Text style={styles.texto}>{aulaItem ? aulaItem.siglaEscola : 'HORÁRIO VAGO'}</Text>
        <Text style={styles.texto}>{aulaItem ? aulaItem.turma : ''}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {VerificaHorario(aulas).map((aula) => {
        return Renderiza(aula);
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  comAula: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: '#004897',
    borderRadius: 10,
    justifyContent: 'center',
    width: 80,
  },

  texto: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 8,
  },

  semAula: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    width: 80,
    backgroundColor: '#616161',
  },
});
