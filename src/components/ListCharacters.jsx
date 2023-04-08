import { useState, useEffect } from 'react'
import Character from './Character';

function Nav({ page, setPage }) {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            {page > 1 ?
                <button onClick={() => setPage(page - 1)} className='btn btn-primary'>
                    {"<< " + (page - 1)}
                </button>
                :
                <div />
            }

            <p>Actual page: {page}</p>
            <button onClick={() => setPage(page + 1)} className='btn btn-primary btn-sm'>
                {(page + 1) + " >>"}
            </button>
        </div>
    )
}

export default function ListCharacter() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setData(data.results);
        }

        fetchData();
    }, [page]);




    return (
        <div className='container'>
            <Nav page={page} setPage={setPage} />
            <div className="row">
                {data.map(character => {
                    return <div className='col-md-4'>
                        <Character key={character.id} character={character} />
                    </div>
                })}
            </div>
            <Nav page={page} setPage={setPage} />
        </div>

    )
}