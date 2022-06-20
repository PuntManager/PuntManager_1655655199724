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
 *  TO CUSTOMIZE TableControllerGenerated.js PLEASE EDIT ../TableController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import TableModel from "../../../models/PuntManager_db/TableModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import TableController from "../TableController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/table`;
    router.patch(baseUrl + "/url/:id", authorize([]), TableController.AddPlayerToTable);
    router.get(baseUrl + "/player/:id", authorize([]), TableController.ListTablePlayers);
    router.post(baseUrl + "", authorize([]), TableController.create);
    router.delete(baseUrl + "/:id", authorize([]), TableController.delete);
    router.get(baseUrl + "/findByPlayersList/:key", authorize([]), TableController.findByPlayersList);
    router.get(baseUrl + "/findByTablePlayer/:key", authorize([]), TableController.findByTablePlayer);
    router.get(baseUrl + "/:id", authorize([]), TableController.get);
    router.get(baseUrl + "", authorize([]), TableController.list);
    router.post(baseUrl + "/:id", authorize([]), TableController.update);
  },


  // CRUD METHODS

    
  /**
  * TableModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await TableModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TableModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await TableModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TableModel.findByPlayersList
  *   @description CRUD ACTION findByPlayersList
  *   @param Objectid key Id of the resource PlayersList to search
  *
  */
  findByPlayersList: async (req, res) => {
    try {
      const result = await TableModel.findByPlayersList(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TableModel.findByTablePlayer
  *   @description CRUD ACTION findByTablePlayer
  *   @param Objectid key Id of model to search for
  *
  */
  findByTablePlayer: async (req, res) => {
    try {
      const result = await TableModel.findByTablePlayer(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TableModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await TableModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TableModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await TableModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * TableModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await TableModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

  /**
  * TableModel.AddPlayerToTable
  *   @returns Boolean
  *
  */
  AddPlayerToTable: async (req, res) => {
    try {
      res.json({});
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

  /**
  * TableModel.ListTablePlayers
  *   @param String PlayerToAdd
  *   @returns String
  *
  */
  ListTablePlayers: async (req, res) => {
    try {
      res.json({});
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

};

export default generatedControllers;