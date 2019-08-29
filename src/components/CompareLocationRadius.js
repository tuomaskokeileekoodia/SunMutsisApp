import { isPointWithinRadius } from 'geolib';


export const CompareLocationRadius = (variables) => {

    // const current = await GetCurrent();
    // console.log('GetCurrent', current)
    const latit = variables.latitude;
    console.log('latit', latit);
    const longit = variables.longitude;
    console.log('longit', longit);


    if (isPointWithinRadius(
        {latitude: latit, longitude: longit},
        {latitude: 60.109226, longitude: 24.440453},
        2000
    )) {
        alert("Tulit kotiin. Vaihdetaan kotilista: ");

    }
    else if (isPointWithinRadius(
        {latitude: latit, longitude: longit},
        {latitude: 60.1795, longitude: 24.8348},
        2000
    )){
        alert("Tulit töihin. Vaihdetaan työlista: ");
    }else{
        alert("Olet muualla. Tee mitä haluat");
    }
};

