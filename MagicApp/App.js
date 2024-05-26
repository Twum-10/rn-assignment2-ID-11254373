import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>
      My name is <Text style={styles.boldText}>Kofi Asamoah</Text>
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC107',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, 
  },
  boldText: {
    fontWeight: 'bold', 
  },
});
