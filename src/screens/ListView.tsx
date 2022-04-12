import { useParams } from "react-router-dom";
import QuestList from "./Quests/QuestList";

interface ListViewProps {}

export const ListView = (props: ListViewProps) => {
  const urlParams = useParams();

  switch(urlParams.objectType) {
    case 'rooms':
      return <QuestList />
    case 'items':
      return <QuestList />
    case 'creatures':
      return <QuestList />
    case 'quests':
      return <QuestList />
    default:
      return <></>;
  }
}