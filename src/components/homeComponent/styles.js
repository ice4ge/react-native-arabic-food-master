import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems:'center',
    },
    listContainer: {
        width: '90%',
        marginTop: 40,
    },
    foodBlock: {
        width: '78%',
        height: 70,
        backgroundColor: '#fbf8e1',
        marginBottom: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    blockContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleRow: {
        flexDirection: 'row',
    },
    blockText: {
        fontSize: 20,
        color: '#fac97d'
    },
    foodImage: {
        width: '20%',
        height: 70,
        borderRadius: 20,
    }
})
