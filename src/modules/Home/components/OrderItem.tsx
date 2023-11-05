import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { useAppDispatch } from '../../../store';
import { toggleOrder } from '../../../store/slices/orders';

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

type AppStackParamList = {
    Home: undefined;
    Detail: {
        customerId: String;
    };
};

const OrderItem: React.FC<{ item: OrderProps; lastItem: Boolean }> = ({ item, lastItem }) => {
    const navigation = useNavigation<NavigationProp<AppStackParamList>>(),
        { customerId, items, totalPrice, status, orderId } = item,
        dispatch = useAppDispatch();

    return (
        <TouchableOpacity
            style={[styles.orderItemContainer, !lastItem ? { borderBottomWidth: 1, borderColor: '#d8d8d8' } : {}]}
            onPress={() => {
                navigation.navigate('Detail', { customerId });
            }}>
            <View style={styles.orderItemImg}>{/* <Image source={require('../../../../assets/images/101.png')} style={{ height: 60, width: 60 }} /> */}</View>
            <View style={styles.orderItemContent}>
                <Text style={styles.orderItemCustomerId}>{customerId}</Text>
                <Text style={styles.orderItemItems}>{items.map((item, index) => `${index !== 0 ? ', ' : ''}${item.itemName}`)}</Text>
                <View style={styles.orderItemPriceStatus}>
                    <Text style={styles.orderItemPrice}>{`${totalPrice} €`}</Text>
                    <TouchableOpacity
                        style={styles.orderItemStatus}
                        onPress={() => {
                            dispatch(toggleOrder({ orderId }));
                        }}>
                        <Text style={styles.orderItemStatusText}>{status}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    orderItemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 24,
        width: '100%',
    },
    orderItemImg: { height: 90, width: 90, backgroundColor: 'blue', borderRadius: 5 },
    orderItemContent: {
        flex: 1,
        marginLeft: 12,
        height: 90,
        justifyContent: 'space-around',
    },
    orderItemCustomerId: {
        color: '#FFFFFF',
    },
    orderItemItems: { color: 'gray' },
    orderItemPriceStatus: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    orderItemPrice: { color: 'gray' },
    orderItemStatus: {
        backgroundColor: '#009688',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    orderItemStatusText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default OrderItem;