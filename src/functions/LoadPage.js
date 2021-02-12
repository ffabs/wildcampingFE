var LoadPage = function (newPage, campingIds){
    let itemsPerPage = 6;
    let firstIndex = ( newPage - 1 ) * itemsPerPage;
    let lastPage = Math.ceil(campingIds.length / itemsPerPage);
    let camping1 = campingIds[firstIndex];
    let camping2 = campingIds[firstIndex+1];
    let camping3 = campingIds[firstIndex+2];
    let camping4 = campingIds[firstIndex+3];
    let camping5 = campingIds[firstIndex+4];
    let camping6 = campingIds[firstIndex+5];
    return [lastPage, camping1, camping2, camping3, camping4, camping5, camping6];
}

export default LoadPage;