export const Prod = ({produ}) => {
    return (
        <>
            <div className="cardContainer cFlex">
                <div className="bannerContainer cFlex">
                    <img src={produ.thumbnail} alt="" />
                </div>
                <div className="infoContainer cFlex">
                    <h2>{produ.title}</h2>
                </div>
            </div>
        </>
    )
}