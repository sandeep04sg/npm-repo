module.exports = (x,y,callback) => {
    if(x <=0 || y <=0){
        setTimeout(() =>
            callback(new Error("rectanagle diminesion should be greater then zero : l = "+x+" and b = "+y)
        ,null), 2000);
    }
    else{
        setTimeout(() =>
        callback(null,{
            perimeter : () => (2*(x+y)),
            area : () => (x*y)
        })
    , 
        2000);
    }

}
