/*I only use jQuery to manipulate css. It's a strange thing but I'm better like js selectors xD*/
function isRentingMachineOrTool() {
    if (document.getElementById("machine-checkbox").checked) {
        $(".machine").show();
    } else {
        $(".machine").hide();
    }
    if (document.getElementById("tool-checkbox").checked) {
        $(".tool").show();
    } else {
        $(".tool").hide();
    }
};
function changeNumberOfMachines() {
    if(document.getElementById("number-of-renting-objects-select").options.namedItem("1-renting-object").selected) {
        $(".rental-object-1").show();
        $(".rental-object-2").hide();
        $(".rental-object-3").hide();
    } else if (document.getElementById("number-of-renting-objects-select").options.namedItem("2-renting-object").selected) {
        $(".rental-object-1").show();
        $(".rental-object-2").show();
        $(".rental-object-3").hide();
    } else if (document.getElementById("number-of-renting-objects-select").options.namedItem("3-renting-object").selected) {
        $(".rental-object-1").show();
        $(".rental-object-2").show();
        $(".rental-object-3").show();
    }
};

function resetPage() {
    if(confirm('Biztosan újratöltöd a lapot? Minden beírt adat el fog veszni.')) {
        location.reload();
    }
}
  
/*At the start we must check the checkbox/radio inputs*/
$(document).ready(function() {
    isRentingMachineOrTool();
    changeNumberOfMachines();
});