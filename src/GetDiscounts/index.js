const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
    console.log(JSON.stringify(event, null, 2));
    const params = {
        TableName: "discounts"
    };
    try {
        const data = await dynamo.scan(params).promise();
        const response = {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        }
        return response;
    } catch(e) {
        console.log("Error getting items from dynamo: " + e);
        return {
            statusCode: 500
        }
    }
};