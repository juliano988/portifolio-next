import { createContext } from "react";

// @ts-ignore
const SelectedSectionContext = createContext<React.Dispatch<React.SetStateAction<JSX.Element | null>>>(null);

export default SelectedSectionContext;