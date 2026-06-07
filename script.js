  // Hide loading overlay after page loads
  window.addEventListener('load', function() {
    setTimeout(function() {
      const loadingOverlay = document.getElementById('loadingOverlay');
      if (loadingOverlay) {
        loadingOverlay.classList.add('hide');
        // Remove from DOM after animation
        setTimeout(function() {
          loadingOverlay.style.display = 'none';
        }, 500);
      }
    }, 2000); // 2 seconds loading animation
  });

  // ============================================
  // EMAILJS CONFIGURATION
  // ============================================
  // Step 1: Initialize EmailJS with your Public Key
  emailjs.init("opYYBAzptYXVZypkl");  
  
  // Step 2: Set your Service ID and Template ID
  const EMAILJS_SERVICE_ID = "service_j0z0jgx";   
  const EMAILJS_TEMPLATE_ID = "template_b29kbcw"; 
  

  const IS_TEST_MODE = false; // Set to false when you have your credentials
  
  // ============================================
  // END OF EMAILJS CONFIGURATION
  // ============================================

  AOS.init({ duration: 600, once: true, offset: 50 });
  
  function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div'); p.className = 'particle';
      const s = Math.random() * 6 + 2;
      p.style.width = s + 'px'; p.style.height = s + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = Math.random() * 20 + 10 + 's';
      p.style.animationDelay = Math.random() * 10 + 's';
      container.appendChild(p);
    }
  }
  createParticles();
  
  function scrollToElement(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
// recipes image data 
  const recipes = [
    { id:1, name:"Thai Green Curry", image:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=250&fit=crop", ingredients:["coconut milk","tofu","eggplant","basil"], diet:"Vegan", cuisine:"Thai", time:28, difficulty:"Medium", category:"Dinner", servings:3, instructions:"Simmer curry paste, add coconut milk, tofu & veggies.", rating:4.8 },
    { id:2, name:"Paneer Butter Masala", image:"https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg", ingredients:["paneer","onion","tomato","cream"], diet:"Vegetarian", cuisine:"Indian", time:40, difficulty:"Medium", category:"Lunch", servings:4, instructions:"Sauté onion, add tomato puree, spices, then paneer.", rating:4.9 },
    { id:3, name:"Mediterranean Bowl", image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=250&fit=crop", ingredients:["quinoa","chickpeas","avocado","feta"], diet:"Vegetarian", cuisine:"Italian", time:20, difficulty:"Easy", category:"Lunch", servings:2, instructions:"Layer quinoa, chickpeas, avocado, and feta.", rating:4.7 },
    { id:4, name:"Berry Protein Smoothie", image:"https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=250&fit=crop", ingredients:["berries","banana","protein powder","almond milk"], diet:"High Protein", cuisine:"Mexican", time:5, difficulty:"Easy", category:"Breakfast", servings:1, instructions:"Blend all ingredients until smooth.", rating:4.6 },
    { id:5, name:"Mushroom Risotto", image:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=250&fit=crop", ingredients:["mushroom","arborio rice","parmesan","broth"], diet:"Vegetarian", cuisine:"Italian", time:35, difficulty:"Medium", category:"Dinner", servings:3, instructions:"Slowly add broth to rice, stir in mushrooms.", rating:4.8 },
    { id:6, name:"Chicken Stir Fry", image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=250&fit=crop", ingredients:["chicken","bell pepper","broccoli","soy sauce"], diet:"High Protein", cuisine:"Chinese", time:20, difficulty:"Easy", category:"Dinner", servings:3, instructions:"Stir fry chicken and vegetables.", rating:4.7 },
    { id:7, name:"Chocolate Lava Cake", image:"https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=250&fit=crop", ingredients:["chocolate","butter","eggs","flour"], diet:"Vegetarian", cuisine:"Italian", time:25, difficulty:"Medium", category:"Desserts", servings:4, instructions:"Bake for 12 minutes.", rating:4.9 }
  ];

  let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let reviewLikes = JSON.parse(localStorage.getItem("reviewLikes")) || {};
  let reviewReplies = JSON.parse(localStorage.getItem("reviewReplies")) || {};
  let currentCategory = "all";
  let currentRating = 0;
  let showLimited = true;
  let carouselIndex = 0;

  function showToast(msg) { let t = document.getElementById("toastMsg"); t.innerText = msg; t.style.opacity = "1"; setTimeout(() => t.style.opacity = "0", 2000); }

  // Typing Effect
  const phrases = ["Search by recipe name...", "Find by ingredients...", "Filter by diet...", "Save your favorites!"];
  let pIdx = 0, cIdx = 0, del = false;
  function typeEffect() {
    const div = document.getElementById("typingText");
    if (!div) return;
    let cur = phrases[pIdx];
    if (del) { div.innerHTML = cur.substring(0, cIdx - 1) + '<span class="cursor"></span>'; cIdx--; }
    else { div.innerHTML = cur.substring(0, cIdx + 1) + '<span class="cursor"></span>'; cIdx++; }
    if (!del && cIdx === cur.length) { del = true; setTimeout(typeEffect, 2000); }
    else if (del && cIdx === 0) { del = false; pIdx = (pIdx + 1) % phrases.length; setTimeout(typeEffect, 500); }
    else { setTimeout(typeEffect, del ? 50 : 100); }
  }
  typeEffect();

  // Recipe functions
  function toggleRecipesDisplay() {
    showLimited = !showLimited;
    document.getElementById("toggleRecipesBtn").innerHTML = showLimited ? '<i class="fas fa-chevron-down"></i> Show 3 Recipes' : '<i class="fas fa-chevron-up"></i> Show All Recipes';
    renderRecipes();
  }
  document.getElementById("toggleRecipesBtn")?.addEventListener("click", toggleRecipesDisplay);
  
  function toggleSave(id) {
    let idx = savedRecipes.indexOf(id);
    if (idx === -1) { savedRecipes.push(id); showToast("✅ Recipe saved!"); }
    else { savedRecipes.splice(idx, 1); showToast("🗑️ Removed from saved"); }
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    renderRecipes(); renderSavedRecipes();
  }
  
  function getFilteredRecipes() {
    let filtered = recipes.filter(r => {
      if (currentCategory !== "all" && r.category !== currentCategory) return false;
      let diet = document.getElementById("dietFilter")?.value || "all";
      if (diet !== "all" && r.diet !== diet) return false;
      let cuisine = document.getElementById("cuisineFilter")?.value || "all";
      if (cuisine !== "all" && r.cuisine !== cuisine) return false;
      let timeVal = document.getElementById("timeFilter")?.value || "all";
      if (timeVal !== "all") { if (timeVal === "0-30" && r.time > 30) return false; if (timeVal === "30-60" && (r.time <=30 || r.time>60)) return false; }
      return true;
    });
    let nameSearch = document.getElementById("searchName")?.value.toLowerCase().trim() || "";
    if (nameSearch) filtered = filtered.filter(r => r.name.toLowerCase().includes(nameSearch));
    let ingSearch = document.getElementById("ingredientsInput")?.value.toLowerCase() || "";
    if (ingSearch) { let ingList = ingSearch.split(",").map(i=>i.trim()); filtered = filtered.filter(r => ingList.every(ing => r.ingredients.some(ri => ri.toLowerCase().includes(ing)))); }
    return filtered;
  }
  
  function renderRecipes() {
    let filtered = getFilteredRecipes();
    let display = showLimited ? filtered.slice(0, 3) : filtered;
    let container = document.getElementById("recipeContainer");
    if (!container) return;
    if(display.length === 0) { container.innerHTML = "<div style='text-align:center; padding:2rem;'>✨ No recipes found ✨</div>"; return; }
    container.innerHTML = display.map(r => `<div class="recipe-card" data-id="${r.id}"><img class="recipe-img" src="${r.image}" onerror="this.src='https://placehold.co/400x250/FF7043/white?text=${r.name}'"><div class="recipe-info"><div class="recipe-title">${r.name}</div><div class="recipe-meta"><span>⏱️ ${r.time} min</span><span class="badge">${r.diet}</span><span>🍽️ ${r.servings}</span></div><div class="card-actions"><button class="action-btn save-btn ${savedRecipes.includes(r.id) ? 'saved' : ''}" onclick="event.stopPropagation(); toggleSave(${r.id})"><i class="fas ${savedRecipes.includes(r.id) ? 'fa-check-circle' : 'fa-bookmark'}"></i> ${savedRecipes.includes(r.id) ? 'Saved' : 'Save'}</button></div></div></div>`).join("");
    document.querySelectorAll(".recipe-card").forEach(c => c.addEventListener("click", () => openRecipeModal(parseInt(c.dataset.id))));
  }
  
  function renderSavedRecipes() {
    let saved = recipes.filter(r => savedRecipes.includes(r.id));
    let container = document.getElementById("savedContainer");
    if (!container) return;
    if(saved.length === 0) { container.innerHTML = "<div style='text-align:center; padding:1.5rem;'>No saved recipes yet</div>"; return; }
    container.innerHTML = saved.map(r => `<div class="saved-card" onclick="openRecipeModal(${r.id})"><img src="${r.image}" style="width:100%; height:90px; object-fit:cover; border-radius:8px;"><p style="margin-top:6px; font-weight:500;">${r.name}</p><button class="action-btn" onclick="event.stopPropagation(); toggleSave(${r.id})" style="margin-top:6px;">Remove</button></div>`).join("");
  }
  
  function renderFeaturedCarousel() {
    const container = document.getElementById("featuredCarousel");
    if (!container) return;
    container.innerHTML = recipes.map(r => `<div class="featured-item" onclick="openRecipeModal(${r.id})"><img class="featured-img" src="${r.image}"><div class="featured-info"><h3>${r.name}</h3><div><span class="badge">${r.diet}</span> <span>⏱️ ${r.time} min</span></div></div></div>`).join("");
    updateCarousel();
  }
  
  function updateCarousel() {
    const carousel = document.getElementById("featuredCarousel");
    if (!carousel?.children.length) return;
    const itemWidth = carousel.children[0]?.offsetWidth || 250;
    const scroll = carouselIndex * (itemWidth + 16);
    carousel.style.transform = `translateX(-${scroll}px)`;
  }
  
  document.getElementById("nextBtn")?.addEventListener("click", () => { if (carouselIndex < recipes.length - 4) carouselIndex++; updateCarousel(); });
  document.getElementById("prevBtn")?.addEventListener("click", () => { if (carouselIndex > 0) carouselIndex--; updateCarousel(); });
  window.addEventListener('resize', () => updateCarousel());

  // Review Functions
  function updateAverageRating() {
    if (reviews.length === 0) {
      document.getElementById("avgRating").innerText = "0.0";
      document.getElementById("avgStars").innerHTML = "☆☆☆☆☆";
      document.getElementById("reviewCount").innerText = "0";
      return;
    }
    let sum = reviews.reduce((a, b) => a + b.rating, 0);
    let avg = sum / reviews.length;
    document.getElementById("avgRating").innerText = avg.toFixed(1);
    let fullStars = Math.floor(avg);
    let stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
    document.getElementById("avgStars").innerHTML = stars;
    document.getElementById("reviewCount").innerText = reviews.length;
  }

  function toggleReviewLike(reviewId) {
    if (reviewLikes[reviewId]) delete reviewLikes[reviewId];
    else reviewLikes[reviewId] = true;
    localStorage.setItem("reviewLikes", JSON.stringify(reviewLikes));
    renderReviews();
  }

  function addReply(reviewId) {
    let replyText = document.getElementById(`reply-input-${reviewId}`)?.value.trim();
    if (!replyText) return;
    if (!reviewReplies[reviewId]) reviewReplies[reviewId] = [];
    reviewReplies[reviewId].push({ text: replyText, date: new Date().toISOString() });
    localStorage.setItem("reviewReplies", JSON.stringify(reviewReplies));
    document.getElementById(`reply-input-${reviewId}`).value = "";
    renderReviews();
  }

  function renderReviews() {
    let container = document.getElementById("reviewsList");
    if (!container) return;
    if (reviews.length === 0) { container.innerHTML = "<div style='text-align:center; padding:2rem;'>No reviews yet. Be the first to share your experience!</div>"; return; }
    const avatars = ['👩‍🍳', '👨‍🍳', '🍳', '🥗', '🍕', '🍜', '🍰'];
    container.innerHTML = reviews.map((r, idx) => {
      let replySection = "";
      if (reviewReplies[`review_${idx}`] && reviewReplies[`review_${idx}`].length > 0) {
        replySection = `<div class="review-reply">${reviewReplies[`review_${idx}`].map(rep => `<div class="reply-text"><i class="fas fa-reply"></i> ${rep.text}</div>`).join("")}</div>`;
      }
      return `
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">${avatars[Math.floor(Math.random() * avatars.length)]}</div>
            <div class="review-user"><h4>${r.name}</h4><div class="review-date">${new Date(r.date).toLocaleDateString()}</div></div>
          </div>
          <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          <div class="review-text">${r.comment}</div>
          <div class="review-footer">
            <button class="review-like ${reviewLikes[`review_${idx}`] ? 'liked' : ''}" onclick="toggleReviewLike('review_${idx}')"><i class="fas fa-heart"></i> <span>${reviewLikes[`review_${idx}`] ? 1 : 0}</span></button>
            <button class="review-like" onclick="document.getElementById('reply-form-${idx}').style.display = document.getElementById('reply-form-${idx}').style.display === 'none' ? 'flex' : 'none'"><i class="fas fa-reply"></i> Reply</button>
          </div>
          ${replySection}
          <div id="reply-form-${idx}" class="reply-form" style="display: none;">
            <input type="text" id="reply-input-review_${idx}" placeholder="Write a reply...">
            <button onclick="addReply('review_${idx}')">Post</button>
          </div>
        </div>
      `;
    }).join("");
    updateAverageRating();
  }

  // Star rating input
  document.querySelectorAll("#starRatingWidget i").forEach(s => {
    s.addEventListener("click", function() {
      currentRating = parseInt(this.dataset.rating);
      document.querySelectorAll("#starRatingWidget i").forEach(st => {
        if (parseInt(st.dataset.rating) <= currentRating) st.className = "fas fa-star";
        else st.className = "far fa-star";
      });
    });
  });

  document.getElementById("submitReviewBtn").addEventListener("click", () => {
    let name = document.getElementById("reviewerName").value.trim();
    let comment = document.getElementById("reviewText").value.trim();
    if (!name || !comment || currentRating === 0) { showToast("Please fill all fields and select a rating!"); return; }
    reviews.unshift({ name, rating: currentRating, comment, date: new Date().toISOString() });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    document.getElementById("reviewerName").value = "";
    document.getElementById("reviewText").value = "";
    currentRating = 0;
    document.querySelectorAll("#starRatingWidget i").forEach(s => s.className = "far fa-star");
    renderReviews();
    showToast("✅ Review submitted! Thank you for your feedback.");
  });

  // ============================================
  // EMAILJS CONTACT FORM HANDLER
  // ============================================
  async function sendEmail() {
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMsg").value.trim();
    
    if (!name || !email || !message) {
      showToast("Please fill all required fields!");
      return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
      showToast("Please enter a valid email address!");
      return;
    }
    
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "support@flavorfindpro.com",
      reply_to: email
    };
    
    // Test mode or actual EmailJS
    if (IS_TEST_MODE) {
      console.log("📧 TEST MODE - Email would be sent with:", templateParams);
      showToast("✅ Demo: Message received! (Configure EmailJS to send real emails)");
      document.getElementById("contactName").value = "";
      document.getElementById("contactEmail").value = "";
      document.getElementById("contactMsg").value = "";
      const div = document.getElementById("contactSuccess");
      div.innerHTML = `<i class="fas fa-check-circle"></i> Thank you ${name}! We'll respond soon. (Demo Mode)`;
      div.style.display = "block";
      setTimeout(() => div.style.display = "none", 5000);
      return;
    }
    
    try {
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      console.log("✅ Email sent successfully!", response);
      showToast("✅ Message sent successfully! We'll get back to you soon.");
      document.getElementById("contactName").value = "";
      document.getElementById("contactEmail").value = "";
      document.getElementById("contactMsg").value = "";
      const div = document.getElementById("contactSuccess");
      div.innerHTML = `<i class="fas fa-check-circle"></i> Thank you ${name}! We'll respond within 24 hours.`;
      div.style.display = "block";
      setTimeout(() => div.style.display = "none", 5000);
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      showToast("❌ Failed to send message. Please try again later.");
    }
  }
  
  document.getElementById("sendContactBtn").addEventListener("click", sendEmail);

  function openRecipeModal(id) {
    let r = recipes.find(r => r.id === id);
    document.getElementById("modalTitle").innerText = r.name;
    document.getElementById("modalImg").src = r.image;
    document.getElementById("modalIngredients").innerHTML = r.ingredients.map(i => `<span style="background:var(--accent-soft); padding:3px 8px; border-radius:20px; margin:2px; display:inline-block;">${i}</span>`).join("");
    document.getElementById("modalInstructions").innerHTML = r.instructions;
    document.getElementById("modalTime").innerHTML = r.time + " minutes";
    document.getElementById("modalServings").innerHTML = r.servings;
    document.getElementById("modalDiff").innerHTML = r.difficulty;
    document.getElementById("modalCuisine").innerHTML = r.cuisine;
    document.getElementById("recipeModal").style.display = "flex";
  }

  function showSuggestions() {
    let q = document.getElementById("searchName")?.value.toLowerCase();
    let div = document.getElementById("suggestionsDropdown");
    if (!div) return;
    if (!q || q.length < 2) { div.style.display = "none"; return; }
    let matches = recipes.filter(r => r.name.toLowerCase().includes(q)).slice(0, 5);
    if (matches.length) {
      div.style.display = "block";
      div.innerHTML = matches.map(m => `<div class="suggestion-item" onclick="selectSuggestion('${m.name}')"><i class="fas fa-search"></i> ${m.name}</div>`).join("");
    } else div.style.display = "none";
  }
  
  function selectSuggestion(n) { document.getElementById("searchName").value = n; document.getElementById("suggestionsDropdown").style.display = "none"; renderRecipes(); }
  document.getElementById("searchName")?.addEventListener("input", showSuggestions);
  document.addEventListener("click", (e) => { if (!e.target.closest(".search-input-group")) { let d = document.getElementById("suggestionsDropdown"); if (d) d.style.display = "none"; } });
  document.getElementById("searchBtn")?.addEventListener("click", () => renderRecipes());
  document.getElementById("searchName")?.addEventListener("keyup", () => renderRecipes());
  document.getElementById("ingredientsInput")?.addEventListener("keyup", () => renderRecipes());
  document.getElementById("dietFilter")?.addEventListener("change", () => renderRecipes());
  document.getElementById("cuisineFilter")?.addEventListener("change", () => renderRecipes());
  document.getElementById("timeFilter")?.addEventListener("change", () => renderRecipes());
  document.getElementById("closeModal")?.addEventListener("click", () => document.getElementById("recipeModal").style.display = "none");
  window.onclick = (e) => { if (e.target === document.getElementById("recipeModal")) document.getElementById("recipeModal").style.display = "none"; };
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => { currentCategory = card.dataset.cat; renderRecipes(); showToast(`Showing ${currentCategory} recipes`); scrollToElement('recipes'); });
  });
  
  function setCategoryAndScroll(cat) { currentCategory = cat; renderRecipes(); scrollToElement('recipes'); showToast(`Showing ${cat} recipes`); }
  window.setCategoryAndScroll = setCategoryAndScroll;
  
  const darkToggle = document.getElementById("darkModeToggle");
  function toggleDark() { document.body.classList.toggle("dark"); localStorage.setItem("darkMode", document.body.classList.contains("dark")); darkToggle.innerHTML = document.body.classList.contains("dark") ? '<i class="fas fa-sun"></i> Light' : '<i class="fas fa-moon"></i> Dark'; }
  darkToggle.addEventListener("click", toggleDark);
  if (localStorage.getItem("darkMode") === "true") { document.body.classList.add("dark"); darkToggle.innerHTML = '<i class="fas fa-sun"></i> Light'; }
  
  window.scrollToElement = scrollToElement;
  window.openRecipeModal = openRecipeModal;
  window.toggleSave = toggleSave;
  window.selectSuggestion = selectSuggestion;
  window.toggleReviewLike = toggleReviewLike;
  window.addReply = addReply;

  renderRecipes();
  renderSavedRecipes();
  renderReviews();
  renderFeaturedCarousel();
