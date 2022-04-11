import { getIpsum } from "../utils/getIpsum";

export type QuestObjectIdentifier = {
  area: string;
  id: number;
  reqNum: number;
}

export type QuestRequirement = QuestObjectIdentifier;
export type QuestReward = QuestObjectIdentifier;
export type QuestTurnInMob = QuestObjectIdentifier;

export type Quest = {
  id: string;
  completionString: string;
  description: string;
  level: number;
  minFaction: number;
  minLevel: number;
  name: string;
  preRequisites: {
    area: string;
    id: number;
  }[];
  receiveString: string;
  repeatFrequency: number;
  requirements: {
    itemsToGet: QuestRequirement[];
    mobsToKill: QuestRequirement[];
    roomsToVisit: QuestRequirement[];
  }
  revision: string;
  rewards: {
    alignmentChange: number;
    cashReward: number[];
    expReward: number;
    itemRewards: QuestReward[];
  }
  sharable: boolean;
  timesRepeatable: number;
  turnInMob: QuestTurnInMob;
}

export const getMockQuestIdentifier = (): QuestObjectIdentifier => {
  const areas = ['area', 'world', 'town', 'city', 'test'];
  return {
    area: areas[Math.floor(Math.random()*areas.length)],
    id: Math.ceil(Math.random()*10000),
    reqNum: Math.ceil(Math.random()*10),
  };
}

export const getMockQuestIdentifierArray = (count: number): QuestObjectIdentifier[] => {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(getMockQuestIdentifier());
  }
  return out;
}

export const getMockQuest = (): Quest => {
  const identifier = getMockQuestIdentifier();
  const { area, id } = identifier;

  return {
    id: `${area}.${id}`,
    completionString: getIpsum(4),
    description: getIpsum(3),
    level: 0,
    minFaction: 0,
    minLevel: 0,
    name: '',
    preRequisites: getMockQuestIdentifierArray(3),
    receiveString: getIpsum(1),
    repeatFrequency: 0,
    requirements: {
      itemsToGet: getMockQuestIdentifierArray(2),
      mobsToKill: getMockQuestIdentifierArray(2),
      roomsToVisit: getMockQuestIdentifierArray(2),
    },
    revision: '',
    rewards: {
      alignmentChange: 0,
      cashReward: [0, 0, 1000, 0, 0],
      expReward: 0,
      itemRewards: getMockQuestIdentifierArray(1),
    },
    sharable: true,
    timesRepeatable: 1,
    turnInMob: getMockQuestIdentifier(),
  }
}

export const getMockQuestArray = (size: number): Quest[] => {
  const out = [];
  for (let i=0; i<size; i++) {
    const quest = getMockQuest();
    quest.name = `Quest Name ${i}`;
    out.push(quest);
  }
  return out;
}