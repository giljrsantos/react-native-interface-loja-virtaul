import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
    },
    titlePrice: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',        
    },
    titleName: {
        fontSize: 30,
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',
    },
    dotContainer: {
        flexDirection: "row",
        marginVertical: '7%',
    },
    ListSize: {
        flexDirection: "row",
        width: '100%',
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: "2%",
        paddingHorizontal: "2%"
    },
    titleContent: {
        fontSize: 22,
        marginVertical: "2%"
    },
    descriptionContent: {
        lineHeight: 25,

    },
    textList: {
        fontSize: 22,
        lineHeight: 25,
    },
    line:{
        borderWidth: 1,
        borderBottomColor: "#ddd",
        marginVertical: "2%",
    }

});

export default styles;