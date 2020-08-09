import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    blocksContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },  
    mainBlock: {
        width: '80%',
    },
    searchBlock: {
        width: '100%',
        height: 45,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems:'flex-end',
    },
    blockContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#fbf8e1',
        marginTop: 15, 
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
    },
    categoryName: {
        fontSize: 18,
        color: '#f7a222',
    },
    searchInput: {
        height: 40, 
        fontSize: 15, 
        color: '#000',
        flex: 1,
        paddingBottom: 0,
    }
})
