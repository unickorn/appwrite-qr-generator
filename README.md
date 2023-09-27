# ⚡ Appwrite - QRCode Function

A simple Appwrite function that generates QR codes.

## 🧰 Usage

### GET /qr

- Returns a QR code in base64 image format.

**Parameters**
| Parameter | Description | Type |
| --- | --- | --- |
| `data` | The data to be encoded in the QR code. | String |
| `version` | The version of the QR code. | Integer between 1 and 40 |
| `errorCorrectionLevel` | The error correction level of the QR code. Higher = larger image, less data stored, but devices can read it more easily without errors. | `L`, `M`, `Q`, or `H` |
| `maskPattern` | The mask pattern of the QR code. | Integer between 0 and 7 |
| `margin` | The margin of the QR code. | Integer |
| `scale` | The scale of the QR code. | Integer |
| `width` | The width of the QR code. | Integer |
| `colorLight` | The color of the light modules in the QR code. | Valid CSS color string |
| `colorDark` | The color of the dark modules in the QR code. | Valid CSS color string |
| `deflateLevel` | The deflate level of the QR code. | Integer between 0 and 9 |
| `deflateStrategy` | The deflate strategy of the QR code. | Integer between 0 and 3 |

Note that the `data` parameter is required, and all other parameters are optional.

**Response**

Sample `200` Response:

![qr.png](https://6514462118257ac57fe9.appwrite.global/qr?data=https%3A%2F%2F6514462118257ac57fe9.appwrite.global/)

### GET /
- Returns an HTML website for generating QR codes.

## ⚙️ Configuration

| Setting           | Value         |
| ----------------- | ------------- |
| Runtime           | Bun (1.0)     |
| Entrypoint        | `src/main.ts` |
| Build Commands    | `bun install` |
| Permissions       | `any`         |
| Timeout (Seconds) | 15            |

## 🔒 Environment Variables

No environment variables required.
