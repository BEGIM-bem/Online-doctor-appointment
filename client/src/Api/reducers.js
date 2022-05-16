export const GetDate = 'GetDate'
export const Old_filter = 'Old_filter'
export const YongFilter = 'YongFilter'


let defaultState = {
    date: []

}


function userReducer(state = defaultState, action) {

    switch (action.type) {

        case GetDate:
            return {
                ...state,
                date: action.date,
            }

        default:
            return state
    }
}




export default userReducer;