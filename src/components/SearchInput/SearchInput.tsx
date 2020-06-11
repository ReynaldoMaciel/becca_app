import React, { useState, useEffect } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../constants/colors';
import styles from './styles';

interface SearchInputProps {
  placeholder: string;
  onChangeText?: (value: string) => void;
  onPress?: () => void;
  autoFocus?: boolean;
}

const SearchInput = ({
  placeholder,
  onPress,
  onChangeText,
  autoFocus,
}: SearchInputProps) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (onChangeText) onChangeText(text);
  }, [text]);

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View style={styles.container}>
        <AntDesign
          style={styles.iconSearch}
          name="search1"
          color={colors.gray[2]}
          size={18}
        />
        <TextInput
          autoFocus={autoFocus}
          editable={!onPress}
          value={text}
          onChangeText={setText}
          placeholderTextColor={colors.gray[2]}
          style={styles.textInput}
          placeholder={placeholder}
          onTouchStart={onPress}
        />
        {!!text && (
          <TouchableWithoutFeedback
            onPress={() => setText('')}
            style={styles.cancelButton}>
            <AntDesign
              style={styles.cancelIcon}
              name="closecircle"
              color={colors.gray[2]}
              size={23}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SearchInput;
