import React, {Component} from 'react'
import styles from './likeDislike.css'

console.log('styles', styles)
class LikeDislike extends Component {
    constructor(props){
        super(props);
        this.handleLikeEvent =this.handleLikeEvent.bind(this)
        this.handleDislikeEvent =this.handleDislikeEvent.bind(this)
        this.state =({
            likeCounter : this.props.initialLikeCounter,
            dislikeCounter : this.props.initialDislikeCounter
        })
    }
    handleDislikeEvent(e){
        this.setState({
            dislikeCounter : this.state.dislikeCounter - 1
        })
    }
    handleLikeEvent(e){
        this.setState({
            likeCounter : this.state.likeCounter + 1
        })
    }
    render(){
        const {showLike, showDislike} = this.props;
        const {likeCounter, dislikeCounter} = this.state;

        return(
            <React.Fragment>
                { showLike && <button onClick={this.handleLikeEvent}>{'Like'} |&nbsp;<span>{likeCounter}</span></button>}
                { showDislike && <button onClick={this.handleDislikeEvent}>{'Dislike'} |&nbsp;<span>{dislikeCounter}</span></button>}
            </React.Fragment>
        )
    }
}
LikeDislike.defaultProps ={
    initialLikeCounter : 100,
    initialDislikeCounter : 25,

}
export default LikeDislike