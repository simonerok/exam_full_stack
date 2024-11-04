import express from "express";
import projectRouter from "../routers/projectMysqlRouter";

const setupMysqlRouters = (app: express.Application) => {
  app.use("/projects", projectRouter); // Route to handle project requests
};

export default setupMysqlRouters;
