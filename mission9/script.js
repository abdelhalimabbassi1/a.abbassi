//Abdelhalim abbassi
document.addEventListener("DOMContentLoaded", function () {
    const correctAnswers = {
        q1: "b", // Tunis
        q2: "a", // Dinar tunisien
        q3: "a", // Sahara
        q4: "a", // La médina de Tunis
        q5: "a", // Couscous
        q6: "a", // Carthage
        q7: "a", // 1956
        q8: "a", // Les Journées Cinématographiques de Carthage
        q9: "b", // Arabe
        q10: "a", // Djerba
    };

    const correctButton = document.getElementById("correct");
    const showAnswersButton = document.getElementById("show-answers");
    const validateButton = document.getElementById("validate-quiz");
    const cancelButton = document.getElementById("cancel-quiz");
    const resultDisplay = document.getElementById("result");


    // Fonction pour afficher le corrigé en bas de la page
    showAnswersButton.addEventListener("click", function () {
        const correctionContainer = document.createElement("div");
        correctionContainer.id = "correction-container";
        correctionContainer.innerHTML = "<h3>Corrigé :</h3>";

        // Générer le corrigé
        let correctionText = "";
        Object.keys(correctAnswers).forEach(question => {
            correctionText += `<p><strong>Question ${question.slice(1)} :</strong> Réponse correcte : ${correctAnswers[question]}</p>`;
        });

        // Ajouter le corrigé dans le conteneur
        correctionContainer.innerHTML += correctionText;

        // Vérifier si le corrigé est déjà affiché, si oui, ne pas le réafficher
        const existingCorrection = document.getElementById("correction-container");
        if (existingCorrection) {
            existingCorrection.remove();
        }

        // Ajouter le corrigé à la page
        document.querySelector("main").appendChild(correctionContainer);
    });

    // Fonction pour valider le quiz
    validateButton.addEventListener("click", function () {
        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;

        Object.keys(correctAnswers).forEach(question => {
            const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
            if (userAnswer && userAnswer.value === correctAnswers[question]) {
                score++;
            }
        });

        alert(`Quiz terminé. Votre score final est de ${score} / ${totalQuestions}.`);
    });

    // Fonction pour annuler le quiz
    cancelButton.addEventListener("click", function () {
        const form = document.getElementById("quiz-form");
        form.reset(); // Réinitialise toutes les cases cochées
        resultDisplay.textContent = ""; // Supprime le score affiché
        alert("Quiz annulé. Toutes les réponses ont été réinitialisées.");
    });
});