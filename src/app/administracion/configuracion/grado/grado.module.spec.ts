import { GradoModule } from './grado.module';

describe('GradoModule', () => {

    let gradoModule: GradoModule;

    beforeEach( () => {
        gradoModule = new GradoModule();
    });

    it('should create an instance', () =>{
        expect(gradoModule).toBeTruthy();
    } );


});