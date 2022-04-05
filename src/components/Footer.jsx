import { EmailOutlined, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`

  padding:20px;
  display:flex;
  ${Mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
  display: flex;
  flex: 1;
  padding:20px;
  flex-direction: column;

`;

const Logo = styled.h1`

`;

const Desc = styled.p`
  margin: 20px 0px;

`;

const SocialCon = styled.div`
  display: flex;

`;

const SocialIcon = styled.div`
  width:40px;
  height:40px;

`;

const Right = styled.div`
  flex: 1;
  padding:20px;

`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  justify-content: center;
  ${Mobile({ display: "none" })}


`;

const Title = styled.h3`
  margin-bottom:20px;
  
`
const List = styled.ul`

  margin: 0;
  padding:0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  
`
const ListItem = styled.li`

  width: 50%;
  margin-bottom:10px;
  
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width:50%;
`
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Willgeeks</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          adipisci soluta earum dolores perferendis voluptatibus.hdgb hgdsutds gsdyh
        </Desc>
        <SocialCon>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
        <SocialIcon>
          <Instagram />
        </SocialIcon>
        <SocialIcon>
          <Twitter />
        </SocialIcon>
        <SocialIcon>
          <Pinterest />
        </SocialIcon>
        </SocialCon>
      </Left>

      <Center>

          <Title>Useful links</Title>
          <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>WoMen's Fashion</ListItem>
          <ListItem>Kids Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>terms</ListItem>

          </List>
      </Center>
      <Right>
          <Title>Contact me</Title>
          <ContactItem>
            <Room style={{marginRight:"20px"}}/>  14,john moses street of ikeja lagos
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"20px"}}/>  +23451573r6re3
          </ContactItem>
          <ContactItem>
            <EmailOutlined style={{marginRight:"20px"}}/>  contact@will.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
