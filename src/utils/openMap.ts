import { isAndroid } from "../constants/device";
import { Linking, Alert } from "react-native";

const openMap = async ({
  latitude,
  longitude
}: {
  latitude: number;
  longitude: number;
}) => {
  const url = isAndroid
    ? `geo:${latitude},${longitude}`
    : `https://maps.apple.com/?ll=${latitude},${longitude}`;

  const canOpen = await Linking.canOpenURL(url);

  if (canOpen) {
    await Linking.openURL(url);
  } else {
    Alert.alert(
      'ISalon',
      'Desculpe mas não conseguimos abrir o seu aplicativo de mapa.',
    );
  }
};
export default openMap