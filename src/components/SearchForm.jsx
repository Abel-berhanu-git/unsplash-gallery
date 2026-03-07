import { toast } from "react-toastify";
import { useGlobalContext } from "../context/Context";

const SearchForm = () => {
  const {setSearchValue} = useGlobalContext()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if(!searchValue) return  toast.error('🖼️ please provide title')
      setSearchValue(searchValue)
  }
  return (
    <div>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          className='form-input search-input'
          type='text'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
