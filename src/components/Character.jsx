import CharacterInfo from "./CharacterInfo";
import { Link } from "react-router-dom";


function Character({ character }) {

    return (
        <div className="text-center p-5">
            <h3>{character.name}</h3>
            <Link to={`/character/${character.id}`}>
                <img className="img-fluid rounded-pill"
                    style={{ cursor: "pointer" }}
                    src={character.image}
                    alt={character.name}
                />
            </Link>

        </div>
    )
}
export default Character;
//<CharacterInfo character={character}/>
//export default withRouter(Character);