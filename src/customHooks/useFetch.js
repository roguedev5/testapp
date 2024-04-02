import {useEffect, useReducer} from 'react'



let intialState = {
    data: [],
    error: null,
    loading: true
}


const reducer = (state, action) => {

    switch(action.type){
        case('DATA'):
            return {...state, data: action.data, loading: false}
        case('ERROR'):
            return {...state, error: true, loading: false}
        default:
            return state
    }

}


const useFetch = (url) => {

const[state, dispatch]=useReducer(reducer, intialState)
    useEffect(() => {
       fetch(url)
       .then(resp => resp.json())
       .then(res => dispatch({type:'DATA', data: res}))
       .catch(err => dispatch({type:'ERROR'}))
    },[url])

    return state
}


export default useFetch