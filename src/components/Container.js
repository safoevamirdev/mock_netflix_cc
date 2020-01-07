import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import { Container, Row, Col} from 'react-bootstrap'

import MyList from './MyList'
import Recommendations from './Recommendations'

class MainContainer extends React.Component{

    renderMyList = () => {
        let myList = this.props.myList
        return myList.map(movie => (
            <Col key={movie.id} xs lg="2" >
                    <MyList
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
        return recList.map(movie => (
            <Col key={movie.id} xs lg="2">
                <Recommendations
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
                <h1>My list</h1>
                <Row>
                    {this.renderMyList()}
                </Row>
                <hr/>
                <h1>Recommended</h1>
                <Row >
                    {this.renderRec()}
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        myList: state.mylist,
        recommendations: state.recommendations
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      addToList: (movie) => dispatch({type: actionTypes.ADD_TO_LIST, payload: movie}),
      removeFromList: (movie) => dispatch({type: actionTypes.REMOVE_FROM_LIST, payload: movie})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)