const AWS = require('aws-sdk');
const uuid = require('uuid');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
    const id = uuid.v4();
    console.log(event);
    event.id = id;
    console.log(event);
    const params = {
        TableName: "discounts",
        Item: event
    };
    try {
        const data = await dynamo.put(params).promise();
        const response = {
            statusCode: 200
        };
        return response;
    } catch (e) {
        console.log(e);
        return {
            statusCode: 500
        };
    }
};