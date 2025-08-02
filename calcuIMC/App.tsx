import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [contadorPeso, setPeso]=useState<number>(70);
  const [contadorAltura, setAltura]=useState<number>(1.70);
  const [imc, setImc] = useState(0);
  const [categoria, setCategoria] = useState('');

  function sumarPeso(){
    setPeso(contadorPeso+1)
  }

  function restarPeso(){
    if(contadorPeso==0) return
    setPeso(contadorPeso-1)
  }

  function sumarAltura(){
    setAltura(contadorAltura+1)
  }

  function restarAltrura(){
    if(contadorAltura==0) return
    setAltura(contadorAltura-1)
  }
  
   useEffect(() => {
    const nuevoIMC = contadorPeso / (contadorAltura * contadorAltura);
    setImc(nuevoIMC);

    if (nuevoIMC < 18.5) {
      setCategoria('Bajo peso');
    } else if (nuevoIMC < 25) {
      setCategoria('Peso normal');
    } else if (nuevoIMC < 30) {
      setCategoria('Sobrepeso');
    } else {
      setCategoria('Obesidad');
    }
  }, [contadorPeso, contadorAltura]);

  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC</Text>

      <Text>PESO: {(contadorPeso)} kg</Text>
      <Button title='Aumentar 1 kg' onPress={sumarPeso}></Button>
      <Button title='Disminuir 1 kg' onPress={restarPeso}></Button>

      <Text> ALTURA :{contadorAltura} cm</Text>
      <Button title='Aumentar 1 cm' onPress={sumarAltura}></Button>
      <Button title='Disminuir 1 cm' onPress={restarAltrura}></Button>

      <Text>imc={(imc).toFixed(2)}</Text>
      <Text>categoria={categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
