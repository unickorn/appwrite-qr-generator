import QRCode, { QRCodeMaskPattern, QRCodeToBufferOptions, QRCodeToDataURLOptions, QRCodeToDataURLOptionsJpegWebp } from 'qrcode';
import { getStaticFile, interpolate } from './utils';

export default async ({ req, res, log, error }: any) => {
  // Endpoint with form for OG image URL generation
  if (req.path === "/") {
    const html = interpolate(getStaticFile("index.html"), {
      HOSTNAME: req.host,
    });
    return res.send(html, 200, { "Content-Type": "text/html; charset=utf-8" });
  }
  if (req.path === "/favicon.ico") {
    // redirect to https://qr.ilhan.me/qr?data=https%3A%2F%2Fqr.ilhan.me
    return res.redirect(302, "/qr?data=https%3A%2F%2Fqr.ilhan.me");
  }
  if (req.path === "/qr") {
    // parse options
    const dataValue = req.query.data;
    if (!dataValue) {
      return res.json({
        error: "Missing data query parameter",
      });
    }
    const data = decodeURIComponent(dataValue);

    // parse the type first
    let options: QRCodeToBufferOptions = {};

    const version = req.query.version;
    if (version) {
      options.version = parseInt(version);
    }

    const errorCorrectionLevel = req.query.errorCorrectionLevel;
    if (errorCorrectionLevel) {
      if (!["L", "M", "Q", "H"].includes(errorCorrectionLevel)) {
        return res.json({
          error: "errorCorrectionLevel must be one of L, M, Q, H",
        });
      }
      options.errorCorrectionLevel = errorCorrectionLevel;
    }

    const maskPattern = req.query.maskPattern;
    if (maskPattern) {
      let maskPatternInt = parseInt(maskPattern);
      if (maskPatternInt < 0 || maskPatternInt > 7) {
        return res.json({
          error: "maskPattern must be between 0 and 7",
        });
      }
      options.maskPattern = maskPatternInt as QRCodeMaskPattern;
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

    // return as png bytes
    const pngBytes = await QRCode.toBuffer(data, options);
    return res.send(pngBytes, 200, {
      "Content-Type": "image/png",
    });
  }
};
