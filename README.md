
# URL Shortner

This is a simple URL shortener built with Node.js express framework using Typescript and mongodb.  The application allows users to shorten URLs, making it easier to share links with others.


## Features

- Shorten URLs to make them easier to share
- Track clicks on shortened URLs
- View a list of all shortened URLs and their click counts



## Installation

Install URL_Shortner_Application with npm

```bash
1.npm install URL_Shortner_Application
  cd URL_Shortner_Application
```
```bash
2.Clone the repository:
  npm install
```
```bash
3.Set up your MongoDB database and update the config.js file with your database details.
```
```bash
4.Start the Server
  npm start
```

## Usage/Examples

```bash
To shorten a URL, make a POST request to the /shorten endpoint with the url parameter:
```
```bash
POST /shorten?url=https://example.com/page
```
The server will respond with a JSON object containing the shortened URL:

```bash
{
  "original_url": "https://example.com/page",
  "short_url": "https://yourdomain.com/abc123"
}
```
To access the original URL, simply visit the shortened URL in your web browser.

You can also view a list of all shortened URLs by visiting the /api/urls endpoint:

```bash
GET /api/urls
```
This will return a JSON object containing an array of all shortened URLs and their click counts:

```bash
[  {    "original_url": "https://example.com/page1",    "short_url": "https://yourdomain.com/def456",    "clicks": 5  },  {    "original_url": "https://example.com/page2",    "short_url": "https://yourdomain.com/ghi789",    "clicks": 3  }]
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

