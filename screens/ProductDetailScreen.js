import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {fetchProductById, resetDetailState} from '../store/actions/product';

const ProductDetailScreen = props => {
  const {navigation} = props;
  const productObjectId = props.route.params.product;
  const product = useSelector(state => state.rootReducers.product.product);
  const isLoading = useSelector(
    state => state.rootReducers.product.isLoadingDetail,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({title: 'Loading...'});
    dispatch(fetchProductById(productObjectId));

    return resetState();
  }, []);

  useEffect(() => {
    navigation.setOptions({title: product.name});
  }, [isLoading]);

  const resetState = () => {
    dispatch(resetDetailState());
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={24} />
        <Text>Loading Product</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: product.image}}
          resizeMode={'contain'}
          style={{
            width: '100%',
            height: 300,
          }}
        />
      </View>
      <View style={styles.content}>
        <Text>{product.name}</Text>
        <Text>Rp. {product.price}</Text>
        <View style={styles.contentInfo}>
          <Text>
            Ukuran {product.height}x{product.width}
          </Text>
          <Text>Berat {product.weight}</Text>
        </View>
        <Text>Deskripsi</Text>
        <Text>{product.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: 'white',
    elevation: 4,
  },
  content: {
    padding: 16,
  },
  contentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default ProductDetailScreen;
