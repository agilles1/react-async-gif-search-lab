import React from 'react'
import GifList from '../components/GifList'
import GiftSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
    }
    
    componentDidMount(){
        this.fetchGifs()
    }

    render(){
       
        return(
            <div>
                <div>
                    < GiftSearch fetch = {this.fetchGifs} />
                </div>
                <ul>
                    <GifList gifs={this.state.gifs} />
                </ul>
            </div>
        )
    }
}

export default GifListContainer