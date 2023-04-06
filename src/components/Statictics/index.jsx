
function Statictics ( {categoryTravel} ) {

    return (
        <div className="flex flex-row">
            <div className="w-1/2">

            </div>
            <div className="w-1/2">
            <div>
                <p>{categoryTravel.name}</p>
                <p>{categoryTravel.value}</p>
            </div>

            </div>
        </div>    
    )
}

export default Statictics