import React from 'react';
import { Text, View, Image, ImageBackground, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

const backButton = require('../images/back.png');
const pulse = require('../images/pulse_logo.png');
const bubble = require('../images/bubbles2.jpg');
const account2 = require('../images/account2.png');
const edit2 = require('../images/edit2.png');
const cycle = require('../images/cycling.png');
const gift = require('../images/gifts.jpg');
const bell = require('../images/bell3.png');
const settings = require('../images/settings.png');
const feedback = require('../images/chat.png');
const settingLock = require('../images/settingsUser.png');
const userLock= require('../images/userlock.png');
const contract = require('../images/contractShield.png');
const signout = require('../images/signout.png');

function AccountScreen({navigation}) {
    return (
        <View style = {styles.container} > 
            <ImageBackground style = {styles.header} source = {bubble} >
                <View style = {styles.top} >
                    <Pressable style = {{backgroundColor: 'transparent', top: 30, width: 30, height: 25,}} onPress = {() => navigation.navigate('Home')} >
                        <Image style = {styles.back} source = {backButton} />
                    </Pressable>
                    <Image style = {{
                        resizeMode: 'contain',
                        width: 80,
                        bottom: 25,
                    }} source = {pulse} />
                </View>
                <View style = {{flex: 1, backgroundColor: 'transparent', top: 20, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20,}}>
                    <Image source = {account2} style = {{width: 70, resizeMode: 'contain', bottom: 180, right: 20}}/>
                    <View style = {{width: 160, backgroundColor: 'transparent', height: 50, top: 25}} >
                        <Text style = {{fontWeight: 'bold', fontSize: 14}} >Ratanak Panha Duong</Text>
                        <Text style = {{fontSize: 12}} >Male, 21 years</Text>
                        <Text style = {{fontSize: 12}} >+855 89305629</Text>
                    </View>
                    <Image source = {edit2} style = {{width: 25, resizeMode: 'contain', left: 50}} />
                </View>
            </ImageBackground>                


            <View style = {styles.contentPlate} >
                <Text style = {{color: '#696969', fontSize: 14}} >My Wearables</Text>
                <Image source = {cycle} style = {{width: 25, resizeMode: 'contain', left: 2,}} />
            </View>
            <View style = {styles.contentPlate} >
                <Text style = {{color: '#696969', fontSize: 14}} >My Rewards</Text>
                <Image source = {gift} style = {{height: 20, resizeMode: 'contain', left: 63}} />
            </View>
            <View style = {styles.contentPlate} >
                <Text style = {{color: '#696969', fontSize: 14}} >My Notifications</Text>
                <Image source = {bell} style = {{resizeMode: 'contain', width: 20, }} />
            </View>
            <View style = {styles.contentPlate} >
                <Text style = {{color: '#696969', fontSize: 14}} >My Settings</Text>
                <Image source = {settings} style = {{resizeMode: 'contain', width: 22, left: 2 }} />
            </View>
            <View style = {styles.contentPlate} >
                <Text style = {{color: '#696969', fontSize: 14}} >My Feedback</Text>
                <Image source = {feedback} style = {{height: 20, resizeMode: 'contain', left: 104}} />
            </View>
            
            <View style = {styles.otherPlate} >
                <Text style = {{color: '#696969', fontSize: 14}} >Legal & Privacy</Text>
                <Image source = {userLock} style = {{width: 25, resizeMode: 'contain', left: 5}} />
            </View>
            <View style = {styles.otherPlate} >
                <Text style = {{color: '#696969', fontSize: 14}} >Pulse Personalized</Text>
                <Image source = {settingLock} style = {{width: 25, resizeMode: 'contain', left: 5}} />
            </View>
            <View style = {styles.otherPlate} >
                <Text style = {{color: '#696969', fontSize: 14}} >Marketing Content</Text>
                <Image source = {contract} style = {{width: 25, resizeMode: 'contain', left: 5}} />
            </View>
            <View style = {styles.otherPlate} >
                <Text style = {{color: '#696969', fontSize: 14}} >Sign Out</Text>
                <Image source = {signout} style = {{width: 22, resizeMode: 'contain', left: 5}} />
            </View>
            <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{top: 10, fontSize: 12, color: '#141823'}}>That's all for now!</Text>
            </View>
        </View>

    );
}

export { AccountScreen };