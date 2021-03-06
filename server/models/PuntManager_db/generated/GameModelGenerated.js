/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE GameModelGenerated.js PLEASE EDIT ../GameModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_PuntManager_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS

  
  /**
  * GameModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Game.create(item);    return result;
  },
  
  /**
  * GameModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Game.destroy({ where: { _id: id } });
  },
  
  /**
  * GameModel.findByGameTables
  *   @description CRUD ACTION findByGameTables
  *   @param Objectid key Id of model to search for
  *
  */
  async findByGameTables(key) {
    return await Database.getConnection().models.Game.findAll({ where: { "GameTables": key } });
  },
  
  /**
  * GameModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Game.findByPk(id);
    return result;
  },
  
  /**
  * GameModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.Game.findAll();
      },
      
  /**
  * GameModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Game.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
