// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "deps/phoenix_html/web/static/js/phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

//import socket from "./socket"
import {Socket} from "deps/phoenix/web/static/js/phoenix"
let socket = new Socket("/socket");
socket.connect();
let chan = socket.channel("rooms:lobby", {});
chan.join().receive("ok", chan => {
  console.log("Welcome to Phoenix Chatfuck!")
});

chan.on("fuckyou", resp => {
  console.log("from server")
  console.log(resp)
})

chan.on("in", resp => {
$('#the_target').addClass("in")
})

chan.on("out", resp => {
$('#the_target').removeClass("in")
})

let hoverIn = e => {
  console.log('hover in')
  $(e.target).addClass('in')
  chan.push("in", {})
}
let hoverOut = e => {
  console.log('hover out')
  $(e.target).removeClass('in')
  chan.push("out", {})
}

$(() => {
  $('#the_target').hover(
    hoverIn,
    hoverOut
  ).click(() => {
    chan.push("hit_me!")
    console.log(chan);
  })
});
