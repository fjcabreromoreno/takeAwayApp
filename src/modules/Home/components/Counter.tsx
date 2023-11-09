import { Text, View, StyleSheet } from 'react-native';

const Counter: React.FC<{ counterValue: Number }> = ({ counterValue }) => {
    return (
        <View style={styles.counteWrapper}>
            <Text style={styles.counterText}>Counter ${counterValue.toString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    counteWrapper: { backgroundColor: '#8C86AA', height: 60, justifyContent: 'center', alignItems: 'center' },
    counterText: { color: '#FFFFFF', fontWeight: 'bold' },
});

export default Counter;
