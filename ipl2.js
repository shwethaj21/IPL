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
//console.log(matches);

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

 var match1=[];
 
for(let match =0;match < matches.length;match++){
    if(matches[match].season == 2016){
        match1.push(matches[match].id);
    }
}
//console.log(match1);


var conceded ={};

for(let del =0;del < deliveries.length;del++){
    if(match1.indexOf(deliveries[del].match_id) !== -1){
        if(conceded.hasOwnProperty(deliveries[del].bowling_team)){
            conceded[deliveries[del].bowling_team] += parseInt(deliveries[del].extra_runs);
        }
        else {
            conceded[deliveries[del].bowling_team] = parseInt(deliveries[del].extra_runs);
        }
    }
} 
console.log(conceded);









