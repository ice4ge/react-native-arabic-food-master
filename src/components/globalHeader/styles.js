import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 80,
        backgroundColor: '#8ab661',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
    },
    menuRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 40,
    },
    textRow: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    menuBarContainer: {
        position: 'absolute',
    },
    menuBar: {
        marginLeft: 350,
    }
})
