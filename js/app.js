/**
 * PRO-STORE // LÓGICA INTERACTIVA DE CATÁLOGO, COTIZADOR Y CONVERSIÓN WHATSAPP
 */

// Teléfono simulado para atención comercial (se puede configurar fácilmente)
const WHATSAPP_PHONE = '5491123456789';

// Catálogo de productos completo y diversificado por rubros
const PRODUCTS_DATA = [
  // --- FERRETERÍA Y MAQUINARIA ---
  {
    id: 'prod-1',
    title: 'Sierra Circular Profesional 7-1/4" 1800W con Guía Láser',
    category: 'ferreteria',
    categoryName: 'Ferretería & Maquinaria',
    price: 184500,
    oldPrice: 219000,
    badge: 'Sierra Profesional',
    badgeType: 'badge-pro',
    rating: 5,
    reviews: 38,
    img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
    description: 'Motor de alto torque con bobinado 100% de cobre para cortes precisos en maderas duras y blandas.',
    specs: [
      'Potencia: 1800 Watts reales',
      'Velocidad: 5.500 RPM sin carga',
      'Disco de 24 dientes de carburo de tungsteno incluido',
      'Guía láser y ajuste bisel hasta 45°',
      'Base de aleación de magnesio reforzada'
    ]
  },
  {
    id: 'prod-2',
    title: 'Taladro Percutor Inalámbrico Brushless 20V + 2 Baterías 4Ah',
    category: 'ferreteria',
    categoryName: 'Ferretería & Maquinaria',
    price: 215000,
    oldPrice: 249000,
    badge: 'Top Ventas',
    badgeType: 'badge-sale',
    rating: 5,
    reviews: 64,
    img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80',
    description: 'Tecnología sin carbones (Brushless) para un 50% más de autonomía y rendimiento pesado en hormigón y metal.',
    specs: [
      'Mandril metálico autoajustable de 13 mm',
      'Torque máximo de 65 Nm con 21 posiciones',
      'Incluye 2 baterías de litio 4.0Ah + Cargador rápido',
      'Luz LED de trabajo focalizada',
      'Maletín de transporte rígido de impacto'
    ]
  },
  {
    id: 'prod-3',
    title: 'Amoladora Angular 4-1/2" 900W Blindada para Taller',
    category: 'ferreteria',
    categoryName: 'Ferretería & Maquinaria',
    price: 78900,
    oldPrice: 92000,
    badge: 'Uso Industrial',
    badgeType: 'badge-pro',
    rating: 4,
    reviews: 29,
    img: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80',
    description: 'Diseño ergonómico ultra delgado con protección contra partículas abrasivas y arranque progresivo.',
    specs: [
      'Potencia de 900W de régimen continuo',
      'Diámetro de disco: 115 mm (4.5")',
      'Empuñadura antivibratoria multiposición',
      'Guarda de protección con ajuste rápido sin llave',
      'Bloqueo de eje para cambio ágil de discos'
    ]
  },
  {
    id: 'prod-4',
    title: 'Maletín de Herramientas Mecánicas 128 Piezas Cromo Vanadio',
    category: 'ferreteria',
    categoryName: 'Ferretería & Maquinaria',
    price: 139900,
    oldPrice: 165000,
    badge: 'Kit Completo',
    badgeType: 'badge-featured',
    rating: 5,
    reviews: 42,
    img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80',
    description: 'El set indispensable para taller, hogar y vehículos con acabado satinado anticorrosión.',
    specs: [
      'Llaves criquet 1/2" y 1/4" con 72 dientes',
      'Tubos hexagonales de 4 a 32 mm',
      'Juego de llaves combinadas, pinzas y destornilladores',
      'Construcción en acero Cr-V forjado de grado pesado',
      'Valija rígida termoformada anti-caídas'
    ]
  },

  // --- CAMPING Y PESCA ---
  {
    id: 'prod-5',
    title: 'Carpa Domo Técnica 4 Personas Impermeable 3000mm',
    category: 'camping',
    categoryName: 'Camping & Pesca',
    price: 198000,
    oldPrice: 235000,
    badge: 'Resistente a Lluvia',
    badgeType: 'badge-sale',
    rating: 5,
    reviews: 51,
    img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80',
    description: 'Sobretecho completo con costuras termoselladas y faldón antinieve para campamentos de montaña o río.',
    specs: [
      'Columna de agua: 3000 mm garantizada',
      'Varillas de duraluminio aeronáutico livianas',
      'Doble entrada con mosquitero No-See-Um',
      'Ábside frontal amplio para resguardo de mochilas',
      'Peso total empacada: 3.4 kg'
    ]
  },
  {
    id: 'prod-6',
    title: 'Caña de Pescar Telescópica 2.70m Carbono + Reel Frontal',
    category: 'camping',
    categoryName: 'Camping & Pesca',
    price: 89500,
    oldPrice: 108000,
    badge: 'Lanzamiento Extra',
    badgeType: 'badge-featured',
    rating: 4,
    reviews: 33,
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    description: 'Combo equilibrado para pesca variada en río, laguna o muelle. Acción media rápida con excelente sensibilidad.',
    specs: [
      'Blanco de fibra de carbono de alto módulo',
      'Reel con 5+1 rulemanes y carretel de aluminio alivianado',
      'Pasahilos aptos para multifilamento con óxido de titanio',
      'Freno delantero micrométrico progresivo',
      'Incluye funda de transporte acolchada'
    ]
  },
  {
    id: 'prod-7',
    title: 'Conservadora Térmica Rígida 45L con Aislamiento PU',
    category: 'camping',
    categoryName: 'Camping & Pesca',
    price: 112000,
    oldPrice: 130000,
    badge: '72hs Frío',
    badgeType: 'badge-pro',
    rating: 5,
    reviews: 47,
    img: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80',
    description: 'Conserva el hielo por más de 3 días gracias a su cámara inyectada de poliuretano de alta densidad.',
    specs: [
      'Capacidad para 65 latas más hielo',
      'Tapa reforzada apta como asiento (soporta 110 kg)',
      'Manijas laterales rebatibles ultra resistentes',
      'Tapón de desagüe a rosca antigoteo',
      'Abridor de botellas de acero inoxidable integrado'
    ]
  },

  // --- HOGAR, BAZAR Y CLIMATIZACIÓN ---
  {
    id: 'prod-8',
    title: 'Estufa a Gas Portátil con Encendido Piezoeléctrico y Válvula',
    category: 'hogar',
    categoryName: 'Hogar & Climatización',
    price: 145000,
    oldPrice: 172000,
    badge: 'Calor Instantáneo',
    badgeType: 'badge-sale',
    rating: 5,
    reviews: 79,
    img: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=600&q=80',
    description: 'Calefacción segura y eficiente para ambientes medianos y grandes. Compatible con garrafas de 10 kg y 15 kg.',
    specs: [
      '3 paneles cerámicos de encendido escalonado',
      'Triple sistema de seguridad: corte por falta de llama y sensor de O2',
      'Ruedas multidireccionales reforzadas para fácil traslado',
      'Consumo mínimo: calor rápido con bajo gasto de gas',
      'Gabinete con pintura epoxi termoendurecible'
    ]
  },
  {
    id: 'prod-9',
    title: 'Anafe a Gas de 1 Hornalla Portátil con Valija de Transporte',
    category: 'hogar',
    categoryName: 'Hogar & Climatización',
    price: 49900,
    oldPrice: 62000,
    badge: 'Promoción Especial',
    badgeType: 'badge-featured',
    rating: 5,
    reviews: 110,
    img: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80',
    description: 'Ideal para emergencias del hogar, camping, pesca, furgones y quinchos. Funciona con cartucho descartable de gas butano.',
    specs: [
      'Quemador de aluminio de llama envolvente y alta eficiencia',
      'Encendido piezoeléctrico automático (sin necesidad de fósforos)',
      'Regulador de potencia de llama gradual',
      'Traba de seguridad para cartucho de gas',
      'Valija plástica de transporte incluida'
    ]
  },
  {
    id: 'prod-10',
    title: 'Batería de Cocina Antiadherente Granito 5 Piezas Triple Capa',
    category: 'hogar',
    categoryName: 'Hogar & Climatización',
    price: 125000,
    oldPrice: 149000,
    badge: 'Gran Bazar',
    badgeType: 'badge-pro',
    rating: 5,
    reviews: 36,
    img: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
    description: 'Ollas y sartenes forjadas de alta durabilidad aptas para cocina a gas, eléctrica e inducción.',
    specs: [
      'Recubrimiento cerámico marmolado libre de PFOA y metales pesados',
      'Mangos y asas atérmicos Soft Touch siliconados',
      'Fondo difusor de calor indeformable',
      'Tapas de vidrio templado con válvula de vapor',
      'Fácil limpieza y máxima resistencia a rayones'
    ]
  },

  // --- INDUMENTARIA DEPORTIVA Y TÉRMICA ---
  {
    id: 'prod-11',
    title: 'Campera Técnica Softshell Térmica e Impermeable con Capucha',
    category: 'indumentaria',
    categoryName: 'Indumentaria Técnica',
    price: 94500,
    oldPrice: 115000,
    badge: 'Abrigo Técnico',
    badgeType: 'badge-sale',
    rating: 5,
    reviews: 58,
    img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600&q=80',
    description: 'Corta vientos, impermeable y con forro polar micropolar interno. Ideal tanto para trabajo en exterior como trekking.',
    specs: [
      'Membrana elástica tricapa transpirable 5000/5000',
      'Bolsillos frontales y de manga con cierres estancos termosellados',
      'Puños con ajuste velcro y cintura con cordón elástico',
      'Capucha regulable desmontable',
      'Disponible en talles S al XXL en verde táctico y negro'
    ]
  },
  {
    id: 'prod-12',
    title: 'Borcegos de Seguridad y Trekking con Puntera y Suela Dieléctrica',
    category: 'indumentaria',
    categoryName: 'Indumentaria Técnica',
    price: 118000,
    oldPrice: 139000,
    badge: 'Calzado de Seguridad',
    badgeType: 'badge-pro',
    rating: 5,
    reviews: 44,
    img: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80',
    description: 'Protección certificada combinada con la comodidad de un calzado de montaña para jornadas de 12 horas.',
    specs: [
      'Cuero flor hidrofugado resistente a aceites e hidrocarburos',
      'Puntera de composite ultraliviana (no detecta metales)',
      'Suela bidensidad de poliuretano antideslizante y amortiguadora',
      'Plantilla anatómica con tratamiento antimicrobiano',
      'Cuello y fuelle acolchados para proteger el tobillo'
    ]
  }
];

// Estado global de la aplicación
const AppState = {
  activeCategory: 'all',
  searchQuery: '',
  quoteCart: JSON.parse(localStorage.getItem('prostore_quote_cart') || '[]')
};

// Formateador de moneda (Pesos con separadores)
function formatCurrency(amount) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(amount);
}

// Inicialización de la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilterTabs();
  setupSearch();
  setupQuoteDrawer();
  setupProductModal();
  setupFloatingWhatsApp();
  setupContactForm();
  setupMobileDrawer();
  updateCartBadge();
});

/* ==========================================================================
   RENDERIZADO DE PRODUCTOS Y FILTRADO
   ========================================================================== */
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = PRODUCTS_DATA.filter(prod => {
    const matchesCategory = AppState.activeCategory === 'all' || prod.category === AppState.activeCategory;
    const matchesSearch = AppState.searchQuery === '' ||
      prod.title.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
      prod.categoryName.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(AppState.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--slate-500);">
        <p style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">No se encontraron artículos</p>
        <p style="font-size: 0.875rem;">Probá buscando con otro término o seleccionando otra categoría.</p>
        <button onclick="resetFilters()" class="btn btn-accent" style="margin-top: 1.25rem;">
          Ver todas las categorías
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => `
    <article class="product-card" data-id="${prod.id}">
      <span class="badge-floating ${prod.badgeType}">${prod.badge}</span>
      
      <div class="product-card-img-box">
        <img src="${prod.img}" alt="${prod.title}" class="product-img" loading="lazy" />
        <button class="quick-view-overlay-btn" onclick="openProductModal('${prod.id}')" aria-label="Vista rápida de ${prod.title}">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
          Vista Rápida
        </button>
      </div>

      <div class="product-card-body">
        <span class="product-category-meta">${prod.categoryName}</span>
        <h4 class="product-title" title="${prod.title}">${prod.title}</h4>
        
        <div class="product-rating">
          ${'★'.repeat(prod.rating)}${'☆'.repeat(5 - prod.rating)}
          <span class="rating-count">(${prod.reviews})</span>
        </div>

        <div class="product-pricing-box">
          <div class="product-old-price">${formatCurrency(prod.oldPrice)}</div>
          <div class="product-current-price">${formatCurrency(prod.price)}</div>
        </div>

        <div class="product-card-actions">
          <button class="btn-add-quote" onclick="addToQuoteCart('${prod.id}')" title="Agregar a mi lista de cotización">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            Cotizar
          </button>
          
          <button class="btn-direct-wa" onclick="directProductWhatsApp('${prod.id}')" title="Consultar disponibilidad por WhatsApp">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.983.538 1.831.815 2.791.815 3.181 0 5.768-2.586 5.768-5.766 0-3.18-2.587-5.768-5.768-5.768zm3.385 8.167c-.145.408-.847.785-1.18.835-.308.046-.694.066-1.121-.07-.367-.117-.837-.289-1.442-.55-1.258-.544-2.074-1.796-2.137-1.879-.062-.084-.509-.678-.509-1.294 0-.616.323-.919.438-1.042.115-.123.25-.154.333-.154.084 0 .167.001.24.005.078.004.182-.03.284.215.105.25.355.867.386.93.031.062.052.135.01.219-.042.083-.063.135-.125.208-.063.073-.131.164-.188.219-.063.063-.129.13-.056.255.073.125.324.536.697.868.48.428.884.561 1.01.624.125.062.198.052.271-.031.073-.083.313-.365.396-.49.083-.125.167-.104.281-.062.115.041.73.344.855.406.125.062.208.094.24.146.031.052.031.302-.114.71z"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Configurar pestañas de filtrado
function setupFilterTabs() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });
}

// Búsqueda en tiempo real
function setupSearch() {
  const searchInput = document.getElementById('search-products-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    AppState.searchQuery = e.target.value.trim();
    renderProducts();
  });
}

function resetFilters() {
  AppState.activeCategory = 'all';
  AppState.searchQuery = '';
  const searchInput = document.getElementById('search-products-input');
  if (searchInput) searchInput.value = '';

  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-category') === 'all');
  });

  renderProducts();
}

// Filtro desde las tarjetas de categorías superiores
function filterFromCategoryCard(catKey) {
  AppState.activeCategory = catKey;
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-category') === catKey);
  });
  renderProducts();
  
  const offersSection = document.getElementById('ofertas');
  if (offersSection) {
    offersSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   SISTEMA DE LISTA DE COTIZACIÓN (CARRITO CON EXPORTACIÓN A WHATSAPP)
   ========================================================================== */
function setupQuoteDrawer() {
  const openButtons = document.querySelectorAll('.trigger-open-quote');
  const closeBtn = document.getElementById('close-quote-drawer');
  const overlay = document.getElementById('quote-drawer-overlay');
  const sendWhatsAppBtn = document.getElementById('send-whatsapp-order-btn');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openQuoteDrawer();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeQuoteDrawer);
  if (overlay) overlay.addEventListener('click', closeQuoteDrawer);

  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', sendOrderViaWhatsApp);
  }
}

function openQuoteDrawer() {
  const drawer = document.getElementById('quote-drawer');
  const overlay = document.getElementById('quote-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('active');
    renderQuoteDrawerItems();
  }
}

function closeQuoteDrawer() {
  const drawer = document.getElementById('quote-drawer');
  const overlay = document.getElementById('quote-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
  }
}

function addToQuoteCart(prodId) {
  const product = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!product) return;

  const existingItem = AppState.quoteCart.find(item => item.id === prodId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    AppState.quoteCart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      categoryName: product.categoryName,
      quantity: 1
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`¡"${product.title.slice(0, 28)}..." añadido a tu lista!`);
}

function removeFromQuoteCart(prodId) {
  AppState.quoteCart = AppState.quoteCart.filter(item => item.id !== prodId);
  saveCart();
  updateCartBadge();
  renderQuoteDrawerItems();
  showToast('Artículo eliminado de la lista');
}

function updateItemQuantity(prodId, delta) {
  const item = AppState.quoteCart.find(i => i.id === prodId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromQuoteCart(prodId);
    return;
  }

  saveCart();
  updateCartBadge();
  renderQuoteDrawerItems();
}

function saveCart() {
  localStorage.setItem('prostore_quote_cart', JSON.stringify(AppState.quoteCart));
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-counter');
  const totalCount = AppState.quoteCart.reduce((acc, curr) => acc + curr.quantity, 0);
  badges.forEach(b => {
    b.textContent = totalCount;
  });
}

function renderQuoteDrawerItems() {
  const container = document.getElementById('drawer-items-container');
  const totalPriceElem = document.getElementById('drawer-total-amount');
  const sendBtn = document.getElementById('send-whatsapp-order-btn');
  if (!container) return;

  if (AppState.quoteCart.length === 0) {
    container.innerHTML = `
      <div class="drawer-empty-state">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
        </svg>
        <h4>Tu lista de cotización está vacía</h4>
        <p>Agregá artículos desde el catálogo para solicitar precio y stock por WhatsApp.</p>
      </div>
    `;
    if (totalPriceElem) totalPriceElem.textContent = '$ 0';
    if (sendBtn) sendBtn.setAttribute('disabled', 'true');
    return;
  }

  if (sendBtn) sendBtn.removeAttribute('disabled');

  let total = 0;
  container.innerHTML = AppState.quoteCart.map(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    return `
      <div class="drawer-item">
        <img src="${item.img}" alt="${item.title}" class="drawer-item-img" />
        <div class="drawer-item-info">
          <h5>${item.title}</h5>
          <div class="drawer-item-price">${formatCurrency(item.price)} c/u</div>
          <div class="drawer-item-qty">
            <button class="qty-btn" onclick="updateItemQuantity('${item.id}', -1)" aria-label="Disminuir">-</button>
            <span style="font-weight: 700; font-size: 0.875rem; min-width: 16px; text-align: center;">${item.quantity}</span>
            <button class="qty-btn" onclick="updateItemQuantity('${item.id}', 1)" aria-label="Aumentar">+</button>
          </div>
        </div>
        <button class="drawer-item-remove" onclick="removeFromQuoteCart('${item.id}')" title="Eliminar">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  if (totalPriceElem) {
    totalPriceElem.textContent = formatCurrency(total);
  }
}

// Construye y abre el mensaje formateado en WhatsApp
function sendOrderViaWhatsApp() {
  if (AppState.quoteCart.length === 0) return;

  let message = '👋 *¡Hola Pro-Store! Deseo cotizar los siguientes artículos de su catálogo web:*\n\n';
  let total = 0;

  AppState.quoteCart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `🔹 *${item.quantity}x* ${item.title}\n   Subtotal: ${formatCurrency(subtotal)}\n`;
  });

  message += `\n💰 *Monto Estimado:* ${formatCurrency(total)}`;
  message += '\n\n📍 _Por favor confírmenme disponibilidad, formas de pago y opciones de entrega. ¡Muchas gracias!_';

  const encodedUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

// Consulta directa rápida de un solo producto
function directProductWhatsApp(prodId) {
  const product = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!product) return;

  const msg = `👋 *¡Hola Pro-Store!* Estoy interesado/a en este producto de la tienda:\n\n` +
              `📌 *${product.title}*\n` +
              `🏷️ Rubro: ${product.categoryName}\n` +
              `💵 Precio de referencia: ${formatCurrency(product.price)}\n\n` +
              `¿Tienen stock disponible y qué opciones de envío o retiro manejan?`;

  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

/* ==========================================================================
   MODAL NATIVO <dialog> (VISTA RÁPIDA DE FICHA TÉCNICA)
   ========================================================================== */
function setupProductModal() {
  const modal = document.getElementById('product-quickview-modal');
  const closeBtn = document.getElementById('close-product-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.close());
  }

  // Cerrar al hacer clic fuera del contenido
  if (modal) {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        modal.close();
      }
    });
  }
}

function openProductModal(prodId) {
  const product = PRODUCTS_DATA.find(p => p.id === prodId);
  const modal = document.getElementById('product-quickview-modal');
  if (!product || !modal) return;

  document.getElementById('modal-img').src = product.img;
  document.getElementById('modal-img').alt = product.title;
  document.getElementById('modal-category').textContent = product.categoryName;
  document.getElementById('modal-title').textContent = product.title;
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-old-price').textContent = formatCurrency(product.oldPrice);
  document.getElementById('modal-current-price').textContent = formatCurrency(product.price);

  const specsList = document.getElementById('modal-specs');
  if (specsList) {
    specsList.innerHTML = product.specs.map(spec => `
      <li>
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        ${spec}
      </li>
    `).join('');
  }

  // Configurar botones del modal
  const addBtn = document.getElementById('modal-add-quote-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      addToQuoteCart(product.id);
      modal.close();
      openQuoteDrawer();
    };
  }

  const waBtn = document.getElementById('modal-wa-btn');
  if (waBtn) {
    waBtn.onclick = () => {
      directProductWhatsApp(product.id);
    };
  }

  modal.showModal();
}

/* ==========================================================================
   WIDGET FLOTANTE DE WHATSAPP CON GLOBO INTERACTIVO
   ========================================================================== */
function setupFloatingWhatsApp() {
  const bubble = document.getElementById('whatsapp-chat-bubble');
  const closeBubbleBtn = document.getElementById('close-wa-bubble');
  const triggerBtn = document.getElementById('floating-whatsapp-btn');

  if (closeBubbleBtn && bubble) {
    closeBubbleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      bubble.classList.add('hidden');
    });
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      const msg = '👋 ¡Hola Pro-Store! Vengo de ver su catálogo online y deseo hacer una consulta.';
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

/* ==========================================================================
   FORMULARIO DE CONTACTO Y ASESORAMIENTO TÉCNICO
   ========================================================================== */
function setupContactForm() {
  const form = document.getElementById('quick-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const category = document.getElementById('form-category').value;
    const message = document.getElementById('form-message').value.trim();

    if (!name || !phone) {
      showToast('Por favor completá tu nombre y teléfono de contacto.');
      return;
    }

    const text = `👋 *Nueva Consulta desde la Landing Web:*\n\n` +
                 `👤 *Cliente:* ${name}\n` +
                 `📱 *Teléfono/WhatsApp:* ${phone}\n` +
                 `🏷️ *Rubro de Interés:* ${category}\n` +
                 `📝 *Mensaje:* ${message || 'Deseo recibir lista de precios y asesoramiento.'}`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    showToast('¡Redirigiendo a WhatsApp con tu consulta armada!');
    form.reset();
  });
}

/* ==========================================================================
   MENÚ RESPONSIVE MÓVIL (DRAWER LATERAL)
   ========================================================================== */
function setupMobileDrawer() {
  const openBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('close-mobile-drawer');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const links = document.querySelectorAll('.mobile-nav-link');

  function open() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', close);

  links.forEach(l => l.addEventListener('click', close));
}

/* ==========================================================================
   SISTEMA DE NOTIFICACIONES TOAST
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✔</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Animar entrada
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Salida automática
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
