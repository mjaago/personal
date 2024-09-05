"use client";

import { Project } from "app/projects/utils";
import { ProjectCard } from "./projectcard";
import Image from "next/image";
import workCDStartWorking from "../media/work_cd_start_working.jpg";
import koosLobby from "../media/koos_joining_screen.png";
import thisProductExistsBanner from "../media/this_product_exists.png";
import grp from "../media/GRP.png";
import align from "../media/align.svg";
import compensationApp from "../media/comp_app.png";
import fensterAnalytics from "../media/fenster_analytics.jpg";
import clsx from "clsx";
import { Masonry } from "masonic";

const imageClass = "h-auto w-full border border-black";

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
  [
    "GRP",
    <Image
      src={grp}
      alt="Global Risk Profile logo"
      className={clsx(imageClass, "p-4")}
    />,
  ],
  [
    "ALIGN",
    <Image src={align} alt="Align logo" className={clsx(imageClass, "p-4")} />,
  ],
  [
    "COMPENSATION_APP",
    <Image
      src={compensationApp}
      alt="Compensation App logo"
      className={clsx(imageClass, "px-2 py-8")}
    />,
  ],
  [
    "FENSTER_ANALYTICS",
    <Image
      src={fensterAnalytics}
      alt="Fenster Analytics logo"
      className={clsx(imageClass, "px-20 py-4 md:px-24")}
    />,
  ],
]);

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <Masonry
      columnWidth={300}
      columnGutter={28}
      maxColumnCount={3}
      items={projects.sort((a, b) => {
        if (
          new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        ) {
          return -1;
        }
        return 1;
      })}
      render={({ data: project }) => (
        <ProjectCard
          project={project}
          media={projectImages.get(project.metadata.imageKey)}
        />
      )}
    />
  );
}
