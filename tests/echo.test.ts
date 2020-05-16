import Echo from "../src/echo";

import { PusherConnector, SocketIoConnector, NullConnector } from "../src/connector";

describe("Echo", () => {
    describe('initializes the connector correctly', () => {
        it('if no broadcaster is specified', () => {
            const echo = new Echo({});
            expect(echo.connector).toBeUndefined();
        });

        it('if broadcaster is "pusher"', () => {
            const echo = new Echo({
                broadcaster: 'pusher',
                client: 'foo',
            });
            expect(echo.connector).toBeInstanceOf(PusherConnector);
        });

        it('if broadcaster is "socket.io"', () => {
            const echo = new Echo({
                broadcaster: 'socket.io',
                client: 'foo',
            });
            expect(echo.connector).toBeInstanceOf(SocketIoConnector);
        });

        it('if broadcaster is "null"', () => {
            const echo = new Echo({ broadcaster: 'null' });
            expect(echo.connector).toBeInstanceOf(NullConnector);
        });

        it('for a custom connector', () => {
            const CustomConnector = jest.fn();
            const echo = new Echo({ broadcaster: CustomConnector });
            expect(echo.connector).toBeInstanceOf(CustomConnector);
        });
    });
});
