import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import colors from '../../constants/colors';

interface IModalSuccessProps {
  visible: boolean;
  title?: string;
  description?: string;
  onDissmis: () => void;
}

const ModalSuccess = ({
  visible,
  title,
  description,
  onDissmis,
}: IModalSuccessProps) => {
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
              <FontAwesome name="check" size={45} color={colors.white} />
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title || 'Ops...'}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              {description || 'Operacao realizada com sucesso!'}
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

export default ModalSuccess;
