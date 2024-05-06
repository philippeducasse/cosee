import React from 'react';
import { SearchBarProps } from '../Types';



const SearchBar: React.FC<SearchBarProps> = ({ setSearchInput }) => {

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchInput!(e.target.value)
    }

    return (
        <div className="flex justify-center">
            <input
                type='text'
                onChange={handleInput}
                placeholder='Search images'
                className='search-input focus:outline-none focus:border:teal focus:ring-0' />
        </div>
    )
}

export default SearchBar