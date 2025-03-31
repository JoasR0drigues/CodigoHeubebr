import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';
import Result from './src/components/Result';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title/>
      <Form/>
      <Result/>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
