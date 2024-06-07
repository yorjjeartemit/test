function sendMessage(event) {
    event.preventDefault();
    getData();
}

async function getData() {
    let userData = document.querySelector('.input').value.trim();
    if(userData == "") return false;

    let API = "sk-proj-1Ghvjypzxrbq8pCI4VFST3BlbkFJHHj3w7CJxh5KMgZBLJmj"

    try {
        let response = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo-instructі",
                messages: [{role: "user", content: userData}],
                max_tokens: 100,
                temperature: 0.7,
                n: 1,


            })
        })

        let data = await response.json();
        console.log(data)
    } catch(error) {
        console.log("Error: ", error)
    }
}
