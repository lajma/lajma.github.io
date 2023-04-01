// Récupère la barre de recherche
const rechercheInput = document.getElementById('recherche');

// Récupère toutes les lignes de membres
const lignesMembres = document.querySelectorAll('.ligne-membre');
const listeMembres = document.querySelector('#liste-membres');

// Fonction pour filtrer les membres en fonction de la recherche
const filtrerMembres = () => {
    const termeRecherche = rechercheInput.value.toLowerCase();
    if (termeRecherche === '') { // si la recherche est vide, masquer la liste de membres
      listeMembres.style.display = 'none';
    } else { // sinon, filtrer les membres
      lignesMembres.forEach(ligne => {
        const nom = ligne.querySelector('h2').textContent.toLowerCase();
        if (nom.includes(termeRecherche)) {
          listeMembres.style.display = 'block';
          ligne.style.display = 'flex';
        } else {
          ligne.style.display = 'none';
        }
      });
    }
  };
  

// Écouteur d'événements pour la barre de recherche
rechercheInput.addEventListener('input', filtrerMembres);


