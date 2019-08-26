// Header, joka funktiona tuotetaan näkyville joka sivulle ylös. Korvaa perus Header-elementin,
// jonka muokkaus osoittautui liian vaikeaksi.(Lauri)
import React from 'react';
import {View, Text} from 'react-native';
import Hamburger from 'react-native-hamburger';

const Header = () => {
    const { textStyle, viewStyle  } = styles;
//Haasteena tässä on saada navigaatio toimimaan. Nappeja voi rakennella, mutta saako niillä liikkumista sivuilla,
    //sitä en vielä tiedä... (Lauri)
    return (
        <View style={viewStyle}>
            <Hamburger/>
            <Text style={textStyle} onPress={()=> alert('Soita äidille!')}>Tässä Heederi</Text>
        </View>
    )
};
//Vaikka muotoilua olemme toistaiseksi välttäneetkin, tämä oli pakko: Header ei ole muuta kuin muotoilua... (Lauri)
const styles = {

    viewStyle: {
        flexDirection: 'row',
        // Pistää elementit riviin (Lauri)
        backgroundColor: '#1F9',
        height: 100,
        paddingTop: 15,
        // ym lisää reunusta tekstin ja view elementin reunan väliin
        paddingLeft: 20,
        paddingRight: 20,
        // sama mutta sivuille.
        alignItems: 'center',
        justifyContent: 'space-between'
        // Tämä lisää väliä elementtien välille. (Lauri)
    },
    textStyle: {
        fontFamily: 'monospace',
        fontSize: 40,
        fontWeight: '700',
        color: '#FFF'
    }

};
export default Header;