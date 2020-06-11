import React, { useEffect, useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import geolocationService from '../../services/geolocationService';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../store/location/actions';
import { RootState } from '../../store';
import { LocationState } from '../../store/location/types';
import userService from '../../services/userService';
import { UserState } from '../../store/user/types';

interface SearchHeaderProps {}

const SearchHeader = (props: SearchHeaderProps) => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const location = useSelector<RootState, LocationState>(
    (state) => state.location,
  );
  const user = useSelector<RootState, UserState>((state) => state.user);
  const getCurrentPosition = async () => {
    try {
      setSearchText('Procurando endereço...');
      const response = await userService.GetUserCurrentLocation(
        user.userId,
        location.latitude,
        location.longitude,
      );
      const { rua, bairro, municipio } = response.data.value;
      setSearchText(`${rua}, ${bairro}, ${municipio}`);
    } catch (error) {
      setSearchText('Endereço não encontrado...');
    }
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getCurrentPosition();
    }
  }, [location]);

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Address')}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={{ ...styles.container, paddingTop: getStatusBarHeight() }}>
        <Text style={styles.title}>{searchText}</Text>
        <View style={styles.searchButton}>
          <FontAwesome name="chevron-down" size={18} color={colors.white} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchHeader;
