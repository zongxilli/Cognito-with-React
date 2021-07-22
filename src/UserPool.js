import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
	UserPoolId: 'us-east-1_dgn8mN0sQ',
	ClientId: '2p376h5jmuese7g5rre593nn8c',
};

export default new CognitoUserPool(poolData);
