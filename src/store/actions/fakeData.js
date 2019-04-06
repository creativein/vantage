// FAKE DATA
const powerRoom = {
	peakMonthlyValue: {
		voltageRms: "500",
		redPhase: "300",
		yellowPhase: "350",
		bluePhase: "200"
	},
	powerKwh: {
		powerNow: 150,
		kwhD: 3050,
		kwhWeek: 5000
	},
	averageCurrentPhase: {
		redGauge: 86,
		yellowGauge: 70,
		blueGauge: 66
	},
	presentVoltage: 220,
	averageDailyUse: 310,
	maxKwh: {
		maxKwhDay: {
			value: .88,
			prcnt: .95
		},
		maxKwhWeek: {
			value: .71,
			prcnt: -.12
		}
	},
	powerConsumption1: {
		data: [24, 35, 20, 45, 55, 40, 50]
	},
	powerConsumption2: {
		data1: [34, 35, 40, 34, 45, 52, 42],
		data2: [30, 45, 52, 40, 34, 35, 40],
		data3: [40, 34, 35, 30, 52, 40, 45],
	}
}

const waterRoom = {
	flow: {
		day: {
			min: 3000,
			max: 8300
		},
	  week: {
			min: 2300,
			max: 9500
		}
	},
	pressure: {
		day: {
			min: 8,
			max: 2
		},
	  week: {
			min: 9,
			max: 1
		}
	},
	consumptionKl: {
		current: 7001,
		currentPrcntVar: -11.3,
		mtd: 30121,
		mtdPrcntVar: 22.1,
	},
	flowGraph: {
		data: [34, 35, 39, 45, 52, 50, 41]
	},
	pressureGraph: {
		data: [30, 45, 20, 40, 34, 35, 43]
	}
}

const waterHeatingRoom = {
	suplyTemp: {
		min: 18,
		max: 27,
		value: 23
	},
	returnTemp: {
		min: 25,
		max: 39,
		value: 33
	},
	tempProfile1: {
		data: [0, 10, 5, 10, 15, 33, 45]
	},
	tempProfile2: {
		data: [10, 12, 24, 16, 18, 33, 40]
	}
}

const hvacRoom = {
	suplyTemp: {
		min: 20,
		max: 25,
		value: 26
	},
	returnTemp: {
		min: 25,
		max: 39,
		value: 32
	},
	tempProfile1: {
		data: [10, 14, 5, 20, 15, 55, 41]
	},
	tempProfile2: {
		data: [10, 19, 16, 28, 18, 33, 26]
	}
}

const alarmsRoom = {
	alarmPrcnt: [
			{
				"title": "Power",
				"value": 15
			},
			{
				"title": "Water",
				"value": 30
			},
			{
				"title": "Temperature",
				"value": 45
			},
			{
				"title": "Water Heating",
				"value": 10
			}
		],
	alarmCount: {
		nonCritical: 11,
		critical: 4,
		total: 15
	},
	reportData: [
		{
			"group": "Water Heating",
			"message": "Hot Water Supply - Low Temperature",
			"state": "",
			"date": "10/03/2018"
		},
		{
			"group": "Water Heating",
			"message": "Hot Water Supply - Low Temperature",
			"state": "",
			"date": "10/01/2018"
		},
		{
			"group": "Water Heating",
			"message": "Hot Water Supply - Low Temperature",
			"state": "",
			"date": "09/22/2018"
		},
		{
			"group": "Water Heating",
			"message": "Hot Water Supply - Low Temperature",
			"state": "",
			"date": "09/22/2018"
		},
		{
			"group": "Water Heating",
			"message": "Hot Water Supply - Low Temperature",
			"state": "",
			"date": "10/03/2018"
		},
		{
			"group": "Water Heating",
			"message": "Hot Water Supply - Low Temperature",
			"state": "",
			"date": "10/01/2018"
		},
		{
			"group": "Water Heating",
			"message": "Hot Water Supply - Low Temperature",
			"state": "",
			"date": "09/22/2018"
		},
		{
			"group": "Water Heating",
			"message": "Hot Water Supply - Low Temperature",
			"state": "",
			"date": "09/22/2018"
		}
	]
}



export const dataset = {
	powerRoom,
	waterRoom,
	waterHeatingRoom,
	hvacRoom,
	alarmsRoom
}
