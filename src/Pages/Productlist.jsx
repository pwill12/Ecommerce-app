import styled from "styled-components";
import Mynavbar from "../components/Mynavbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Mobile } from "../Responsive";

import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
 ${Mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${Mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${Mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

function ProductList() {

  const location = useLocation()

  const cat = location.pathname.split('/')[2]

  const [filter,setFilters] = useState({})

  const [sort, setSort] = useState("newest");

  const handlefilters = (e) => {
    const value = e.target.value

    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  }

  // console.log(filter)


  return (
    <Container>
      <Mynavbar />
      <Announcement />
      <Title>Fashion</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handlefilters}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handlefilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filter} sort={sort}/>
      <Footer />
    </Container>
  );
}

export default ProductList;
