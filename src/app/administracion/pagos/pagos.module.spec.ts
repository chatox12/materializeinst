import { PagosModule } from './pagos.module';

describe( 'PagosModule', () => {
    let pagosModule: PagosModule;

    beforeEach(() => {
        pagosModule = new PagosModule();
    });

    it('should create an instance', () => {
        expect(pagosModule).toBeTruthy();
    });
});