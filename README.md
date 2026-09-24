# Weather Update SPA
A responsive **Single-Page Application (SPA) built with React.js** that allows users to search for a city or location and view current weather information. Use your skills

The application integrates with a **weather API** to retrieve live weather data and displays key weather conditions such as **temperature, humidity, and wind speed** through a clean and user-friendly interface.

---

## Project Overview

The Weather Update SPA demonstrates how a React application can communicate with an external REST API and dynamically update the user interface based on API responses.

Users can enter a city or location, and the application retrieves the corresponding weather information without requiring a full page reload.

The project demonstrates practical experience with **React.js, JavaScript, API integration, asynchronous requests, state management, responsive web design, and environment variables**.

---

## Features
- Search weather information by city or location.
- Retrieve current weather data from an external weather API
- Display temperature, humidity, and wind speed
- Dynamically update weather information based on user searches
- Responsive design for desktop and mobile devices
- Single-Page Application experience
- Clean and easy-to-use interface
- API key configuration using environment variables.

--- 

## Technology Stack
| Area | Technologies |
|---|---|
| Frontend | React.js |
| Programming | JavaScript |
| Styling | HTML5, CSS3 |
| API Integration | REST API |
| Package Management | npm |
| Configuration | Environment Variables |

---

## Application Flow
```text
User
  ↓
Enter City / Location
  ↓
React Application
  ↓
Weather API Request
  ↓
Weather API
  ↓
JSON Response
  ↓
React State Update
  ↓
Weather Information Displayed
```
---

## Weather Information
The application displays current weather details such as:
- Temperature
- Humidity
- Wind speed
- Location information

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/weather-update-spa.git
```

### 2. Navigate to the Project

```bash
cd weather-update-spa
```

### 3. Install Dependencies

```bash
npm install
```
---

## API Configuration
The application requires an API key from the weather API provider.
### 1. Get an API Key

Create an account with the weather API provider used by this project and generate an API key.

### 2. Create an Environment File

Create a `.env` file in the root directory of the project.

```text
.env
```

### 3. Add the API Key

Add the required API key variable to the `.env` file according to the variable name used by the application.

For example:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

> Do not commit your real API key to GitHub. Add `.env` to `.gitignore`.

---
## Run the application
Start the development server:
```bash
npm start
```

The application will open in your browser.

You can then:

1. Enter a city or location.
2. Submit the search.
3. The application sends a request to the weather API.
4. Weather data is returned as a response.
5. React updates the page with the current weather information.

---


## Screenshot

![Screen Shot 2024-07-02 at 1 26 27 PM](https://github.com/sr2498/Weather_Update/assets/134464080/0b27f2e2-9d2f-4eca-a067-a45d3468dbc2)

