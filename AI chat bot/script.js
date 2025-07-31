document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');

    btn.addEventListener('click', async (e) => {
        e.preventDefault();

        const input = document.getElementById('userinput').value.trim();
        const messageContainer = document.getElementById('message-content2');
        
        if (input) {

            const newDiv = document.createElement('div');
            newDiv.className = 'usermsg';
            newDiv.textContent = input;
            messageContainer.appendChild(newDiv);
            document.getElementById('userinput').value = '';

            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'loading';
            loadingDiv.textContent = '...';
            messageContainer.appendChild(loadingDiv);

            const response = await generateContent(input);
            messageContainer.removeChild(loadingDiv);
            if (response) {
                const replyDiv = document.createElement('div');
                replyDiv.className = 'usermsg'; 
                replyDiv.textContent = response;
                messageContainer.appendChild(replyDiv);
            }
        }
    });

    async function generateContent(prompt) {
        try {
            const response = await fetch(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAs1xbBVVcn25erWy0hGF49ScJtQ79y9W4',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    { text: prompt },
                                ],
                            },
                        ],
                    }),
                }
            );

            const data = await response.json();
            console.log(data)
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from API.";
        } catch (error) {
            return "Something went wrong!";
        }
    }
});
