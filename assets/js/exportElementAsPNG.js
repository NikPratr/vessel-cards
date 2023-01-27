const exportElementAsImage = async () => {

    const canvas = await html2canvas( document.getElementById('card') );
    const image = canvas.toDataURL( 'image/png', 1.0 ).replace("image/png");
    const a = document.createElement('a');
    a.href = image;
    a.download = 'vessel-card.png';
    a.click();

};

const saveBtn = document.getElementById('save-btn');

if (saveBtn) {
    saveBtn.onclick = exportElementAsImage;
}
