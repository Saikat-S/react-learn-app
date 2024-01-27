import Navbar from "../../components/navbar/Navbar";
import "./list.css"

function List(){
    return(
        <div>
            <Navbar/>
            <div className="list">
                <div className="listContainer">
                    <span>Navlist</span>
                </div>
            </div>
        </div>
    )
}

export default List