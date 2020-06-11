import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import IFilterOption from '../../interfaces/IFilterOption';

interface FiltersProps {
  onSelectFilter: (filter: IFilterOption) => void;
  initialOptions: IFilterOption[];
}

const Filters = ({ initialOptions, onSelectFilter }: FiltersProps) => {
  const [options, setOptions] = useState<IFilterOption[]>(initialOptions);

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.container}>
        {options.map((option, i) => (
          <TouchableWithoutFeedback
            onPress={() => {
              setOptions(
                options.map((item) => ({
                  ...item,
                  selected: item.id === option.id,
                })),
              );
              onSelectFilter(option);
            }}
            key={option.id}
            style={{
              ...styles.item,
              marginLeft: i === 0 ? 20 : 0,
              backgroundColor: option.selected ? colors.primary : colors.white,
              borderWidth: 1.2,
              borderColor: option.selected ? colors.white : colors.primary,
            }}>
            <Text
              style={{
                ...styles.textItem,
                color: option.selected ? colors.white : colors.primary,
              }}>
              {option.text}
            </Text>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default Filters;
