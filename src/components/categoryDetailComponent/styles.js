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
        backgroundColor: 'red',
    },
    blockContainer: {
        width: 345,
        height: 35,
        backgroundColor: '#fbf8e1',
        marginTop: 10, 
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        position: 'relative',
    },
    categoryName: {
        fontSize: 18,
        color: '#fac97d',
    },
    rightCicleContainer: {
        position: 'absolute',
    },
    rightCicle: {
        width: 25,
        height: 25,
        borderColor: '#f2f2f2',
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: 'white',
        marginLeft: 300,
    }
})
