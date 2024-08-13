

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'fec81a5f0040b8594d6103727ecaa662';  // Замените на ваш ключ API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.cod === 200) {
                document.getElementById('cityName').innerText = data.name;
                document.getElementById('temperature').innerText = `Температура: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Описание: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Влажность: ${data.main.humidity}%`;
            } else {
                alert('Город не найден!');
            }
        })
        .catch(error => console.log('Ошибка:', error));
});
