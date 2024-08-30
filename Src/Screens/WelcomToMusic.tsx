import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../Styles/globalStyle';
import {ButtonComponent, SpaceComponent, TextComponent} from '../Components';
import {appColors} from '../Theme/AppColors';

const WelcomToMusic = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/personDZ.jpg')}
        style={{opacity: 0.7, flex: 1, zIndex: 1}}/>
      <View style={{position: 'absolute'}}>
        <SpaceComponent height={91} />
        <View style={{alignItems: 'center', left:70,}}>
          <Image source={require('../../assets/images/FloterRadio.png')} />
        </View>
        <SpaceComponent height={75} />
        <View style={{paddingLeft: 52}}>
          <TextComponent
            label={`Let's Get`}
            title
            styles={{
              fontWeight: '700',
              fontSize: 60,
              lineHeight: 63.42,
            }}
          />
          <TextComponent
            label={`Started`}
            title
            styles={{
              fontWeight: '700',
              fontSize: 60,
              lineHeight: 63.42,
            }}
          />
          <SpaceComponent height={31} />
          <View style={{width: 204, height: 82}}>
            <TextComponent
              label={`Enjoy the best radio stations from your home, don't miss out on anything.`}
              title
              styles={{
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 19.09,
              }}
            />
          </View>
        </View>
      </View>
      <ButtonComponent
        lable="Get start"
        type="primary"
        lableColor={appColors.white}
        styles={{
          width: 310,
          height: 58,
          borderRadius: 10,
          position: 'absolute',
          bottom: 80,
          left: 52,
        }}
        onPress={()=> console.log("hello")
        }
      />
    </ImageBackground>
  );
};

export default WelcomToMusic;
