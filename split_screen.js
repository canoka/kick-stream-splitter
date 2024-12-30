// URL parametrelerini al
const params = new URLSearchParams(window.location.search);

// IFrame kaynaklarını ayarla
document.getElementById('stream1').src = params.get('stream1');
document.getElementById('stream2').src = params.get('stream2');
