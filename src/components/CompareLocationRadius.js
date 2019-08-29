import { isPointWithinRadius } from 'geolib';
import { GetCurrent } from "./GetCurrent";

export const CompareLocationRadius = async () => {
    const current = await GetCurrent();
    console.log('GetCurrent', current)
    const latit = current.latitude;
    console.log('latit', latit);
    const longit = current.longitude;
    console.log('longit', longit);


    if (isPointWithinRadius(
        {latitude: latit, longitude: longit},
        {latitude: 60.109820, longitude: 24.442913},
        5000
    )) {
        alert("Olet kotona. Ethän vain aio avata Netflixiä. Katsopa vaihtoehdot Todosta.");
    }
    if (isPointWithinRadius(
        {latitude: latit, longitude: longit},
        {latitude: 60.177252, longitude: 24.832446}
    )){
        alert("Olet töissä, älä mene suoraan kahvikoneelle! Kysy pomolta ohjeet")
    }else{
        alert("Olet muualla. Tee mitä haluat")
    }
};

