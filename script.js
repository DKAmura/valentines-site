// Function to open the letter and play audio
function openLetter() {
    const envelope = document.querySelector('.envelope');
    const letter = document.getElementById('letter');
    const audio = document.getElementById('coverAudio');
  
    // Hide the envelope, show the letter
    envelope.style.display = 'none';  
    letter.style.display = 'block';
  
    // Play the cover audio
    audio.play().catch(error => {
      console.log('Audio play failed:', error);
    });
  }
  