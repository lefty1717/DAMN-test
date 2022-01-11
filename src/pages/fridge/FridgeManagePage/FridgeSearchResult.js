import React from 'react'
import { useSearchParams } from 'react-router-dom'
import FridgeBar from '../../../components/fridge/FoodBar'
import ResultCard from '../../../components/fridge/ResultCard'
import useSearch from '../../../hooks/useSearch'






const FridgeSearchPage = () => {

const [searchParams, setSearchParams] =useSearchParams()

const q = searchParams.get("query")
console.log(q)
const results = useSearch("fridge", q,"3HuEsCE9jUlCm68eBQf4");
  console.log(results[0]?.fridge)

    return (
        <div>
            <FridgeBar/>
            <ResultCard data={results[0]?.fridge}/>

        </div>
    )
}

export default FridgeSearchPage
