import LoadCommonData from './LoadCommonData';

var LoadAllCommonData = function(arr1, arr2, arr3, arr4, arr5, arr6, arr7){
    let common12 = LoadCommonData(arr1, arr2);
    let common34 = LoadCommonData(arr3, arr4);
    let common56 = LoadCommonData(arr5, arr6);
    let common1234 = LoadCommonData(common12, common34);
    let common567 = LoadCommonData(common56, arr7);
    let common1234567 = LoadCommonData(common1234, common567);
    return common1234567;
}

export default LoadAllCommonData;