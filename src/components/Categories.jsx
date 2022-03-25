import CategoriesItem from './CategoriesItem'

import {mycategories} from '../data'

import styled from 'styled-components'


const Container = styled.components`
  padding:10px 20px;
  display: flex;

`

function Categories() {
    return (
       <div>
           <Container>
               {mycategories.map(item => {
                   <CategoriesItem item={item}/>
               })}
           </Container>
       </div>
    )
}

export default Categories