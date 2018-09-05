import { NotasModule } from './notas.module';

describe( 'NotasModule', () => {
    let local_set: NotasModule;

    beforeEach(() =>{
        local_set = new NotasModule();
    } );

    it('should create an instance', () => {
        expect(local_set).toBeTruthy();
    })

}
);