document.getElementById('openStreams').addEventListener('click', () => {
    const stream1 = document.getElementById('stream1').value;
    const stream2 = document.getElementById('stream2').value;
  
    if (stream1 && stream2) {
      const splitScreenUrl = chrome.runtime.getURL('split_screen.html') + 
        `?stream1=${encodeURIComponent(stream1)}&stream2=${encodeURIComponent(stream2)}`;
      chrome.tabs.create({ url: splitScreenUrl });
    } else {
      alert("Lütfen iki yayınında URL'lerini giriniz");
    }
  });
  