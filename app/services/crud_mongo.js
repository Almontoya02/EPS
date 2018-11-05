
/**
 * Servicio de mongodb
 *
 */
const mongo = require('mongodb');

module.exports = {
  Mongo: function () {
    return new CrudOperations();
  }
};

class CrudOperations {
  constructor() {
    //Conexion a la base de datos:
    //mongodb://{{username}}:{{password}}@{{address}}:{{port}}/{{database}}
    this.url = 'mongodb://localhost:27017';
    //Nombre de la base de datos
    //this.dbName = 'testnode';
    this.dbName = 'Hospital';
    this.db = null;
    this.client = null;
  }

  /**
   * Insertar datos en una colección
   * @param {* Nombre de la coleccion} collection
   * @param {* Información a guardar (json)} payload
   */
  async insert(collection, payload) {
    try {
      //Crear la conexion a la db
      this.client = await mongo.MongoClient.connect(this.url);
      //Obtengo la db
      this.db = this.client.db(this.dbName);
      //Inserto un datos a una colección
      console.log(payload)
      let result = await this.db.collection(collection).insertOne(payload);
      //Cierro la conexión
      this.client.close();
      return result;
    } catch (err) {
      this.client.close();
      return err;
    }
  }
  /**
   * Modificar dato en una colección
   * @param {*} collection
   * @param {*} filter
   * @param {*} data
   */
  async update(collection, filter, data) {
    try {
      //Crear la conexion a la db
      this.client = await mongo.MongoClient.connect(this.url);
      //Obtengo la db
      this.db = this.client.db(this.dbName);
      //Convierto el _id de mongo en ObjectId
      if (filter._id != undefined) {
        filter._id = mongo.ObjectID(filter._id)
      }
      //Modifico un dato en una colección
      let result = await this.db.collection(collection).updateOne(filter, { $set: data });
      //Cierro la conexión
      this.client.close();
      return result;
    } catch (err) {
      //Cierro la conexión

      this.client.close();
      return err;
    }
  }
  /**
   * Consultar datos en una colección
   * @param {*} collection
   * @param {*} filter
   */
  async get(collection, filter) {
    try {
      //Crear la conexion a la db
      this.client = await mongo.MongoClient.connect(this.url);
      //Obtengo la db
      this.db = this.client.db(this.dbName);
      //Consulto datos en la coleccion
      let result = await this.db.collection(collection).find(filter).toArray();
      //Cierro la conexión
      this.client.close();
      return result;
    } catch (err) {
      //Cierro la conexión
      this.client.close();
      return err;
    }
  }

}
