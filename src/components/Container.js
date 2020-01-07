import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import { Container, Row, Col} from 'react-bootstrap'

import MyList from './MyList'
import Recommendations from './Recommendations'
import Titles from './Titles'

class MainContainer extends React.Component{

    renderMyList = () => {
        let myList = this.props.myList
        let mouseInside = this.props.isMouseInside
        let mouseStatus = this.props.mouseStatus
        return myList.map(movie => (
            <Col key={movie.id} xs lg="2" >
                    <MyList
                        mouseStatus={mouseStatus}
                        mouseInside={mouseInside}
                        onRemove={this.props.removeFromList}
                        movie={movie}
                        title={movie.title}
                        img={movie.img}
                        id={movie.id}
                    />
            </Col>
        ))
    }
    
    renderRec = () => {
        
        let recList = this.props.recommendations
        let mouseInside = this.props.isMouseInside
        let mouseStatus = this.props.mouseStatus
        return recList.map(movie => (
            <Col key={movie.id} xs lg="2">
                <Recommendations
                    mouseStatus={mouseStatus}
                    mouseInside={mouseInside}
                    movie={movie}
                    onAdd={this.props.addToList}
                    title={movie.title}
                    img={movie.img}
                    id={movie.id}
                />
            </Col>
        ))
    }
    render(){

        return ( 
            <Container>
                <h4>My list</h4>
                <Row>
                    {this.renderMyList()}
                </Row>
                <hr/>
                <h4>Recommended</h4>
                <Row >
                    {this.renderRec()}
                </Row>
                <hr/>
                <h4>
                    Titles from My List
                </h4>
                <Row>
                    {this.props.myList.map(movie => 
                     <Titles key={movie.id} title={movie.title} /> )}
                </Row>

            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        myList: state.mylist,
        recommendations: state.recommendations,
        mouseStatus: state.isMouseInside
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      addToList: (movie) => dispatch({type: actionTypes.ADD_TO_LIST, payload: movie}),
      removeFromList: (movie) => dispatch({type: actionTypes.REMOVE_FROM_LIST, payload: movie}),
      isMouseInside: (boolean) => dispatch({type: actionTypes.IS_MOUSE_INSIDE, payload: boolean})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)