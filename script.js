// Base de données des questions
const questionsData = {
    facile: [
        { q: "De quelle couleur est la bordure des mlb-bkm ?", options: ["Rouge", "Jaune", "Blanc", "Vert"], correct: 2 },
        { q: "Quel signal de rassemblement est exécuté par le robot roulage lorsqu'il affiche du vert?",options:["En ligne","en carré","en étoile","en cercle"],correct:0},
        { q: "Combien de signaux de rassemblement avons-nous ?", options:["10","8","7","5"], correct: 2},
        { q: "Quel organe correspond au sens : Le goût", options:["le nez","la langue","l'oeil","la peau"], correct: 1},
        { q: "A quel écrivain associez-vous 'HISTOIRE ET JEU DE KIM' ?", options:["J.R KIPLING","C.CHAPPE","ZAMENGA","K.ANGE"], correct: 0},
        { q: "Quelle est la dernière étape pour faire un noeud?", options: ["Ganse","Etat serré","corde","boucle"], correct: 1},
        { q: "Faisant référence à l'alphabet sémaphore, quel signal de rassemblement est exécuté par la main droite en B et la main gauche en F", options:["En ligne","En cercle","En carré","En étoile"], correct: 0},
        { q: "Faisant référence à l'alphabet sémaphore, quel signal de rassemblement est exécuté par la main droite D et la main gauche en repos", options:["En ligne","En cercle","En carré","En étoile"], correct:1},
        { q: "Lors de quelle leçon de Mulumba-Bakoma la route de Mitiyana-Ibambi, ya Mulumba Joyce Sala conseillera aux K.A de toujours avoir un programme de sa journée", options:["L'affiche","L'heure","Le bricolage","Code morse"], correct:1},
        { q: "Comment appelle t on celui qui appose des affiches",options:["Affichiste","Affichette","Afficheur","Pancarte"], correct:2},
        { q: "Quel est moyen de rassemblement intru", options:["sifflet","battement des mains","code morse","Tam-Tam"],correct:2},
        { q: "Combien avons-nous de sorte de cirage", options:["1","2","3","4"], correct:1},
        { q: "Quel nombre correspond aux signes directionnels",options:["14","15","12","51","13"], correct:0},
        { q: "Intersection des routes?",options:["Troittoir","Carrefour","Macadam","Passerelle"],correct:1},
        { q: "Lequel n'est pas un noeud de bout",options:["Noeud simple","Noeud en huit","Noeud de capucin","Noeud de batelier"],correct:3},
        
    ],
    moyen: [
        { q: "Quelle notation correspond à la pratique du jeu de Kim", options:["ABC","AS","ADPA","KA"], correct:2},
        { q: "Quelle lettre introduit le 4e groupe du sémaphore", options:["T","A","O","N"], correct: 0},
        { q: "Quel signal de rassemblement est l'équivalent de R au Semaphore", options:["En ligne","En carré","En cercle","En étoile"], correct:1},
        { q: "Quelle signal de rassemblement est excuté lors du feu de camp dans une COVA", options:["en ligne","en carré", "en cercle","en étoile"], correct:3},
        { q: "Quel est le matériel intru ", options: ["Stylo","Crayon","Ordinateur","Latte"], correct:2},
        { q: "Quel signal de rassemblement fait CR7 lors de sa celebration",options:["En ligne","En carré","En demi-cercle","En cercle"], correct:2},
        { q: "Comment appelle t on le trou dans le haut d'une aiguille par lequel on passe le fil", options:["Chas","Chat","Boutonnière","Trou"], correct:0},
        { q: "Quel signal de service dans le code morse qui fait savoir aux initiés que ya BKM Ange KIZEMBA est en détresse?",options:["SAZ","SOS","RAS","RAT"],correct:1},
        { q: "Quelle lettre introduit le 6e groupe du SEMAPHORE?",options:["A","J","T","W"],correct:3},
        { q: "Quelle matériel n'est pas utilisé lors de la 3e leçon mlb-bkm", options:["Fil","Bouton","Gomme","Ciseaux"],correct:2},
        { q: "Dans quel OV peut on mettre la chanson 'LIYA COCO'",options:["OV1","OV2","OV3","OV4"], correct:0},
        { q: "Quelle formation n'est pas assurée par les mlb-bkm", options:["Intellectuelle","technique","doctrinale","Secourisme"], correct:2},
        { q: "Lequel d'entre eux était le fils d'un sergent irlandais?",options:["Lurgan", "KIM","Kbl","Joyce"],correct:1},
        { q: "Quel le point commun entre les panneaux de signalisation routière de service et d'interduction",options:["dessin","bordure","forme","couleur"], correct:2},
        { q: "En quelle année a été inventé le code morse?",options:["1894","1832","1987","1456"], correct:1},
    ],
    difficile: [
        { q: "Parmis les 8 Séminariste, lequel fut le tout premier mulumba de la paroisse Saint Laurent?",options:["E.EYENGA","L.SANTEDI","G.TAMFUMU","D.AMBANGITO"],correct:2},
        { q: "Le 25 décembre 1763, dans quelle ville naquît Claude CHAPPE ?", options:["ANNECY","BRULON","DIJON","LYON"], correct:1},
        { q: "Quel américain inventa le fer à repasser en 1882?", options:["H.SEELEY","T.Edison","E.WITNEY","C.CHAPPE"], correct: 0},
        { q: "Horloge de petite taille fonctionnant à l'aide d'un pandule",options:["Pendulette","Horloge","Chono","Pendule"], correct:0},
        { q: "Quel martyr était le fils du grand guerrier nommé Namujulirwa",options:["B.SERUKUMA","E.KINWA","C.HUTERF","C.CHAPPE"],correct:0},
        { q: "En quelle année a été inventé la 1er montre bracelet par Louis CARTIER",options:["1904","1987","2001","1989"],correct:0},
        { q: "En quelle année a été inventé le bouton pression par Bertel SANDERS", options:["1904","1987","2001","1885"], correct:3},
        { q: "Quel scarf du groupe KA a le même initiales que de par sa couleur que le drapeau du DCMP",options:["Ass","CP","MKS","LWG"],correct:1},
        { q: "Quel ancien Mulumba de la paroisse Sainte Marie-Goretti fut composé l'hymne des KA?",options:["J.MAZEBO","A.MANSUA","G.KOKO","L.KANIKI"],correct:1},
        { q: "Quel était le prénom saint MULUMBA?", options:["Jean-Baptiste","Matthias","Jude","Jean"],correct:1},
        { q: "Quel noeud sert à attacher une corde à un arbre ou un piquet?",options:["Noeud de Batelier","Noeud en huit","Noeud simple","Noeud de chaise simple"], correct:0},
        { q: "Quelle signe de piste interdit aux initiés (KA) de placer différents signes dans un trajet plus ou moins droit", options:["Chemin à suivre","chemin barré","Signe interrompus sur 200 pas","Danger"],correct:2},
        { q: "Par qui fut créé le semaphore maritime en 1806",options:["C.CHAPPE","L.JACOB","D.JURDVIC","J.BILONGO"], correct: 1},
        { q: "Combien de signe comprend l'alphabet semaphore", options:["28","10","26","38"], correct:0},
        { q: "Main droite en F, main gauche en G,",options :["W","X","Z","J"], correct:2},
    ]
};

let niveauActuel = 'facile';
let indexQuestion = 0;
let scoreNiveau = 0;
let utilisateur = {};
let tempsRestant = 10; 
let intervalle;

// 1. Démarrage du Quiz
document.getElementById('quiz-form').onsubmit = (e) => {
    e.preventDefault();
    utilisateur.prenom = document.getElementById('prenom').value;
    
    document.getElementById('form-container').classList.add('cache');
    document.getElementById('quiz-container').classList.remove('cache');
    document.getElementById('salutation').innerText = `SALAMU, ya ${utilisateur.prenom}`;
    
    chargerQuestion();
};

// 2. Gestion du Chronomètre
function lancerChrono() {
    clearInterval(intervalle); 
    tempsRestant = 10;
    
    const bar = document.getElementById('timer-bar');
    const secondesSpan = document.getElementById('secondes');
    
    secondesSpan.innerText = tempsRestant;
    bar.style.transition = "none"; 
    bar.style.width = "100%";
    bar.style.backgroundColor = "red";

    setTimeout(() => {
        bar.style.transition = "width 1s linear";
    }, 50);

    intervalle = setInterval(() => {
        tempsRestant--;
        secondesSpan.innerText = tempsRestant;
        bar.style.width = (tempsRestant / 10 * 100) + "%";

        // Alerte visuelle quand il reste peu de temps
        if (tempsRestant <= 4) {
            bar.style.backgroundColor = "#ff9900"; 
        }

        if (tempsRestant <= 0) {
            clearInterval(intervalle);
            validerReponse(-1); // -1 signifie "aucune réponse choisie"
        }
    }, 1000);
}

// 3. Affichage de la Question
function chargerQuestion() {
    const q = questionsData[niveauActuel][indexQuestion];
    
    // Sécurité si on arrive au bout des questions disponibles
    if (!q) {
        afficherResultatNiveau();
        return;
    }

    document.getElementById('question-texte').innerText = q.q;
    document.getElementById('compteur').innerText = `Question ${indexQuestion + 1} / 15`;
    
    const container = document.getElementById('options-container');
    container.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = "btn-outline";
        btn.innerText = opt;
        btn.onclick = () => validerReponse(i);
        container.appendChild(btn);
    });

    lancerChrono(); 
}

// 4. Validation de la réponse
function validerReponse(choix) {
    clearInterval(intervalle); // Arrêt immédiat du chrono au clic

    if (choix === questionsData[niveauActuel][indexQuestion].correct) {
        scoreNiveau++;
    }

    indexQuestion++;

    // On passe à la suite si on a encore des questions (max 15 par niveau)
    if (indexQuestion < 15 && indexQuestion < questionsData[niveauActuel].length) {
        setTimeout(chargerQuestion, 300); // Petit délai pour le confort visuel
    } else {
        afficherResultatNiveau();
    }
}

// 5. Affichage des résultats
function afficherResultatNiveau() {
    clearInterval(intervalle);
    document.getElementById('quiz-container').classList.add('cache');
    document.getElementById('result-container').classList.remove('cache');
    document.getElementById('score-val').innerText = scoreNiveau;

    const btnSuivant = document.getElementById('btn-suivant');
    
    if (scoreNiveau >= 10) {
        if (niveauActuel !== 'difficile') {
            btnSuivant.classList.remove('cache');
            document.getElementById('message-final').innerText = "Félicitations ! Tu as validé ce niveau.";
        } else {
            document.getElementById('message-final').innerText = "INCROYABLE ! Tu as terminé tout le quiz !";
        }
    } else {
        btnSuivant.classList.add('cache');
        document.getElementById('message-final').innerText = "Score insuffisant (min. 10/15). Recommence pour progresser.";
    }
}

// 6. Changement de niveau
function passerAuNiveauSuivant() {
    if (niveauActuel === 'facile') niveauActuel = 'moyen';
    else if (niveauActuel === 'moyen') niveauActuel = 'difficile';
    
    indexQuestion = 0;
    scoreNiveau = 0;
    document.getElementById('niveau-badge').innerText = `NIVEAU : ${niveauActuel.toUpperCase()}`;
    document.getElementById('result-container').classList.add('cache');
    document.getElementById('quiz-container').classList.remove('cache');
    
    chargerQuestion();

}
