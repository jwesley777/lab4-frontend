import React from 'react';
import PointRow from "./PointRow";

const PointsList = props => {
    if (props.currentUser) {
        if (!props.points) {
            return (
                <div className="points">Loading...</div>
            );
        }

        if (props.points.length === 0) {
            return (
                <div className="points">
                    No points are here... yet.
                </div>
            );
        }

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>HIT</th>
                    </tr>
                    </tbody>

                {
                    props.points.sort((a,b) => b.id-a.id).map(point => { // maybe reverse list
                        return (
                            <PointRow point={point} key={point.id}/>
                        );
                    })
                }
                </table>
            </div>
        );
    } else
        return null;
};

export default PointsList;
