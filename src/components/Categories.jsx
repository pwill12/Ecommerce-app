import CategoriesItem from './CategoriesItem'

import {mycategories} from '../data'

import styled from 'styled-components'


const Container = styled.div`
  padding:10px 20px;
  display: flex;
  justify-content: space-between;

`

function Categories() {
    return (
           <Container>
               {mycategories.map((props) => (<CategoriesItem item={props}/>))}
           </Container>
    )
}

export default Categories