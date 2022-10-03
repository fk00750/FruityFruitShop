import { useContext } from "react";
import MapContext from "../Map/Context/MapContext";

const useMap = () => {
  return useContext(MapContext);
};

export default useMap;
