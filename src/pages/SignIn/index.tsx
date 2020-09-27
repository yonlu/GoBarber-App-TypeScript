import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg}></Image>
      <Title>Logon</Title>
    </Container>
  );
};

export default SignIn;
