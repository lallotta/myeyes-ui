// import initial data here, then pass in as state

let drawer = false


export default function(state={drawer}, action) {

    switch(action.type) {
        //next case or set of logic
        case "TOGGLE_DRAWER":
            console.log('opening drawer....')
            drawer = !drawer

            // state should be a tree representing the overall state of the app

            return {
                ...state,
                drawer
            }

        break;


        case "OPEN_DRAWER":
            console.log('opening drawer....')

            // state should be a tree representing the overall state of the app

            return {
                ...state,
                drawer: true
            }

        break;

        case "CLOSE_DRAWER":
            console.log('closing drawer...')

            // state should be a tree representing the overall state of the app

            return {
                ...state,
                drawer: false
            }

        break;
        
        default:
            return state
    }

    

}
