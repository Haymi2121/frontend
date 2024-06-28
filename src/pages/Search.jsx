import { IconSearch } from "@tabler/icons-react";

function SearchBar(){
return (<>
    <div>
    <IconSearch />
    <input type="search" placeholder="search notes.."  maxLength={200}   className="area"/>
    </div>
   
</>
)
}

export default SearchBar;