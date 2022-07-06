import { useQuery } from "react-query";
import { fetchAutoComplete } from "../queries/fetchAutoComplete";

function OnChange(inputValue) {
  
  const isLongEnough = inputValue.length > 0;
  
  const { data: autoCompleteData, status: autoCompleteStatus } = useQuery(
    ["autoComplete", inputValue],
    () => fetchAutoComplete(inputValue),
    { enabled: isLongEnough }
  );

  return [autoCompleteData, autoCompleteStatus];
}
export default OnChange;
