import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
            <View style={styles.detailWrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>User Details {customerId}</Text>
                </View>

                {Object.keys(customer).map(key => (
                    <View key={key} style={styles.infoWrapper}>
                        <Text style={styles.infoText1}>
                            {key}: <Text style={styles.infoText2}>{customer[key]}</Text>
                        </Text>
                    </View>
                ))}
            </View>
        )
    );
};

const styles = StyleSheet.create({
    detailWrapper: { backgroundColor: '#7E3F8F', flex: 1, justifyContent: 'center', alignItems: 'center' },
    titleWrapper: { padding: 20 },
    titleText: { fontSize: 20, color: '#FFFFFF', fontWeight: 'bold' },
    infoWrapper: { padding: 10, justifyContent: 'flex-start' },
    infoText1: { color: '#B2EF9B', fontWeight: 'bold' },
    infoText2: { color: '#DAFF7D' },
});

export default Detail;
