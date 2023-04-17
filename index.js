const downloadCV = document.createElement('button');
downloadCV.innerText = 'CV';
downloadCV.addEventListener('click', function() {
    window.open(`${document.querySelectorAll('.payment__resume-example--iframe iframe')[0].src}`);
});
document.body.append(downloadCV);

downloadCV.click();
