import React from 'react'
import styled from 'styled-components'
import FrameLayout from '../layouts/FrameLayout'


// const Dropdown = ({ children, align = 'right', top = '2', className = null }) => {

//     const [active, setActive] = React.useState(false)

//     const contentClass = active ? "dp absolute mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" : `mt-${top} origin-top-${align} ${align}-0`

//     const Content = () => <>{children[0]}</>
//     const Items = () => <>{children.map((el, i) => {
//         return i > 0 ? <div key={i}>{el}</div> : null
//     })}</>

//     function handdleToggle() {
//         setActive(!active)
//         if (active)
//             setTimeout(() => document.addEventListener('click', handdleToggle), 200)
//         else
//             setTimeout(() => document.removeEventListener('click', handdleToggle), 200)
//     }

//     return (
//         <Wrapper>
//             <div className="relative inline-block text-left">
//                 <button
//                     className={[
//                         'flex flex-row items-center justify-center',
//                         'px-2 focus:outline-none',
//                         className
//                     ].join(' ')}
//                     onClick={handdleToggle}
//                 >
//                     <Content />
//                 </button>
//                 {active && <div className={contentClass}>
//                     <div className="py-1" onClick={handdleToggle} >
//                         <Items />
//                     </div>
//                 </div>}
//             </div>
//         </Wrapper>
//     )
// }



const Context = React.createContext({ visible: false, setVisible: () => { } })

const Toggle = ({ children, className, onClick = null }) => {
    const { visible, setVisible } = React.useContext(Context)

    function handleToggle() {
        setVisible(!visible)
        if (onClick)
            onClick()
        // if (visible)
        //     setTimeout(() => document.addEventListener('click', handleToggle), 200)
        // else
        //     setTimeout(() => document.removeEventListener('click', handleToggle), 200)

    }

    return <div className={className}
        onClick={handleToggle}>
        {children}
    </div>
}

const Content = ({ children, className }) => {
    const { visible } = React.useContext(Context)
    return visible ? <div className={className}> {children}</div> : null
}

const Item = ({ children, className, onClick }) => {
    return <div className={className} onClick={onClick}>{children}</div>
}

const Dropdown = ({ children, className }) => {
    const [visible, setVisible] = React.useState(false)

    return <div className={className}>
        <Context.Provider value={{ visible, setVisible }}>
            {children}
        </Context.Provider>
    </div>
}

Dropdown.Toggle = Toggle
Dropdown.Content = Content
Dropdown.Item = Item

export default Dropdown