import { useParams } from "react-router-dom";
import QuestList from "./Quests/QuestList";

interface ListPivotProps {}

const ListPivot = (props: ListPivotProps) => {
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

export default ListPivot;