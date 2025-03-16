document.addEventListener('DOMContentLoaded', function() {
    loadFiles();
    loadGallery();
    setupDarkMode();
});

function loadFiles() {
    const fileList = document.getElementById('fileList');

    const files = [
        { name: 'Word, Thesis.docx', path: 'files/word-skripsi.docx' },
        { name: 'Pdf, Thesis.pdf', path: 'files/pdf-skripsi.pdf' },
        { name: 'PPT, Thesis Proposal.pptx', path: 'files/ppt-proposal-skripsi.pptx' },
        { name: 'PPT, Thesis.pptx', path: 'files/ppt-skripsi.pptx' },
        { name: 'Manual Calculation.xlsx', path: 'files/perhitungan-manual.xlsx' }
    ];

    files.forEach(file => {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        const card = document.createElement('div');
        card.className = 'card shadow-sm mb-4 text-center';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const icon = document.createElement('i');
        icon.className = "fas fa-file-alt fa-3x text-primary";
        cardBody.appendChild(icon);

        const title = document.createElement('h6');
        title.textContent = file.name;
        title.className = 'mt-2';
        cardBody.appendChild(title);

        const link = document.createElement('a');
        link.href = file.path;
        link.textContent = "Download";
        link.className = "btn btn-outline-primary btn-sm";
        link.target = '_blank';
        cardBody.appendChild(link);

        card.appendChild(cardBody);
        col.appendChild(card);
        fileList.appendChild(col);
    });
}

function loadGallery() {
    const photoGallery = document.getElementById('photoGallery');

    const photos = [
        { name: 'Proposal Seminar', path: 'img/seminar-proposal.jpg' },
        { name: 'Thesis Guidance and Mbkm Research', path: 'img/bimbingan-skripsi-dan-mbkm-riset-di-ruang-dosen.jpg' },
        { name: 'Mbkm Partner', path: 'img/dua-teman-mbkm-riset.jpg' },
        { name: 'Completed Thesis Exam', path: 'img/selesai-sidang-taman-kampus.jpg' }
    ];

    photos.forEach(photo => {
        const col = document.createElement('div');
        col.className = 'col-md-3';

        const card = document.createElement('div');
        card.className = 'card shadow-sm';

        const img = document.createElement('img');
        img.src = photo.path;
        img.alt = photo.name;
        img.className = 'card-img-top';

        card.appendChild(img);
        col.appendChild(card);
        photoGallery.appendChild(col);
    });
}

function setupDarkMode() {
    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}
