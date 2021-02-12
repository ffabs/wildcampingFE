import Data from '../camping-data.json';
import LoadData from './LoadData';

var LoadFilterData = function(filter, status){
    let campingIds = LoadData();
    if(status === 0) {
        return campingIds;
    } else {
        let campingIdsRightFilter = [];
        if(filter === "price"){
            for (let i=0; i < campingIds.length; i++) {
                if(Data[campingIds[i]][filter] === 0) {
                    campingIdsRightFilter.push(campingIds[i]);      
                }
                if(i===(campingIds.length-1)){
                    return campingIdsRightFilter;
                }
            }
        } else {
            for (let i=0; i < campingIds.length; i++) {
                if(Data[campingIds[i]][filter] === true) {
                    campingIdsRightFilter.push(campingIds[i]);      
                }
                if(i===(campingIds.length-1)){
                    return campingIdsRightFilter;
                }
            }
        } 
    }
}

export default LoadFilterData;