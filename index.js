document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const dogName = document.getElementById('dogName').value;
        const dogBreed = document.getElementById('dogBreed').value;
        
        const formData = {
            dogName: dogName,
            dogBreed: dogBreed
        };
        
        const url = 'http://localhost:3000/dogs'; 
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        };
        
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log('New dog:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
