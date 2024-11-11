import useData from "./useData";

export interface Project {
  id: number;
  name: string;
  description: string;
  img_url?: string;
}

const useProjects = () => {
  const { data = [], error, isLoading } = useData<Project>("/projects");
  return { data, error, isLoading };
};

export default useProjects;
