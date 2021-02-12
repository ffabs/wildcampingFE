import Data from '../camping-data.json';

var LoadData = function (){
    let campingIds = [];
    for (var x in Data) {
      campingIds.push(x);
    }
    return campingIds;
}

export default LoadData;