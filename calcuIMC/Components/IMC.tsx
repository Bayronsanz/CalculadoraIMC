import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { mensaje } from '../Models/contadores'

export default function IMC() {
    
const ResultadoIMC: React.FC<mensaje> = ({ imc, categoria }) => {
  return (
    <View>
      <Text>IMC: {imc.toFixed(2)}</Text>
      <Text>Clasificación: {categoria}</Text>
    </View>
  );
};

    
}