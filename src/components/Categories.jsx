import CategoriesItem from './CategoriesItem'

import {mycategories} from '../data'

import styled from 'styled-components'

import { Mobile } from '../Responsive'


const Container = styled.div`
  padding:10px 20px;
  display: flex;
  justify-content: space-between;
  ${Mobile({ padding: '0px', flexDirection: 'column' })}



`

function Categories() {
    return (
           <Container>
               {mycategories.map((props) => (<CategoriesItem item={props} key={props.id}/>))}
           </Container>
    )
}

export default Categories