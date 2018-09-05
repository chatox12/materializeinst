import { NotasModule } from './notas.module';

describe( 'SeccionModule', () => {
    let notasModule: NotasModule;

    beforeEach(() =>{
        notasModule = new NotasModule();
    } );

    it('should create an instance', () => {
        expect(notasModule).toBeTruthy();
    })

}
);