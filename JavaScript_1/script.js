document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault();





    const formData = new formData(this)

    emailjs.send().then(() =>
    {
    document.getElementById('response-message').innerText='mensagem enviada com sucesso!';
    this.reset();
    })
    .catch(error =>{
    document.getElementById('response-message').innerText = 'error ao enviar a mensagem';
    })

    });