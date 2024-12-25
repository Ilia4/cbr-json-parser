const axios = require('axios');

const fetchExchangeRates = async () => {
  const API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

  try {
    const response = await axios.get(API_URL);
    const rates = response.data.Valute;

    console.log("Курсы валют относительно RUB:");
    for (const [key, value] of Object.entries(rates)) {
      console.log(`${value.Name}: ${value.Value} RUB`);
    }
  } catch (error) {
    console.error("Ошибка при получении данных о курсах валют:", error);
  }
};

fetchExchangeRates();
