import React, { Component } from "react";
import Particles from "react-particles-js";
import images from "../assets";

export default {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      speed: 1,
      out_mode: "out"
    },
    shape: {
      type: ["images"],
      images: [
        {src: 'images/assets/auth0.svg', height:100,width:100},
        {src: 'images/assets/d3-dot-js.svg', height:100,width:100},
        {src: 'images/assets/expo-cli.svg', height:100,width:100},
        {src: 'images/assets/expo-client.svg', height:100,width:100},
        {src: 'images/assets/gatsby.svg', height:100,width:100},
        {src: 'images/assets/gitlab.svg', height:100,width:100},
        {src: 'images/assets/go.svg', height:100,width:100},
        {src: 'images/assets/graphql.svg', height:100,width:100},
        {src: 'images/assets/mongodb.svg', height:100,width:100},
        {src: 'images/assets/mysql.svg', height:100,width:100},
        {src: 'images/assets/neo4j.svg', height:100,width:100},
        {src: 'images/assets/netlify.svg', height:100,width:100},
        {src: 'images/assets/node-js.svg', height:100,width:100},
        {src: 'images/assets/npm.svg', height:100,width:100},
        {src: 'images/assets/reactjs.svg', height:100,width:100},
        {src: 'images/assets/zapier.svg', height:100,width:100},
        {src: 'images/assets/figma.svg', height:100,width:100},
        {src: 'images/assets/postgresql.svg', height:100,width:100},
        {src: 'images/assets/sentry.svg', height:100,width:100},
        {src: 'images/assets/github.svg', height:100,width:100},
        
      ]
    },
    color: {
      value: "#fff"
    },
    size: {
      value: 50,
      random: false,
      anim: {
        enable: true,
        speed: 4,
        size_min: 10,
        sync: false
      }
    }
  },
  retina_detect: false
}