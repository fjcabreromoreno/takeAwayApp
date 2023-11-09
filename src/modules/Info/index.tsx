import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DrawerSceneWrapper from '../../components/DrawerSceneWrapper';

const Info: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { openDrawer } = navigation;

    return (
        <DrawerSceneWrapper>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={openDrawer}>
                    <Icon name="menu" size={20} color="#666" />
                </TouchableOpacity>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoTitleWrapper}>
                        <Text style={styles.infoTitleText}>Take Away App</Text>
                    </View>
                    <View style={styles.infoContentWrapper}>
                        <Text style={styles.infoContenText}>This is an app created with React Native, using typescript.</Text>
                        <Text style={styles.infoContenText}>It includes two navigations ( stack & custom drawer ) and 3 main modules ( Home, Detail, Info) </Text>
                        <Text style={styles.infoContenText}>In addition I created a store using redux-toolkit so some information related to the orders can persist. </Text>
                    </View>
                </View>
            </SafeAreaView>
        </DrawerSceneWrapper>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff', flex: 1 },
    infoWrapper: {
        backgroundColor: '#B2EF9B',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    infoTitleWrapper: { flex: 0.2, width: '100%', justifyContent: 'center', alignItems: 'center' },
    infoTitleText: { fontSize: 18, fontWeight: 'bold' },
    infoContentWrapper: { flex: 0.8, width: '100%' },
    infoContenText: { lineHeight: 25 },
});

export default Info;
