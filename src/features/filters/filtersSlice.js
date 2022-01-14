const initialState = {
    status: 'All',
    colors: []
}


export default function filtersReducer(state = initialState, action){
    switch(action.type){
        case 'filters/statusFilterChanged': {
            return{
                // Copy the whole state
                ...state,
                // Overwrite the filters value
                filters: {
                    // copy the filter fields
                    ...state.filers,
                    // And replace the status field with the new value
                    status: action.payload
                }
            }
        }
    }
}