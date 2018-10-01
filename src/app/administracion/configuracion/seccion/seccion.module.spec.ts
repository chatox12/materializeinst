import { SeccionModule } from './seccion.module';

describe('GradoModule', () => {

    let seccionModule: SeccionModule;

    beforeEach( () => {
        seccionModule = new SeccionModule();
    });

    it('should create an instance', () =>{
        expect(seccionModule).toBeTruthy();
    } );


});