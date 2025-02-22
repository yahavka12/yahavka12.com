import { getProjects } from '$lib/data/projects/api';
import { getWorkExperience, yearsOfExperience } from '$lib/data/work-experiences/api';

export async function load() {
  const workExperience = await getWorkExperience();
  const projects = await getProjects();

  return {
    yearsOfExperience,
    experienceEntries: workExperience,
    projects,
  };
}
