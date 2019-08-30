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
        {latitude: 60.1088983, longitude:  24.4429},
        2000
    )) {
        alert("Älä vielä rojahda sohvalle. Katsopa kotilista! T. äiti");
    }
    else if (isPointWithinRadius(
        {latitude: latit, longitude: longit},
        {latitude: 60.1795, longitude: 24.8348},
        2000
    )){
        alert("Olet töissä. Työnkuvaasi ei kuulu Instagram, joten aloittaisitko kiltisti sen mistä sinulle maksetaan. T. äiti");
    }
};