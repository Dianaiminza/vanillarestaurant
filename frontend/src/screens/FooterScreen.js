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
    <Container>
      <Left>
        <Logo>Vanilla Restaurant.</Logo>
        <Desc>
          There are many variations of foods,desserts and drinks to enjoy from our prestigious restaurant.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <WhatsApp />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>About Us</ListItem>
          <ListItem>FAQs</ListItem>
          <ListItem>Terms and Conditions</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Delivery and Collections</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        <Title>OPENING TIMES</Title>
        <ListItem>Mon - Sat: 8am - 7pm</ListItem>
          <ListItem>Sundays: 8am - 6pm</ListItem>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 589,Royal Park Langata, Nairobi
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> + 254 728131955
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> vanillarestaurant@gmail.com
        </ContactItem>
        <ContactItem>
        <a target="_blank" class="button-icon" href="https://www.google.com/maps/place/Langata,+Nairobi/@-1.3642288,36.7012495,13z/data=!3m1!4b1!4m5!3m4!1s0x182f04e2529bcab3:0xb85155f9a25aa4c0!8m2!3d-1.3640944!4d36.7476257"><i class="fal fa-map-marker-alt"></i> Find on google maps</a>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;