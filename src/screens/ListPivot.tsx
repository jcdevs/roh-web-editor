import { useParams } from "react-router-dom";
import ListView from "./ListView";

interface ListPivotProps {}

const ListPivot = (props: ListPivotProps) => {
  const urlParams = useParams();

  switch(urlParams.objectType) {
    case 'rooms':
      return <ListView />
    case 'items':
      return <ListView />
    case 'creatures':
      return <ListView />
    case 'quests':
      return <ListView />
    default:
      return <></>;
  }
}

export default ListPivot;