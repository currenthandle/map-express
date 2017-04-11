module.exports = (dataStr) => {
    let dataArr = dataStr.split('\n')
    let data = []; 
    let dataInstance = {};
    for (let i = 0; i < dataArr.length; i++) {
        let dataItem = dataArr[i].split('	')
        dataInstance = {
            session: dataItem[0].substring(dataItem[0].indexOf('1')),
            lng: dataItem[1],
            lat: dataItem[2],
            alt: dataItem[3]  
        }
      
        data.push(dataInstance)
        dataInstance = {}
    } 
    return data;
}
