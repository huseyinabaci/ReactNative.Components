import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('Kurslarım')}
      />
      <Button
      title="Kur Bilgilerim"
      onPress={() => navigation.navigate('KursBilgilerim')}
      />
      <Button
      title="Sayac"
      onPress={() => navigation.navigate('Sayac')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
