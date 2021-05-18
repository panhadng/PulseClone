import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 0.25,
    },
    top: {
        flex: 0.35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
    },
    back: {
        resizeMode: 'contain',
        height: 25,
        right: 150,
    },
    contentPlate: {
        flex: 0.75/9,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: '#D3D3D3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    icons: {
        height: 25,
        resizeMode: 'contain',
        position: 'absolute',
        left: 60
    },
    otherPlate: {
        flex: 0.075,
        backgroundColor: '#f5fcff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
})

export default styles;