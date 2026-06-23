const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "../public/advolcano-logo-header.png");
const out = path.join(__dirname, "../public/advolcano-logo-transparent.png");

async function main() {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= 25 && g <= 25 && b <= 25) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(out);

  console.log(`Saved ${out} (${info.width}x${info.height})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
