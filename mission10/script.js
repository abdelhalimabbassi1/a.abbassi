//Abdelhalim ABBASSI
document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("#facture-table tbody");
    const btnAjouter = document.querySelector("#ajouter-ligne");
    const btnCalculer = document.querySelector("#calculer");
    const btnRemplir = document.querySelector("#remplir-auto");
    const sousTotalElement = document.querySelector("#sous-total");
    const totalGeneralElement = document.querySelector("#total-general");
    const remiseInput = document.querySelector("#remise");
    const taxeInput = document.querySelector("#taxe");
    const fraisExpeditionInput = document.querySelector("#frais-expedition");

    // Ajouter une nouvelle ligne
    btnAjouter.addEventListener("click", () => {
        const ligneModele = document.querySelector(".ligne-modele");
        const nouvelleLigne = ligneModele.cloneNode(true);
        nouvelleLigne.querySelector(".total-ligne").textContent = "0";
        table.appendChild(nouvelleLigne);
    });

    // Calculer les totaux
    btnCalculer.addEventListener("click", () => {
        let sousTotal = 0;

        document.querySelectorAll("#facture-table tbody tr").forEach(ligne => {
            const qte = parseInt(ligne.querySelector(".qte").value) || 0;
            const prix = parseFloat(ligne.querySelector(".prix").value) || 0;
            const totalLigne = qte * prix;
            ligne.querySelector(".total-ligne").textContent = totalLigne.toFixed(2);
            sousTotal += totalLigne;
        });

        const remise = parseFloat(remiseInput.value) / 100 || 0;
        const taxe = parseFloat(taxeInput.value) / 100 || 0;
        const fraisExpedition = parseFloat(fraisExpeditionInput.value) || 0;

        const sousTotalMoinsRemise = sousTotal - (sousTotal * remise);
        const taxeTotale = sousTotalMoinsRemise * taxe;
        const totalGeneral = sousTotalMoinsRemise + taxeTotale + fraisExpedition;

        sousTotalElement.textContent = sousTotal.toFixed(2);
        totalGeneralElement.textContent = totalGeneral.toFixed(2);
    });

    // Remplir automatiquement les lignes
    btnRemplir.addEventListener("click", () => {
        const descriptions = ["Produit A", "Produit B", "Produit C"];
        document.querySelectorAll("#facture-table tbody tr").forEach(ligne => {
            const desc = descriptions[Math.floor(Math.random() * descriptions.length)];
            const qte = Math.floor(Math.random() * 10) + 1;
            const prix = (Math.random() * 100).toFixed(2);
            ligne.querySelector(".desc").value = desc;
            ligne.querySelector(".qte").value = qte;
            ligne.querySelector(".prix").value = prix;
        });
    });
});