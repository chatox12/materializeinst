import { SeccionModule } from './seccion.module';

describe( 'SeccionModule', () => {
    let seccionModule: SeccionModule;

    beforeEach(() =>{
        seccionModule = new SeccionModule();
    } );

    it('should create an instance', () => {
        expect(seccionModule).toBeTruthy();
    })

}
);