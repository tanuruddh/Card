
function Card({ data }) {

    return (
        <>{!data ||
            data.map((card, index) => (
                <div key={index} className="container">

                    <div className="card-wrapper">

                        <div className="card">

                            <div className="card-image">
                                <img src={card.picture.large} alt="profile one" />
                            </div>

                            <div className="details">
                                <h2>{card.name.title + ' ' + card.name.first + ' ' + card.name.last}
                                    <br />
                                    <span className="job-title-1">{card.gender}</span>
                                    <span className="job-title-2">{card.cell}</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>
            ))
        }
        </>
    )
}

export default Card