import React, { Component } from 'react'; 
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuidv4(), name: 'Eggs'},
            { id: uuidv4(), name: 'Milk'},
            { id: uuidv4(), name: 'Sugar'},
            { id: uuidv4(), name: 'Bread'},
            { id: uuidv4(), name: 'Ham'}
        ]
    }

    render() {
        const { items } = this.state; 
        return(
            <container> 
                <Button
                    color = "dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Item')
                        if(name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuidv4(), name}]
                            }))
                        }
                    }}
                    >Add Item</Button>

                    <ListGroup> 
                        <TransitionGroup className="shopping-list"> 
                            {items.map(({ id, name }) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-button"
                                            color="danger"
                                            size="sm"
                                            onClick={() => {
                                                this.setState(state => ({
                                                    items: state.items.filter(item => item.id !== id)
                                                }))
                                            }} 
                                            >&times;
                                        </Button>

                                        {name}
                                    </ListGroupItem>
                                </CSSTransition> 
                            ))}
                        </TransitionGroup>
                    </ListGroup>
            </container>
        )
    }
}

export default ShoppingList;