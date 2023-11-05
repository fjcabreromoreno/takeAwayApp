import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { useApiGet, TApiResponse } from '../../hooks/useFetch';

type CustomerProps = {
    address: String;
    customerId: String;
    customerName: String;
    email: String;
    phone: String;
};

const Detail: React.FC<{ route: RouteProp<{ params: { customerId: String } }, 'params'> }> = ({ route }) => {
    const customerId = route?.params?.customerId;

    const { data, loading }: TApiResponse = useApiGet('https://run.mocky.io/v3/60ed967d-275d-45cd-9996-a38ee5cc4a1a'),
        customer = data?.customers.find((el: CustomerProps) => el.customerId === customerId);

    return (
        !loading &&
        data && (
            <View>
                <Text>Detail {customerId}</Text>
                <Text>{customer?.customerName}</Text>
            </View>
        )
    );
};

export default Detail;
