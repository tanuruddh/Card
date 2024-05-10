function FirstCard({ data }) {
    return (
        <div className="first-card">
            <div className="card-wrapper2">
                <div className="img-div">
                    <img src={data?.picture.large} alt="" />
                </div>
                <div className="details-tag">
                    <span>{data?.name.first + '     ' + data?.name.last}</span>
                    <div className="gender-cell">

                        <span>{data?.gender}</span>
                        <br />
                        <span>{data?.cell}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstCard
