import { ReversePipe } from './reverse.pipe';
describe('UserComponent', () => {
    it('shoudl reverse a string', () => {
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
    })
});