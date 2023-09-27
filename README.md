# ⚡ Appwrite - QRCode Function

A simple Appwrite function that generates QR codes.

## 🧰 Usage

### GET /qr

- Returns a QR code in base64 image format.

**Parameters**
| Parameter | Description | Type |
| --- | --- | --- |
| `data` | The data to be encoded in the QR code. | String |
| `type` | The MIME type of the image to be returned. | `image/png`, `image/jpeg`, or `image/webp` |
| `quality` | The quality of the image to be returned. | Number between 0 and 1 |
| `version` | The version of the QR code. | Integer between 1 and 40 |
| `errorCorrectionLevel` | The error correction level of the QR code. Higher = larger image, less data stored, but devices can read it more easily without errors. | `L`, `M`, `Q`, or `H` |
| `maskPattern` | The mask pattern of the QR code. | Integer between 0 and 7 |
| `margin` | The margin of the QR code. | Integer |
| `scale` | The scale of the QR code. | Integer |
| `width` | The width of the QR code. | Integer |
| `colorLight` | The color of the light modules in the QR code. | Valid CSS color string |
| `colorDark` | The color of the dark modules in the QR code. | Valid CSS color string |

Note that the `data` parameter is required, and all other parameters are optional.

**Response**

Sample `200` Response:

```text
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKySURBVO3BQW7sWAwEwUxC979yjZdcPUCQur/NYYT5wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw+pfFMSOpUuCXeodEnoVL4pCU8Ua5RijVKsUS5eloQ3qdyh0iWhU+mScEcS3qTypmKNUqxRijXKxYep3JGEN6mcqHRJuEPljiR8UrFGKdYoxRrl4o9LwonK/0mxRinWKMUa5eKPUzlJwonKJMUapVijFGuUiw9Lwicl4Q6VNyXhNynWKMUapVijXLxM5ZtUuiR0Kl0SOpU7VH6zYo1SrFGKNYr5wSAqXRI6lZMk/GXFGqVYoxRrFPODB1S6JJyofFIS7lA5ScKJSpeETuWOJDxRrFGKNUqxRjE/eJHKSRI6lS4J36RyRxJOVLokfFOxRinWKMUa5eIhlSeS0Kk8kYQ7ktCpvEnljiQ8UaxRijVKsUYxP/iHVE6S8ITKSRLuUDlJQqdykoQ3FWuUYo1SrFEuHlI5SUKn0iWhU+lUTpLQqXRJuEPlJAknKl0SOpVPKtYoxRqlWKNcPJSEO5JwkoQ7VLokdCp3JOEOlS4J/1KxRinWKMUa5eIhlW9KwonKSRI6lU7lJAl3qHRJ+KRijVKsUYo1ysXLkvAmlSeS0KnckYSTJHQqd6h0SXiiWKMUa5RijXLxYSp3JOGJJHQqdyShU+mS0KmcJOEkCW8q1ijFGqVYo1wMo9IloVO5IwknSehUOpUuCZ9UrFGKNUqxRrn445LQqZwk4Q6VO5LQqXQqJ0l4olijFGuUYo1y8WFJ+EtUTpLQqXQq/1KxRinWKMUa5eJlKt+k0iWhUzlJQpeEO5LwmxRrlGKNUqxRzA/WGMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRvkPFKMC/AUpUj4AAAAASUVORK5CYII=
```

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
