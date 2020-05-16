import { NullConnector } from "../../src/connector";

describe('NullConnector', () => {
    let nullConnector;

    beforeEach(() => {
        nullConnector = new NullConnector({});
    });

    describe('socketId', () => {
        it('returns fake-socket-id', () => {
            expect(nullConnector.socketId()).toBe('fake-socket-id')
        });
    });
});
