import { Server } from "net";
import dotenv from "dotenv";
import convertVideo from "./HandleVideos";

dotenv.config();

const hls =  new Server();

hls.on("connection", (socket) => {
  console.log(
    `New connection from ${socket.remoteAddress}:${socket.remotePort}`
  );
  socket.setEncoding("utf-8");
  socket.on("data", (name) => {
    console.log(name);
    convertVideo(name.toString());

    socket.write("completed...");
  })
}) 

hls.listen({port: process.env.PORT, host: process.env.HOST}, () => {
  console.log(`hls running on port ${process.env.PORT}`);
})

