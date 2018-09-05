import { MateriasModule } from './materias.module';

describe( 'MateriasModule', () => {
    let local_set: MateriasModule;

    beforeEach(() =>{
        local_set = new MateriasModule();
    } );

    it('should create an instance', () => {
        expect(local_set).toBeTruthy();
    })

}
);