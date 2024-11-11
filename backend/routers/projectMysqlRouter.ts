import { Router } from "express";
import { AppDataSource } from "../startup/data-source";
import { Project } from "../entities/Project";

const router = Router();

// Connect to the database
const dbConnectMySQL = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Connected to MySQL");
  } catch (error) {
    console.error("Error connecting to MySQL", error);
  }
};

// Get all projects
router.get("/", async (req, res) => {
  try {
    await dbConnectMySQL();
    // Project is defined in the entities folder
    const projectRepository = AppDataSource.getRepository(Project);
    const projects = await projectRepository.find();
    res.send(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
});

// Placeholder route for creating a project
router.post("/", (req, res) => {
  res.json({ message: "This is a placeholder for creating a project" });
});

// Placeholder route for updating a project
router.put("/:id", (req, res) => {
  res.json({ message: `This is a placeholder for updating project with id ${req.params.id}` });
});

// Placeholder route for deleting a project
router.delete("/:id", (req, res) => {
  res.json({ message: `This is a placeholder for deleting project with id ${req.params.id}` });
});

export default router;
