import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface ITabFilterOption {
  id: string;
  text: string;
  selected?: boolean;
}

interface TabFilterProps {
  onSelectTab: (option: ITabFilterOption) => void;
  initialOptions: ITabFilterOption[];
}

const TabFilter = ({ onSelectTab, initialOptions }: TabFilterProps) => {
  const [options, setOptions] = useState<ITabFilterOption[]>(initialOptions);

  return (
    <View style={styles.container}>
      {options.map((option, i) => (
        <TouchableWithoutFeedback
          style={option.selected ? styles.boxItemSelected : styles.boxItem}
          onPress={() => {
            setOptions(
              options.map((item) => ({
                ...item,
                selected: item.id === option.id,
              })),
            );
            onSelectTab(option);
          }}
          key={option.id}>
          <Text
            style={option.selected ? styles.textItemSelected : styles.textItem}>
            {option.text}
          </Text>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default TabFilter;
