import { NotasModule } from './notas.module';

describe('NotasModule', () =>{
    let notasModule: NotasModule;

    beforeEach(() => {
        notasModule = new NotasModule();
    }
    );

    it('should create an instance', () => {
        expect(notasModule).toBeTruthy();
    });
}
);