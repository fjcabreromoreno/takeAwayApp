import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';

import OrderItem from './components/OrderItem';
import { useAppDispatch, useAppSelector } from '../../store';
import { getOrders } from '../../store/slices/orders';

type OrderProps = {
    customerId: String;
    items: OrderItemProps[];
    orderId: String;
    status: String;
    taxFree: Boolean;
    timestamp: Date;
    totalPrice: String;
};

type OrderItemProps = {
    itemId: String;
    itemName: String;
    quantity: Number;
    price: Number;
};

const Home: React.FC<{}> = () => {
    const dispatch = useAppDispatch(),
        { data, loading } = useAppSelector(state => {
            return state.orders;
        });

    useEffect(() => {
        dispatch(getOrders({}));
    }, []);

    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ width: '100%', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Order List</Text>
                </View>

                {!loading &&
                    data?.map((item: OrderProps, index: number) => {
                        return <OrderItem key={index} item={item} lastItem={index === data.length - 1} />;
                    })}
            </ScrollView>
        </>
    );
};

export default Home;
