import { Router } from "express";
import { Project } from "../entities/Project";
import { AppDataSource } from "../startup/data-source";

const router = Router();

const projectRepository = AppDataSource.getRepository(Project);

// Placeholder route for getting projects
router.get("/", async (req, res) => {
  const projects = await projectRepository.find();
  res.send(projects);
  // res.json({ message: "This is a placeholder for getting projects" });
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
