import numeral from 'numeral';
import React from 'react';
import { FlatList, Text, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ISalonResponseItem from '../../interfaces/ISalonResponseItem';
import formatToCurrency from '../../utils/formatToCurrency';
import styles from './styles';
import changeJfifToJpg from '../../utils/changeJfifToJpg';

interface ListSalonsProps {
  header: React.ReactElement;
  footer: React.ReactElement;
  salons: ISalonResponseItem[];
  onSelectItem: (item: ISalonResponseItem) => void;
  onEndReached?: () => void;
}

const ListSalons = ({
  header,
  salons,
  onSelectItem,
  onEndReached,
  footer,
}: ListSalonsProps) => {
  const renderItem = ({ item }: { item: ISalonResponseItem }) => {
    return (
      <TouchableWithoutFeedback
        key={item.id}
        onPress={() => onSelectItem(item)}>
        <View style={styles.item}>
          <View style={styles.boxLeft}>
            <FastImage
              style={styles.image}
              source={{
                uri: changeJfifToJpg(item.foto),
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.boxRight}>
            <View style={styles.rowTitle}>
              <Text style={styles.salonName}>
                {item.nome.length > 20
                  ? item.nome.substr(0, 20) + '...'
                  : item.nome}
              </Text>
              <AntDesign
                style={styles.iconStar}
                name="star"
                size={20}
                color="orange"
              />
              <Text style={styles.rate}>{item.avaliacao.toFixed(1)}</Text>
            </View>
            {item.servico && (
              <Text style={styles.serviceName}>{item.servico[0].nome}</Text>
            )}
            {/* TODO: use just one servico property */}
            {item.servicos && (
              <Text style={styles.serviceName}>{item.servicos[0].nome}</Text>
            )}
            <Text style={styles.location}>
              {item.bairro + ' - '}
              {item.distancia}
              Km de você
            </Text>
            {item.servico && (
              <Text style={styles.price}>
                {formatToCurrency(numeral(item.servico[0].valor))}
              </Text>
            )}
            {/* TODO: use just one servico property */}
            {item.servicos && (
              <Text style={styles.price}>
                {formatToCurrency(numeral(item.servicos[0].valor))}
              </Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.containerList}
        keyExtractor={(item: any) => item.id}
        data={salons}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default ListSalons;
