import { getProjects } from "app/projects/utils";
import { ProjectCard } from "./projectcard";
import Image from "next/image";
import workCDStartWorking from "../media/work_cd_start_working.jpg";
import koosLobby from "../media/koos_joining_screen.png";
import thisProductExistsBanner from "../media/this_product_exists.png";

const imageClass = "h-auto w-100 border border-black";

const projectImages: Map<string, React.ReactNode> = new Map([
  [
    "WORK_CD",
    <Image
      src={workCDStartWorking}
      alt="Work CD in-product view of timer toggling for contractors that initiates the salary stream"
      className={imageClass}
    />,
  ],
  [
    "KOOS",
    <Image
      src={koosLobby}
      alt="Local multiplayer lobby screen for Koos Games"
      className={imageClass}
    />,
  ],
  [
    "THIS_PRODUCT_EXISTS",
    <Image
      src={thisProductExistsBanner}
      alt="Local multiplayer lobby screen for Koos Games"
      className={imageClass}
    />,
  ],
]);

export function Projects() {
  let allProjects = getProjects();

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((project) => (
          <div key={project.slug} className="flex-1">
            <ProjectCard
              project={project}
              media={
                projectImages.has(project.metadata.imageKey)
                  ? projectImages.get(project.metadata.imageKey)
                  : undefined
              }
            />
          </div>
        ))}
    </div>
  );
}

export function ProjectImage({ image }: { image: React.ReactNode }) {
  return { image };
}
