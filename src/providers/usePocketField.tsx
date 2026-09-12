import { useContext } from "react";
import { PocketfieldContext } from "./PocketfieldProviderContext";

export const usePocketField = () => {
  return useContext(PocketfieldContext);
};
