const generateu = document.getElementById("generate") as HTMLDivElement;

// const moulteDiv = document.createElement('p');
// moulteDiv.textContent = `prout ${i}`;
// generateu.append(moulteDiv);

for (let i: number = 0; i<3; i++) {
    const moulteDiv : HTMLElement = document.createElement('p');
    moulteDiv.textContent = `prout ${i}`;
    generateu.append(moulteDiv);
}