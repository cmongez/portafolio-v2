import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Project } from '@/lib/data';
import { unstable_cache } from 'next/cache';

interface FirestoreProject {
  id: string;
  name: string;
  description: string;
  technologies: string;
  img: string;
  demo?: string;
  repository?: string;
}

/**
 * Fetches legacy projects from Firestore and transforms them to match the new Project interface.
 * Cached for 1 hour to optimize performance and reduce Firestore reads.
 */
export const getLegacyProjects = unstable_cache(
  async (): Promise<Project[]> => {
    try {
      const projectsRef = collection(db, 'projects');
      const q = query(projectsRef);
      const querySnapshot = await getDocs(q);

      const projects: Project[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data() as FirestoreProject;

        // Transform technologies string to array, handling both comma and " - " separators
        const stack = data.technologies
          ? data.technologies.split(/,|\s-\s/).map(t => t.trim()).filter(Boolean)
          : [];

        // Construct local image URL
        const imgUrl = data.img
          ? `/legacy-projects/${data.img}`
          : undefined;

        projects.push({
          id: data.id || doc.id,
          name: data.name,
          description: data.description,
          stack: stack,
          img: imgUrl,
          category: 'legacy',
          isFeatured: false,
          demo: data.demo,
          repository: data.repository,
        });
      });

      // Sort by ID descending as in the Vue app
      return projects.sort((a, b) => Number(b.id) - Number(a.id));
    } catch (error) {
      // En producción, enviar a servicio de monitoreo (Sentry, LogRocket, etc.)
      if (process.env.NODE_ENV === 'production') {
        // TODO: Integrar con servicio de logging externo
        // Ejemplo: Sentry.captureException(error);
      } else {
        console.error("Error fetching legacy projects:", error);
      }
      return [];
    }
  },
  ['legacy-projects-cache'],
  { revalidate: 3600, tags: ['legacy-projects'] }
);
