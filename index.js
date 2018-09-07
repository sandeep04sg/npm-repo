var rect=require('./rectangle');

function solveRect(l,b) {
    console.log("solving for rectangle with l= "+l+" and b "+b);
   
    rect(l,b,(err,rectangle) => {
        if(err){
            console.log("Error : ",err.message);
        }
        else{
            console.log("the area of the rectangle "+l+" and b"+b+" is area "+rectangle.area());
            console.log("the perimeter of the rectangle "+l+" and b"+b+" is area "+rectangle.perimeter());

        }
    } );
}
solveRect(8,50);
solveRect(60,18);
solveRect(2,5);
solveRect(6,8);
