var RD = document.getElementById("RB");
var RSS = document.getElementById("HYT");
RD.addEventListener("click",function(){
    var DM = new XMLHttpRequest();
DM.open('GET','/users.json');
DM.onload = function(){
    var HM = JSON.parse(DM.responseText);
    //document.write(HM[0].SubjectName);
    //RSS.innerHTML = HM[0].SubjectName ;
    addHTML(HM);
};
DM.send();
});

// var bttn = document.getElementById("Clique");
// bttn.addEventListener("click" , function(){
//     event.preventDefault();
//     var xReq = new XMLHttpRequest();
//     xReq.open('GET',)
function addHTML(data){
    var PAUSE = "";
    for(i = 0 ; i< data.length ; i++){
        PAUSE += "<tr>" + "<td>" + data[i].dateExpose + "</td>"  +
                 "<td>"+data[i].sujet + "</td>"  +
                 "<td>"+ data[i].lien + "</td>"+
                 "<td>"+ data[i].membres+"</td>"+"</tr>";
    }
    RSS.insertAdjacentHTML('beforeend',PAUSE);
    RD.classList.add("PU");
}
//////////////////////////////////////////////////////////////////////Search Section//////////////////////////////////
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("HYT");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



