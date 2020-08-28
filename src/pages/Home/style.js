import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 8,
    },
    image: {
        width: '100%',
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',

    },
    textBlack: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        color: '#000',
        marginHorizontal: '1%',
    },
    textGray: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        color: '#CECECF',
        marginHorizontal: '1%',
    },
    filterList: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
    },
    textLacamento: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        color: '#000',
        marginHorizontal: '5%',
    },
    lancamentos: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default styles;