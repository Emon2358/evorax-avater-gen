const fs = require("fs");
const sharp = require("sharp");

const svgToJpeg = async (svgUrl, outputPath, jpegQuality = 80) => {
  try {
    const { default: fetch } = await import("node-fetch");
    const response = await fetch(svgUrl);
    const svgString = await response.text();

    await sharp(Buffer.from(svgString))
      .jpeg({ quality: jpegQuality })
      .toFile(outputPath);

    console.log("JPEG に変換されました:", outputPath);
  } catch (error) {
    console.error("変換エラー:", error);
  }
};

// 例: SVG の URL から JPEG を生成して保存
const svgUrl = "https://source.boringavatars.com/beam";
const outputPath = "avatar.jpg";
svgToJpeg(svgUrl, outputPath);
