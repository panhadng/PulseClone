import {View, Text, Image, Button, ImageBackground, Pressable, TouchableOpacityBase, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const pulse_white = require('../images/pulse_white2.png');
const pulse_header = require('../images/pulse_by_Pru.png');
const user_header = require('../images/user2.png');
const bell_header = require('../images/bell2.png');
const share_header = require('../images/share2.png');
const gift_header = require('../images/gift2.png');

function IntroScreen({ navigation }) {
  return (
    <View style = {styles.intro}>
      <Image style = {styles.pulseIntro} source = {pulse_white} 
        onLoadEnd = {() => setTimeout(function(){navigation.navigate('Home');}, 4000)}
      />
    </View>
  );
}

const cycling = require('../images/cycling.jpg');
const wearables = require('../images/wearables2.jpg');
const read_news = require('../images/readnews.jpg');
const community = require('../images/community.jpg');
const friends = require('../images/fribp.jpg');
const whatsapp = require('../images/whataspp.png');
const line = require('../images/line.png');
const viber = require('../images/viber.png');
const messenger = require('../images/messenger.png');
const contacts = require('../images/contacts.png');
const shoppe = require('../images/shopping.jpg');
const mypolicy = require('../images/policy.jpg');

const home = require('../images/home.jpg');
const health = require('../images/health.jpg');
const account = require('../images/account.jpg');
const superm = require('../images/superm.jpg');

const screenWidth = Dimensions.get('window').width; 

function HomeScreen({navigation}) {
  return (
    <View style = {styles.home}>
      <View style = {styles.header}>
        <View style = {styles.buttonHeader}>
          <Pressable onPress = {() => navigation.navigate('Account')} style = {{
            resizeMode: 'contain',
            bottom: 160,
            top: 15,
            width: 40,
            height: 80,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Image  source = {user_header} style = {{resizeMode: 'contain', width: 40}} />                        
          </Pressable>
          <View style = {{flex:1, backgroundColor: 'transparent', width: '100%', height: 35, 
          top: 32, flexDirection: 'row', justifyContent: 'flex-end'}} >    
            <Image style = {styles.shareHeader} source = {share_header} />  
            <Image style = {styles.giftHeader} source = {gift_header} />
            <Image style = {styles.bellHeader} source = {bell_header} /> 
          </View>
        </View>
        <View style = {{height: 45, top: 20, width: '50%', backgroundColor: 'transparent', 
        alignItems: 'center', left: '25%'}} >
          <Image style = {styles.pulseHeader} source = {pulse_header} />
        </View>
      </View>
      <ScrollView>
        <View style = {styles.content}>
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator ={false}>
          <View style = {{marginTop: 10,
            marginHorizontal: 10,
            marginLeft: 20,
            width: screenWidth - 10 ,  
            height: 210,
            backgroundColor: 'transparent',}}>
            <Image style = {{width: '100%', height: '100%', borderRadius: 20,}} source = {superm}/>
          </View>
          <View style = {{marginTop: 20,
            marginHorizontal: 10,
            marginRight: 20,
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
            }}}>
            <ImageBackground style = {styles.post} source = {wearables}>
              <View style = {{flex: 0.5}}>
                <Text style = {styles.postTitle} >My Wearables</Text>
                <View style = {styles.underlineTitle} />
                <Text style = {styles.postText} >
                  Have you connected your wearable yet?{"\n"}Track all your activities at the click of a button
                </Text>
              </View>
              <Pressable style = {styles.button}>
                <Text style = {styles.buttonText} >Connect Now</Text>
              </Pressable>
            </ImageBackground>
          </View>
        </ScrollView>
          
          <View style = {styles.postContainer}>
            <ImageBackground style = {styles.post} source = {read_news}>
              <View style = {{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', flexDirection: 'row', 
              justifyContent: 'space-between',}} >
                <View style = {{flex: 0.5}}>
                  <Text style = {styles.postTitle} >My Health Content</Text>
                  <View style = {styles.underlineTitle} />
                  <Text style = {styles.postText} >
                    Read.Like.Comment.Share{"\n"}Stay up to date with all that is happening in the world of Health and Fitness
                  </Text>
                </View>
              </View>
              <Pressable style = {styles.button}>
                <Text style = {styles.buttonText} >Browse</Text>
              </Pressable>
            </ImageBackground>
          </View>

          <View style = {styles.postContainer}>
            <ImageBackground style = {styles.post} source = {community}>
              <View style = {{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', flexDirection: 'row', 
              justifyContent: 'space-between',}} >
                <View style = {{flex: 0.5}}>
                  <Text style = {styles.postTitle} >My Communities</Text>
                  <View style = {styles.underlineTitle} />
                  <Text style = {styles.postText} >
                    Learn.Share.Inspire{"\n"}Inspire your communities to be healthier
                  </Text>
                </View>
              </View>
              <Pressable style = {styles.button}>
                <Text style = {styles.buttonText} >Join</Text>
              </Pressable>
            </ImageBackground>
          </View>

          <View style = {styles.postContainer}>
            <ImageBackground style = {styles.post} source = {friends}>
              <View style = {{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', flexDirection: 'row', 
              justifyContent: 'space-between',}} >
                <View style = {{flex: 0.8}}>
                  <Text style = {styles.postTitle} >Share with friends</Text>
                  <View style = {styles.underlineTitle} />
                  <Text style = {styles.postText} >
                    Encourage your buddies to stay healthy and keep earning rewards
                  </Text>
                </View>
              </View>

              <View style = {styles.shareContainer}>
                <Image source = {whatsapp} style = {styles.shareIcon} /> 
                <Image source = {contacts} style = {styles.shareIcon} />
                <Image source = {messenger} style = {styles.shareIcon} />
                <Image source = {viber} style = {styles.shareIcon} />
                <Image source = {line} style = {styles.shareIcon} />
              </View>
            </ImageBackground>
          </View>

          <View style = {styles.postContainer}>
            <ImageBackground style = {styles.post} source = {shoppe}>
              <View style = {{flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', 
              justifyContent: 'space-between',}} >
                <View style = {{flex: 0.5}}>
                  <Text style = {styles.postTitle} >PRU Shoppe</Text>
                  <View style = {styles.underlineTitle} />
                  <Text style = {styles.postText} >
                    Getting insurance has never been easier
                  </Text>
                </View>
              </View>

              <Pressable style = {styles.button}>
                <Text style = {styles.buttonText} >Browse</Text>
              </Pressable>
            </ImageBackground>
          </View>

          <View style = {styles.postContainer}>
            <ImageBackground style = {styles.post} source = {mypolicy}>
              <View style = {{flex: 0.5}}>
                <Text style = {styles.postTitle} >My Policies</Text>
                <View style = {styles.underlineTitle} />
                <Text style = {styles.postText} >
                  Access your policies at the click of a button
                </Text>
              </View>

              <Pressable style = {styles.button}>
                <Text style = {styles.buttonText} >Browse</Text>
              </Pressable>
            </ImageBackground>
          </View>

          <Text style = {{color: 'grey', marginVertical: 5}}>That's all for now!</Text>

        </View>      
      </ScrollView>

      <View style = {styles.tabContainer} >
        <View>
          <Image source = {home} style = {styles.tabIcon} />
          <Text style = {{color: '#141823', top: 4}} >Home</Text>
        </View>

        <View>
          <Image source = {health} style = {styles.tabIcon} />
          <Text style = {{color: '#141823', top: 4}} >Health</Text>
        </View>

        <View>
          <Image source = {account} style = {styles.tabIcon} />
          <Text style = {{color: '#141823', top: 4, right: 5}} >Account</Text>
        </View>
        
      </View>

    </View>
  );
}

export { IntroScreen, HomeScreen };