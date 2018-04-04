import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import api from './Api'


const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class NewSeries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genres: [],
            isLoading: false
        }

        this.saveSeries = this.saveSeries.bind(this)
    }
    componentDidMount() {
        this.setState({isLoading: true})
        api.loadGenres()
            .then((res) => {
                this.setState({
                    isLoading: false,
                    genres: res.data,
                    redirect: false
                })
            })
    }
    saveSeries() {
        const newSerie = {
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comments: this.refs.comments.value
        }
        api.saveSerie(newSerie)
            .then((res) => {
                this.setState({
                    redirect: '/series/' + this.refs.genre.value
                })
            })
        return false
    }
    render() {
        return (
            <section className="intro-section">
                { 
                    this.state.redirect &&
                    <Redirect to={this.state.redirect}/>
                }
                <div className="container">
                    <h1>Nova série</h1>
                    <form>
                        Nome: <input type="text" className="form-control" ref="name"/>
                        Status:
                            <select className="form-control" ref="status">
                                {
                                    Object.keys(statuses).map(key => <option key={key} value={key}>{statuses[key]}</option>)
                                }
                            </select>
                        Gênero:
                            <select className="form-control" ref="genre">
                                {
                                    this.state.genres
                                        .map(key => <option key={key} value={key}>{key}</option>)
                                }
                            </select>
                        Comentários: <textarea className="form-control" ref="comments"></textarea> 
                        <button type="button" className="btn btn-danger" onClick={this.saveSeries}>Salvar</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default NewSeries
