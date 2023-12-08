import { MagnifyingGlass } from "phosphor-react";
import {
  FormComponent,
  InputSearch,
} from "./SearchComponentStyle";

export function SearchComponent() {
  return (
    <FormComponent action="">
      <div>
        <label htmlFor="inputsearch">Digite o nome</label>
        <InputSearch
          id="inputsearch"
          type="text"
        />
        <MagnifyingGlass className="searchIcon" size={30} />
      </div>
    </FormComponent>
  );
}
