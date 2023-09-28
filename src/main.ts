import QRCode, { QRCodeMaskPattern, QRCodeToBufferOptions } from 'qrcode';
import { getStaticFile, interpolate } from './utils';

export default async ({ req, res }: any) => {
  switch (req.path) {
    case "/":
      const html = interpolate(getStaticFile("index.html"), {
        HOSTNAME: req.host,
      });
      return res.send(html, 200, { "Content-Type": "text/html; charset=utf-8" });
    
    case "/favicon.ico":
      return res.send(await QRCode.toBuffer("https://qr.ilhan.me"), 200, {
        "Content-Type": "image/png",
      });
    
    case "/qr":
      
      const dataValue = req.query.data;
      if (!dataValue) {
        return res.json({
          error: "Missing data query parameter",
        });
      }
      const data = decodeURIComponent(dataValue);

      // parse options
      let options: QRCodeToBufferOptions = {};
      const version = req.query.version;
      if (version) {
        options.version = parseInt(version);
      }
      const errorCorrectionLevel = req.query.errorCorrectionLevel;
      if (errorCorrectionLevel && ["L", "M", "Q", "H"].includes(errorCorrectionLevel)) {
        options.errorCorrectionLevel = errorCorrectionLevel;
      }
      const maskPattern = req.query.maskPattern;
      if (maskPattern && parseInt(maskPattern) >= 0 && parseInt(maskPattern) <= 7) {
        options.maskPattern = parseInt(maskPattern) as QRCodeMaskPattern;
      }
      const margin = req.query.margin;
      if (margin) {
        options.margin = parseInt(margin);
      }
      const scale = req.query.scale;
      if (scale) {
        options.scale = parseInt(scale);
      }
      const width = req.query.width;
      if (width) {
        options.width = parseInt(width);
      }
      const colorLight = req.query.colorLight;
      if (colorLight) {
        options.color = {
          light: colorLight,
        };
      }
      const colorDark = req.query.colorDark;
      if (colorDark) {
        if (!options.color) {
          options.color = {};
        }
        options.color.dark = colorDark;
      }
      const deflateLevel = req.query.deflateLevel;
      if (deflateLevel) {
        if (!options.rendererOpts) {
          options.rendererOpts = {};
        }
        options.rendererOpts.deflateLevel = parseInt(deflateLevel);
      }
      const deflateStrategy = req.query.deflateStrategy;
      if (deflateStrategy) {
        if (!options.rendererOpts) {
          options.rendererOpts = {};
        }
        options.rendererOpts.deflateStrategy = parseInt(deflateStrategy);
      }

      return res.send(await QRCode.toBuffer(data, options), 200, {
        "Content-Type": "image/png",
      });
  }
};
