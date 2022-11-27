import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductScreen from '../screens/ProductScreen';
import AddProductScreen from '../screens/AddProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

const AppStack = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: 'Products',
        }}
      />
      <Stack.Screen
        name="AddProductScreen"
        component={AddProductScreen}
        options={{title: 'Add Product'}}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{title: 'Detail Product'}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
