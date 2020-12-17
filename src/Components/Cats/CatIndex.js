import React, { Component } from 'react';
import CatList from './CatList';
 
class CatIndex extends Component {
 

 constructor(props, state){  
   super()


   this.state = {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
   }
  }
   render() {
   return (
     <div>
      <CatList breeds={this.state.breeds} />
     </div>
   );
   }
  
}


export  default  CatIndex
