//componente de login
import { UsuarioAlumnoModule } from './usuario-alumno.module';

describe('UsuarioAlumnoModule', () => {
    let SetLocal: UsuarioAlumnoModule;

    beforeEach( () => {
        SetLocal = new UsuarioAlumnoModule();
    });

    it('should create an instance', () =>{
        expect(SetLocal).toBeTruthy();
    });

});
