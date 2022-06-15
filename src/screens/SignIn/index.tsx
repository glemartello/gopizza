import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import brandImg from ""

import { Input } from "@src/components/Input";
import { Button } from "@src/components/Button";

import { Container, Content, Title, Brand } from "./styles";

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>

          <Title>Login</Title>
         <Input placeholder='E-mail' type='secondary' autoCorrect={false} autoCapitalize="none" />

          <Input placeholder='Senha' type='secondary' secureTextEntry />

          <Button title='Entrar' type='secondary' />

        </Content>
      </KeyboardAvoidingView>
       </Container>
  )
}