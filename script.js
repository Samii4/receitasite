function showRecipe(id) {
            const recipes = document.querySelectorAll('.recipe-details');
            recipes.forEach(r => r.style.display = 'none');
            document.getElementById(id).style.display = 'block';
        }

        showRecipe('r1'); 