import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Left, Body, Right, Title  } from 'native-base';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container >
        <Header  >


        <Left/>
          <Body>
            <Title style={{marginLeft:80,marginTop:30}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="General" >
            <Tab1 />
          </Tab>
          <Tab heading="Business">
            <Tab2 />
          </Tab>
          
          <Tab heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}