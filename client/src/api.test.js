import {getGuestlist} from "./api";

describe('API', () => {
    it('Test of getGuestlist()', () => {
        expect.assertions(1);
        return getGuestlist().then(result => {
            expect(Array.isArray(result.data)).toBe(true);
        })
    })
})