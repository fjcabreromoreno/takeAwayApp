import { Text, View } from 'react-native';

const Counter: React.FC<{ counterValue: Number }> = ({ counterValue }) => {
    return (
        <View style={{ zIndex: 1, backgroundColor: 'purple', width: 100, height: 60, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, borderBottomLeftRadius: 10 }}>
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Counter ${counterValue.toString()}</Text>
        </View>
    );
};

export default Counter;
