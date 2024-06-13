function sendMessage(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput');
    const messageContainer = document.getElementById('messages');

    if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.textContent = userInput.value;
        userMessage.style.background = '#40414F';
        userMessage.style.color = '#ECECF1';
        userMessage.style.padding = '10px';
        userMessage.style.margin = '10px 0';
        userMessage.style.borderRadius = '5px';
        userMessage.style.textAlign = 'left';
        messageContainer.appendChild(userMessage);

        // Check for predefined questions and provide responses
        let botResponse = '';
        const lowerCaseInput = userInput.value.trim().toLowerCase();

        if (lowerCaseInput === 'що таке гугл' || lowerCaseInput === 'що таке google') {
            botResponse = 'Google - це всесвітньо відома пошукова система, розроблена компанією Google LLC.';
        } else if (lowerCaseInput === 'як зварити яйце') {
            botResponse = 'Щоб зварити яйце: 1. Помістіть яйце в каструлю. 2. Наповніть каструлю водою, щоб яйце було повністю покрите. 3. Доведіть воду до кипіння. 4. Зменшіть вогонь і варіть 8-10 хвилин. 5. Вийміть яйце і охолодіть у холодній воді.';
        } else if (lowerCaseInput === 'як була написана ця програма') {
            botResponse = 'Ця програма була написана в програмі Visual Studio Code з допомогою HTML CSS та JavaScript.';
        } else if (lowerCaseInput === 'скільки людей живе на землі') {
            botResponse = 'На землі живе 8 мільярдів осіб.';
        } else if (lowerCaseInput === 'які перспективи чекають на цю програму в майбутньому') {
            botResponse = 'В майбутньому планується покращення цієї програми до справжнього штучного інтелекту.';
        } else if (lowerCaseInput === 'на які питання ти можеш відповісти') {
            botResponse = 'Я можу відповісти на такі питання: що таке гугл; як зварити яйце; як була написана ця програма; Скільки людей живе на землі; які перспективи чекають на цю програму в майбутньому.';
        } else {
            botResponse = 'This is a simulated response. Your message was: ' + userInput.value;
        }

        const botMessage = document.createElement('div');
        botMessage.textContent = botResponse;
        botMessage.style.background = '#575a6c';
        botMessage.style.color = '#ECECF1';
        botMessage.style.padding = '10px';
        botMessage.style.margin = '10px 0';
        botMessage.style.borderRadius = '5px';
        botMessage.style.textAlign = 'right';
        messageContainer.appendChild(botMessage);

        // Clear the input field
        userInput.value = '';

        // Scroll to the bottom of the messages container
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}
