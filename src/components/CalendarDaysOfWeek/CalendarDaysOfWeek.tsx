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

interface CalendarDaysOfWeekProps {
  onChange: (date: Date) => void;
}

interface DayOfWeek {
  label: string;
  date: Date;
}

const CalendarDaysOfWeek = ({ onChange }: CalendarDaysOfWeekProps) => {
  const [selectedDate, setSelectedDate] = useState(startOfToday());
  const [daysOfWeek, setDaysOfWeek] = useState<DayOfWeek[]>([]);
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(
    startOfWeek(startOfToday()),
  );

  const onPressButtonDay = (date: Date) => {
    // Block selection of day before today
    if (isBefore(date, startOfToday())) {
      Alert.alert(
        'ISalon',
        'Ei, você não pode marcar um salão para um dia antes de hoje, não é mesmo?',
      );
    } else {
      onChange(date);
      setSelectedDate(date);
    }
  };

  const onPressNextWeek = () => {
    setFirstDayOfWeek(addDays(firstDayOfWeek, 7));
  };

  const onPressPreviousWeek = () => {
    setFirstDayOfWeek(subDays(firstDayOfWeek, 7));
  };

  useEffect(() => {
    setDaysOfWeek([
      {
        label: 'D',
        date: firstDayOfWeek,
      },
      {
        label: 'S',
        date: addDays(firstDayOfWeek, 1),
      },
      {
        label: 'T',
        date: addDays(firstDayOfWeek, 2),
      },
      {
        label: 'Q',
        date: addDays(firstDayOfWeek, 3),
      },
      {
        label: 'Q',
        date: addDays(firstDayOfWeek, 4),
      },
      {
        label: 'S',
        date: addDays(firstDayOfWeek, 5),
      },
      {
        label: 'S',
        date: addDays(firstDayOfWeek, 6),
      },
    ]);
  }, [firstDayOfWeek]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressPreviousWeek}
        style={styles.buttonArrow}>
        <FontAwesome name="chevron-left" size={16} color={colors.gray[2]} />
      </TouchableOpacity>
      {daysOfWeek.map((item) => (
        <View style={styles.boxButtonDay}>
          <Text style={styles.dayLabel}>{item.label}</Text>
          <TouchableOpacity
            style={
              isEqual(item.date, selectedDate)
                ? styles.buttonDaySelected
                : styles.buttonDay
            }
            onPress={() => onPressButtonDay(item.date)}>
            <Text
              style={
                isEqual(item.date, selectedDate)
                  ? styles.buttonDayTextSelected
                  : styles.buttonDayText
              }>
              {item.date.getDate()}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={onPressNextWeek} style={styles.buttonArrow}>
        <FontAwesome name="chevron-right" size={16} color={colors.gray[2]} />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarDaysOfWeek;
