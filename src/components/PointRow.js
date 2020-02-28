import React from 'react';

const PointRow = props => {
    const point = props.point;

    return (
        <tbody>
        <tr>
            <td>{point.id}</td>
            <td>{String(point.x).substring(0, 10)}</td>
            <td>{String(point.y).substring(0, 10)}</td>
            <td>{point.r}</td>
            <td>{point.result ? 'Yes' : 'No'}</td>
        </tr>
        </tbody>
    );
};

export default PointRow;
