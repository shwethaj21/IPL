var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, './matches.csv');
var f = fs.readFileSync(filePath, {
    encoding: 'utf-8'
});
f = f.split("\n");
headers = f.shift().split(",");
headers.splice(headers.length - 1, 1);
headers.push('fielder');
var matches = [];
f.forEach(function (d) {
    tmp = {};
    row = d.split(",");
    for (var i = 0; i < headers.length; i++) {
        tmp[headers[i]] = row[i];
    }
    matches.push(tmp);
});

var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, './deliveries.csv');
var f = fs.readFileSync(filePath, {
    encoding: 'utf-8'
});
f = f.split("\n");
headers = f.shift().split(",");
headers.splice(headers.length - 1, 1);
headers.push('fielder');
var deliveries = [];
f.forEach(function (d) {
    tmp = {};
    row = d.split(",");
    for (var i = 0; i < headers.length; i++) {
        tmp[headers[i]] = row[i];
    }
    deliveries.push(tmp);
});
//console.log(deliveries);

let count = {};
for(let prop=0;prop<matches.length;prop++){  
   count[matches[prop].season]=(count[matches[prop].season] || 0) +1;
}
for (var key in count) {
    if (count[key] > 1 ) {
        console.log(key + ":" + ' ' + count[key]);
    }
}

 

























/*if(matches[i].season === matches[0].season ){
      c++;
  } 
   if(matches[i].season === matches[59].season ){
     d++;
      //console.log(matches[i].season)
  }  
  if(matches[i].season === 2016){
   e++;
  }
} 
console.log("2017" +" :"+c);
console.log("2008" +" :"+d);
console.log("2010" +" :"+e);
*/














