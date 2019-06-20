const medianResult = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }

let getAggregatedData = (result)=>{
    
        let max = 0,min = 0,sum = 0,avg = 0 ,median,length=0,arr = [];
        length  = result.length;
        let temperature = 0;
        min = result.length>0?result[0].temp:0;
        for(let i=0;i<length;i++){
            temperature = result[i].temp;
            sum+= temperature;
            arr.push(temperature);
            if(temperature>max){
                max = temperature;
            }
            if(temperature<min){
                min = temperature;
            }
        }
        avg = result.length>0?sum/result.length:1;
        median = medianResult(arr);
       return aggregatedDate = {'avg':avg,'max':max,'min':min,'median':median};
};

module.exports = getAggregatedData