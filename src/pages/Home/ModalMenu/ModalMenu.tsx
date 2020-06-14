import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto'
import colors from '../../../constants/colors';

interface ModalMenuProps {
  showMenu: boolean;
  onPressDismiss: () => void
}

const ModalMenu = ({showMenu, onPressDismiss}: ModalMenuProps) => {
  return (
    <Modal useNativeDriver swipeDirection="down" animationInTiming={300} style={styles.modal} isVisible={showMenu}>
      <View style={styles.modalView}>
        <TouchableOpacity style={styles.buttonDown} onPress={onPressDismiss} >
          <Fontisto name="angle-down" color={colors.black} size={28}/>
        </TouchableOpacity>
        <View style={styles.boxUser}>
          <FastImage source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}} style={styles.userImage}/>
          <View style={styles.boxUserText}>
            <Text style={styles.userName}>Adriano</Text>
            <Text style={styles.userLevel}>Iniciante</Text>
            <Text style={styles.userPoints}>1.000 pontos</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.listButton}>
          <View style={styles.boxItemText}>
            <Text style={styles.itemTitle}>Checklist</Text>
            <Text style={styles.itemSubTitle}>Faça o checklist do seu caminhão e dos documentos</Text>
          </View>
          <Fontisto name="angle-right" color={colors.black} size={28}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.listButton}>
          <View style={styles.boxItemText}>
            <Text style={styles.itemTitle}>Cartão de Saúde</Text>
            <Text style={styles.itemSubTitle}>Visualize informações sobre suas últimas consultas</Text>
          </View>
          <Fontisto name="angle-right" color={colors.black} size={28}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.listButton}>
          <View style={styles.boxItemText}>
            <Text style={styles.itemTitle}>Troca de pontos</Text>
            <Text style={styles.itemSubTitle}>Veja quais benefícios você pode ganhar trocando pontos</Text>
          </View>
          <Fontisto name="angle-right" color={colors.black} size={28}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.listButton}>
          <View style={styles.boxItemText}>
            <Text style={styles.itemTitle}>Ranking da Frota</Text>
            <Text style={styles.itemSubTitle}>Confira sua colocação no ranking desse mês</Text>
          </View>
          <Fontisto name="angle-right" color={colors.black} size={28}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPodcasts}>
          <Fontisto name="music-note" size={24} color={colors.red} />
          <Text style={styles.buttonPodcastsText}>Podcasts</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalMenu;