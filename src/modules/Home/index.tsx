import React, { useEffect, useMemo } from 'react';
import { Text, View, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAppDispatch, useAppSelector } from '../../store';
import { getOrders } from '../../store/slices/orders';

import OrderItem from './components/OrderItem';
import Counter from './components/Counter';
import DrawerSceneWrapper from '../../components/DrawerSceneWrapper';

type OrderProps = {
    customerId: String;
    items: OrderItemProps[];
    orderId: String;
    status: String;
    taxFree: Boolean;
    timestamp: Date;
    totalPrice: String;
    finalPrice: Number;
};

type OrderItemProps = {
    itemId: String;
    itemName: String;
    quantity: Number;
    price: Number;
};

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useAppDispatch(),
        { data, loading } = useAppSelector(state => {
            return state.orders;
        }),
        { openDrawer } = navigation,
        counterValue = useMemo(
            () =>
                data
                    .map(item => {
                        return item.status === 'open' ? 0 : item.finalPrice;
                    })
                    .reduce((acc, val) => acc + val, 0),
            [data]
        );

    useEffect(() => {
        dispatch(getOrders({}));
    }, []);

    return (
        <DrawerSceneWrapper>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={openDrawer}>
                    <Icon name="menu" size={20} color="#666" />
                </TouchableOpacity>
                <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={{ width: '100%', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Order List</Text>
                    </View>
                    {!loading &&
                        data?.map((item: OrderProps, index: number) => {
                            return <OrderItem key={index} item={item} lastItem={index === data.length - 1} />;
                        })}
                </ScrollView>
                <Counter counterValue={counterValue} />
            </SafeAreaView>
        </DrawerSceneWrapper>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: '#FFFFFF', flex: 1 },
    wrapper: { padding: 16 },
    searchBar: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginBottom: 12,
    },
    searchTextPlaceHolder: {
        color: '#666',
        marginLeft: 8,
    },
});

export default Home;
