function dataHandling2(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    
    console.log(input);

    let tanggal = input[3].split("/");
    
    let bulan = parseInt(tanggal[1]);
    
    let namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    console.log(namaBulan[bulan - 1]);
    
    console.log([tanggal[2], tanggal[0], tanggal[1]]);
    
    
    console.log(tanggal.join("-"));
    
    console.log(input[1].slice(0, 15));
}

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
