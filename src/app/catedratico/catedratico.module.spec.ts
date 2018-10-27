//componente de login
import { CatedraticoModule } from './catedratico.module';

describe('CatedraticoModule', () => {
    let SetLocal: CatedraticoModule;

    beforeEach( () => {
        SetLocal = new CatedraticoModule();
    });

    it('should create an instance', () =>{
        expect(SetLocal).toBeTruthy();
    });

});
