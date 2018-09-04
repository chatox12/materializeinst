import { AdministracionModule } from './administracion.module';

describe('AdministracionModule', () => {
    let administracionModule: AdministracionModule;

    beforeEach(() => {
        administracionModule = new AdministracionModule();
    });

    it('should create an instance', () =>{ 
        expect(administracionModule).toBeTruthy();
    });
});