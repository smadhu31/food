<script>
  const MENU = [
  {id: 1, name: "Margherita Pizza", rest: "Napoli House", cat: "Pizza", price: 14.99, rating: 4.9, time: "22 min", badge: "Popular", badgeCls: "", veg: true, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80", ingredients: ["Tomato", "Mozzarella", "Basil"], nutrition: {cal: 290, protein: 12, fat: 10, carbs: 34 } },
  {id: 2, name: "Pepperoni Feast", rest: "Napoli House", cat: "Pizza", price: 16.99, rating: 4.8, time: "24 min", badge: "Hot", badgeCls: "hot", veg: false, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80", ingredients: ["Pepperoni", "Cheese", "Sauce"], nutrition: {cal: 380, protein: 16, fat: 18, carbs: 36 } },
  {id: 3, name: "Smash Burger", rest: "Burgerhaus", cat: "Burgers", price: 13.49, rating: 4.7, time: "18 min", badge: "Best Seller", badgeCls: "", veg: false, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80", ingredients: ["Beef Patty", "Cheese", "Lettuce"], nutrition: {cal: 420, protein: 24, fat: 20, carbs: 32 } },
  {id: 4, name: "Veggie Burger", rest: "Burgerhaus", cat: "Burgers", price: 11.99, rating: 4.5, time: "16 min", badge: "Veg", badgeCls: "veg", veg: true, img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&q=80", ingredients: ["Veg Patty", "Lettuce", "Tomato"], nutrition: {cal: 310, protein: 13, fat: 11, carbs: 29 } },
  {id: 5, name: "Dragon Roll", rest: "Sakura Sushi", cat: "Sushi", price: 17.99, rating: 4.9, time: "28 min", badge: "Premium", badgeCls: "", veg: false, img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&q=80", ingredients: ["Rice", "Shrimp", "Avocado"], nutrition: {cal: 260, protein: 14, fat: 8, carbs: 31 } },
  {id: 6, name: "Salmon Sashimi", rest: "Sakura Sushi", cat: "Sushi", price: 15.49, rating: 4.8, time: "25 min", badge: "", badgeCls: "", veg: false, img: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=500&q=80", ingredients: ["Salmon", "Soy Sauce", "Wasabi"], nutrition: {cal: 180, protein: 20, fat: 6, carbs: 2 } },
  {id: 7, name: "Tonkotsu Ramen", rest: "Umami Ramen", cat: "Ramen", price: 12.99, rating: 4.8, time: "20 min", badge: "Fan Fave", badgeCls: "", veg: false, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80", ingredients: ["Noodles", "Pork Broth", "Egg"], nutrition: {cal: 450, protein: 17, fat: 15, carbs: 55 } },
  {id: 8, name: "Spicy Miso Ramen", rest: "Umami Ramen", cat: "Ramen", price: 13.49, rating: 4.7, time: "22 min", badge: "Hot", badgeCls: "hot", veg: true, img: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&q=80", ingredients: ["Noodles", "Miso", "Chili Oil"], nutrition: {cal: 390, protein: 14, fat: 12, carbs: 51 } },
  {id: 9, name: "Street Tacos x3", rest: "El Bandido", cat: "Tacos", price: 10.99, rating: 4.6, time: "18 min", badge: "", badgeCls: "", veg: false, img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80", ingredients: ["Tortilla", "Chicken", "Salsa"], nutrition: {cal: 280, protein: 18, fat: 11, carbs: 28 } },
  {id: 10, name: "Quinoa Power Bowl", rest: "The Green Bowl", cat: "Salads", price: 11.99, rating: 4.7, time: "15 min", badge: "Veg", badgeCls: "veg", veg: true, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", ingredients: ["Quinoa", "Avocado", "Greens"], nutrition: {cal: 240, protein: 10, fat: 9, carbs: 30 } },
  {id: 11, name: "Matcha Lava Cake", rest: "Sugar Studio", cat: "Desserts", price: 8.99, rating: 4.9, time: "20 min", badge: "New", badgeCls: "", veg: true, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80", ingredients: ["Matcha", "Chocolate", "Cream"], nutrition: {cal: 330, protein: 6, fat: 15, carbs: 44 } },
  {id: 12, name: "Brown Sugar Boba", rest: "Boba Bazaar", cat: "Drinks", price: 6.99, rating: 4.5, time: "12 min", badge: "", badgeCls: "", veg: true, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", ingredients: ["Tea", "Milk", "Boba"], nutrition: {cal: 210, protein: 3, fat: 4, carbs: 41 } }
  ];

  const CATS = ["All","Pizza","Burgers","Sushi","Ramen","Tacos","Salads","Desserts","Drinks"];
  const PROMOS = {
    ZEST40: {type: "percent", value: 40, label: "40 percent discount applied" },
  FREE: {type: "shipping", value: 2.99, label: "Free delivery applied" },
  NEW10: {type: "percent", value: 10, label: "10 percent discount applied" }
};

  let cart = JSON.parse(localStorage.getItem("zestify_cart") || "{ }");
  let wishlist = new Set(JSON.parse(localStorage.getItem("zestify_wishlist") || "[]"));
  let orders = JSON.parse(localStorage.getItem("zestify_orders") || "[]");
  let activeFilter = localStorage.getItem("zestify_filter") || "All";
  let searchQ = "";
  let discount = 0;
  let theme = localStorage.getItem("zestify_theme") || "dark";
  let currentUser = JSON.parse(localStorage.getItem("zestify_user") || "null");

  function saveState() {
    localStorage.setItem("zestify_cart", JSON.stringify(cart));
  localStorage.setItem("zestify_wishlist", JSON.stringify([...wishlist]));
  localStorage.setItem("zestify_orders", JSON.stringify(orders));
  localStorage.setItem("zestify_theme", theme);
  localStorage.setItem("zestify_filter", activeFilter);
  localStorage.setItem("zestify_user", JSON.stringify(currentUser));
}

  function initApp() {
    document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) themeBtn.textContent = theme === "dark" ? "Theme" : "Theme";
  if (currentUser) launchApp();
  buildFilters();
  renderMenu();
  renderCart();
  updateBadge();
  initReveal();
  startTrackingSim();
}

  function doLogin() {
  const e = document.getElementById("lemail").value.trim();
  const p = document.getElementById("lpass").value.trim();
  const err = document.getElementById("lerr");
  if (!e || !p || p.length < 3) {
    if (err) err.style.display = "block";
  shakeEl(document.querySelector("#loginPage .auth-card"));
  return;
  }
  if (err) err.style.display = "none";
  currentUser = {name: e.split("@")[0], email: e };
  saveState();
  launchApp();
}

  function doSignup() {
  const n = document.getElementById("sname").value.trim();
  const e = document.getElementById("semail").value.trim();
  const p = document.getElementById("spass").value.trim();
  const err = document.getElementById("serr");
  if (!n || !e || p.length < 6) {
    if (err) err.style.display = "block";
  shakeEl(document.querySelector("#signupPage .auth-card"));
  return;
  }
  if (err) err.style.display = "none";
  currentUser = {name: n, email: e };
  saveState();
  launchApp();
}

  function socialLogin(type) {
    currentUser = { name: type === "google" ? "Google User" : "Facebook User", email: `${type}@user.com` };
  saveState();
  launchApp();
}

  function launchApp() {
    document.getElementById("loginPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("mainApp").style.display = "block";
  const av = document.getElementById("userAv");
  const label = document.getElementById("userLabel");
  if (av) av.textContent = currentUser.name.charAt(0).toUpperCase();
  if (label) label.textContent = currentUser.name.split(" ")[0];
  buildFilters();
  renderMenu();
  renderCart();
  updateBadge();
}

  function logout() {
    currentUser = null;
  localStorage.removeItem("zestify_user");
  document.getElementById("mainApp").style.display = "none";
  document.getElementById("loginPage").style.display = "flex";
  document.getElementById("signupPage").style.display = "none";
}

  function showSignup() {
    document.getElementById("loginPage").style.display = "none";
  document.getElementById("signupPage").style.display = "flex";
}

  function showLogin() {
    document.getElementById("signupPage").style.display = "none";
  document.getElementById("loginPage").style.display = "flex";
}

  function buildFilters() {
  const row = document.getElementById("filterRow");
  if (!row) return;
  row.innerHTML = CATS.map(c => `<button class="filter-btn ${c === activeFilter ? " active" : ""}" onclick="setFilter('${c}')">${c}</button>`).join("");
}

function setFilter(c) {
  activeFilter = c;
  saveState();
  buildFilters();
  renderMenu();
}

function handleSearch() {
  const input = document.getElementById("searchInput");
  searchQ = input ? input.value.toLowerCase().trim() : "";
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  let items = MENU.slice();
  if (activeFilter !== "All") items = items.filter(i => i.cat === activeFilter);
  if (searchQ) items = items.filter(i => (i.name + " " + i.rest + " " + i.cat).toLowerCase().includes(searchQ));
  if (!items.length) {
    grid.innerHTML = `< div class="no-results" ><div class="icon">No results</div><p>No items found.</p></div > `;
    return;
  }
  grid.innerHTML = items.map(i => `
  < div class="menu-card reveal" >
      <div class="card-img-wrap">
        <img src="${i.img}" alt="${i.name}" loading="lazy">
        ${i.badge ? `<span class="card-badge ${i.badgeCls}">${i.badge}</span>` : ""}
        <span class="card-fav ${wishlist.has(i.id) ? "active" : ""}" onclick="toggleFav(${i.id}, this)">Save</span>
      </div>
      <div class="card-body">
        <div class="card-name">${i.name}</div>
        <div class="card-rest">${i.rest} ${i.cat}</div>
        <div class="card-meta">
          <span class="rating">Rating ${i.rating}</span>
          <span>${i.time}</span>
          <span>${i.veg ? "Veg" : "Non Veg"}</span>
        </div>
        <div class="card-footer">
          <span class="card-price">$${i.price.toFixed(2)}</span>
          <button class="btn-add-card" onclick="openFoodModal(${i.id})">View</button>
        </div>
      </div>
    </div >
  `).join("");
  initReveal();
}

function toggleFav(id, el) {
  if (wishlist.has(id)) wishlist.delete(id); else wishlist.add(id);
  saveState();
  if (el) el.classList.toggle("active");
  showToast(wishlist.has(id) ? "Added to wishlist" : "Removed from wishlist");
}

function addToCart(id) {
  const item = MENU.find(m => m.id === id);
  if (!item) return;
  cart[id] = cart[id] || { ...item, qty: 0 };
  cart[id].qty += 1;
  saveState();
  renderCart();
  updateBadge();
  showToast(item.name + " added to cart");
}

function updateQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  saveState();
  renderCart();
  updateBadge();
}

function calcTotals() {
  const items = Object.values(cart);
  const sub = items.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = sub > 25 ? 0 : 2.99;
  const disc = sub * discount;
  const total = Math.max(0, sub + delivery - disc);
  return { sub, delivery, disc, total };
}

function renderCart() {
  const body = document.getElementById("cartBody");
  const foot = document.getElementById("cartFoot");
  if (!body || !foot) return;
  const items = Object.values(cart);
  if (!items.length) {
    body.innerHTML = `< div class="cart-empty" ><div class="eicon">Cart empty</div><p>Your cart is empty</p><span>Browse menu and add items</span></div > `;
    foot.style.display = "none";
    return;
  }
  body.innerHTML = items.map(i => `
  < div class="c-item" >
    <img src="${i.img}" alt="${i.name}" loading="lazy">
      <div class="c-info">
        <div class="c-name">${i.name}</div>
        <div class="c-price">$${i.price.toFixed(2)}</div>
      </div>
      <div class="qty-ctrl">
        <button class="qbtn" onclick="updateQty(${i.id},-1)">-</button>
        <span class="qnum">${i.qty}</span>
        <button class="qbtn" onclick="updateQty(${i.id},1)">+</button>
      </div>
    </div>
`).join("");
  const t = calcTotals();
  const subtotal = document.getElementById("subtotal");
  const deliveryFee = document.getElementById("deliveryFee");
  const discountRow = document.getElementById("discountRow");
  const cartTotal = document.getElementById("cartTotal");
  if (subtotal) subtotal.textContent = "$" + t.sub.toFixed(2);
  if (deliveryFee) deliveryFee.textContent = t.delivery === 0 ? "FREE" : "$" + t.delivery.toFixed(2);
  if (discountRow) discountRow.textContent = t.disc ? "- $" + t.disc.toFixed(2) : "";
  if (cartTotal) cartTotal.textContent = "$" + t.total.toFixed(2);
  foot.style.display = "block";
}

function updateBadge() {
  const total = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  const b = document.getElementById("cartBadge");
  if (b) {
    b.textContent = total;
    b.classList.toggle("show", total > 0);
  }
}

function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
  document.body.style.overflow = "";
}

function applyPromo() {
  const code = document.getElementById("promoInput").value.trim().toUpperCase();
  if (!PROMOS[code]) return showToast("Invalid promo code");
  if (PROMOS[code].type === "percent") discount = PROMOS[code].value / 100;
  if (PROMOS[code].type === "shipping") discount = 0;
  showToast(PROMOS[code].label);
  renderCart();
  saveState();
}

function placeOrder() {
  const items = Object.values(cart);
  if (!items.length) return showToast("Your cart is empty");
  const t = calcTotals();
  const orderId = "ZST-" + Math.floor(100000 + Math.random() * 900000);
  orders.unshift({
    id: orderId,
    items: items,
    total: t.total,
    status: "Order Placed",
    time: new Date().toISOString(),
    history: ["Order Placed"]
  });
  saveState();
  localStorage.setItem("zestify_last_order", orderId);
  cart = {};
  discount = 0;
  renderCart();
  updateBadge();
  document.getElementById("orderModal").classList.add("show");
  showToast("Order placed successfully");
  notify("Payment successful", "Order " + orderId + " confirmed");
}

function closeModal() {
  document.getElementById("orderModal").classList.remove("show");
}

function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  saveState();
}

function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._to);
  t._to = setTimeout(() => t.classList.remove("show"), 2200);
}

function notify(title, body) {
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      new Notification(title, { body });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  }
}

function startTrackingSim() {
  const stages = ["Order Placed", "Restaurant Accepted", "Preparing Food", "Ready For Pickup", "Picked Up", "On The Way", "Near Your Location", "Delivered"];
  let idx = 0;
  setInterval(() => {
    const current = document.querySelectorAll(".tstep");
    if (!current.length) return;
    idx = (idx + 1) % stages.length;
    current.forEach((el, i) => {
      el.classList.remove("done", "active");
      if (i < idx) el.classList.add("done");
      if (i === idx) el.classList.add("active");
    });
    const eta = document.getElementById("etaTimer");
    const progress = document.getElementById("progressBar");
    const bike = document.getElementById("bikeIcon");
    if (eta) eta.textContent = Math.max(0, 28 - idx * 3) + " min";
    if (progress) progress.style.width = Math.min(100, (idx / (stages.length - 1)) * 100) + "%";
    if (bike) bike.style.left = Math.min(88, idx * 12) + "%";
  }, 5000);
}

function openFoodModal(id) {
  const item = MENU.find(m => m.id === id);
  if (!item) return;
  let modal = document.getElementById("foodModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "foodModal";
    modal.className = "modal-bg";
    modal.innerHTML = `< div class="modal-box" id = "foodModalBox" ></div > `;
    document.body.appendChild(modal);
  }
  document.getElementById("foodModalBox").innerHTML = `
  < div class="modal-icon" > Food details</div >
    <h3>${item.name}</h3>
    <p>${item.rest} - $${item.price.toFixed(2)}</p>
    <img src="${item.img}" alt="${item.name}" style="width:100%;border-radius:16px;margin-bottom:16px;max-height:220px;object-fit:cover;">
    <div style="text-align:left;color:var(--text2);font-size:0.9rem;line-height:1.7">
      <strong>Ingredients:</strong> ${item.ingredients.join(", ")}<br>
      <strong>Nutrition:</strong> ${item.nutrition.cal} cal, ${item.nutrition.protein}g protein, ${item.nutrition.fat}g fat, ${item.nutrition.carbs}g carbs<br>
      <strong>Rating:</strong> ${item.rating}
    </div>
    <div style="display:flex;gap:10px;justify-content:center;margin-top:18px;flex-wrap:wrap">
      <button class="btn-checkout" onclick="addToCart(${item.id});closeFoodModal();">Add to Cart</button>
      <button class="btn-outline" onclick="closeFoodModal()">Close</button>
    </div>
  `;
  modal.classList.add("show");
}

function closeFoodModal() {
  const modal = document.getElementById("foodModal");
  if (modal) modal.classList.remove("show");
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => obs.observe(el));
}

function shakeEl(el) {
  if (!el) return;
  el.style.animation = "none";
  void el.offsetWidth;
  el.style.animation = "shake .35s";
}

function registerSW() {
  if ("serviceWorker" in navigator) {
    const swCode = `
      const CACHE = "zestify-v1";
      self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./"]))));
      self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
    `;
    const blob = new Blob([swCode], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    navigator.serviceWorker.register(url).catch(() => {});
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    if (document.getElementById("loginPage") && document.getElementById("loginPage").style.display !== "none") doLogin();
    else if (document.getElementById("signupPage") && document.getElementById("signupPage").style.display !== "none") doSignup();
  }
});

window.addEventListener("load", initApp);
</script>