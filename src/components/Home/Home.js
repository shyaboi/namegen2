import React, { useState } from 'react';
import CodeBlock from '@tenon-io/tenon-codeblock';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export default class Docs extends React.Component {
render (){
    return (
    <Container>
          <Typography variant="h1" component="h1" align='center' gutterBottom>
        ^
        <br />
        Welcome To 
        <br />
        Name Generator 2
      </Typography>
    </Container>
    )
}
}
