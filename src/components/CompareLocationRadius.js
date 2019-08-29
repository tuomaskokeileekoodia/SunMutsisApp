import { isPointWithinRadius } from 'geolib';
export const CompareLocationRadius = async (variables) => {
    // const current = await GetCurrent();
    // console.log('GetCurrent', current)
    const latit = variables.latitude;
    console.log('latit', latit);
    const longit = variables.longitude;
    console.log('longit', longit);
    if (isPointWithinRadius(
        {latitude: latit, longitude: longit},
        {latitude: 60.109820, longitude: 24.442913},
        10000
    )) {
        alert("Tulit kotiin. Vaihdetaan kotilista: ")
    }
    if (isPointWithinRadius(
        {latitude: latit, longitude: longit},
        {latitude: 60.1795, longitude: 24.8348},
        5000
    )){
        alert("Tulit töihin. Vaihdetaan työlista: ")
    }else{
        alert("Olet muualla. Tee mitä haluat")
    }
};
