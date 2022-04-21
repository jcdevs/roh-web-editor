import { MudId } from "./MudId";
import { MudObject } from "./MudObject";

export interface QuestObjectIdentifier extends MudId {
  reqNum: number;
}

export interface QuestRequirement extends QuestObjectIdentifier {};
export interface QuestReward extends QuestObjectIdentifier {};
export interface QuestTurnInMob extends QuestObjectIdentifier {};

export interface Quest extends MudObject {
  completionString: string;
  level: number;
  minFaction: number;
  minLevel: number;
  preRequisites: (MudId | undefined)[];
  receiveString: string;
  repeatFrequency: number;
  requirements: {
    itemsToGet: (QuestRequirement | undefined)[];
    mobsToKill: (QuestRequirement | undefined)[];
    roomsToVisit: (QuestRequirement | undefined)[];
  };
  revision: string;
  rewards: {
    alignmentChange: number;
    cashReward: number[];
    expReward: number;
    itemRewards: (QuestReward | undefined)[];
  };
  sharable: boolean;
  timesRepeatable: number;
  turnInMob: MudId;
}
