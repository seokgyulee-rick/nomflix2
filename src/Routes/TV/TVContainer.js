import React from "react"
import TVPresenter from "./TVPresenter"

export default class extends React.Component {
    state = {
        topRated : null,
        airingToday : null,
        popular : null,
        error : null,
        loading : true
    };
    
    render() {
        const{
            topRated,
            popular,
            airingToday,
            error,
            loading
        } = this.state;
        
        return (<TVPresenter 
        topRated = {topRated}
        popular = {popular}
        airingToday = {airingToday}
        error = {error}
        loading = {loading} />)
    }
}