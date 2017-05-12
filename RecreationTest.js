var AWS = require('aws-sdk');
AWS.config.loadFromPath('/Users/shanmugapriyaveerabadranjayakumar/aws_config.json');
var dynamodb = new AWS.DynamoDB();

exports.handler = function(event, context) {

    //table = dynamodb.Table('recreationpark_users')
    //AWS.config.update({region:'us-west-2'});
    console.log("Hello world");
    response = dynamodb.getItem({
        TableName: 'recreationpark_users',
        Key: {
            email : {
                S: event.email
            }
        }
    }, function(err, data) {
            if (err) {
                console.log('the user returned err');
                context.fail('returned err' + err);
            } else {
                if ('Item' in data) {
                    console.log(data.Item);
                    context.succeed({
                        exist: true,
                        item: data.Item
                    });
                } else {
                    console.log('the user is no longer active/available');
                    context.succeed({
                        exist: false
                    });
                }
            }
        });
};
