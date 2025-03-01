function groupAnimals(animals) {
    animals.sort();
    let hasil = [];

    for ( let animal of animals) {
        let HurufAwal = animal[0];
        let ditemukan = false;
    
    for ( let kelompok of hasil) {
        if (kelompok[0][0] === HurufAwal) {
            kelompok.push(animal);
            ditemukan = true;
            break;
        }
    }
        if (!ditemukan) {
            hasil.push([animal]);
        }
    }
    return hasil; 
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] 