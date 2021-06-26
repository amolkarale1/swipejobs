
const initialstate = []
export function jobReducer(state = initialstate,action){
    console.log(action)
    switch(action.type){
        case 'SET_WORKER_PROFILE':
            const prevState = [...state]
            if(prevState.length > 0 ){
             let indexOfWorker = prevState.indexOf((value,index) => action.payload.workerId == value.workerId)
             if( indexOfWorker == -1 ){
                let workerDetails = {workerId:action.payload.workerId,
                    personName:`${action.payload.firstName} ${action.lastName}`,matchingJobs:[]}
                    console.log(prevState)
                    return [...prevState, workerDetails]
             }
            } else{
                let workerDetails = {workerId:action.payload.workerId,
                    personName:`${action.payload.firstName} ${action.lastName}`,matchingJobs:[]}
                    console.log(prevState)
                    return [...prevState, workerDetails]
            }
             return state;
        case 'SET_MATCHING_JOBS':
            const workerPrevState = [...state]
            workerPrevState[0].matchingJobs = action.payload
            console.log('uuu',workerPrevState)
            return workerPrevState
    }
    return state;
}
