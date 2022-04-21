import { ItemType } from "../enums/ItemType";
import { Material } from "../enums/Material";
import { Size } from "../enums/Size";
import { WearLocation } from "../enums/WearLocation";
import { MudObject } from "./MudObject";

export interface Item extends MudObject {
  plural: string;
  keys: string[];
  useString: string;
  wearLoc: WearLocation;
  material: Material;
  type: ItemType;
  size: Size;
  diceNum: number;
  diceSides: number;
  dicePlus: number;
  plus: number;
  shots: number;
  maxShots: number;
  value: number;
  weight: number;
  bulk: number;
  maxBulk: number;
  level: number;
  coinCost: number;
  minStrength: number;
  effect: string;
  effectDuration: number;
  effectStrength: number;
  quest: string;
  deedArea: string;
  deedLow: number;
  deedHigh: number;
  clan: string;
  recipe: string;
  reqSkill: number;
  compass: string;
}
