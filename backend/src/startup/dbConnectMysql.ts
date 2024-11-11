import { AppDataSource } from "./data-source";

let connection: any = null;

const dbConnectMySQL = async () => {
  if (connection) {
    return connection;
  }

  try {
    connection = await AppDataSource.initialize();
    console.log("Connected to MySQL");
    return connection;
  } catch (error) {
    console.error("Error connecting to MySQL", error);
    throw error;
  }
};

export default dbConnectMySQL;
