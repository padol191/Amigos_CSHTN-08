import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
margin-left: 10px;
border: none;
border-radius: 200px;
width: fit-content;
background-color: #f2f2f2;
font-size: 16px;
padding: 10px 10px 10px 10px;
box-shadow: 0px 1px 2px #9c9a91;
position : fixed;
bottom : 5%;
right : 3%
`;

const Image = styled.img`
  height: 42px;
  width: 45px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 15px;
  font-size: 2rem;
  vertical-align: middle;
`;

function Coffee() {
  return (
    <Button target="_blank" href="https://www.buymeacoffee.com/">
      <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"  alt="Buy me a coffee" />
      {/* <Text>Buy me a coffee</Text> */}
    </Button>
  );
}

export default Coffee;