import React, {useContext} from "react";
import API from "../../utils/API";
import UserContext from "../../utils/userContext"

function ActivityCard(props) {

    const { dbUser } = useContext(UserContext);

    return (

        <div className="row">
            {props.activity.length ? (
                props.activity.map((data) => (
                    <div id="activity-container" className="activity-container justify-content-center p-d-flex p-mb-3 shadow">
                        <div className="row">
                            <div className="col-4">
                                <h5>{data.location}</h5>
                            </div>
                            <div className="col-4">
                            <h5>{new Date(data.date).toLocaleDateString()}</h5>
                            </div>
                            <div className="col-4">
                                <h5>Host: {data.hostName}</h5>
                            </div>
                            <div className="row justify-content-center">
                                <p style={{ textAlign: "center" }}>{data.description}</p>
                            </div>
                            {data.hostId === dbUser._id?
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-danger" name= {data._id} onClick={props.deleteActivity}>Delete Your Activity</button>
                            </div>
                            : null}
                        </div>
                    </div>
                ))
            ) : (
                null
            )}

        </div>
    )
}

export default ActivityCard;