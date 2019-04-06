const manipulateData = (allRawData) => {
	console.log("START OF MANIPULATING DATA");
	// console.log(allRawData);

	// =====================
	//   WATER HEATING ROOM
	// =====================

	// Hot water temp #1 (PAR01_1_1) suplyTemp
	console.log("WATER HEATING ROOM");
	console.log("Suply Temp");
	const suplyTempWH = getAveMinMaxAndArr(allRawData["PAR01_1_3"]);
	// Hot water temp #2 (PAR01_1_2) returnTemp
	console.log("WATER HEATING ROOM");
	console.log("Return Temp");
	const returnTempWH = getAveMinMaxAndArr(allRawData["PAR01_1_4"]);

	// Put all the data in the same object
	const waterHeatingRoom = {
		suplyTemp: suplyTempWH,
		returnTemp: returnTempWH
	}


	// =====================
	//      HVAC ROOM
	// =====================
	console.log("HVAC ROOM");
	// Cold Water temp #1 (PAR01_1_3)
	console.log("Cold Water temp #1");
	const suplyTempHVAC = getAveMinMaxAndArr(allRawData["PAR01_1_1"]);
	// Cold Water temp #2 (PAR01_1_4)
	console.log("Cold Water temp #2");
	const returnTempHVAC = getAveMinMaxAndArr(allRawData["PAR01_1_2"]);


  // Put all the data in the same object
	const hvacRoom = {
		suplyTemp: suplyTempHVAC,
		returnTemp: returnTempHVAC
	}

	// =====================
	//     POWER ROOM
	// =====================
	console.log("POWER ROOM");
	// *** Average Current per Phase ***
	// Ave current - Red (PAR01_3_2999)
	const redGauge = getLatestAVE(allRawData["PAR01_3_2999"]);
	// Ave current - Yellow (PAR01_3_3001)
	const yellowGauge = getLatestAVE(allRawData["PAR01_3_3001"]);
	// Ave current - Blue (PAR01_3_3003)
	const blueGauge = getLatestAVE(allRawData["PAR01_3_3003"]);

	// Put it all n a single object
	const averageCurrentPhase = {
		redGauge,
		yellowGauge,
		blueGauge
	}
	// *** Peak Monthly Values ***
	// Max current - Red (PAR01_3_3000)
	const redPhase = getPeakValues(allRawData["PAR01_3_3000"]);
	// Max current -Yellow (PAR01_3_3002)
	const yellowPhase = getPeakValues(allRawData["PAR01_3_3002"]);
	// Max current - Blue (PAR01_3_3004)
	const bluePhase = getPeakValues(allRawData["PAR01_3_3004"]);
	// Max voltage  (PAR01_3_3020)
	const voltageRms = getPeakValues(allRawData["PAR01_3_3020"]);
	// Put all the data in a single object
	const peakMonthlyValue = {
		voltageRms,
		redPhase,
		yellowPhase,
		bluePhase
	};

	// *** Power KWH ***
	// Power Now (PAR01_3_3059)
	const powerNow = getLatestAVE(allRawData["PAR01_3_3059"]);
	// KWH per day | total (PAR01_3_3060)
	const kwhD = getLatestTOTAL(allRawData["PAR01_3_3060"]);
	// kWh/WEEK => 7 last data sent  (PAR01_3_3060)

	// =======================
	//  REDO IT THE RIGHT WAY
	// =======================
	const kwhPerDayArr = allRawData["PAR01_3_3060"];
	let last7kwhData = kwhPerDayArr.slice(Math.max(kwhPerDayArr.length - 7, 0))
	const kwhWeek = last7kwhData.reduce((curr, acc) => {
		return curr + acc.TOTAL;
	}, 0);
	// Put all the data in a single object
	const powerKwh =  {
		powerNow,
		kwhD,
		kwhWeek
	}


	// Present Voltage V (PAR01_3_3019)
	const presentVoltage = getLatestAVE(allRawData["PAR01_3_3019"]);

	// Average Daily Use (kWh) (PAR01_3_3060)
	const averageDailyUse = getLatestTOTAL(allRawData["PAR01_3_3060"]);


	// KWH max for DAY
	const maxKwhArr = allRawData["PAR01_3_3061"];
	// Get the last and second last value
	const lastMaxKwhValue = maxKwhArr[maxKwhArr.length-1].TOTAL;
	const secondLastMaxKwhValue = maxKwhArr[maxKwhArr.length-2].TOTAL;
	// Check the difference between the 2 value
	const maxKwhDayVal = lastMaxKwhValue - secondLastMaxKwhValue;
	// Get the % change
	const maxKwhDayPrcnt = (maxKwhDayVal / lastMaxKwhValue) * 100;
	const maxKwhDay = {
		value: maxKwhDayVal,
		prcnt: maxKwhDayPrcnt
	};



	// KWH max for WEEK

	// // FAKE DATA TO TEST !!!!!
  // let maxKwhArrTest = [...maxKwhArr];
	// for(let i = 0; i < 6; i++){
	// 	const newTestData = [{
	// 		DTM: "2019-03-06T00:00:00.016Z",
	// 		MsgType: "kwh",
	// 		SENID: "PAR01_3_3061",
	// 		TOTAL: Math.random() * 10 + 40,
	// 		index: i
	// 	},{
	// 		DTM: "2019-03-06T00:00:00.016Z",
	// 		MsgType: "kwh",
	// 		SENID: "PAR01_3_3061",
	// 		TOTAL: Math.random() * 10 + 40,
	// 		index: i
	// 	}]
	// 	maxKwhArrTest = [...newTestData, ...maxKwhArrTest];
	// }

	const maxKwhWeek = getMaxKwhTimeline(maxKwhArr, 7);


	// Get the Power Consumption data for the graph 1
	const powerGraph1Data = getGraphData(allRawData["PAR01_3_3019"])
	console.log("=>>", powerGraph1Data);

	// Get the Power Consumption data for the graph 2
	const redGraphData = getGraphData(allRawData["PAR01_3_2999"]);
	const blueGraphData = getGraphData(allRawData["PAR01_3_3001"]);
	const yellowGraphData = getGraphData(allRawData["PAR01_3_3003"]);
	console.log(yellowGraphData);

	// MAnipulate the data to display it easily
	const powerGraph2Data = {
		day: {
			redData: redGraphData.day,
			blueData: blueGraphData.day,
			yellowData: yellowGraphData.day,
		},
		week: {
			redData: redGraphData.week,
			blueData: blueGraphData.week,
			yellowData: yellowGraphData.week,
		},
		month: {
			redData: redGraphData.month,
			blueData: blueGraphData.month,
			yellowData: yellowGraphData.month,
		}
	}

	// Put all the data in the same object
	const powerRoom = {
		averageCurrentPhase,
		peakMonthlyValue,
		powerKwh,
		presentVoltage,
		averageDailyUse,
		maxKwh: {
			maxKwhDay,
			maxKwhWeek
		},
		powerConsumption1: {
			data: powerGraph1Data
		},
		powerConsumption2: {
			data: powerGraph2Data
		}
	}



	// =====================
	//     ALARMS ROOM
	// =====================
	console.log("ALARMS ROOM");
	// console.log(allRawData["PAR01_1_3"]);

	const alarmSensor = ["PAR01_1_3", "PAR01_1_4", "PAR01_1_2", "PAR01_1_1", "PAR01_3_3019"];

	const alarmsArray = [];

	// iterate over the array to check for alarms
	alarmSensor.forEach(sensor => {
		const alarms = allRawData[sensor].filter(item => {
			// get the last 7 days alarms only
		  return item.ALARM && new Date(item.DTM) > weekAgo;
		})
		alarmsArray.push(...alarms);
	});


	// Set up some variables
	const totalAlarms = alarmsArray.length;
	const alarmCount = {
		nonCritical: 0,
		critical: 0,
		total: totalAlarms
	};

	const alarmsByType = {
		"power supply": 0,
		"water heating": 0,
		"chiller supply": 0
	}

	// Format function
	alarmsArray.forEach(item => {
		// Add the alarm type count
		if(item.TYPE === "non-critical") alarmCount.nonCritical++;
		else if(item.TYPE === "critical") alarmCount.critical++;
		// add the prcnt of the alarm
		const prcntValue = (1 / totalAlarms) * 100;
		// console.log(prcntValue);
		alarmsByType[item.GROUP] += prcntValue;
	});

	// Create an array for Alarm Prcnt
	const alarmPrcnt = [];
	for(let type in alarmsByType){
		alarmPrcnt.push({
			title: type,
			value: Math.round(alarmsByType[type])
		});
	}



	const reportData = alarmsArray.map(item => (
		{
			group: item.GROUP,
			message: item.ALARM,
			date: item.DTM,
			type: item.TYPE
		}
	));


	console.log(alarmCount);
	console.log(alarmPrcnt);
	console.log(reportData);



	const alarmsRoom = {
		alarmCount,
		alarmPrcnt,
		reportData
	}



	// Return all the dataset object
	const dataset = {
		powerRoom,
		waterHeatingRoom,
		hvacRoom,
		alarmsRoom
	}

	// console.log(dataset);

	return dataset;
}


export default manipulateData;




// const alarmsRoom = {
// 	alarmPrcnt: [
// 			{
// 				"title": "Power",
// 				"value": 15
// 			},
// 			{
// 				"title": "Water",
// 				"value": 30
// 			},
// 			{
// 				"title": "Temperature",
// 				"value": 45
// 			},
// 			{
// 				"title": "Water Heating",
// 				"value": 10
// 			}
// 		],
// 	alarmCount: {
// 		nonCritical: 11,
// 		critical: 4,
// 		total: 15
// 	},
// 	reportData: [
// 		{
// 			"group": "Water Heating",
// 			"message": "Hot Water Supply - Low Temperature",
// 			"state": "",
// 			"date": "10/03/2018"
// 		},
// 		{
// 			"group": "Water Heating",
// 			"message": "Hot Water Supply - Low Temperature",
// 			"state": "",
// 			"date": "10/01/2018"
// 		},
// 		{
// 			"group": "Water Heating",
// 			"message": "Hot Water Supply - Low Temperature",
// 			"state": "",
// 			"date": "09/22/2018"
// 		},
// 		{
// 			"group": "Water Heating",
// 			"message": "Hot Water Supply - Low Temperature",
// 			"state": "",
// 			"date": "09/22/2018"
// 		},
// 		{
// 			"group": "Water Heating",
// 			"message": "Hot Water Supply - Low Temperature",
// 			"state": "",
// 			"date": "10/03/2018"
// 		},
// 		{
// 			"group": "Water Heating",
// 			"message": "Hot Water Supply - Low Temperature",
// 			"state": "",
// 			"date": "10/01/2018"
// 		},
// 		{
// 			"group": "Water Heating",
// 			"message": "Hot Water Supply - Low Temperature",
// 			"state": "",
// 			"date": "09/22/2018"
// 		},
// 		{
// 			"group": "Water Heating",
// 			"message": "Hot Water Supply - Low Temperature",
// 			"state": "",
// 			"date": "09/22/2018"
// 		}
// 	]
// }








// =====================
//   Helpers functions
// =====================
const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
const weekAgo = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));


const getMaxKwhTimeline = (arr, timeline) => {
	const arrLength = arr.length;
	const lastWeekMaxKwhData = arr.slice(arrLength-timeline, arrLength);
	const secondLastWeekMaxKwhData = arr.slice(arrLength-(timeline * 2), arrLength - timeline);
	// Calculate the total KWH for a timeline (week or month)
	const lastWeekMaxKwhTotal = lastWeekMaxKwhData.reduce((curr, acc) => {
		return curr + acc.TOTAL;
	}, 0);
	const secondLastWeekMaxKwhTotal = secondLastWeekMaxKwhData.reduce((curr, acc) => {
		return curr + acc.TOTAL;
	}, 0);

	// Calculate the value and the prcnt of change between the 2 timeline
	const value = lastWeekMaxKwhTotal - secondLastWeekMaxKwhTotal;
	const prcnt = (value / lastWeekMaxKwhTotal) * 100;

	return {
		value,
		prcnt
	}
}


const getPeakValues = (dataset) => {
	let peakValue = 0;
	dataset.forEach(item => {
		// Set the new peak value if the item has a bigger max
		if(item.MAX > peakValue){
			peakValue = item.MAX;
		}
	})
	return peakValue;
}


const getLatestAVE = (dataset) => {
	// Get the latest AVE
	let dataAve;
	dataset.forEach(item => {
		const newItemDate = new Date(item.DTM);
		if(item.AVE){
			if(!dataAve){
				// it dataAve is undefined, set it to the item
				dataAve = item;
			} else {
				// check if it's the latest data
				const currentItemDate = new Date(dataAve.DTM);
				if(newItemDate > currentItemDate){
					dataAve = item;
				}
			}
		}
	})
	return dataAve.AVE;
}


const getLatestTOTAL = (dataset) => {
	// Get the latest TOTAL
	let dataTotal;
	dataset.forEach(item => {
		const newItemDate = new Date(item.DTM);
		if(item.TOTAL){
			if(!dataTotal){
				// it dataAve is undefined, set it to the item
				dataTotal = item;
			} else {
				// check if it's the latest data
				const currentItemDate = new Date(dataTotal.DTM);
				if(newItemDate > currentItemDate){
					dataTotal = item;
				}
			}
		}
	})
	return dataTotal.TOTAL;
}



const formatDayX = (x) => {
	x = (new Date(x)).toString().split(" ")[4];
	x = x.split(":").slice(0, 2).join(":");
	// return moment(x).format("MMM Do YY");
	return x;
}

const formatWeekX = (x) => {
	x = (new Date(x)).toString().split(" ").slice(1,3).join(" ");
	return x;
}



// Function to format the water heating room and hvac room
const getAveMinMaxAndArr = (dataset) => {
	// Get the AVE data for day, week and month
	const dataAveDay = {
		x: [],
		y: [],
	};
	const dataAveWeek = {
		x: [],
		y: [],
	};
	const dataAveMonth = {
		x: [],
		y: [],
	};
	// Get the latest AVE
	let dataAve;
	let dataMin;
	let dataMax;
	// iterate ofer the array to filter the dataset
	dataset.forEach((item, i) => {
		const newItemDate = new Date(item.DTM);
		// AVERAGE
		if(item.AVE){
			// push every AVE to the month array
			dataAveMonth.x.push(item.AVE);
			dataAveMonth.y.push(formatWeekX(item.DTM));
			// Push if the date is less than a week
			if(newItemDate > weekAgo){
				dataAveWeek.x.push(item.AVE);
				dataAveWeek.y.push(formatWeekX(item.DTM));
			}
			if(newItemDate > yesterday){
				dataAveDay.x.push(item.AVE);
				dataAveDay.y.push(formatDayX(item.DTM));
			}

			if(!dataAve){
				// it dataAve is undefined, set it to the item
				dataAve = item;
			} else {
				// check if it's the latest data
				const currentItemDate = new Date(dataAve.DTM);
				if(newItemDate > currentItemDate){
					dataAve = item;
				}
			}
		}
		// MIN
		else if(item.MIN){
			if(!dataMin){
				// it dataAve is undefined, set it to the item
				dataMin = item;
			} else {
				// check if it's the latest data
				const currentItemDate = new Date(dataMin.DTM);
				if(newItemDate > currentItemDate){
					dataMin = item;
				}
			}
		}
		// MAX
		else if(item.MAX){
			if(!dataMax){
				// it dataAve is undefined, set it to the item
				dataMax = item;
			} else {
				// check if it's the latest data
				const currentItemDate = new Date(dataMax.DTM);
				if(newItemDate > currentItemDate){
					dataMax = item;
				}
			}
		}
	});

	// Create an object to store the data info
	const data = {
		min: dataMin.MIN,
		max: dataMax.MAX,
		value: dataAve.AVE,
		dataAveDay,
		dataAveWeek,
		dataAveMonth,
	}

	// console.log(data);

	return data;
}





const getGraphData = (dataset) => {
	// Get the AVE data for day, week and month
	const dataAveDay = {
		x: [],
		y: [],
	};
	const dataAveWeek = {
		x: [],
		y: [],
	};
	const dataAveMonth = {
		x: [],
		y: [],
	};

	// iterate ofer the array to filter the dataset
	dataset.forEach(item => {
		const newItemDate = new Date(item.DTM);
		// AVERAGE
		if(item.AVE){
			// push every AVE to the month array
			dataAveMonth.y.push(item.AVE);
			dataAveMonth.x.push(formatWeekX(item.DTM));
			// Push if the date is less than a week
			if(newItemDate > weekAgo){
				dataAveWeek.y.push(item.AVE);
				dataAveWeek.x.push(formatWeekX(item.DTM));
			}
			if(newItemDate > yesterday){
				dataAveDay.y.push(item.AVE);
				dataAveDay.x.push(formatDayX(item.DTM));
			}
		}
	});
	
	// Create an object to store the data info
	const data = {
		day: dataAveDay,
		week: dataAveWeek,
		month: dataAveMonth,
	}

	return data;
}
