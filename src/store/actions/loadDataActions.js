// import { queryData } from "../../dynamoDbWithRedux";
// import { dataset } from "./fakeData";
import AWS from "aws-sdk";
import moment from "moment";
import manipulateData from "./manipulateData";


// AWS Configuration
AWS.config.update({
	"accessKeyId": process.env.REACT_APP_ACCESS_KEY_ID, "secretAccessKey": process.env.REACT_APP_SECRET_ACCESS_KEY, "region": process.env.REACT_APP_REGION
});

const docClient = new AWS.DynamoDB.DocumentClient();

let lastMonthDate = (new Date() - 1000 * 3600 * 24 * 30);
lastMonthDate = moment(lastMonthDate).format();

const allSenid = ["PAR01_1_1", "PAR01_1_2", "PAR01_1_3", "PAR01_1_4", "PAR01_1_3", "PAR01_3_2999", "PAR01_3_3000", "PAR01_3_3001", "PAR01_3_3002", "PAR01_3_3003", "PAR01_3_3004", "PAR01_3_3019", "PAR01_3_3020", "PAR01_3_3059", "PAR01_3_3060", "PAR01_3_3061"];

export const loadDataset = () => {
	return async (dispatch, getState) => {
		// init an object that contain all raw data
		const allRawData = {};
		let count = 0;
		console.log("Querying from DynamoDB!");
		// Setting up the parameters
		allSenid.forEach(async (senid) => {
			const params = {
				TableName: "PAR01",
				KeyConditionExpression: 'SENID = :senid and DTM > :dtm',
				ExpressionAttributeValues: {
					":dtm" : lastMonthDate,
					":senid": senid
				}
			};
			// Start the request
			const request = await docClient.query(params, function(err, data) {
				 if (err) console.log(err);
				 return data
				});
			request.on('success', function(response) {
				// Manipulate the data here and get it back in the state
				count++;
				allRawData[senid] = response.data.Items;
				if(count >= allSenid.length){
					console.log(allRawData);
					// Manipulate the dynamoDB data
					console.log("END OF QUERYING DYNAMODB DATA");
					const formatedData = manipulateData(allRawData);

					// ======================
					//  Dispatch the action
					// ======================
					return dispatch({
						type: "LOAD_DATASET",
						dataset: formatedData
					});
				}
			});
		})
	}
}
