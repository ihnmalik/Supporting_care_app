import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        marginTop: 5,
        height: 40,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 12,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 6,
        marginBottom: 10,
        borderWidth: 20,
        // marginLeft: '2%',
        // width: '30%',
        borderColor: '#d4d4d4',
        borderWidth: 1,
    },
    colContainer: {
        flex: 1,
        width: '50%',
        margin: 10
    }
})