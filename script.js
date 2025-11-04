// Recipe data
        const recipes = [
            {
                id: 1,
                title: "Avocado & Chickpea Smash",
                icon: "fas fa-avocado",
                time: "10 minutes",
                difficulty: "Easy",
                badge: "Chef's Pick",
                categories: ["vegetarian", "gluten-free", "dairy-free"],
                dietaryTags: ["Vegetarian", "Gluten-Free Option", "Dairy-Free"],
                region: "mediterranean",
                image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "1 ripe avocado",
                    "1/2 can chickpeas, rinsed and drained",
                    "1 tbsp lemon juice",
                    "1 tbsp extra virgin olive oil",
                    "Salt and pepper to taste",
                    "Pinch of smoked paprika (optional)",
                    "2 slices of whole-grain bread, toasted"
                ],
                instructions: [
                    "In a medium bowl, add the chickpeas and roughly mash them with a fork.",
                    "Halve the avocado, remove the pit, and scoop the flesh into the bowl.",
                    "Add lemon juice, olive oil, salt, pepper, and paprika if using.",
                    "Mash everything together until combined but still chunky.",
                    "Taste and adjust seasoning.",
                    "Spread generously on toasted bread."
                ],
                variations: [
                    "<strong>For kids:</strong> Serve with whole-grain crackers instead of toast.",
                    "<strong>Gluten-free:</strong> Use gluten-free bread or rice cakes.",
                    "<strong>Extra protein:</strong> Add a tablespoon of Greek yogurt or tahini."
                ]
            },
            {
                id: 2,
                title: "Apple \"Cookies\"",
                icon: "fas fa-apple-alt",
                time: "5 minutes",
                difficulty: "Very Easy",
                badge: "Kid Favorite",
                categories: ["vegan", "gluten-free", "no-added-sugar", "kid-friendly"],
                dietaryTags: ["Vegan Option", "Gluten-Free", "No Added Sugar"],
                region: "american",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "2 crisp apples (like Honeycrisp or Fuji)",
                    "2 tbsp nut or seed butter (peanut, almond, or sunflower)",
                    "2 tbsp mixed toppings: chopped nuts, seeds, coconut flakes, dark chocolate chips",
                    "Pinch of cinnamon (optional)"
                ],
                instructions: [
                    "Wash and dry the apples. Slice them horizontally into 1/2-inch thick rounds.",
                    "Use a small knife or apple corer to remove the seeds from the center of each slice.",
                    "Spread each apple round with a thin layer of nut butter.",
                    "Sprinkle with your choice of toppings and a pinch of cinnamon if desired.",
                    "Serve immediately."
                ],
                variations: [
                    "<strong>For kids:</strong> Use peanut butter and mini chocolate chips.",
                    "<strong>Nut-free:</strong> Use sunflower seed butter and seed toppings.",
                    "<strong>Extra fancy:</strong> Drizzle with a tiny bit of honey or maple syrup."
                ]
            },
            {
                id: 3,
                title: "Mediterranean Cucumber Boats",
                icon: "fas fa-seedling",
                time: "15 minutes",
                difficulty: "Easy",
                badge: "Low-Carb",
                categories: ["vegetarian", "gluten-free", "low-carb"],
                dietaryTags: ["Vegetarian", "Gluten-Free", "Low-Carb"],
                region: "mediterranean",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "1 large English cucumber",
                    "1/2 cup cherry tomatoes, diced",
                    "1/4 cup crumbled feta cheese",
                    "2 tbsp chopped Kalamata olives",
                    "1 tbsp extra virgin olive oil",
                    "1 tsp lemon juice",
                    "1 tbsp fresh dill or parsley, chopped",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Cut the cucumber in half lengthwise. Use a small spoon to scoop out some of the seeds, creating a \"boat\".",
                    "In a small bowl, mix together the tomatoes, feta, olives, olive oil, lemon juice, and herbs.",
                    "Season with salt and pepper to taste.",
                    "Spoon the mixture into the cucumber boats.",
                    "Slice each half into 2-3 pieces for easy serving."
                ],
                variations: [
                    "<strong>Vegan:</strong> Omit feta or use vegan feta alternative.",
                    "<strong>Extra protein:</strong> Add 1/4 cup cooked quinoa or chickpeas to the filling.",
                    "<strong>For kids:</strong> Use milder cheese like mozzarella and skip the olives."
                ]
            },
            {
                id: 4,
                title: "5-Minute Microwave Egg Cups",
                icon: "fas fa-egg",
                time: "5 minutes",
                difficulty: "Very Easy",
                badge: "High-Protein",
                categories: ["gluten-free", "high-protein", "low-carb"],
                dietaryTags: ["Gluten-Free", "High-Protein", "Low-Carb"],
                region: "american",
                image: "https://images.unsplash.com/photo-1598214887285-504f9045e06b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "2 large eggs",
                    "1 tbsp milk or water",
                    "2 tbsp chopped vegetables (bell pepper, spinach, mushrooms)",
                    "1 tbsp shredded cheese (cheddar, mozzarella, or feta)",
                    "Pinch of salt and pepper",
                    "Cooking spray or oil"
                ],
                instructions: [
                    "Lightly grease a microwave-safe mug or small bowl with cooking spray.",
                    "Crack the eggs into the mug, add milk, and whisk with a fork.",
                    "Stir in the vegetables, cheese, salt, and pepper.",
                    "Microwave on high for 1 minute. Stir, then microwave for another 30-60 seconds until eggs are set.",
                    "Let stand for 1 minute before eating."
                ],
                variations: [
                    "<strong>Dairy-free:</strong> Omit cheese and use water instead of milk.",
                    "<strong>For kids:</strong> Use mild cheese and finely chopped veggies.",
                    "<strong>Extra flavor:</strong> Add a pinch of herbs like chives or parsley."
                ]
            },
            {
                id: 5,
                title: "3-Ingredient Banana Oat Cookies",
                icon: "fas fa-cookie",
                time: "15 minutes",
                difficulty: "Easy",
                badge: "Vegan",
                categories: ["vegan", "gluten-free", "no-added-sugar", "kid-friendly"],
                dietaryTags: ["Vegan", "Gluten-Free Option", "No Added Sugar"],
                region: "american",
                image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "2 ripe bananas, mashed",
                    "1 cup rolled oats",
                    "1/4 cup mix-ins: chocolate chips, nuts, or dried fruit",
                    "Pinch of cinnamon (optional)"
                ],
                instructions: [
                    "Preheat oven to 350°F (175°C). Line a baking sheet with parchment paper.",
                    "In a bowl, mash the bananas until smooth.",
                    "Stir in the oats and your choice of mix-ins until well combined.",
                    "Drop tablespoon-sized portions onto the baking sheet and flatten slightly.",
                    "Bake for 12-15 minutes until edges are golden.",
                    "Let cool for a few minutes before serving."
                ],
                variations: [
                    "<strong>Gluten-free:</strong> Use certified gluten-free oats.",
                    "<strong>For kids:</strong> Use mini chocolate chips as mix-ins.",
                    "<strong>Extra protein:</strong> Add a scoop of protein powder or 2 tbsp of nut butter."
                ]
            },
            {
                id: 6,
                title: "Rainbow Veggie Wraps",
                icon: "fas fa-carrot",
                time: "10 minutes",
                difficulty: "Easy",
                badge: "Family Favorite",
                categories: ["vegetarian", "vegan", "gluten-free", "kid-friendly"],
                dietaryTags: ["Vegetarian", "Vegan Option", "Gluten-Free Option"],
                region: "american",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "2 large whole-wheat tortillas or wraps",
                    "1/4 cup hummus or cream cheese",
                    "1/2 cup mixed julienned vegetables (carrots, bell peppers, cucumber)",
                    "Handful of spinach or lettuce",
                    "1/4 avocado, sliced",
                    "Optional: sprouts, shredded cabbage, fresh herbs"
                ],
                instructions: [
                    "Lay the tortillas flat on a clean surface.",
                    "Spread a thin layer of hummus or cream cheese over each tortilla, leaving a 1-inch border.",
                    "Layer the vegetables, spinach, and avocado in the center of each tortilla.",
                    "Fold in the sides, then tightly roll from the bottom up.",
                    "Slice in half diagonally and serve immediately."
                ],
                variations: [
                    "<strong>Gluten-free:</strong> Use gluten-free wraps or large lettuce leaves.",
                    "<strong>Vegan:</strong> Use hummus instead of cream cheese.",
                    "<strong>Extra protein:</strong> Add sliced turkey, chicken, or tofu."
                ]
            },
            {
                id: 7,
                title: "Japanese Onigiri",
                icon: "fas fa-rice",
                time: "15 minutes",
                difficulty: "Easy",
                badge: "Asian Classic",
                categories: ["vegetarian", "gluten-free"],
                dietaryTags: ["Vegetarian", "Gluten-Free"],
                region: "asian",
                image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "2 cups cooked Japanese short-grain rice",
                    "1 tbsp rice vinegar",
                    "1 tsp sugar",
                    "1 tsp salt",
                    "Fillings: tuna mayo, pickled plum, or salmon",
                    "Nori seaweed sheets, cut into strips"
                ],
                instructions: [
                    "Mix rice vinegar, sugar, and salt in a small bowl.",
                    "Add the mixture to warm cooked rice and mix gently.",
                    "Wet your hands with water and rub with salt.",
                    "Take a handful of rice, make an indentation, add filling, and shape into a triangle.",
                    "Wrap with a strip of nori seaweed.",
                    "Serve immediately or wrap for later."
                ],
                variations: [
                    "<strong>Vegan:</strong> Use pickled plum or vegetable fillings.",
                    "<strong>For kids:</strong> Use simple fillings like plain tuna or cheese.",
                    "<strong>Extra flavor:</strong> Sprinkle with sesame seeds or furikake."
                ]
            },
            {
                id: 8,
                title: "Mexican Street Corn Salad",
                icon: "fas fa-corn",
                time: "12 minutes",
                difficulty: "Easy",
                badge: "Mexican Favorite",
                categories: ["vegetarian", "gluten-free"],
                dietaryTags: ["Vegetarian", "Gluten-Free"],
                region: "mexican",
                image: "https://images.unsplash.com/photo-1570194065650-2f276eef1f4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "2 cups corn kernels (fresh, frozen, or canned)",
                    "1/4 cup mayonnaise",
                    "2 tbsp sour cream or Greek yogurt",
                    "1/4 cup crumbled cotija or feta cheese",
                    "1 tbsp lime juice",
                    "1/2 tsp chili powder",
                    "2 tbsp chopped cilantro",
                    "Salt to taste"
                ],
                instructions: [
                    "If using fresh corn, cook for 3-4 minutes until tender. Frozen corn should be thawed.",
                    "In a medium bowl, mix mayonnaise, sour cream, lime juice, and chili powder.",
                    "Add corn, cheese, and cilantro to the bowl. Mix well.",
                    "Season with salt to taste.",
                    "Serve immediately as a dip or side dish."
                ],
                variations: [
                    "<strong>Vegan:</strong> Use vegan mayo and skip the cheese.",
                    "<strong>Spicy:</strong> Add chopped jalapeño or hot sauce.",
                    "<strong>Extra protein:</strong> Add black beans or grilled chicken."
                ]
            },
            {
                id: 9,
                title: "Italian Bruschetta",
                icon: "fas fa-bread-slice",
                time: "10 minutes",
                difficulty: "Easy",
                badge: "Italian Classic",
                categories: ["vegetarian", "vegan"],
                dietaryTags: ["Vegetarian", "Vegan Option"],
                region: "mediterranean",
                image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "4 slices crusty bread",
                    "2 large tomatoes, diced",
                    "2 cloves garlic, minced",
                    "1/4 cup fresh basil, chopped",
                    "2 tbsp extra virgin olive oil",
                    "1 tbsp balsamic vinegar",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Toast the bread slices until golden and crisp.",
                    "In a bowl, combine tomatoes, garlic, basil, olive oil, and balsamic vinegar.",
                    "Season with salt and pepper to taste.",
                    "Let the mixture sit for 5 minutes to allow flavors to meld.",
                    "Spoon the tomato mixture onto the toasted bread slices.",
                    "Serve immediately."
                ],
                variations: [
                    "<strong>Extra flavor:</strong> Rub toasted bread with a garlic clove before adding topping.",
                    "<strong>Protein boost:</strong> Add mozzarella cheese or white beans.",
                    "<strong>For kids:</strong> Use milder cherry tomatoes and less garlic."
                ]
            },
            {
                id: 10,
                title: "Indian Spiced Chickpeas",
                icon: "fas fa-mortar-pestle",
                time: "8 minutes",
                difficulty: "Easy",
                badge: "Indian Spice",
                categories: ["vegan", "gluten-free", "high-protein"],
                dietaryTags: ["Vegan", "Gluten-Free", "High-Protein"],
                region: "indian",
                image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "1 can chickpeas, rinsed and drained",
                    "1 tbsp olive oil",
                    "1 tsp cumin seeds",
                    "1/2 tsp turmeric powder",
                    "1/2 tsp garam masala",
                    "1/4 tsp chili powder (optional)",
                    "Salt to taste",
                    "Fresh cilantro for garnish"
                ],
                instructions: [
                    "Heat oil in a pan over medium heat.",
                    "Add cumin seeds and cook until they sizzle.",
                    "Add chickpeas and all spices. Stir to coat evenly.",
                    "Cook for 5-6 minutes, stirring occasionally.",
                    "Season with salt to taste.",
                    "Garnish with fresh cilantro and serve warm."
                ],
                variations: [
                    "<strong>Extra creamy:</strong> Add 2 tbsp coconut milk or yogurt.",
                    "<strong>For kids:</strong> Reduce or omit chili powder.",
                    "<strong>Complete meal:</strong> Serve over rice or with naan bread."
                ]
            },
            {
                id: 11,
                title: "Chocolate Avocado Mousse",
                icon: "fas fa-blender",
                time: "10 minutes",
                difficulty: "Easy",
                badge: "Healthy Dessert",
                categories: ["vegan", "gluten-free", "no-added-sugar", "dessert"],
                dietaryTags: ["Vegan", "Gluten-Free", "No Added Sugar", "Dessert"],
                region: "american",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "2 ripe avocados",
                    "1/4 cup cocoa powder",
                    "1/4 cup maple syrup or honey",
                    "1 tsp vanilla extract",
                    "Pinch of salt",
                    "Optional toppings: berries, chopped nuts, coconut flakes"
                ],
                instructions: [
                    "Cut the avocados in half, remove the pits, and scoop the flesh into a blender or food processor.",
                    "Add cocoa powder, maple syrup, vanilla extract, and salt.",
                    "Blend until completely smooth and creamy.",
                    "Taste and adjust sweetness if needed.",
                    "Chill for at least 30 minutes before serving.",
                    "Top with your favorite toppings before serving."
                ],
                variations: [
                    "<strong>For kids:</strong> Add a tablespoon of peanut butter for extra flavor.",
                    "<strong>Extra rich:</strong> Use dark cocoa powder for a deeper chocolate flavor.",
                    "<strong>Mint chocolate:</strong> Add 1/4 tsp peppermint extract."
                ]
            },
            {
                id: 12,
                title: "Berry Yogurt Parfait",
                icon: "fas fa-layer-group",
                time: "5 minutes",
                difficulty: "Very Easy",
                badge: "Protein Packed",
                categories: ["vegetarian", "gluten-free", "high-protein", "dessert", "kid-friendly"],
                dietaryTags: ["Vegetarian", "Gluten-Free", "High-Protein", "Dessert", "Kid-Friendly"],
                region: "american",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "1 cup Greek yogurt",
                    "1/2 cup mixed berries (fresh or frozen)",
                    "2 tbsp granola",
                    "1 tbsp honey or maple syrup",
                    "Optional: chia seeds, flax seeds, or nuts"
                ],
                instructions: [
                    "In a glass or bowl, layer half of the yogurt.",
                    "Add a layer of mixed berries.",
                    "Top with the remaining yogurt.",
                    "Sprinkle with granola and drizzle with honey.",
                    "Add optional seeds or nuts if using.",
                    "Serve immediately or chill until ready to eat."
                ],
                variations: [
                    "<strong>Vegan:</strong> Use plant-based yogurt and maple syrup.",
                    "<strong>For kids:</strong> Use sweeter berries like strawberries and add mini chocolate chips.",
                    "<strong>Tropical:</strong> Use mango, pineapple, and coconut flakes instead of berries."
                ]
            },
            {
                id: 13,
                title: "No-Bake Energy Bites",
                icon: "fas fa-battery-full",
                time: "15 minutes",
                difficulty: "Easy",
                badge: "On-the-Go",
                categories: ["vegan", "gluten-free", "no-added-sugar", "dessert"],
                dietaryTags: ["Vegan", "Gluten-Free", "No Added Sugar", "Dessert"],
                region: "american",
                image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "1 cup rolled oats",
                    "1/2 cup nut or seed butter",
                    "1/3 cup honey or maple syrup",
                    "1/2 cup mix-ins (chocolate chips, dried fruit, nuts)",
                    "1 tbsp chia seeds or flax seeds",
                    "1 tsp vanilla extract",
                    "Pinch of salt"
                ],
                instructions: [
                    "In a medium bowl, combine all ingredients.",
                    "Mix well until everything is evenly distributed.",
                    "Chill the mixture in the refrigerator for 30 minutes.",
                    "Roll into 1-inch balls.",
                    "Store in an airtight container in the refrigerator.",
                    "Enjoy as a quick snack or dessert!"
                ],
                variations: [
                    "<strong>Chocolate coconut:</strong> Add cocoa powder and shredded coconut.",
                    "<strong>Protein boost:</strong> Add a scoop of protein powder.",
                    "<strong>For kids:</strong> Use mini chocolate chips and sweetened dried cranberries."
                ]
            },
            {
                id: 14,
                title: "Frozen Banana Bites",
                icon: "fas fa-snowflake",
                time: "10 minutes",
                difficulty: "Very Easy",
                badge: "Kid Favorite",
                categories: ["vegan", "gluten-free", "dessert", "kid-friendly"],
                dietaryTags: ["Vegan", "Gluten-Free", "Dessert", "Kid-Friendly"],
                region: "american",
                image: "https://images.unsplash.com/photo-1603052875180-8d8d769203a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                ingredients: [
                    "2 ripe bananas",
                    "1/2 cup chocolate chips",
                    "1 tsp coconut oil",
                    "Optional toppings: chopped nuts, shredded coconut, sprinkles"
                ],
                instructions: [
                    "Slice bananas into 1/2-inch thick rounds.",
                    "Place on a parchment-lined baking sheet and freeze for 1 hour.",
                    "Melt chocolate chips with coconut oil in the microwave or double boiler.",
                    "Dip each frozen banana slice in melted chocolate.",
                    "Sprinkle with toppings if desired.",
                    "Return to freezer until chocolate is set (about 15 minutes).",
                    "Store in an airtight container in the freezer."
                ],
                variations: [
                    "<strong>Peanut butter:</strong> Spread a thin layer of peanut butter on banana slices before dipping in chocolate.",
                    "<strong>White chocolate:</strong> Use white chocolate chips instead of dark chocolate.",
                    "<strong>For parties:</strong> Use colorful sprinkles for a festive look."
                ]
            }
        ];

        // Regional data
        const regions = [
            {
                id: "mediterranean",
                name: "Mediterranean",
                flag: "🏺",
                description: "Fresh, vibrant flavors from Southern Europe",
                color: "#3498DB"
            },
            {
                id: "american",
                name: "American",
                flag: "🍔",
                description: "Classic comfort foods with a healthy twist",
                color: "#E74C3C"
            },
            {
                id: "asian",
                name: "Asian",
                flag: "🍜",
                description: "Quick bites inspired by East Asian cuisine",
                color: "#F1C40F"
            },
            {
                id: "mexican",
                name: "Mexican",
                flag: "🌮",
                description: "Bold, zesty flavors from south of the border",
                color: "#27AE60"
            },
            {
                id: "indian",
                name: "Indian",
                flag: "🍛",
                description: "Aromatic spices and vibrant vegetarian options",
                color: "#E67E22"
            }
        ];

        // Reviews data
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        // Favorites management
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Function to save favorites to localStorage
        function saveFavorites() {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        // Function to save reviews to localStorage
        function saveReviews() {
            localStorage.setItem('reviews', JSON.stringify(reviews));
        }

        // Function to check if a recipe is favorited
        function isFavorited(recipeId) {
            return favorites.includes(recipeId);
        }

        // Function to toggle favorite status
        function toggleFavorite(recipeId) {
            if (isFavorited(recipeId)) {
                favorites = favorites.filter(id => id !== recipeId);
            } else {
                favorites.push(recipeId);
            }
            saveFavorites();
            renderRecipes();
            renderFavorites();
            renderRegionalRecipes();
        }

        // Function to toggle recipe expansion
        function toggleRecipeExpansion(recipeId) {
            const recipeCard = document.querySelector(`.recipe-card[data-recipe-id="${recipeId}"]`);
            const isExpanded = recipeCard.classList.contains('expanded');
            
            // Collapse all expanded recipes first
            document.querySelectorAll('.recipe-card.expanded').forEach(card => {
                card.classList.remove('expanded');
            });
            
            // If the clicked recipe wasn't already expanded, expand it
            if (!isExpanded) {
                recipeCard.classList.add('expanded');
                
                // Scroll to the expanded recipe
                recipeCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // Function to create recipe card HTML
        function createRecipeCard(recipe) {
            const isFav = isFavorited(recipe.id);
            const recipeReviews = reviews.filter(review => review.recipeId === recipe.id);
            const averageRating = recipeReviews.length > 0 
                ? (recipeReviews.reduce((sum, review) => sum + review.rating, 0) / recipeReviews.length).toFixed(1)
                : 0;
            
            return `
                <div class="recipe-card" data-recipe-id="${recipe.id}" data-categories="${recipe.categories.join(' ')}">
                    <div class="recipe-image" style="background-image: url('${recipe.image}');">
                        <div class="recipe-badge">${recipe.badge}</div>
                    </div>
                    <div class="recipe-content">
                        <h2 class="recipe-title"><i class="${recipe.icon}"></i> ${recipe.title}</h2>
                        <div class="recipe-meta">
                            <div class="time"><i class="far fa-clock"></i> ${recipe.time}</div>
                            <div class="difficulty"><i class="fas fa-signal"></i> ${recipe.difficulty}</div>
                        </div>
                        <div class="dietary-tags">
                            ${recipe.dietaryTags.map(tag => `<span class="dietary-tag">${tag}</span>`).join('')}
                        </div>
                        <div class="ingredients">
                            <h3><i class="fas fa-list"></i> Ingredients</h3>
                            <ul>
                                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="instructions">
                            <h3><i class="fas fa-mortar-pestle"></i> Instructions</h3>
                            <ol>
                                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                            </ol>
                        </div>
                        <div class="variations">
                            <h3><i class="fas fa-exchange-alt"></i> Variations & Substitutions</h3>
                            ${recipe.variations.map(variation => `<p>${variation}</p>`).join('')}
                        </div>
                        
                        <div class="recipe-reviews">
                            <h3><i class="fas fa-star"></i> Reviews</h3>
                            ${recipeReviews.length > 0 ? `
                                <div class="review-summary">
                                    <div class="average-rating">${averageRating}</div>
                                    <div>
                                        <div class="review-stars">${getStarRating(averageRating)}</div>
                                        <div class="rating-count">${recipeReviews.length} review${recipeReviews.length !== 1 ? 's' : ''}</div>
                                    </div>
                                </div>
                                <div class="reviews-list">
                                    ${recipeReviews.slice(0, 2).map(review => `
                                        <div class="review-card">
                                            <div class="review-header">
                                                <div class="reviewer-name">${review.name}</div>
                                                <div class="review-date">${formatDate(review.date)}</div>
                                            </div>
                                            <div class="review-stars">${getStarRating(review.rating)}</div>
                                            <div class="review-text">${review.text}</div>
                                        </div>
                                    `).join('')}
                                </div>
                                ${recipeReviews.length > 2 ? `<p><a href="#" class="view-all-reviews" data-recipe-id="${recipe.id}">View all ${recipeReviews.length} reviews</a></p>` : ''}
                            ` : `
                                <p>No reviews yet. Be the first to review this recipe!</p>
                            `}
                        </div>
                        
                        <button class="btn btn-view-recipe" data-recipe-id="${recipe.id}">
                            <i class="fas fa-book-open"></i> View Full Recipe
                        </button>
                        <div class="recipe-actions">
                            <button class="btn btn-primary save-recipe-btn" data-recipe-id="${recipe.id}">
                                <i class="${isFav ? 'fas' : 'far'} fa-heart"></i> ${isFav ? 'Saved' : 'Save Recipe'}
                            </button>
                            <button class="btn btn-secondary print-recipe-btn"><i class="fas fa-print"></i> Print</button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Function to get star rating HTML
        function getStarRating(rating) {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
            
            return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
        }

        // Function to format date
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }

        // Function to render regional recipes
        function renderRegionalRecipes() {
            const regionsGrid = document.getElementById('regionsGrid');
            
            if (!regionsGrid) return;
            
            regionsGrid.innerHTML = regions.map(region => {
                const regionRecipes = recipes.filter(recipe => recipe.region === region.id);
                
                return `
                    <div class="region-card">
                        <div class="region-header" style="background: linear-gradient(135deg, ${region.color}, ${region.color}99)">
                            <div class="region-flag">${region.flag}</div>
                            <h3>${region.name}</h3>
                            <p>${region.description}</p>
                        </div>
                        <div class="region-recipes">
                            ${regionRecipes.map(recipe => `
                                <div class="region-recipe-item">
                                    <a href="#" class="view-recipe-link" data-recipe-id="${recipe.id}">
                                        ${recipe.title}
                                    </a>
                                    <span class="recipe-time">${recipe.time}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('');
            
            // Attach event listeners to regional recipe links
            document.querySelectorAll('.view-recipe-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const recipeId = parseInt(this.getAttribute('data-recipe-id'));
                    
                    // Show recipes page and expand the selected recipe
                    showPage('recipes');
                    
                    // Wait for recipes to render, then expand the selected one
                    setTimeout(() => {
                        const recipeCard = document.querySelector(`.recipe-card[data-recipe-id="${recipeId}"]`);
                        if (recipeCard) {
                            toggleRecipeExpansion(recipeId);
                            const viewButton = recipeCard.querySelector('.btn-view-recipe');
                            viewButton.innerHTML = '<i class="fas fa-times"></i> Close Recipe';
                        }
                    }, 100);
                });
            });
        }

        // Function to render recipes
        function renderRecipes() {
            const recipesContainer = document.getElementById('recipesContainer');
            const allRecipesContainer = document.getElementById('allRecipesContainer');
            
            if (recipesContainer) {
                recipesContainer.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');
            }
            
            if (allRecipesContainer) {
                allRecipesContainer.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');
            }
            
            // Re-attach event listeners
            attachEventListeners();
        }

        // Function to render reviews
        function renderReviews() {
            const reviewsList = document.getElementById('reviewsList');
            
            if (!reviewsList) return;
            
            if (reviews.length === 0) {
                reviewsList.innerHTML = `
                    <div class="no-reviews">
                        <i class="far fa-star"></i>
                        <h3>No reviews yet</h3>
                        <p>Be the first to share your experience with our recipes!</p>
                    </div>
                `;
            } else {
                reviewsList.innerHTML = reviews.map(review => {
                    const recipe = recipes.find(r => r.id === review.recipeId);
                    return `
                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-name">${review.name}</div>
                                <div class="review-date">${formatDate(review.date)}</div>
                            </div>
                            <div class="review-stars">${getStarRating(review.rating)}</div>
                            <div class="review-text">${review.text}</div>
                            <div style="margin-top: 0.5rem; font-style: italic;">
                                Review for: <a href="#" class="view-recipe-link" data-recipe-id="${review.recipeId}">${recipe ? recipe.title : 'Unknown Recipe'}</a>
                            </div>
                        </div>
                    `;
                }).join('');
                
                // Attach event listeners to recipe links in reviews
                document.querySelectorAll('.view-recipe-link').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const recipeId = parseInt(this.getAttribute('data-recipe-id'));
                        
                        // Show recipes page and expand the selected recipe
                        showPage('recipes');
                        
                        // Wait for recipes to render, then expand the selected one
                        setTimeout(() => {
                            const recipeCard = document.querySelector(`.recipe-card[data-recipe-id="${recipeId}"]`);
                            if (recipeCard) {
                                toggleRecipeExpansion(recipeId);
                                const viewButton = recipeCard.querySelector('.btn-view-recipe');
                                viewButton.innerHTML = '<i class="fas fa-times"></i> Close Recipe';
                            }
                        }, 100);
                    });
                });
            }
        }

        // Function to populate recipe dropdown
        function populateRecipeDropdown() {
            const recipeSelect = document.getElementById('reviewRecipe');
            if (!recipeSelect) return;
            
            recipeSelect.innerHTML = '<option value="">Choose a recipe...</option>' +
                recipes.map(recipe => `<option value="${recipe.id}">${recipe.title}</option>`).join('');
        }

        // Function to render favorites
        function renderFavorites() {
            const favoritesContainer = document.getElementById('favoritesContainer');
            
            if (!favoritesContainer) return;
            
            if (favorites.length === 0) {
                favoritesContainer.innerHTML = `
                    <div class="empty-favorites">
                        <i class="far fa-heart"></i>
                        <h3>No favorites yet</h3>
                        <p>You haven't saved any recipes to your favorites. Browse our recipes and click the heart icon to save your favorites!</p>
                        <button class="btn btn-primary" id="browseRecipesBtn">Browse Recipes</button>
                    </div>
                `;
                
                document.getElementById('browseRecipesBtn').addEventListener('click', () => {
                    showPage('recipes');
                });
            } else {
                const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));
                favoritesContainer.innerHTML = favoriteRecipes.map(recipe => createRecipeCard(recipe)).join('');
                
                // Re-attach event listeners
                attachEventListeners();
            }
        }

        // Function to show a specific page
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the selected page
            document.getElementById(`${pageId}-page`).classList.add('active');
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.nav-link[data-page="${pageId}"]`).classList.add('active');
            
            // Render content for the page
            if (pageId === 'favorites') {
                renderFavorites();
            } else if (pageId === 'recipes') {
                renderRecipes();
            } else if (pageId === 'regional') {
                renderRegionalRecipes();
            } else if (pageId === 'reviews') {
                renderReviews();
            }
            
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        }

        // Function to attach event listeners
        function attachEventListeners() {
            // Save recipe buttons
            document.querySelectorAll('.save-recipe-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const recipeId = parseInt(this.getAttribute('data-recipe-id'));
                    toggleFavorite(recipeId);
                    
                    // Show save modal if adding to favorites
                    if (!isFavorited(recipeId)) {
                        const saveModal = document.getElementById('saveModal');
                        saveModal.style.display = 'flex';
                    }
                });
            });
            
            // View full recipe buttons
            document.querySelectorAll('.btn-view-recipe').forEach(button => {
                button.addEventListener('click', function() {
                    const recipeId = parseInt(this.getAttribute('data-recipe-id'));
                    toggleRecipeExpansion(recipeId);
                    
                    // Update button text
                    const recipeCard = document.querySelector(`.recipe-card[data-recipe-id="${recipeId}"]`);
                    const isExpanded = recipeCard.classList.contains('expanded');
                    this.innerHTML = isExpanded ? 
                        '<i class="fas fa-times"></i> Close Recipe' : 
                        '<i class="fas fa-book-open"></i> View Full Recipe';
                });
            });
            
            // Print recipe buttons
            document.querySelectorAll('.print-recipe-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const printModal = document.getElementById('printModal');
                    printModal.style.display = 'flex';
                });
            });
            
            // Filter buttons
            document.querySelectorAll('.filter-btn').forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons in the same container
                    this.parentElement.querySelectorAll('.filter-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    const recipeCards = this.closest('.page-section').querySelectorAll('.recipe-card');
                    
                    // Filter recipes
                    recipeCards.forEach(card => {
                        if (filter === 'all') {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 10);
                        } else {
                            const categories = card.getAttribute('data-categories');
                            if (categories.includes(filter)) {
                                card.style.display = 'block';
                                setTimeout(() => {
                                    card.style.opacity = '1';
                                    card.style.transform = 'translateY(0)';
                                }, 10);
                            } else {
                                card.style.opacity = '0';
                                card.style.transform = 'translateY(20px)';
                                setTimeout(() => {
                                    card.style.display = 'none';
                                }, 300);
                            }
                        }
                    });
                });
            });
            
            // Star rating interaction
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                star.addEventListener('click', function() {
                    const rating = parseInt(this.getAttribute('data-rating'));
                    document.getElementById('reviewRating').value = rating;
                    
                    // Update star display
                    stars.forEach(s => {
                        if (parseInt(s.getAttribute('data-rating')) <= rating) {
                            s.classList.add('active');
                        } else {
                            s.classList.remove('active');
                        }
                    });
                });
                
                star.addEventListener('mouseover', function() {
                    const rating = parseInt(this.getAttribute('data-rating'));
                    
                    stars.forEach(s => {
                        if (parseInt(s.getAttribute('data-rating')) <= rating) {
                            s.classList.add('active');
                        } else {
                            s.classList.remove('active');
                        }
                    });
                });
            });
            
            // Reset stars when mouse leaves the rating container
            document.getElementById('starRating').addEventListener('mouseleave', function() {
                const currentRating = parseInt(document.getElementById('reviewRating').value);
                
                stars.forEach(s => {
                    if (parseInt(s.getAttribute('data-rating')) <= currentRating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
            
            // Review form submission
            document.getElementById('reviewForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const recipeId = parseInt(document.getElementById('reviewRecipe').value);
                const name = document.getElementById('reviewerName').value;
                const rating = parseInt(document.getElementById('reviewRating').value);
                const text = document.getElementById('reviewText').value;
                
                if (rating === 0) {
                    alert('Please select a rating');
                    return;
                }
                
                const newReview = {
                    id: Date.now(),
                    recipeId: recipeId,
                    name: name,
                    rating: rating,
                    text: text,
                    date: new Date().toISOString()
                };
                
                reviews.push(newReview);
                saveReviews();
                
                // Reset form
                this.reset();
                document.getElementById('reviewRating').value = 0;
                stars.forEach(s => s.classList.remove('active'));
                
                // Show success message
                alert('Thank you for your review!');
                
                // Update reviews display
                renderReviews();
                renderRecipes();
            });
            
            // View all reviews links
            document.querySelectorAll('.view-all-reviews').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const recipeId = parseInt(this.getAttribute('data-recipe-id'));
                    
                    // Show reviews page and filter by recipe
                    showPage('reviews');
                    
                    // Filter reviews by recipe
                    const recipeReviews = reviews.filter(review => review.recipeId === recipeId);
                    const reviewsList = document.getElementById('reviewsList');
                    
                    if (recipeReviews.length === 0) {
                        reviewsList.innerHTML = `
                            <div class="no-reviews">
                                <i class="far fa-star"></i>
                                <h3>No reviews yet</h3>
                                <p>Be the first to review this recipe!</p>
                            </div>
                        `;
                    } else {
                        const recipe = recipes.find(r => r.id === recipeId);
                        reviewsList.innerHTML = `
                            <h3 style="margin-bottom: 1rem;">Reviews for ${recipe ? recipe.title : 'Unknown Recipe'}</h3>
                            ${recipeReviews.map(review => `
                                <div class="review-card">
                                    <div class="review-header">
                                        <div class="reviewer-name">${review.name}</div>
                                        <div class="review-date">${formatDate(review.date)}</div>
                                    </div>
                                    <div class="review-stars">${getStarRating(review.rating)}</div>
                                    <div class="review-text">${review.text}</div>
                                </div>
                            `).join('')}
                        `;
                    }
                });
            });
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Render initial content
            renderRecipes();
            renderFavorites();
            renderRegionalRecipes();
            renderReviews();
            populateRecipeDropdown();
            
            // Navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.getAttribute('data-page');
                    showPage(page);
                    
                    // Close mobile menu after navigation
                    document.getElementById('navLinks').classList.remove('active');
                });
            });
            
            // Mobile menu toggle
            document.getElementById('mobileToggle').addEventListener('click', function() {
                document.getElementById('navLinks').classList.toggle('active');
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.nav-container') && document.getElementById('navLinks').classList.contains('active')) {
                    document.getElementById('navLinks').classList.remove('active');
                }
            });
            
            // Scroll to top button
            const scrollTop = document.querySelector('.scroll-top');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTop.classList.add('active');
                } else {
                    scrollTop.classList.remove('active');
                }
            });
            
            scrollTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Close modals
            document.getElementById('closePrintModal').addEventListener('click', () => {
                document.getElementById('printModal').style.display = 'none';
            });
            
            document.getElementById('cancelPrint').addEventListener('click', () => {
                document.getElementById('printModal').style.display = 'none';
            });
            
            document.getElementById('confirmPrint').addEventListener('click', () => {
                document.getElementById('printModal').style.display = 'none';
                window.print();
            });
            
            document.getElementById('closeSaveModal').addEventListener('click', () => {
                document.getElementById('saveModal').style.display = 'none';
            });
            
            document.getElementById('closeSave').addEventListener('click', () => {
                document.getElementById('saveModal').style.display = 'none';
            });
            
            document.getElementById('viewFavorites').addEventListener('click', () => {
                document.getElementById('saveModal').style.display = 'none';
                showPage('favorites');
            });
            
            // Newsletter form
            document.getElementById('newsletterForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('newsletterEmail').value;
                if (email) {
                    alert(`Thank you for subscribing with: ${email}\nYou'll receive our weekly recipe inspiration soon!`);
                    document.getElementById('newsletterEmail').value = '';
                }
            });
            
            // Search functionality
            function setupSearch(inputId) {
                const searchInput = document.getElementById(inputId);
                if (!searchInput) return;
                
                searchInput.addEventListener('input', function() {
                    const searchTerm = this.value.toLowerCase();
                    const activePage = document.querySelector('.page-section.active');
                    
                    if (activePage.id === 'regional-page') {
                        // Search in regional page
                        const regionCards = activePage.querySelectorAll('.region-card');
                        
                        regionCards.forEach(card => {
                            const regionName = card.querySelector('h3').textContent.toLowerCase();
                            const recipeItems = card.querySelectorAll('.region-recipe-item');
                            
                            let hasMatch = regionName.includes(searchTerm);
                            
                            recipeItems.forEach(item => {
                                const recipeName = item.querySelector('a').textContent.toLowerCase();
                                if (recipeName.includes(searchTerm)) {
                                    hasMatch = true;
                                    item.style.display = 'flex';
                                } else {
                                    item.style.display = 'none';
                                }
                            });
                            
                            if (hasMatch || searchTerm === '') {
                                card.style.display = 'block';
                                recipeItems.forEach(item => item.style.display = 'flex');
                            } else {
                                card.style.display = 'none';
                            }
                        });
                    } else if (activePage.id === 'reviews-page') {
                        // Search in reviews page
                        const reviewCards = activePage.querySelectorAll('.review-card');
                        
                        reviewCards.forEach(card => {
                            const reviewerName = card.querySelector('.reviewer-name').textContent.toLowerCase();
                            const reviewText = card.querySelector('.review-text').textContent.toLowerCase();
                            const recipeName = card.querySelector('.view-recipe-link') ? card.querySelector('.view-recipe-link').textContent.toLowerCase() : '';
                            
                            if (reviewerName.includes(searchTerm) || reviewText.includes(searchTerm) || recipeName.includes(searchTerm)) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        });
                    } else {
                        // Search in recipes pages
                        const recipeCards = activePage.querySelectorAll('.recipe-card');
                        
                        recipeCards.forEach(card => {
                            const title = card.querySelector('.recipe-title').textContent.toLowerCase();
                            const ingredients = card.querySelector('.ingredients').textContent.toLowerCase();
                            const tags = card.querySelector('.dietary-tags').textContent.toLowerCase();
                            
                            if (title.includes(searchTerm) || ingredients.includes(searchTerm) || tags.includes(searchTerm)) {
                                card.style.display = 'block';
                                setTimeout(() => {
                                    card.style.opacity = '1';
                                    card.style.transform = 'translateY(0)';
                                }, 10);
                            } else {
                                card.style.opacity = '0';
                                card.style.transform = 'translateY(20px)';
                                setTimeout(() => {
                                    card.style.display = 'none';
                                }, 300);
                            }
                        });
                    }
                });
            }
            
            // Setup both search inputs
            setupSearch('searchInput');
            setupSearch('mobileSearchInput');
            
            // Close modals when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === document.getElementById('printModal')) {
                    document.getElementById('printModal').style.display = 'none';
                }
                if (e.target === document.getElementById('saveModal')) {
                    document.getElementById('saveModal').style.display = 'none';
                }
            });
            
            // Prevent default behavior for touch events on interactive elements
            document.querySelectorAll('.btn, .filter-btn, .star').forEach(element => {
                element.addEventListener('touchstart', function(e) {
                    // Prevent double-tap zoom
                    if (e.touches.length > 1) {
                        e.preventDefault();
                    }
                }, { passive: false });
            });
        });