
![Logo](https://www.e-infra.com/images/logo.svg)

# BACKEND API
für den DeviceManager
## Run Locally

Clone the project

```bash
https://github.com/E-Georg/ex_device-manager.git
```

Go to the project directory

```bash
  cd ex_device-manager
```

Install dependencies

```bash
  npm install
```

Start Server

```bash
  npm run dev
```


## Tech Stack
- NODE.JS
- EXPRESS.JS
- DOTENV
- MONGOOSE




## 🛠 Skills
JavaScript
## Author

- [@E-Georg](https://www.github.com/E-Georg)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3000`
`MONGO_DB_HOST="mongodb://127.0.0.1:27017"`

## API Reference

#### Check for next endDeviceId

```http
  POST /api/enddevices/check
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `customer` | `string` | **Required**. ei                  |
| `country`  | `string` | **Required**. de                  |
| `city`     | `string` | **Required**. dd                  |
| `driver`   | `string` | **Required**. lw                  |
| `type`     | `string` | **Required**. sn                  |
| `year`     | `string` | **Required**. b                   |
#### Get all endDeviceId

```http
  GET /api/enddevices
```

#### Create new endDeviceId

```http
  POST /api/enddevices
```

| Parameter     | Type     | Description                            |
| :------------ | :------- | :------------------------------------- |
| `customer`    | `string` | **Required**. ei                       |
| `country`     | `string` | **Required**. de                       |
| `city`        | `string` | **Required**. dd                       |
| `driver`      | `string` | **Required**. lw                       |
| `type`        | `string` | **Required**. sn                       |
| `year`        | `string` | **Required**. b                        |
| `amount`      | `number` | **Required**. 10001                    |
| `endDeviceId` | `string` | **Required**. ei-de-dd-lw-sn-b10001    |

