import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
	UserPoolId: 'us-east-1_5X6nPdV82',
	ClientId: '42f1m84j8qt55tl60v03bkl403',
};

export default new CognitoUserPool(poolData);
