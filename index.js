require("@babel/register")( {
    presets: [ "@babel/preset-env" ],
} );
const path = require('path');
const dev = process.env.NODE_ENV !== "production";
const dotenv = require('dotenv');

const parsedConfig = dev ? dotenv.config({path: `${path.join(__dirname)}/.env.development`}).parsed
                         : dotenv.config().parsed;

process.env = {...process.env, parsedConfig};

if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      printMe();
    })
  }

require( "./src/server" );
