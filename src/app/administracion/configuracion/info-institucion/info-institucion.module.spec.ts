import { InfoInstitucionModule } from './info-institucion.module';

describe('InfoInstitucionModule', ()=>{
    let infoInstitucionModule: InfoInstitucionModule;

    beforeEach(() => {
        infoInstitucionModule = new InfoInstitucionModule();
    });

    it('should create an instance',() =>{
        expect(infoInstitucionModule).toBeTruthy();
    });

});