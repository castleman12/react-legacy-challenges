import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  
  constructor(props) {
    super(props)
   this.state = {
     inputValue: '',
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
 }

searchFunction = (event) => {
   console.log("hi from onChange", event.target.value)
   this.setState({
     inputValue: event.target.value
   })

 }

 render() {
   const filteredThings =
   this.state.things.filter(thing => {
     return thing.toLowerCase().includes(this.state.inputValue.toLowerCase())
   })
   return(
     <div>
       <Input placeholder='Search Here' onChange={this.searchFunction}/>
       <h3>Results: {filteredThings.map((levi) => <h1>{levi}</h1> )}</h3>
     </div>
   )
 }
}
 
export default SearchIndex;
