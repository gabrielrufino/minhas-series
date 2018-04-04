import React, { Component } from 'react'
import api from './Api'

class Series extends Component {
    constructor(props) {
        super(props)

        this.state = {
            series: [],
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState({isLoading: true})
        api.loadSeriesByGenre(this.props.match.params.genre)
            .then((res) => {
                this.setState({
                    series: res.data,
                    isLoading: false
                })
            })
    }
    renderSeries(serie) {
        return (
            <div className="item  col-xs-4 col-lg-4">
            <div className="thumbnail">
                <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                <div className="caption">
                <h4 className="group inner list-group-item-heading">{ serie.name }</h4>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                    <p className="lead">{ serie.genre }</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                    <a className="btn btn-danger" href="">Gerenciar</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
    render() {
        return (
            <div id="intro" className="intro-section">
                <h1>Séries - {this.props.match.params.genre}</h1>
                <div id="series" className="row list-group">
                    { 
                        !this.state.isLoading &&
                        this.state.series.map(this.renderSeries)
                    }
                </div>
            </div>
        )
    }
}

export default Series