input = [64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060];
input2 = "6392 51608 71247 14271 48327 50618 67435 47029 61857 22987 64858 99745 75504 85464 60482 30320 11342 48808 66882 40522";
input2 = input2.split(" ").map((item) => {return parseInt(item)});

input3 = "20\n"+ "6392 51608 71247 14271 48327 50618 67435 47029 61857 22987 64858 99745 75504 85464 60482 30320 11342 48808 66882 40522";
51284.9
51113.0
6392

processData = (input) => { 
    input = input.replace("\n", " ").split(" ");
    input = input.slice(1, input.length);
    input = input.map((item) =>{return parseInt(item)});
    input = input.sort(function(a,b){return a - b});
    var mean = median = mode = 0;
    var numDict = {};
    var sortedNumDict = [];
    const dataLength = input.length;
    const midLength = Math.floor(dataLength / 2);
    mean = (input.reduce((sum, item) => { return sum + item }, 0)) / dataLength;
    median = (dataLength % 2 == 0) ? (input[midLength] + input[midLength - 1]) / 2 : input[midLength];
    for (let item of input) {
        if (Object.keys(numDict).includes(item)) {
            numDict[item] += 1;
        } else { 
            numDict[item] = 1;
        }
    }
    for (let num in numDict) { 
        sortedNumDict.push([num, numDict[num]]);
    }
    sortedNumDict.sort(function(a, b){return a[1]-b[1]});
    console.log(sortedNumDict);
    console.log(mean);
    console.log(median);
    console.log(sortedNumDict[0][0]);

}

processData(input3);