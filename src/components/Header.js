// Header, joka funktiona tuotetaan näkyville joka sivulle ylös. Korvaa perus Header-elementin,
// jonka muokkaus osoittautui liian vaikeaksi.(Lauri)
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Hamburger from 'react-native-hamburger';

const Header = () => {
    const { textStyle, viewStyle  } = styles;
//Haasteena tässä on saada navigaatio toimimaan. Nappeja voi rakennella, mutta saako niillä liikkumista sivuilla,
    //sitä en vielä tiedä... (Lauri)
    return (
        <View style={viewStyle}>
            <ImageBackground source={require('./kuva.png')} style={{width: '100%', height: '100%', opacity: 1}}>
                <Text style={textStyle} onPress={()=> alert('Soita äidille!')}>Sun Mutsis</Text>
            </ImageBackground>
        </View>
    )
};
//Vaikka muotoilua olemme toistaiseksi välttäneetkin, tämä oli pakko: Header ei ole muuta kuin muotoilua... (Lauri)
const styles = {

    viewStyle: {
        flexDirection: 'row',
        // Pistää elementit riviin (Lauri)
        backgroundColor: '#46529c',
        height: 100,
        //paddingTop: 15,
        // ym lisää reunusta tekstin ja view elementin reunan väliin
        //paddingLeft: 20,
        //paddingRight: 20,
        // sama mutta sivuille.
        //justifyContent: 'center',
        //textAlign: 'center',
        //textAlignVertical: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // Tämä lisää väliä elementtien välille. (Lauri)
    },
    textStyle: {
        paddingTop: 15,
        fontFamily: 'monospace',
        fontSize: 50,
        fontWeight: '700',
        //opacity: 1,
        color: '#FFF',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }

};
export default Header;
