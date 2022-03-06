import knex from "knex"

export default class ContenedorSQL {
    constructor(config, tabla) {
        this.knex = knex(config)
        this.tabla = tabla
    }
    
    async listar(id) {
        try {
            return await this.knex.select('*').from(this.tabla).where('id', id)
        } catch (error){
            throw new Error (`Error al listar por id: ${error}`)
        }
    }

    async listarAll() {
        try {
            return await this.knex.select('*').from(this.tabla)
        } catch (error){
            throw new Error (`Error al listar por id: ${error}`)
        }
    }
    
    async guardar(elem) {
        try {
            return await this.knex.insert(elem).into(this.tabla)
        } catch (error){
            throw new Error (`Error al listar por id: ${error}`)
        }
    }

    async cerrarConexion() {
        this.knex.destroy();
    }
}