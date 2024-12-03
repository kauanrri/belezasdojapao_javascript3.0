
    const button = document.getElementById("toggleButton");
    const hiddenText = document.getElementById("hiddenText");

    button.addEventListener("click", () => {
      if (hiddenText.style.display === "none") {
        hiddenText.style.display = "inline";
        button.textContent = "Mostrar menos"; 
      } else {
        hiddenText.style.display = "none"; 
        button.textContent = "Mostrar mais"; 
      }
    })


      
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      const closeModal = document.getElementById('closeModal');
      const galleryImages = document.querySelectorAll('.gallery img');
  
      
      galleryImages.forEach((img) => {
        img.addEventListener('click', () => {
          modal.style.display = 'flex'; 
          modalImage.src = img.src; 
        });
      });
  
      
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; 
      });
  
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });

      function verSenha(){
        let senha = document.getElementById("senha1")
        let btsenha = document.getElementById("btsenha")
        if (senha.type == "password"){
            senha.type = "text"
            btsenha.innerHTML = "Desver"
        } 
        else{
            senha.type = "password"
            btsenha.innerHTML = "Ver"
        } 
    }