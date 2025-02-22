import axios from "axios"
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom"

const Search = ({ hide, searchSubmit, searchresult }) => {
    const [item, setItem] = useState([])

    const popularSearches = ["SIM", "GARRIDO", "ACTIVIA", "BINGO", "JAVEL", "COCA", "ROUIBA", "MILKA"].map(e => (
        <span
            onClick={() => searchSubmit(e)}
            key={e}
            className="flex shadow-lg border-[0.5px] mx-1.5 cursor-pointer border-[#aaa7] rounded-3xl md:my-2 px-4 py-1"
        >
            {e.toLowerCase()}
        </span>
    ))

    useEffect(() => {
        const getItem = async () => {
            try {
                const res = await axios.get("https://daily-api-tan.vercel.app/item")
                setItem(res.data.result)
            } catch (error) {
                console.log(error)
            }
        }
        getItem()
    }, [])

    const filteredItems = item.filter(e => e.name.includes(searchresult.toUpperCase()))

    return (
        <>
            <div
                className="fixed w-full h-full top-20 left-0"
                onClick={hide}
            ></div>
            <div
                className="w-full fixed bg-white top-24 md:top-16 shadow-lg rounded-lg px-4 py-3 left-0 max-h-[500px]"
            >
                <div className="w-full md:w-9/12 mx-auto">
                    <IoMdClose
                        size={25}
                        className="mb-3 cursor-pointer"
                        onClick={hide}
                    />
                    <p className="font-bold">Recherches populaires</p>
                    <div className="w-full flex md:flex-wrap mt-3 overflow-x-auto pb-2 a">
                        {popularSearches}
                    </div>
                    {searchresult.length > 0 && (
                        <>
                            <p className="font-bold">Résultats</p>
                            <div className="w-full flex flex-col mt-3 overflow-y-auto pb-2 max-h-[250px] a">
                                {filteredItems.length > 0 ? (
                                    filteredItems.map(e => (
                                        <Link
                                            onClick={hide}
                                            className="w-full flex px-2 py-1 my-1"
                                            to={`/type/${e.type}/?item=${e._id}`}
                                            key={e._id}
                                        >
                                            <img
                                                src={e.img}
                                                alt={e.name}
                                                className="max-h-[70px] mr-4 w-[70px]"
                                            />
                                            <div className="flex flex-col">
                                                <span>{e.name}</span>
                                                <div className="flex items-center px-3">
                                                    <span className={`font-normal ${e.offer ? "line-through text-sm text-gray-600 font-medium" : ""}`}>
                                                        {e.price} DA
                                                    </span>
                                                    {e.offer && (
                                                        <span className="ml-2 text-[#dd2a5b] underline">
                                                            {e.newprice} DA
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p>Aucun produit trouvé</p>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Search
