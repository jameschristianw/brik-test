import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createProduct} from '../store/actions/product';

const AddProductScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const isSent = useSelector(state => state.rootReducers.product.isSent);

  var product = {
    id: 999, // Not using this id in Mock API
    categoryId: 14, // Not specified in test
    categoryName: 'Cemilan', // Not specified in test
    sku: 'MHZVTK', // Not specified in test
  };

  useLayoutEffect(() => {
    navigation.setOptions({headerRight: saveButton});
  }, [product]);

  const updateAnswer = (key, value) => {
    product = {
      ...product,
      [key]: value,
    };
  };

  useEffect(() => {
    isSent && navigation.pop();
  }, [isSent]);

  const saveButton = () => {
    return (
      <TouchableNativeFeedback onPress={sendProduct}>
        <Text>Simpan</Text>
      </TouchableNativeFeedback>
    );
  };

  const sendProduct = () => {
    console.log(`sendproduct ${JSON.stringify(product, null, 2)}`);

    dispatch(createProduct(product));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text>URL Gambar</Text>
        <TextInput
          placeholder="URL"
          keyboardType="url"
          onChangeText={text => updateAnswer('image', text)}
        />
      </View>
      <View style={styles.section}>
        <Text>Nama</Text>
        <TextInput
          placeholder="Nama"
          onChangeText={text => updateAnswer('name', text)}
        />
      </View>
      <View style={styles.section}>
        <Text>Harga</Text>
        <TextInput
          placeholder="Harga"
          keyboardType="number-pad"
          onChangeText={text => updateAnswer('price', parseInt(text))}
        />
      </View>
      <View style={styles.section}>
        <Text>Deskripsi</Text>
        <TextInput
          placeholder="Deskripsi"
          onChangeText={text => updateAnswer('description', text)}
        />
      </View>
      <View style={styles.section}>
        <Text>Berat</Text>
        <TextInput
          placeholder="Berat"
          keyboardType="number-pad"
          onChangeText={text => updateAnswer('weight', parseInt(text))}
        />
      </View>
      <View style={{paddingTop: 8}}>
        <Text>Ukuran</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.rowSection}>
            <TextInput
              placeholder="Panjang"
              keyboardType="number-pad"
              onChangeText={text => updateAnswer('length', parseInt(text))}
            />
          </View>
          <Text style={{paddingHorizontal: 12, paddingTop: 14}}>x</Text>
          <View style={styles.rowSection}>
            <TextInput
              placeholder="Lebar"
              keyboardType="number-pad"
              onChangeText={text => updateAnswer('width', parseInt(text))}
            />
          </View>
          <Text style={{paddingHorizontal: 12, paddingTop: 14}}>x</Text>
          <View style={styles.rowSection}>
            <TextInput
              placeholder="Tinggi"
              keyboardType="number-pad"
              onChangeText={text => updateAnswer('height', parseInt(text))}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    paddingTop: 8,
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  rowSection: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default AddProductScreen;
