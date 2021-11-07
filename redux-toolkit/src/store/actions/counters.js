

export const increment = (state) => { state.count += 1 }
export const decrement = (state) => { state.count -= 1 }
export const incrementStep = (state, action) => { state.count += action.payload }


const counterActions = {
    increment,
    decrement,
    incrementStep
}

export default counterActions