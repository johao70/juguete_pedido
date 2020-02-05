import React, { useState } from 'react';
import { Picker, View, Image, StyleSheet, Button, Alert, Text } from 'react-native';


export default function App() {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={styles.container}>
      <Text style={{width: 150, height: 50, fontSize: 20, fontWeight: 'bold'}}> Juguete Pedidos</Text>
      <Image
          style={{width: 200, height: 200}}
          source={require('./assets/silla.jpg')}
        />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 150, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Fedex" value="fedex" />
        <Picker.Item label="Correo del Ecuador" value="correos" />
        <Picker.Item label="Servientrega" value="servi" />
      </Picker>
      <Button
        title="Procesar"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
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
