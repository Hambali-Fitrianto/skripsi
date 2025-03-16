$(document).ready(function() {
    loadGallery();
    loadFileList();
    
    // Cek mode dark/light dari localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        $("body").addClass("dark-mode");
        $("#toggleMode").text("☀️ Light Mode");
    }

    // Toggle Mode (Dark/Light)
    $("#toggleMode").click(function() {
        $("body").toggleClass("dark-mode");
        
        if ($("body").hasClass("dark-mode")) {
            $("#toggleMode").text("☀️ Light Mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            $("#toggleMode").text("🌙 Dark Mode");
            localStorage.removeItem("dark-mode");
        }
    });
});

// Fungsi untuk memuat galeri foto
function loadGallery() {
    const photoGallery = $("#photoGallery");

    const photos = [
        { name: "Proposal Seminar", path: "img/seminar-proposal.jpg" },
        { name: "Thesis Guidance in Lecturer Room", path: "img/bimbingan-skripsi-dan-mbkm-riset-di-ruang-dosen.jpg" },
        { name: "Thesis Guidance in Classroom", path: "img/bimbingan-skripsi-dan-mbkm-riset-di-ruang-kelas.jpg" },
        { name: "Mbkm Partner", path: "img/dua-teman-mbkm-riset.jpg" },
        { name: "Completed Thesis Exam", path: "img/selesai-sidang-taman-kampus.jpg" }
    ];

    photos.forEach((photo, index) => {
        const galleryItem = `
            <div class="gallery-item" style="opacity: 0; transform: translateY(20px);">
                <img src="${photo.path}" alt="${photo.name}">
                <div class="overlay">${photo.name}</div>
            </div>
        `;
        photoGallery.append(galleryItem);

        // Efek animasi fade-in
        setTimeout(() => {
            $(".gallery-item").eq(index).css({ opacity: 1, transform: "translateY(0)" });
        }, 100 * index);
    });
}

// Fungsi untuk memuat daftar file
function loadFileList() {
    const fileList = $("#fileList");
    fileList.html(""); // Bersihkan isi sebelum memuat file

    const files = [
        { name: "Thesis (Word)", path: "files/word-skripsi.docx", icon: "fas fa-file-word" },
        { name: "Thesis (PDF)", path: "files/pdf-skripsi.pdf", icon: "fas fa-file-pdf" },
        { name: "Thesis Proposal (PPT)", path: "files/ppt-proposal-skripsi.pptx", icon: "fas fa-file-powerpoint" },
        { name: "Thesis Presentation (PPT)", path: "files/ppt-skripsi.pptx", icon: "fas fa-file-powerpoint" },
        { name: "Manual Calculation (Excel)", path: "files/perhitungan-manual.xlsx", icon: "fas fa-file-excel" }
    ];

    if (files.length === 0) {
        fileList.html("<p class='text-muted'>No files available.</p>");
        return;
    }

    let fileGrid = `<div class="file-grid">`;
    files.forEach((file, index) => {
        fileGrid += `
            <div class="file-item" style="opacity: 0; transform: translateY(10px);">
                <i class="${file.icon}"></i>
                <a href="${file.path}" target="_blank">${file.name}</a>
            </div>
        `;
    });
    fileGrid += `</div>`;

    fileList.append(fileGrid);

    // Efek animasi fade-in untuk file list
    $(".file-item").each((index, item) => {
        setTimeout(() => {
            $(item).css({ opacity: 1, transform: "translateY(0)" });
        }, 150 * index);
    });
}

