import { PersonalModule } from './personal.module';

describe( 'PagosModule', () => {
    let personalModule: PersonalModule;

    beforeEach(() => {
        personalModule = new PersonalModule();
    });

    it('should create an instance', () => {
        expect(personalModule).toBeTruthy();
    });
});