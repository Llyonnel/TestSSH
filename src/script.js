var generateu = document.getElementById("generate");
// const moulteDiv = document.createElement('p');
// moulteDiv.textContent = `prout ${i}`;
// generateu.append(moulteDiv);
for (var i = 0; i < 3; i++) {
    var moulteDiv = document.createElement('p');
    moulteDiv.textContent = "prout ".concat(i);
    generateu.append(moulteDiv);
}
