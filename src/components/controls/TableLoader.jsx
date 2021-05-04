import React from 'react'
import Shimmer from './Shimmer'
import { range } from '../../helpers'

const TableLoader = ({ rows = 10, cols = 5 }) => {
    return (
        <>
            {range(rows).map(d => <tr key={d}>
                {range(cols).map(c => <td key={c}><Shimmer height={15} corner={20} ></Shimmer></td>)}
            </tr>)}
        </>
    )
}

export default TableLoader