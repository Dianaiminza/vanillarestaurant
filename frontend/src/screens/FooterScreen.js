// import React, { Component } from 'react'

// export default class FooterScreen extends Component {
//     render() {
//         return (
//             <div className="footer">
//                 <footer className="footer">All right reserved.</footer>
                
//             </div>
//         )
//     }
// }
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  WhatsApp,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
      <>
    <Container>
      <Left>
        <Logo>Vanilla Restaurant.</Logo>
        <Desc>
          There are many variations of foods,desserts and drinks to enjoy from our prestigious restaurant.
        </Desc>
         <Title>Follow Us On</Title>
        <SocialContainer>
       
          <SocialIcon color="3B5999">
          <a href="https://facebook.com/vanillarestaurant"rel="noopener noreferrer"target="_blank">
            <Facebook />
            </a>
          </SocialIcon>
          <SocialIcon color="E4405F">
<a href="https://instagram.com/vanillarestaurant"rel="noopener noreferrer"target="_blank">
            <Instagram />
            </a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
          <a href="tel://0728131955"rel="noopener noreferrer"target="_blank">
            <WhatsApp />
            </a>
          </SocialIcon>
          <SocialIcon color="E60023">
          <a href="https://pinterest.com/vanillarestaurant"rel="noopener noreferrer"target="_blank">
            <Pinterest />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem> <Link to="/">Home</Link></ListItem>
          <ListItem><Link to="/category/BigMeals">Big Meals</Link></ListItem>
          <ListItem><Link to="/category/Breakfast">Breakfast</Link></ListItem>
          <ListItem><Link to="/category/Desserts">Desserts</Link></ListItem>
          <ListItem><Link to="/category/Drinks">Drinks</Link></ListItem>
          <ListItem><Link to="/profile">My Account</Link></ListItem>
          <ListItem><Link to="/shipping">OrderTracking</Link></ListItem>
        </List>
        <Title>OPENING TIMES</Title>
        <ListItem>Mon - Sat: 8am - 7pm</ListItem>
          <ListItem>Sundays: 8am - 6pm</ListItem>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 589,Royal Park Langata, Nairobi
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/><a href="tel://0728131955">+254728131955</a>
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /><a href="mailto://vanillarestaurant@gmail.com">vanillarestaurant@gmail.com</a>
        </ContactItem>
        <ContactItem>
        <a target="_blank" class="button-icon" href="https://www.google.com/maps/place/Royal+Park+Estate/@-1.3284223,36.7732175,17z/data=!4m9!1m2!2m1!1sroyal+park+langata!3m5!1s0x0:0x1f2bb156cf666be4!8m2!3d-1.3285614!4d36.7781281!15sChJyb3lhbCBwYXJrIGxhbmdhdGGSARVyZXNpZGVudHNfYXNzb2NpYXRpb24"><i class="fa fa-map-marker-alt"></i> Find us on google maps</a>
        </ContactItem>
        
      </Right>
    </Container>
    <div class="footer-bottom">
			<a href="#vanillarestaurant" class="move-top">This Way Up</a>
			<img src="//cdn.shopify.com/s/files/1/0015/1185/0042/t/14/assets/footer-icon.jpg?v=10449586777609619721" alt="Vanilla &amp; Restaurant" loading="lazy" importance="low"> 
		</div>
        </>
  );
};
export default Footer;