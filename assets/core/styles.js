import { StyleSheet, Dimensions } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width; 
const pulseRed = '#e40b00';
const introRed = '#e40b00';
const headerMargin = 7;

const styles = StyleSheet.create({
    intro: {
      flex: 1,
      backgroundColor: introRed,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pulseIntro: {
      position: 'absolute',
      resizeMode: 'contain',
      width: 250,
    },
    // HomeScreen
    home: {
      flex: 1,
      backgroundColor: '#ececec'
    },
    // Header Section
    header: {
      width: '100%',
      backgroundColor: pulseRed,
      height: 80,
      paddingTop: 5
    },
    pulseHeader: {
      resizeMode: 'contain',
      height: 45,
      right: 20,
      top: headerMargin,
    },
    accountHeader: {
      resizeMode: 'contain',
      width: 35,
      bottom: 160,
    },
    buttonHeader: {
      backgroundColor: 'transparent',
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
    },
    bellHeader: {
      resizeMode: 'contain',
      width: 25,
      bottom: 235,
    },
    shareHeader: {
      resizeMode: 'contain',
      width: 24,
      bottom: 108, 
      right: 20,
    },
    giftHeader: {
      resizeMode: 'contain',
      width: 25,
      bottom: 170,
      right: 10
    },
    //Content Section
    content: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    post: {
      width: '100%' ,  
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    postContainer: {
      marginTop: 20,
      width: screenWidth - 30 ,  
      height: 200,
      backgroundColor: 'white',
      borderWidth: 5,
      borderColor: 'white',
      elevation: 5,
      shadowColor: "#000000",
      shadowOpacity: 0.4,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    button: {
      backgroundColor: pulseRed,
      alignItems: 'center',
      justifyContent: 'center',
      height: 35,
      width: 130,
      borderRadius: 20,
      position: 'absolute',
      right: 15,
      bottom: 15,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold'
    },
    postTitle: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      position: 'absolute',
      top: '47%',
      left: 10,
    },
    underlineTitle: {
      top: '58%',
      height: 2,
      backgroundColor: '#eb1c2c',
      width: 25,
      left: 10,
    },
    postText: {
      color: 'white',
      fontSize: 13,
      position: 'absolute',
      left: 10,
      top: '60%'
    },
    shareContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: 40,
      bottom: 0,    
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    shareIcon: {
      width: 35,
      height: 35,
      marginHorizontal: 10,
      marginTop: 5
    },
    //bottom tab only from here
    tabContainer: {
      backgroundColor: 'white',
      height: 70,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 40,
      left: 5
    },
    tabIcon: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
      top: 10,
    }
})

export default styles;