import Voice from '@react-native-community/voice';
import getHours from 'date-fns/getHours';
import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, NativeScrollEvent, NativeSyntheticEvent, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeArea } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import images from '../../constants/images';
import ModalMenu from './ModalMenu/ModalMenu';
import styles from './styles';
import beccaService from '../../services/beccaService';
import { setUser } from '../../store/user/actions';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { bottom } = useSafeArea()
  const [userAudio, setUserAudio] = useState('')
  const [beccaText, setBeccaText] = useState('')
  const [showMenu, setShowMenu] = useState(false)
  const [isDay, setIsDay] = useState(false)
  const [isTalking, setIsTalking] = useState(false)

  const onSpeechResults = (event: any) => {
    setUserAudio(event.value.join(' '))
  }

  const toggleTalking = async () => {
    if (isTalking) {
      Voice.stop()
      setIsTalking(false)
      console.log(userAudio)
      const response = await beccaService.ask({message: userAudio})
      beccaService.speech(response.text)
      setBeccaText(response.text)
    } else {
      setIsTalking(true)
      setUserAudio('')
      Voice.start('pt-BR')
    }
  }

  useEffect(() => {
    const hours = getHours(new Date())
    setIsDay(hours <= 18 && hours >= 6)
    Voice.onSpeechResults = onSpeechResults
    return () => {
      Voice.removeAllListeners()
    }
  }, [])

  return (
    <>
      <ImageBackground resizeMode="cover" source={isDay ? images.backgroundDay : images.backgroundNight} style={styles.backgroundImage} progressiveRenderingEnabled>
        <ModalMenu onPressDismiss={() => setShowMenu(false)} showMenu={showMenu} />
        <FastImage resizeMode="contain" source={isDay ? images.assistantDay : images.assistantNight} style={styles.assistant}/>
        <View style={styles.boxTalk}>
          <Text style={styles.title}>
            Oi, Adriano!
          </Text>
          <Text style={styles.subTitle}>
            Estou aqui, pode falar o que deseja{'\n'}
            {/* Pressione uma vez para falar e pressione novamente quando terminar */}
          </Text>
          {/* <Text>{userAudio}</Text>
          <Text>{beccaText}</Text> */}
          <View style={styles.boxButtons}>
            <TouchableOpacity activeOpacity={0.8} style={styles.sideButton}>
              <FontAwesome name="qrcode" color={colors.white} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleTalking} activeOpacity={0.8} style={styles.imageIcon}>
              <FontAwesome name="microphone" color={colors.red} size={50}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.sideButton}>
              <FontAwesome name="heartbeat" color={colors.white} size={30}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setShowMenu(true)} style={{ ...styles.buttonShowMore, paddingBottom: bottom }}>
            <Ionicons name="ios-arrow-up" color={colors.white} size={50}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default Home;
