import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 20,
    },
    detailCard: {
        width: '85%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        paddingBottom: 20,
    },
    titleText: {
        fontSize: 22,
        paddingTop: 10,
        color: '#8ab661',
    },
    descriptionText: {
        width: '100%', 
        textAlign: 'right', 
        paddingTop: 10, 
        color: '#fab75e',
        fontSize: 17,
        paddingBottom: 10,
    },
    itemDetailViewContainer:  {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#b3cf99',
        borderBottomWidth: 2,
        paddingBottom: 5,
    },
    itemImage: {
        width: '42%',
        height: 150,
        borderRadius: 20,
    },
    itemDetailView: {
        width: '55%',
        justifyContent: 'center',
        height: 150,
    },
    dataRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    itemAmount: {
        color: '#fdbfad',
        fontSize: 16,
    },
    itemName: {
        color: '#fbda79',
        fontSize: 16,
    },
    countText: {
        fontSize: 18,
        paddingTop: 10,
        color: '#fbc986',
        paddingBottom: 10,
    },
    totalCountAmount: {
        width: '70%',
        height: 30,
        borderRadius: 50,
        backgroundColor: '#f6f0e3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountCountNumber: {
        fontSize: 19,
        color: '#c3d8a4',
    },
    doseCountAmount: {
        width: '70%',
        height: 30,
        borderRadius: 50,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 40,
    }
})
