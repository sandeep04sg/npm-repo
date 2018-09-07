var rect=('./rectangle');

function solveRect(l,b) {
    console.log("solving for rectangle with l= "+l+" and b "+b);
    if(l <=0 || b <=0){
        console.log("rectanagle diminesion should be greater then zero : l = "+l+" and b = "+b);
    }
    else{
        console.log("Area of the reactangle is : "+rect.area(l,b));
        console.log("perimeter of the rectangle is : "+rect.perimeter(l,b));
    }
}

solveRect(2,5);
solveRect(6,8);
