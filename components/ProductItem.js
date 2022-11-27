import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

const ProductItem = props => {
  const {name, price, image} = props.product.item;
  const onPress = props.onPress;

  return (
    <TouchableNativeFeedback onPress={() => onPress()}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={{width: '100%', height: '70%'}} />
        <View style={styles.infoContainer}>
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.45,
    height: 200,
    marginVertical: 12,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  infoContainer: {
    padding: 12,
  },
});

export default ProductItem;
