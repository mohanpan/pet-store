import './styles.css'
export const Search = (props) => {
    return (
        <input name="search-input" placeholder="Search by breed.." type="text" onChange={props.handleSearchUpdate} />
    )
}