import { ProfesoresModule } from './profesores.module';

describe('ProfesoresModule', () => {
    let profesoresModuleModule: ProfesoresModule;

    beforeEach(() => {
        profesoresModuleModule = new ProfesoresModule();
    });

    it('should create an instance', () =>{ 
        expect(profesoresModuleModule).toBeTruthy();
    });
});