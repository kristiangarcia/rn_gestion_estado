const CURSOS:Array<Curso> = require('../data/asignaturas.json')

type Curso = {
    id: string,
    nombre: string,
    asignaturas: Array<string>
}

function getCurso(id: string):Curso {
    const cursoNulo = {
        id: "",
        nombre: "",
        asignaturas: []
    }
    return CURSOS.find( curso => curso.id === id ) ?? cursoNulo
}
export { CURSOS, getCurso }