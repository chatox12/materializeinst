import { CicloEscolarModule } from './ciclo-escolar.module';

describe('CicloEscolarModule', () => {

    let cicloEscolarModule: CicloEscolarModule;

    beforeEach( () => {
        cicloEscolarModule = new CicloEscolarModule();
    });

    it('should create an instance', () =>{
        expect(cicloEscolarModule).toBeTruthy();
    } );


});