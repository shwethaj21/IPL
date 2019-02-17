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
var match2=[];

for(let match =0;match < matches.length;match++){
    if(matches[match].season == 2015){
        match2.push(matches[match].season+ ": " + matches[match].id);
    }
}
//console.log(match2);
var deliver =[];
var bowlers =[];
for(var i =0; i < deliveries.length;i++){
    deliver.push(deliveries[i].match_id + ": " + deliveries[i].bowler+ ": " + deliveries[i].total_runs);
    bowlers.push(deliveries[i].bowler);
} 
//console.log(deliver);
//console.log(bowlers);


var conceededBowlers =[];
for (var i = 0; i < matches.length; i++) {
    if(matches[i].season == 2015){
    var id = matches[i].id;
    }
    for (var j = 0; j < deliveries.length; j++) {
      var m_id = deliveries[j].match_id;
        if (id === m_id)
           conceededBowlers.push(deliveries[j].bowler + ":" + deliveries[j].total_runs)
    } 
 }
//console.log(conceededBowlers);

var sortedBowlers = bowlers.sort();
var bowlersCount =[];
for(var i =0; i < sortedBowlers.length;i = i+ count){
    count = 1;
    for(var j = i+1 ; j < sortedBowlers.length;j++){
        if(sortedBowlers[i] === sortedBowlers[j]){
            count++;
        }
    }
    bowlersCount.push(sortedBowlers[i] + ":" + count);
}
//console.log(bowlersCount);

var allBowlers =[];
var conceededRunsCount =[];
var probForObj ={};
var probForData =[];
var probForVal = [];
var distinctBowlers = [];

for(var item of bowlersCount){
    var count =0;
    var bowler = item.toString().split(':')[0];
    var overs = Math.round(item.toString().split(':')[1]/6);
    for(var j = 0; j < conceededBowlers.length;j++){
        if(bowler.trim() == conceededBowlers[j].toString().split(':')[0].trim()){
            count = count + parseInt(conceededBowlers[j].toString().split(':')[1]);
        }
    }allBowlers.push(bowler);
//console.log(allBowlers);
if(Math.floor(count/overs)>0){
    conceededRunsCount.push(bowler + ":" + count + ":" + (count / overs));
    probForData.push(bowler);
    probForVal.push(count/overs);
}
probForObj.data = probForData;
probForObj.value = probForVal;
}
console.log(probForObj);