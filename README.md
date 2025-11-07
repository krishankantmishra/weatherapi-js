# 🌦️ Weather Forecast App

A beautiful and responsive **Weather App** built using **HTML**, **Tailwind CSS**, and **JavaScript**.  
It fetches **real-time weather**, **humidity**, and **air quality** data based on the city name entered by the user — powered by the **Open-Meteo API**.

---

## 🚀 Features

- 🌍 Search any city to get live weather updates
- 🌡️ Shows current **temperature** and **weather condition**
- 💧 Displays **humidity** percentage
- 🌫️ Shows **Air Quality Index (AQI)** with color-coded categories
- 🎨 Responsive and modern UI built using **Tailwind CSS**
- ⚡ Real-time API data fetching using **JavaScript (Fetch API)**

---

## 🧩 Tech Stack

| Technology           | Purpose                                |
| -------------------- | -------------------------------------- |
| **HTML5**            | Structure of the app                   |
| **Tailwind CSS**     | Styling and responsiveness             |
| **JavaScript (ES6)** | Logic, Fetch API, and DOM manipulation |
| **Open-Meteo API**   | Provides weather and air quality data  |

---

## 🧠 How It Works

1. The user enters a city name in the input box.
2. The app first calls the **Geocoding API** to get the latitude and longitude of the city.
3. Then it calls:
   - **Weather API** → to fetch temperature, humidity, and weather conditions.
   - **Air Quality API** → to fetch and display the air quality index (AQI).
4. The UI updates dynamically with fetched data and colors representing air quality levels.

---

## Preview

🌤️ Example Output:

**City:** Delhi  
**Temperature:** 30°C  
**Weather:** Clear Sky ☀️  
**Humidity:** 50%  
**Air Quality:** AQI: 22 (Good)

---

## 🧑‍💻 Author

**👋 Krishan Kant Mishra**  
💡 Project made for learning API integration and real-time data handling using JavaScript

---

## ⚙️ APIs Used

- [Open Meteo Weather API](https://open-meteo.com/en/docs)
- [Open Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api)
- [Open Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)

---

## 🧾 License

This project is open-source and free to use for learning and personal projects.
