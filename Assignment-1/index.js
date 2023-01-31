
let orderData = {
'Below 500':60,
'500-1000':50,
'1000-1500':60,
'1500-2000':20,
'Above 2000':60
}

let totOrder = 0;
let n = 0;

for(val in orderData){
    totOrder+=orderData[val];
}

let perOfProp = [];

for (val in orderData){

    n++;
    perOfProp.push({
       'id':n,
       'order':val,
       'order percentage':(orderData[val]/totOrder)*100,
    });

}

console.log("Total Orders placed ", totOrder);
console.log("Total Number of order proportion options ",n);
console.log("Percentages for all proportions \n",perOfProp);
