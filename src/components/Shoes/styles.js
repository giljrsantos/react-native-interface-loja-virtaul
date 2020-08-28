import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shoesImg: {
        width: 175,
        height: 175,
        borderRadius: 6
    },
    shoesText: {
        fontSize: 16
    },
    shoesPrice: {
        fontSize: 14,
        color: '#000',
        opacity: 0.4,
    }
});

export default styles;