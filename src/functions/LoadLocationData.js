import Data from '../camping-data.json';
import LoadData from './LoadData';

var LoadLocationData = function(newLocation){
    let campingIds = LoadData();
    if(newLocation === "All locations") {
        return campingIds;
    } else {
        let campingIdsRightLocation = [];
        for (let i=0; i < campingIds.length; i++) {
            if(Data[campingIds[i]]["region"] === newLocation) {
            campingIdsRightLocation.push(campingIds[i]);      
            }
            if(i===(campingIds.length-1)){
                return campingIdsRightLocation;
            }
        }
    }
}

export default LoadLocationData;