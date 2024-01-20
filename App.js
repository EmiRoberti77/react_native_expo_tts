import { StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { speech } from './text';

export default function App() {
  const speak = () => {
    console.log('in speak');
    Speech.speak(speech);
  };

  const stop = () => {
    console.log('stop');
    Speech.stop();
  };

  const pause = () => {
    console.log('pause');
    Speech.pause();
  };

  const resume = () => {
    console.log('resume');
    Speech.resume();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Talking app</Text>
      <Button title="speak" onPress={speak} />
      <Button title="pause" onPress={pause} />
      <Button title="resume" onPress={resume} />
      <Button title="stop" onPress={stop} />
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
  text: {
    fontSize: 14,
  },
});
