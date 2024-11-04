import { AppDataSource } from "./data-source";
const dbConnectMySQL = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Connected to MySQL");
  } catch (error) {
    console.error("Error connecting to MySQL", error);
  }
};

export default dbConnectMySQL;
