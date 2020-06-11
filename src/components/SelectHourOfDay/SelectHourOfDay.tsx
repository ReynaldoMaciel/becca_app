import startOfToday from 'date-fns/startOfToday';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import styles from './styles';
import {
  startOfWeek,
  addDays,
  format,
  isEqual,
  subDays,
  isBefore,
} from 'date-fns';
import TabFilter from '../TabFilter/TabFilter';
import { FlatList } from 'react-native-gesture-handler';
import ButtonOutline from '../ButtonOutline/ButtonOutline';

interface SelectHourOfDayProps {
  // startHour: (date: Date) => void;
  // endHour: (date: Date) => void;
  onChange: (date: Date) => void;
}

const SelectHourOfDay = ({
  // startHour,
  // endHour,
  onChange,
}: SelectHourOfDayProps) => {
  const [selectedHour, setSelectedHours] = useState(new Date());
  const [moorningHours, setMoorningHours] = useState<Date[]>([
    new Date(2020, 5, 1, 9, 0, 0),
    new Date(2020, 5, 1, 9, 30, 0),
    new Date(2020, 5, 1, 10, 0, 0),
    new Date(2020, 5, 1, 10, 30, 0),
    new Date(2020, 5, 1, 11, 0, 0),
    new Date(2020, 5, 1, 11, 30, 0),
  ]);
  const [afternoonHours, setAfternoonHours] = useState<Date[]>([
    new Date(2020, 5, 1, 13, 0, 0),
    new Date(2020, 5, 1, 13, 30, 0),
    new Date(2020, 5, 1, 14, 0, 0),
    new Date(2020, 5, 1, 15, 30, 0),
    new Date(2020, 5, 1, 16, 0, 0),
    new Date(2020, 5, 1, 16, 30, 0),
    new Date(2020, 5, 1, 17, 0, 0),
    new Date(2020, 5, 1, 17, 30, 0),
  ]);
  const [nightHours, setNightHours] = useState<Date[]>([
    new Date(2020, 5, 1, 19, 0, 0),
    new Date(2020, 5, 1, 19, 30, 0),
    new Date(2020, 5, 1, 20, 0, 0),
    new Date(2020, 5, 1, 20, 30, 0),
  ]);

  const tabOptions = [
    {
      id: 'as2f4g5g5-faasdasf-1219f92-99adsf',
      text: 'Horário fixo',
      selected: true,
    },
    {
      id: 'f3f3f3f2-f3f3-s2s3df3f-99adsf',
      text: 'Horário flexível',
      selected: false,
    },
  ];

  const onPressButtonHour = (date: Date) => {
    setSelectedHours(date);
  };

  const renderItem = ({ item }: { item: Date }) => (
    <TouchableOpacity
      key={item.toString()}
      onPress={() => onPressButtonHour(item)}
      style={
        isEqual(selectedHour, item)
          ? styles.buttonHourSelected
          : styles.buttonHour
      }>
      <Text
        style={
          isEqual(selectedHour, item)
            ? styles.buttonHourTextSelected
            : styles.buttonHourText
        }>
        {format(item, 'HH:mm')}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TabFilter onSelectTab={() => {}} initialOptions={tabOptions} />
      <View>
        <Text style={styles.title}>Manhã</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={moorningHours}
          renderItem={renderItem}
        />
        <Text style={styles.title}>Tarde</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={afternoonHours}
          renderItem={renderItem}
        />
        <Text style={styles.title}>Noite</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={nightHours}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default SelectHourOfDay;
