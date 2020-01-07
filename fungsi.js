

    function tambah () {
        var bil1 = parseFloat(document.getElementById('bil1').value);
        var bil2 = parseFloat(document.getElementById('bil2').value);
        var hasil = document.getElementById('hasil');  
        var total = bil1 + bil2; 
        hasil.value = total;
    } 
    
    function kurang () {
        var bil1 = parseFloat(document.getElementById('bil1').value);
        var bil2 = parseFloat(document.getElementById('bil2').value);
        var hasil = document.getElementById('hasil');   
        
        var total = bil1 - bil2; 
        hasil.value = total;
    }    

    function kali () {
        var bil1 = parseFloat(document.getElementById('bil1').value);
        var bil2 = parseFloat(document.getElementById('bil2').value);
        var hasil = document.getElementById('hasil');   
        
        var total = bil1 * bil2; 
        hasil.value = total;
    }

    function bagi () {
        var bil1 = parseFloat(document.getElementById('bil1').value);
        var bil2 = parseFloat(document.getElementById('bil2').value);
        var hasil = document.getElementById('hasil');   
        
        var total = bil1 / bil2; 
        hasil.value = total;
    }

   
    
