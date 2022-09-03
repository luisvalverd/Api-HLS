//import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";

//ffmpeg.setFfmpegPath(ffmpegInstaller.path);

var fileOutput = "output.m3u8"

export default function convertVideo(name: string) {
  let folderVideo = name.split(".")[0];
  let pathExitVideo = `../server/videos/${folderVideo}/${fileOutput}`;  
  let pathVideoOriginal = `../server/uploads/${name}`;

  ffmpeg(pathVideoOriginal, { timeout: 432000 })
    .addOptions([
      "-profile:v baseline",
      "-level 3.0",
      "-start_number 0",
      "-hls_time 10",
      "-hls_list_size 0",
      "-f hls",
    ])
    .output(pathExitVideo)
    .run()
  
}


