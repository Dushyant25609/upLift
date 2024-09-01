import { Project } from "../Models/project";
import { Research } from "../Models/research";
import { ActionCreator } from "./main";

export const LOAD_PROJECT = "Load_Project";

export const loadProjectrAction: ActionCreator<string> = (token: string) => ({
  type: LOAD_PROJECT,
  payload: token
});

export const LOADED_PROJECT = "Loaded_Project";

export const loadingProjectAction: ActionCreator<Project> = (projects: Project) => ({
  type: LOADED_PROJECT,
  payload: projects
});

export const LOAD_RESEARCH = "Load_Research";

export const loadResearchrAction: ActionCreator<string> = (token: string) => ({
  type: LOAD_RESEARCH,
  payload: token
});

export const LOADED_RESEARCH= "Loaded_Project";

export const loadingResearchAction: ActionCreator<Research> = (projects: Research) => ({
  type: LOADED_RESEARCH,
  payload: projects
});