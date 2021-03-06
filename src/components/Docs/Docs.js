import React, { useState } from "react";
import CodeBlock from "@tenon-io/tenon-codeblock";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Get from "../../images/get.png";
export default class Docs extends React.Component {
  render() {
    return (
      <Container>
        <Typography variant="h1" component="h1" gutterBottom>
          API Documentation
        </Typography>
        <Typography variant="h3" component="h3" gutterBottom>
          Version
        </Typography>
        <Typography variant="body1" gutterBottom>
          This API currently in αlpha
        </Typography>
        <Typography variant="h3" component="h3" gutterBottom>
          User Story
        </Typography>
        <Typography variant="body1" gutterBottom>
          You need some words for a project, When you visit the API, you get the desired amount of words back in an array that is easy to parse through and find what you want.
        </Typography>
        <Typography variant="h3" component="h3" gutterBottom>
          Future Development
        </Typography>
        <Typography variant="body1" gutterBottom>
          I plan on toolip style definition lookup for the words.
        </Typography>
        <Typography variant="h3" component="h3" gutterBottom>
          Usage
        </Typography>
        <Typography variant="body1" gutterBottom>
          This API in its current form simply delivers an arrays of words in
          different varients.
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you would like more that one word in the array, change the last
          number. Currently there are 8 Get endpoints; at the moment, hosted on
          Heroku.
        </Typography>
        <CodeBlock
          codeString={`https://uselessapi.com/api/name-gen/1 //This will return an array of one word
https://uselessapi.com/api/name-gen/10 //This will return an array of ten words
https://uselessapi.com/api/name-gen/100 //This will return an array of one-hundered words
https://uselessapi.com/api/name-gen/1000 //This will return an array of one-thousand words
https://uselessapi.com/api/name-gen/10000 //This will return an array of ten-thousand words
https://uselessapi.com/api/name-gen/100000 //This will return an array of one-hundered-thousand words
https://uselessapi.com/api/name-gen/multi/:number? //This will return an array of the amount of words given in ':number?'
https://uselessapi.com/api/name-gen/alpha/:letter? //This will return an array of all the words starting with the given ':letter?'`}
        />
        <Typography variant="body1" gutterBottom>
          This API in its current form simply delivers an arrays of words in
          different varients.
        </Typography>
        <Typography variant="h3" component="h3" gutterBottom>
        <a href="https://shyaboi.github.io/pstmn/">
          Getwoman</a> Usage
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you would like, you can use my API tester to try out these
          endpoints, simply choose 'Get', under method, choose the URL endpoint
          to get, then submit, and your response should look similar to the
          screenshot below.
        </Typography>
        <a href="https://shyaboi.github.io/pstmn/">
          <img src={Get} width="950px" height="500px" />
          Getwoman
        </a>
        <Typography variant="h3" component="h3" gutterBottom>
          Javascript Fetch Usage
        </Typography>
        <Typography variant="body1" gutterBottom>
          The simplest way to make a request in vanilla Javascript would be the
          fetch method. You can fetch ten random words such as the example below:
        </Typography>
        <CodeBlock
          codeString={`fetch('https://uselessapi.com/api/name-gen/10')
    .then(response => response.json())
    .then(data => console.log(data));`}
        />
        <Typography variant="body1" gutterBottom>
          This request will come back with one result, which will be ten random
          words, all in lower case, in an array. The response should look
          similar to the response below;
        </Typography>
        <CodeBlock
          codeString={`[
  "nonascendently",
  "trainful",
  "spins",
  "tui",
  "overshadowment",
  "wispish",
  "netty",
  "bombilation",
  "playwright",
  "geologic"
]`}
        />

<Typography variant="h3" component="h3" gutterBottom>
          JQuery Usage
        </Typography>
        <Typography variant="body1" gutterBottom>
          The simplest way to make a request with JQuery would be the
          get method. You can get ten random words such as the example below:
        </Typography>
        <CodeBlock codeString={`$.get("https://uselessapi.com/api/name-gen/10", 
  function(data, status){
    console.log("Data: " + data);
  });`} />
  <Typography variant="body1" gutterBottom>
          This request will come back with one result, which will be ten random
          words, all in lower case, in an array. The response should look
          similar to the response below;
        </Typography>
        <CodeBlock
          codeString={`[
  "peebeens",
  "stodging",
  "wendell",
  "leporids",
  "massageuse",
  "sontag",
  "photoradio",
  "toiled",
  "aspread",
  "intruse"
]`}
        />
        <Typography variant="h3" component="h3" gutterBottom>
          Node.js HTTPS Module Usage
        </Typography>
        <Typography variant="body1" gutterBottom>
          To use the API with Node HTTPS Get method, you can use a request
          similar to the example below;
        </Typography>

          <CodeBlock
            codeString={`var https = require('https');

var options = {
  host: 'uselessapi.com/api/name-gen',
  path: '/10/',
  headers: {
    Accept': 'application/json'
            }
          };
  https.get(options, function (res) {
    var json = '';
    res.on('data', function (chunk) {
                  json += chunk;
              });
    res.on('end', function () {
      if (res.statusCode === 200) {
        try {
          var data = JSON.parse(json);
            // data is available here:
            console.log(json);
                      } catch (e) {
                          console.log('Error parsing JSON!');
                      }
                  } else {
                      console.log('Status:', res.statusCode);
                  }
              });
          }).on('error', function (err) {
              console.log('Error:', err);
          });`}
          />
        <Typography variant="body1" gutterBottom>
          This request will come back with one result, which will be ten random
          words, all in lower case, in an array. The response should look
          similar to the response below;
        </Typography>
        <CodeBlock
          codeString={`[
  "unmaturative",
  "asternata",
  "outroving",
  "sullenly",
  "precapitalist",
  "pharmacologists",
  "kinetoscopic",
  "weakeners",
  "unpredictabilness",
  "banked"
]`}
        />

<Typography variant="h3" component="h3" gutterBottom>
          Python Request Module Usage
        </Typography>
        <Typography variant="body1" gutterBottom>
          To use the API with Pythons request module, you can use a request
          similar to the example below;
        </Typography>
        <CodeBlock codeString={`import requests
r = requests.get('https://uselessapi.com/api/name-gen/10')
print(r.json())`} />

<Typography variant="body1" gutterBottom>
          This request will come back with one result, which will be ten random
          words, all in lower case, in an array. The response should look
          similar to the response below;
        </Typography>
        <CodeBlock
          codeString={`[
  "solonetses",
  "adenotomy",
  "scrappier",
  "baldricked",
  "persorption",
  "neuronist",
  "belzebub",
  "undepressible",
  "teguments",
  "lowerer"
]`}
        />
        <Typography variant="h3" component="h3" gutterBottom>
          cURL Usage
        </Typography>
        <Typography variant="body1" gutterBottom>
          To use the API with cURL, open your terminal, and you can use a request
          similar to the example below;
        </Typography>
        <CodeBlock codeString={`curl "https://uselessapi.com/api/name-gen/10"`}/>
        <Typography variant="body1" gutterBottom>
          The result of the cURL will be an array of words in the specified amount, similar to the example below;
          <CodeBlock codeString={`% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
Dload  Upload   Total   Spent    Left  Speed
100   130  100   130    0     0    214      0 --:--:-- --:--:-- --:--:--   214
["strongyloplasmata","overaccurate","nonlegitimacy","nyroca","photolysis","suers","wiriness","pararhotacism","bides","seafighter"]
`}/>
        </Typography>
      </Container>
    );
  }
}
