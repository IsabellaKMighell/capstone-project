import { Form } from 'semantic-ui-react'
function Search({search, setSearch}){
    return(
    <div className="searchbar">
        <Form>
            <Form.Field>
                <input
                type="text"
                id="search"
                
                placeholder="Search Businesses..."
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                />
                
            </Form.Field>
        </Form>   
    </div>
    )
}
export default Search;