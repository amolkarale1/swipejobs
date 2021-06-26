export function getProfile(workerId){
console.log(workerId);
    return  (dispatch) => {
        console.log(workerId);
        console.log('dddfererererer');
        fetch(`http://test.swipejobs.com/api/worker/${workerId}/profile`)
        .then(res => {
            console.log('dddd')
            return res.json()})
        .then(json =>{
            alert('dddd');
            console.log('json','testing')

            console.log(Promise)
        dispatch({type:'SETPROPERLIFE_INDIA',payload:'Sunta'})
    })
}
}

export function getMatchingJobs(workerId){

}