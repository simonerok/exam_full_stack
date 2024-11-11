import useData from "./useData";

export interface Project {
  id: number;
  name: string;
  description?: string;
  img_url?: string;
}

const useProjects = () => useData<Project>("/projects");

export default useProjects;
