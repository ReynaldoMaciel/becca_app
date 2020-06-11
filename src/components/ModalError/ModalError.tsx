import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import colors from '../../constants/colors';

interface IModalErrorProps {
  visible: boolean;
  title?: string;
  description?: string;
  onDissmis: () => void;
}

const ModalError = ({
  visible,
  title,
  description,
  onDissmis,
}: IModalErrorProps) => {
  return (
    <>
      <Modal
        useNativeDriver
        isVisible={visible}
        style={styles.container}
        onBackdropPress={onDissmis}>
        <View style={styles.boxModal}>
          <View style={styles.boxIcon}>
            <View style={styles.iconContainer}>
              <FontAwesome name="exclamation" size={45} color={colors.white} />
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title || 'Ops...'}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              {description ||
                'Um erro inesperado ocorreu, tente novamente mais tarde!'}
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={onDissmis}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default ModalError;
