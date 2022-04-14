import { MudObject } from "../data/interfaces/MudObject";

export const getListKey = (obj: MudObject): string => {
  return `${obj.id.area}.${obj.id.id}`;
}

export const getFormattedId = (obj: MudObject): string => {
  return `${obj.id.area}.${obj.id.id}`;
}