/*

db.coll.drop() : borra una colección y sus índices respectivos.
db.dropDatabase() : elimina la base de datos actual.
db.createCollection("contacts") : crea una colección en forma explícita.
db.coll.stats() : refleja estadísticas del uso de la base.
db.coll.storageSize() : tamaño de almacenamiento de la colección.
db.coll.totalIndexSize() : tamaño total de todos los índices de la colección.
db.coll.totalSize(): tamaño total en bytes de los datos de la colección más el tamaño de cada índice de la colección.
db.coll.validate({full: true}) : comprueba la integridad de una colección.
db.coll.renameCollection("new_coll", true) : renombra una colección, el  2do parámetro para borrar la colección destino si existe.


//UPDATE
db.collection.updateOne(query, update, options)
query: especifica el filtro de documentos a ser actualizados.
update: contiene los datos a ser actualizados con sus operadores respectivos: $set, $unset, $inc, $rename, $mul, $min, $max, etc.
options: contiene varias opciones para la actualización, entre ellas: 
upsert (true ó false) : Es una opción para hacer un insert en caso de que el registro no exista.
db.coll.updateMany(query, update, options)
Igual que el anterior, pero hace una actualización múltiple en caso de que el filtro de query devuelva varios resultados


//DELETE
db.coll.deleteOne( {key: val} ): Elimina un sólo documento (el primero) que coincide con el filtro especificado.
db.coll.deleteMany( {key: val} ): Elimina todos los documentos que coinciden con el filtro especificado.
db.coll.remove( {key: val} ): Elimina documentos de una colección.
db.coll.findOneAndDelete( filter, options ): Elimina un solo documento según el filtro y los criterios de clasificación. Algunas de las options pueden ser
- sort: para establecer orden para el filtro
- projection: para elegir campos de salida.


*/