import React from 'react'


const TableEmptyRow = ({ colspan, className = null }) => {

    const classes = `flex items-center justify-center ${className}`

    return (
        <tr>
            <td colSpan={colspan}>
                <div className={classes}>
                    Данные не найдены
                </div>
            </td>
        </tr >
    )
}

export default TableEmptyRow