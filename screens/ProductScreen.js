import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
  TouchableNativeFeedback,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/ProductItem';

import {
  fetchMoreProduct,
  fetchProduct,
  setLoading,
} from '../store/actions/product';

const ProductScreen = props => {
  const {navigation, route} = props;
  const [hasProduct, setHasProduct] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(state => state.rootReducers.product.productList);
  const isLoading = useSelector(state => state.rootReducers.product.isLoading);
  const isEndList = useSelector(state => state.rootReducers.product.isEndList);

  useEffect(() => {
    navigation.setOptions({
      headerRight: addButton,
    });

    dispatch(setLoading());
    dispatch(fetchProduct());
  }, []);

  useEffect(() => {
    setHasProduct(products.length > 0);
  }, [products]);

  const fetchMoreData = () => {
    dispatch(setLoading());
    dispatch(fetchProduct());
  };

  const showProductDetail = product => {
    navigation.push('ProductDetailScreen', {product: product.item.objectId});
  };

  const addButton = () => {
    return (
      <TouchableNativeFeedback
        style={{borderRadius: 20}}
        onPress={() => navigation.push('AddProductScreen')}>
        <View
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 24}}>+</Text>
        </View>
      </TouchableNativeFeedback>
    );
  };

  const productView = () => {
    return (
      <FlatList
        data={products}
        renderItem={item => (
          <ProductItem
            product={item}
            navigation={props.navigation}
            onPress={() => showProductDetail(item)}
          />
        )}
        keyExtractor={item => item.objectId}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.2}
        ListFooterComponent={footerView}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        contentContainerStyle={{marginVertical: 8}}
        props
      />
    );
  };

  const emptyView = () => {
    return (
      <View style={styles.center}>
        <Text>There is no product available</Text>
      </View>
    );
  };

  const loadingView = () => {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={24} />
        <Text>Loading Products</Text>
      </View>
    );
  };

  const footerView = () => {
    if (isEndList) {
      return (
        <View style={styles.center}>
          <Text>No more products available</Text>
        </View>
      );
    }
    return (
      <View style={styles.center}>
        <ActivityIndicator size={24} />
        <Text>Loading more products</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && loadingView()}
      {!isLoading && (hasProduct ? productView() : emptyView())}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  center: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default ProductScreen;
