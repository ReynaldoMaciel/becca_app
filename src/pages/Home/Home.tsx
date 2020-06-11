import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView, Text } from 'react-native';
import Voice from '@react-native-community/voice';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tts from 'react-native-tts';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const [text, setText] = useState('')

  const onSpeechResults = useCallback((event) => {
    setText(event.value.join(', '))
  }, [])

  const speechText = (value: string) => {
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('pt-BR');
      Tts.speak(value);
    });
  }

  useEffect(() => {
    // Voice.isAvailable().then(response =>{
    //   console.log(response)
    // })
    Voice.onSpeechResults = onSpeechResults
    Voice.start('pt-BR')
    setTimeout(() => {
      Voice.stop()
      speechText('Quem vai ganhar o Hack CCR é nóis!')
    }, 5000)
    return () => {
      Voice.removeAllListeners()
    }
  }, [])

  return (
    <ScrollView>
      <SafeAreaView>
      <Text style={{fontSize: 30}}>{text}</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
