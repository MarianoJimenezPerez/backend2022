const admin = require("firebase-admin");

const serviceAccount = require("./DB/ecommerce-ef02e-firebase-adminsdk-b7o2q-b893899c80.json");  // le envío el archivo json obtenido en la web de firebase, es la key de acceso a la db


try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
} catch (err) {
    console.error(err)
} finally {
    console.log('Base de datos de firebase conectada')
}

CRUD()

async function CRUD() {
    const db = admin.firestore();
    const usuarios = db.collection('usuarios')

    /**  CREATE  **/

    try {
        // const doc = usuarios.doc()  // para la generación automatica de id
        let id = 1;
        let doc = usuarios.doc(`${id}`)  // para la generación manual de id
        await doc.create( { nombre: 'Jose', dni: 20222333, id: id })
        id++


        doc = usuarios.doc(`${id}`)
        await doc.create( { nombre: 'Daniel', dni: 40213894, id: id })
        id++


        doc = usuarios.doc(`${id}`)
        await doc.create( { nombre: 'Manuel', dni: 32165489, id: id })
        id++

        console.log('Datos ingresados')

    } catch (err) {
        console.error(err)
    }

    /**  LEER TODO  **/

    try {
        const snapshot = await usuarios.get();
        let docs = snapshot.docs;   // le extraigo solamente los datos al snapshot del momento de la DB
    
        const response = docs.map((doc) => ({
            id: doc.data().id,
            nombre: doc.data().nombre,
            dni: doc.data().dni
        }))  //encierro la respuesta entre paréntesis para return implícito
    
        console.log(response)

    } catch (err) {
        console.error(err)
    }

    /**  LEER ID  **/

    try {
        let id = 2;   //defino la id que quiero llamar
        const doc = usuarios.doc(`${id}`);   //paso por param la id que deseo obtener
        const item = await doc.get();   //geteo mi doc
        const response = item.data()   //extraigo solo la data de ese doc
        console.log(response)
    } catch (err) {
        console.error(err)
    }

    /**  UPDATE  **/

    try {
        let id = 2;   //defino la id que quiero llamar
        const doc = usuarios.doc(`${id}`);   //paso por param la id que deseo obtener
        const item = await doc.update({nombre : "Daniel2"});   //updateo mi doc y le paso por param el nuevo nombre o lo que desee
        console.log(`Se actualizo un registro: `, item)
    } catch (err) {
        console.error(err)
    }

    /**  DELETE  **/

    try {
        let id = 2;   //defino la id que quiero llamar
        const doc = usuarios.doc(`${id}`);   //paso por param la id que deseo obtener
        const item = await doc.delete();   //borro el registro obtenido en el doc
        console.log(`Se eliminó un registro: `, item)
    } catch (err) {
        console.error(err)
    }
}