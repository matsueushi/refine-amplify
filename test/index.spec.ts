import { generateClient } from 'aws-amplify/api';
const client = generateClient();

describe('dataProvider', () => {
    it('should be defined', () => {
        console.log(client);
        expect(client).toBeDefined();
    });
});
