/* TECNOROSITA — experiencia.js Rev.3: todas las mejoras solicitadas */
var UX="https://images.unsplash.com/",Q="?w=600&h=450&fit=crop&auto=format&q=75",QL="?w=1200&h=500&fit=crop&auto=format&q=75";
var PX="https://videos.pexels.com/video-files/";

/* ===== 1. BANNER CON FOTOS REALES ===== */
/* Los videos se desactivan para priorizar las fotos Unsplash del HTML.
   Las imágenes se controlan desde hero__bg-img en el CSS. */
(function(){var h=document.querySelector(".hero");if(!h)return;
/* NO inyectar videos — las fotos ya están en el HTML como <img class="hero__bg-img"> */
})();

/* ===== 2. CATEGORÍAS CON FOTOS REALES ===== */
(function(){var F={"category-tile--1":UX+"photo-1558002038-1055907df827"+QL,"category-tile--2":UX+"photo-1593062096033-9a26b09da705"+QL,"category-tile--3":UX+"photo-1531297484001-80022131f5a1"+QL,"category-tile--4":UX+"photo-1542751371-adc38448a05e"+QL};Object.entries(F).forEach(function(e){var t=document.querySelector("."+e[0]);if(!t)return;t.style.backgroundImage="url('"+e[1]+"')";t.style.backgroundSize="cover";t.style.backgroundPosition="center";var i=t.querySelector(".category-tile__icon");if(i)i.style.display="none"})})();

/* ===== 2b. PROMO TILES CON FOTOS REALES ===== */
(function(){var P={
  "promo-tile--monitores":UX+"photo-1593062096033-9a26b09da705"+QL,
  "promo-tile--perifericos":UX+"photo-1531297484001-80022131f5a1"+QL,
  "promo-tile--sillas":UX+"photo-1598550476439-6847785fcea6"+QL
};Object.entries(P).forEach(function(e){var t=document.querySelector("."+e[0]);if(!t)return;t.style.backgroundImage="url('"+e[1]+"')";t.style.backgroundSize="cover";t.style.backgroundPosition="center";var i=t.querySelector(".promo-tile__icon");if(i)i.style.display="none"})})();

/* ===== 3. WHATSAPP FLOTANTE ===== */
(function(){if(document.querySelector(".whatsapp-float"))return;var d=document.createElement("div");d.className="whatsapp-float";
d.innerHTML='<div class="whatsapp-float__chat" id="waChat"><div class="whatsapp-float__header"><img src="'+UX+'photo-1611532736597-de2d4265fba3?w=80&h=80&fit=crop&auto=format" alt="Soporte">TecnoRosita Soporte</div><div class="whatsapp-float__body"><p>¡Hola! 👋 ¿Necesitas ayuda con algún producto o tienes dudas sobre tu compra? Estamos aquí para ti.</p><a href="https://wa.me/56912345678?text=Hola%20TecnoRosita%20necesito%20ayuda" target="_blank">💬 Iniciar conversación</a></div></div><button class="whatsapp-float__btn" id="waBtn" aria-label="WhatsApp">💬</button>';
document.body.appendChild(d);
document.getElementById("waBtn").addEventListener("click",function(){document.getElementById("waChat").classList.toggle("is-open")})})();

/* ===== 4. VIDEO FONDO EN LOGIN Y CONTACTO ===== */
(function(){var isLogin=document.getElementById("formLogin")&&(location.pathname.includes("login")||location.href.includes("login"));var isContact=(location.pathname.includes("contacto")||location.href.includes("contacto"));
if(!isLogin&&!isContact)return;var bg=document.createElement("div");bg.className="page-video-bg";bg.innerHTML='<video autoplay muted loop playsinline><source src="'+PX+'5765106/5765106-uhd_2560_1440_24fps.mp4" type="video/mp4"></video>';document.body.prepend(bg)})();

/* ===== 5. REEMPLAZAR VIDEO PROMOCIONAL ===== */
(function(){var vf=document.querySelector(".promo-video__frame video");if(vf){vf.setAttribute("poster",UX+"photo-1542751371-adc38448a05e"+QL);var src=vf.querySelector("source");if(src&&src.src.includes("BigBuckBunny")){src.src=PX+"30470984/13057098_2560_1440_24fps.mp4";vf.load()}}})();

/* ===== 6. CARRUSELES CON PRODUCTOS DISTINTOS ===== */
(function(){if(typeof PRODUCTS==="undefined"||!document.getElementById("allProductsCarousel"))return;
/* El home.js original repite productos en todos los carruseles.
   Reorganizamos para que cada sección muestre productos diferentes */
var used={};function getUnique(filter,max){return PRODUCTS.filter(function(p){return(!filter||filter(p))&&!used[p.id]}).slice(0,max).map(function(p){used[p.id]=true;return p})}
/* Limpiar los carruseles y reinyectar con productos únicos */
setTimeout(function(){
  if(typeof renderCarousel!=="function")return;
  var cats=["allProductsCarousel","featuredCarousel","setupCarousel","comboCarousel","streamingCarousel","accessoriesCarousel"];
  cats.forEach(function(id){var el=document.getElementById(id);if(el)el.innerHTML=""});
  renderCarousel("allProductsCarousel",getUnique(null,8));
  renderCarousel("featuredCarousel",getUnique(function(p){return p.featured||p.price>80000},6));
  renderCarousel("setupCarousel",getUnique(function(p){return["Teclados","Mouse","Sillas","Audífonos"].includes(p.category)},6));
  renderCarousel("comboCarousel",getUnique(function(p){return["Componentes","Audio","Accesorios","Streaming"].includes(p.category)},6));
  renderCarousel("streamingCarousel",getUnique(function(p){return["Streaming","Hogar Inteligente","Monitores","Laptops"].includes(p.category)},6));
  renderCarousel("accessoriesCarousel",getUnique(function(p){return p.category==="Accesorios"},6));
},800)})();

/* ===== 7. DETALLE DE PRODUCTO COMPLETO (estilo SP Digital) ===== */
var YOUTUBE_REVIEWS={1:"xtIKZMKZSGQ",2:"xtIKZMKZSGQ",3:"5_sOOjFYpco",4:"vP4esERlU84",5:"e4IOaKT9y3E",6:"e4IOaKT9y3E",7:"xtIKZMKZSGQ",8:"xtIKZMKZSGQ",9:"5_sOOjFYpco",10:"vP4esERlU84",11:"e4IOaKT9y3E",12:"e4IOaKT9y3E",13:"5_sOOjFYpco",14:"vP4esERlU84",15:"xtIKZMKZSGQ",16:"xtIKZMKZSGQ",17:"5_sOOjFYpco",18:"xtIKZMKZSGQ",19:"5_sOOjFYpco",20:"xtIKZMKZSGQ",21:"vP4esERlU84",22:"5_sOOjFYpco",23:"xtIKZMKZSGQ",24:"vP4esERlU84"};

var DESC={
1:"El Teclado Mecánico Apex Pro 7 RGB redefine lo que esperas de un periférico premium. Con switches lineales silenciosos de accionamiento ajustable, chassis de aluminio de grado aeronáutico y retroiluminación RGB personalizable por tecla con 16 millones de colores, este teclado ofrece una experiencia de escritura y juego sin igual. Su conectividad dual USB-C y Bluetooth permite alternar entre hasta 3 dispositivos. Incluye reposamuñecas magnético, keycaps de doble inyección PBT y software de configuración de macros.",
2:"El Mouse Gamer Viper Elite X es el compañero perfecto para jugadores competitivos. Con sensor óptico de 25.600 DPI, 8 botones programables y un peso pluma de solo 62 gramos, cada movimiento se traduce en ventaja. Batería de 70 horas, dock de carga magnética y pies de PTFE vírgenes para deslizamiento sin fricción. El diseño ergonómico Claw/Palm se adapta a sesiones maratónicas.",
3:"Los Audífonos Gamer Aura Surround 7.1 te sumergen en el campo de batalla con sonido posicional ultra nítido. Drivers de 50mm neodimio, micrófono retráctil con cancelación activa de ruido y almohadillas de espuma viscoelástica con gel refrigerante. Conexión dual USB-C y 3.5mm para compatibilidad universal con PC, consolas y móviles.",
4:"El Monitor Curvo Gamer 27\" QHD 240Hz transforma tu escritorio en un centro de mando. Panel VA con curvatura 1500R, resolución QHD 2560×1440, tasa de refresco 240Hz y tiempo de respuesta 1ms MPRT. Certificación HDR400, G-Sync y FreeSync Premium. Soporte ergonómico con ajuste completo.",
5:"La Silla Ergonómica Gamer Titan Royal combina rendimiento de competición con elegancia de diseño. Cuero PU premium, soporte lumbar 4D, reclinación 90°-165° y apoyabrazos regulables en 4 dimensiones. Base de aluminio cromado con ruedas silenciosas PU de 65mm. Certificación BIFMA para uso intensivo.",
6:"El Notebook Gamer Eclipse Pro 16\" es la estación portátil definitiva. Pantalla QHD 165Hz IPS de 16\", procesador de 14 núcleos, gráfica dedicada 8GB GDDR6, 32GB RAM DDR5 y SSD NVMe Gen4 de 1TB. Batería de 99.9Wh para hasta 8 horas. Webcam IR con Windows Hello y refrigeración de doble ventilador de vapor."
};

var REVIEWS_DATA=[
{autor:"GamerPro_CL",fecha:"15/09/2026",stars:5,texto:"Increíble calidad de construcción. Se nota que es un producto premium desde que lo sacas de la caja. 100% recomendado para gamers exigentes."},
{autor:"TechReviewer",fecha:"10/09/2026",stars:5,texto:"Mejor relación calidad-precio que he probado. El rendimiento es de otro nivel y la garantía TecnoRosita Care da mucha tranquilidad."},
{autor:"Anónimo",fecha:"08/09/2026",stars:4,texto:"Muy bueno en general. El envío fue rápido y el producto llegó en perfectas condiciones. Le doy 4 estrellas porque el empaque podría mejorar."},
{autor:"María S.",fecha:"01/09/2026",stars:5,texto:"Lo compré para mi hijo y está encantado. La calidad es excelente y el precio es justo para lo que ofrece. Compramos el segundo para regalo."},
{autor:"JuanGamer",fecha:"28/08/2026",stars:4,texto:"Buen producto, funciona perfecto para juegos competitivos. El soporte técnico de TecnoRosita respondió mis dudas en menos de una hora."}
];

var G={
1:{f:["photo-1618384887929-16ec33fab9ef","photo-1587829741301-dc798b83add3","photo-1541140532154-b024d705b90a","photo-1628676633339-81fc485c635c","photo-1529236183275-4fdcf2bc987e"],l:"photo-1593152167544-085d3b9c4265",s:[["Tipo","Mecánico RGB"],["Switch","Lineal silencioso"],["Conexión","USB-C + BT 5.0"],["RGB","16M colores por tecla"],["Layout","Full 104 teclas"],["Material","Aluminio + PBT"],["Reposamuñecas","Magnético"],["Garantía","24 meses"]]},
2:{f:["photo-1527814050087-3793815479db","photo-1527864550417-7fd91fc51a46","photo-1605773527852-c546a8584ea3","photo-1615663245857-ac93bb7c39e7","photo-1613141411244-0e4ac259d217"],l:"photo-1563297007-0686b7003af7",s:[["Sensor","25.600 DPI"],["Botones","8 programables"],["Peso","62 g"],["Conexión","2.4GHz + BT"],["Batería","70 h"],["Grip","Claw/Palm"],["Pies","PTFE"],["Dock","Magnético"]]},
3:{f:["photo-1505740420928-5e560c06d30e","photo-1546435770-a3e426bf59e7","photo-1583394838336-acd977736f90","photo-1491927570842-0261e477d937","photo-1697055656373-720a6a0e9b4c"],l:"photo-1510915361894-db8b60106cb1",s:[["Tipo","Over-ear"],["Audio","7.1 virtual"],["Driver","50mm"],["Mic","ANC retráctil"],["Conexión","USB-C + 3.5mm"],["Peso","298 g"],["Almohadillas","Gel"],["Compatibilidad","PC/PS5/Xbox/Switch"]]},
4:{f:["photo-1527443224154-c4a3942d3acf","photo-1616763355548-1b11cea38a4c","photo-1585792180666-f7347c490ee2","photo-1593062096033-9a26b09da705","photo-1586210579191-33b45e38fa2c"],l:"photo-1593062096033-9a26b09da705",s:[["Panel","VA 1500R"],["Resolución","2560×1440"],["Refresco","240 Hz"],["Respuesta","1 ms"],["HDR","HDR400"],["Sync","G-Sync + FreeSync"],["HDMI","2× 2.1"],["Soporte","Ajuste 4D"]]},
5:{f:["photo-1589364187089-2961917e3b0f","photo-1580480055273-228ff5388ef8","photo-1598550476439-6847785fcea6","photo-1616588589676-62b3d4ff6f04","photo-1611269154421-4e27233ac5c7"],l:"photo-1616588589676-62b3d4ff6f04",s:[["Material","Cuero PU"],["Lumbar","4D"],["Reclinación","90°–165°"],["Peso máx","150 kg"],["Apoyabrazos","4D"],["Ruedas","PU 65mm"],["Cojines","Memory foam"],["BIFMA","Certificada"]]},
6:{f:["photo-1496181133206-80ce9b88a853","photo-1541807084-5c52b6b3adef","photo-1588872657578-7efd1f1555ed","photo-1531297484001-80022131f5a1","photo-1525547719571-a2d4ac8945e2"],l:"photo-1531297484001-80022131f5a1",s:[["Pantalla",'16" QHD 165Hz'],["CPU","14 núcleos"],["GPU","8 GB GDDR6"],["RAM","32 GB DDR5"],["SSD","1 TB Gen4"],["Batería","99.9 Wh"],["Webcam","IR Hello"],["Cooler","Dual vapor"]]},
7:{f:["photo-1595225476474-87563907a212","photo-1618384887929-16ec33fab9ef","photo-1608377205700-249f4b48b180","photo-1619683322755-4545503f1afa","photo-1628677197992-21c59f782de7"],l:"photo-1593152167544-085d3b9c4265",s:[["Formato","60%"],["Switch","Táctil"],["BT","5.0"],["Batería","40h"],["Keycaps","PBT"],["Hot-swap","Sí"],["Peso","580g"],["Foam","Absorción"]]},
8:{f:["photo-1615663245857-ac93bb7c39e7","photo-1527814050087-3793815479db","photo-1551515300-2d3b7bb80920","photo-1628832307345-7404b47f1751","photo-1613141411244-0e4ac259d217"],l:"photo-1563297007-0686b7003af7",s:[["Sensor","20K DPI"],["Acabado","Dorado"],["Botones","6"],["Peso","75g"],["Switch","Óptico"],["Cable","Paracord"],["Pies","Cerámicos"],["RGB","2 zonas"]]},
9:{f:["photo-1546435770-a3e426bf59e7","photo-1505740420928-5e560c06d30e","photo-1583394838336-acd977736f90","photo-1491927570842-0261e477d937","photo-1697055656373-720a6a0e9b4c"],l:"photo-1510915361894-db8b60106cb1",s:[["ANC","-35dB"],["Driver","40mm grafeno"],["Batería","60h"],["BT","5.3"],["Codec","LDAC"],["Peso","252g"],["Plegable","Sí"],["Estuche","Incluido"]]},
10:{f:["photo-1616763355548-1b11cea38a4c","photo-1527443224154-c4a3942d3acf","photo-1586210579191-33b45e38fa2c","photo-1585792180666-f7347c490ee2","photo-1593062096033-9a26b09da705"],l:"photo-1593062096033-9a26b09da705",s:[["Panel","IPS Nano"],["Res","3440×1440"],["Hz","165"],["Curva","1900R"],["USB-C","PD 90W"],["FreeSync","Premium Pro"],["KVM","Sí"],["Audio","2×5W"]]},
11:{f:["photo-1580480055273-228ff5388ef8","photo-1589364187089-2961917e3b0f","photo-1598550476439-6847785fcea6","photo-1611269154421-4e27233ac5c7","photo-1616588589676-62b3d4ff6f04"],l:"photo-1616588589676-62b3d4ff6f04",s:[["Tapiz","Terciopelo"],["Base","Aluminio"],["Cojín","Memory foam"],["Gas","Class 4"],["Giro","360°"],["Garantía","3 años"],["Ajuste","Neumático"],["Peso","18kg"]]},
12:{f:["photo-1541807084-5c52b6b3adef","photo-1496181133206-80ce9b88a853","photo-1525547719571-a2d4ac8945e2","photo-1588872657578-7efd1f1555ed","photo-1531297484001-80022131f5a1"],l:"photo-1531297484001-80022131f5a1",s:[["Pantalla",'14" sRGB'],["CPU","10 núcleos"],["RAM","16GB"],["SSD","512GB"],["Peso","1.4kg"],["Batería","72Wh"],["Cuerpo","Aluminio"],["Bisagra","180°"]]},
13:{f:["photo-1545454675-3531b543be5d","photo-1558089687-f282d8b1b0d3","photo-1608043152269-423dbba4e7e1","photo-1558618666-fcd25c85f82e","photo-1544085311-11a028465b03"],l:"photo-1558089687-f282d8b1b0d3",s:[["Potencia","40W"],["BT","5.0 aptX"],["RGB","12 modos"],["Entradas","USB-C+AUX+óptico"],["Largo","52cm"],["EQ","3 presets"],["Control","Táctil"],["Sub","Pasivo"]]},
14:{f:["photo-1591488320449-011701bb6704","photo-1587202372775-e229f172b9d7","photo-1555618254-5e28ea21ac15","photo-1562976540-1502c2145186","photo-1518770660439-4636190af475"],l:"photo-1593152167544-085d3b9c4265",s:[["GPU","RTX 4070 Ti"],["VRAM","12GB GDDR6X"],["CUDA","7680"],["TDP","285W"],["RT","3ª gen"],["DLSS","3.5"],["Cooler","Triple fan"],["Salidas","3×DP+HDMI 2.1"]]},
15:{f:["photo-1558089687-f282d8b1b0d3","photo-1558002038-1055907df827","photo-1556228578-0d85b1a4d571","photo-1544085311-11a028465b03","photo-1585771724684-38269d6639fd"],l:"photo-1558002038-1055907df827",s:[["Compatible","Alexa/Google/HomeKit"],["Protocolo","Zigbee+WiFi+Thread"],["Pantalla",'4" táctil'],["Dispositivos","200"],["Audio","5W"],["USB-C","Sí"],["Rutinas","Sí"],["Cifrado","E2E"]]},
16:{f:["photo-1611532736597-de2d4265fba3","photo-1587925358603-c2eea5305bbc","photo-1596742578443-7682ef5251cd","photo-1516035069371-29a1b244cc32","photo-1611532736597-de2d4265fba3"],l:"photo-1587925358603-c2eea5305bbc",s:[["Res","4K 30fps"],["Sensor","Sony 8MP"],["AF","PDAF tracking"],["FOV","78°"],["Mic","Estéreo ANC"],["Montaje","Clip+trípode"],["AI","Background"],["HDR","Auto"]]},
17:{f:["photo-1598488035139-bdbb2231ce04","photo-1590602847861-f357a9332bbc","photo-1619961310056-1f5b8e4e6e0d","photo-1548123378-bde4eca81d6d","photo-1571902943202-507ec2618e8f"],l:"photo-1598488035139-bdbb2231ce04",s:[["Tipo","Condensador"],["Res","24bit/96kHz"],["Patrón","Cardioide"],["USB-C","Plug&play"],["Monitor","3.5mm"],["Cuerpo","Zinc+pop"],["Ganancia","Perilla"],["SW","EQ+gate"]]},
18:{f:["photo-1616499452581-cc7f8e3dd3c4","photo-1563297007-0686b7003af7","photo-1593152167544-085d3b9c4265","photo-1542751371-adc38448a05e","photo-1511512578047-dfb367046420"],l:"photo-1542751371-adc38448a05e",s:[["Tamaño","900×400mm"],["Superficie","Micro-tejido"],["Base","Caucho"],["RGB","12 modos"],["USB","Pass-through"],["Agua","Resistente"],["Costuras","Reforzadas"],["Lavable","Sí"]]},
19:{f:["photo-1592840496694-26d035b52b48","photo-1606167668584-78701c57f13d","photo-1578303512597-81e6cc155b3e","photo-1511512578047-dfb367046420","photo-1600080972464-8e5f35f63d08"],l:"photo-1511512578047-dfb367046420",s:[["BT","5.2+2.4GHz"],["Compatible","PC/PS5/Switch"],["Batería","30h"],["Vibración","Háptica HD"],["Gatillos","Adaptativos"],["Peso","218g"],["Giroscopio","6 ejes"],["App","Mapeo"]]},
20:{f:["photo-1625842268584-8f3296236761","photo-1611532736597-de2d4265fba3","photo-1588872657578-7efd1f1555ed","photo-1525547719571-a2d4ac8945e2","photo-1531297484001-80022131f5a1"],l:"photo-1588872657578-7efd1f1555ed",s:[["Puertos","HDMI 4K+3×USB+SD"],["PD","100W"],["Material","Aluminio CNC"],["Cable","15cm USB-C"],["Peso","58g"],["SD","UHS-II"],["Ethernet","Gigabit"],["Compatible","Mac/PC/iPad"]]},
21:{f:["photo-1597848212624-a19eb35e2571","photo-1625842268584-8f3296236761","photo-1531297484001-80022131f5a1","photo-1588872657578-7efd1f1555ed","photo-1541807084-5c52b6b3adef"],l:"photo-1531297484001-80022131f5a1",s:[["Capacidad","1 TB"],["Lectura","1050 MB/s"],["USB","3.2 Gen2"],["IP","IP65"],["AES","256-bit"],["Peso","48g"],["Caídas","2m"],["Compatible","PC/Mac/PS5"]]},
22:{f:["photo-1583394838336-acd977736f90","photo-1505740420928-5e560c06d30e","photo-1546435770-a3e426bf59e7","photo-1697055656373-720a6a0e9b4c","photo-1491927570842-0261e477d937"],l:"photo-1510915361894-db8b60106cb1",s:[["Material","Aluminio"],["RGB","7 colores"],["USB","2×3.0"],["Gancho","Silicona"],["Base","420g"],["Altura","25cm"],["Cable","USB-C"],["Universal","Sí"]]},
23:{f:["photo-1558618666-fcd25c85f82e","photo-1542751371-adc38448a05e","photo-1511512578047-dfb367046420","photo-1556228578-0d85b1a4d571","photo-1544085311-11a028465b03"],l:"photo-1542751371-adc38448a05e",s:[["Largo","5m cortable"],["LEDs","300 RGBIC"],["Colores","16M"],["Control","App+IR+voz"],["Música","Mic sync"],["Adhesivo","3M"],["USB","5V 3A"],["Garantía","18 meses"]]},
24:{f:["photo-1609091839311-d5365f9ff1c5","photo-1625842268584-8f3296236761","photo-1588872657578-7efd1f1555ed","photo-1525547719571-a2d4ac8945e2","photo-1531297484001-80022131f5a1"],l:"photo-1588872657578-7efd1f1555ed",s:[["GaN","III"],["Potencia","65W"],["Puertos","2×USB-C+USB-A"],["PD","3.0+QC 4.0"],["Tamaño","45×30×30mm"],["Peso","105g"],["Plegable","Sí"],["Protección","OVP/OCP/OTP"]]}
};

(function(){var c=document.getElementById("productDetail");if(!c)return;
var ob=new MutationObserver(function(){if(!c.innerHTML.trim())return;ob.disconnect();
var id=new URLSearchParams(location.search).get("id");var p=typeof findProductById==="function"?findProductById(id):null;if(!p)return;
var g=G[p.id]||{f:[],s:[],l:null};var fotos=g.f.length?g.f.map(function(ph){return UX+ph+Q}):[p.img||""];while(fotos.length<5&&p.img)fotos.push(p.img);
var ls=g.l?UX+g.l+QL:null;var sp=g.s||[];var low=p.stock>0&&p.stock<=(p.stockCritico||5);
var desc=DESC[p.id]||p.description||p.shortDesc||"Producto premium de alto rendimiento gamer, diseñado para quienes exigen lo mejor. Construcción robusta, materiales de primera calidad y garantía TecnoRosita Care de 12 meses.";
var vidId=YOUTUBE_REVIEWS[p.id];var rating=p.rating||4.7;

/* Thumbnails */
var thumbs=fotos.map(function(u,i){return'<button type="button" class="gallery-thumb '+(i===0?"is-active":"")+'" data-idx="'+i+'"><img src="'+u+'" alt="Foto '+(i+1)+'" loading="lazy"></button>'}).join("");
/* Specs */
var specsH=sp.length?'<div class="detail-specs-grid"><h3 class="detail-specs__title">⚙ Especificaciones técnicas</h3><div class="detail-specs__list">'+sp.map(function(s){return'<div class="detail-spec"><span class="detail-spec__label">'+s[0]+'</span><span class="detail-spec__value">'+s[1]+"</span></div>"}).join("")+"</div></div>":"";
/* Video review */
var vidH=vidId?'<div style="grid-column:1/-1;margin-top:16px"><h3 style="color:var(--gold);font-size:1.2rem;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px">🎬 Video review</h3><div style="position:relative;padding-bottom:56.25%;height:0;border-radius:14px;overflow:hidden;border:1px solid var(--border)"><iframe src="https://www.youtube.com/embed/'+vidId+'?rel=0" style="position:absolute;top:0;left:0;width:100%;height:100%" frameborder="0" allowfullscreen loading="lazy"></iframe></div></div>':"";
/* Info envío, pago, stock */
var infoH='<div class="detail-info-strip"><div class="detail-info-card"><div class="detail-info-card__icon">🚚</div><div><h4>Envío Rápido</h4><p>Despacho en 24-48h a todo Chile. Gratis sobre $60.000. Seguimiento en tiempo real.</p></div></div><div class="detail-info-card"><div class="detail-info-card__icon">💳</div><div><h4>Medios de Pago</h4><p>WebPay, Visa, Mastercard, transferencia bancaria. Hasta 12 cuotas sin interés.</p></div></div><div class="detail-info-card"><div class="detail-info-card__icon">🏪</div><div><h4>Stock en Tienda</h4><p>'+(p.stock>10?"Disponible para retiro en tienda (comuna de Providencia).":p.stock>0?"Últimas unidades. Retiro sujeto a disponibilidad.":"Sin stock en tienda. Solo despacho a domicilio.")+'</p></div></div><div class="detail-info-card"><div class="detail-info-card__icon">🛡️</div><div><h4>Garantía y Condiciones</h4><p>12 meses TecnoRosita Care. Devolución gratuita en 30 días. Soporte técnico 24/7.</p></div></div></div>';
/* Reseñas */
var starsH="";for(var i=0;i<5;i++)starsH+=i<Math.round(rating)?"★":"☆";
var reviewsH='<div class="reviews-section"><h3>⭐ Reseñas y opiniones</h3><div class="review-summary"><div><div class="review-summary__score">'+rating.toFixed(1)+'</div><div class="review-summary__stars">'+starsH+'</div><div class="review-summary__count">Basado en '+REVIEWS_DATA.length+' opiniones</div></div><div class="review-bars"><div><span>5</span><div class="bar"><i style="width:70%"></i></div>3</div><div><span>4</span><div class="bar"><i style="width:30%"></i></div>2</div><div><span>3</span><div class="bar"><i style="width:0%"></i></div>0</div><div><span>2</span><div class="bar"><i style="width:0%"></i></div>0</div><div><span>1</span><div class="bar"><i style="width:0%"></i></div>0</div></div></div>';
reviewsH+=REVIEWS_DATA.map(function(r){var s="";for(var i=0;i<5;i++)s+=i<r.stars?"★":"☆";return'<div class="review-card"><div class="review-card__head"><strong>'+r.autor+'</strong><span>'+r.fecha+'</span><span class="stars">'+s+'</span></div><p>"'+r.texto+'"</p></div>'}).join("")+"</div>";
/* Lifestyle */
var lifeH=ls?'<div class="detail-lifestyle"><h3 class="detail-lifestyle__title">🎮 Así lo usas en tu día a día</h3><div class="detail-lifestyle__img"><img src="'+ls+'" onerror="this.src=\'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&auto=format&q=75\'" alt="En uso" loading="lazy"><div class="detail-lifestyle__overlay"><span>Diseñado para elevar tu experiencia gaming</span></div></div></div>':"";
/* Productos relacionados */
var related=typeof PRODUCTS!=="undefined"?PRODUCTS.filter(function(x){return x.category===p.category&&x.id!==p.id}).slice(0,4):[];
var relH=related.length?'<div style="grid-column:1/-1;margin-top:20px"><h3 style="color:var(--gold);font-size:1.2rem;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px">También te puede interesar</h3><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px">'+related.map(function(r){return'<a href="detalle-producto.html?id='+r.id+'" style="background:var(--black-3);border:1px solid var(--border);border-radius:12px;overflow:hidden;text-decoration:none;transition:all .3s"><img src="'+r.img+'" style="width:100%;aspect-ratio:4/3;object-fit:cover" alt="'+r.name+'" loading="lazy"><div style="padding:12px"><p style="color:var(--text);font-weight:700;font-size:.85rem;margin-bottom:4px">'+r.name+'</p><p style="color:var(--gold);font-weight:800">'+formatCLP(r.price)+'</p></div></a>'}).join("")+"</div></div>":"";
/* Publicidad */
var adH='<div style="grid-column:1/-1;margin-top:16px"><a href="productos.html?cat='+encodeURIComponent(p.category)+'" class="ad-banner" style="min-height:160px;background-image:url(\''+UX+'photo-1542751371-adc38448a05e'+QL+"');\"><div class=\"ad-banner__content\"><span class=\"ad-banner__badge\">Más de "+p.category+'</span><h3>Completa tu setup elite</h3><p>Envío gratis · Garantía 12 meses · Soporte 24/7</p><span class="btn btn--gold btn--sm">Ver categoría</span></div></a></div>';

c.innerHTML='<div class="detail__gallery detail-gallery-enhanced"><div class="detail__mainImage"><img src="'+fotos[0]+'" alt="'+p.name+'" id="mainImg"></div><div class="gallery-thumbs">'+thumbs+'</div></div><div class="detail__info"><span class="card__category">'+p.category+'</span><h1 class="detail__title">'+p.name+'</h1>'+(typeof starRating==="function"?starRating(p.rating||5):"")+'<p class="detail__sku">SKU: '+(p.sku||"N/A")+'</p><div class="detail__pricebox">'+(p.originalPrice&&p.originalPrice>p.price?'<span class="detail__old-price">'+formatCLP(p.originalPrice)+'</span><span class="badge badge--discount">'+Math.round(100-p.price/p.originalPrice*100)+'% DCTO.</span>':'')+'<p class="detail__price">'+formatCLP(p.price)+'</p><span class="card__payment-note">Transferencia / Débito · Hasta 12 cuotas sin interés</span></div><p class="detail__desc" style="line-height:1.7;color:var(--text-dim)">'+desc+'</p><div class="detail__stock '+(low?"detail__stock--low":"")+'">'+(p.stock===0?'<span style="color:var(--danger);font-weight:bold">Agotado</span>':(low?"¡Últimas "+p.stock+" unidades!":"Stock disponible: "+p.stock+" unidades"))+'</div><div class="detail__actions"><div class="stepper"><button type="button" id="qtyMinus">−</button><input type="number" id="qtyInput" value="1" min="1" max="'+(p.stock||1)+'" readonly><button type="button" id="qtyPlus">+</button></div><button type="button" class="btn btn--gold btn--lg" id="addToCartDetailBtn">Añadir al Carrito</button></div><ul class="detail__specs"><li><span>Categoría</span><span>'+p.category+'</span></li><li><span>SKU</span><span>'+(p.sku||"N/A")+'</span></li><li><span>Garantía</span><span>12 meses TecnoRosita Care</span></li><li><span>Envío</span><span>Gratis sobre $60.000</span></li><li><span>Devolución</span><span>30 días sin costo</span></li><li><span>Soporte</span><span>24/7 WhatsApp y email</span></li></ul></div>'+infoH+specsH+vidH+reviewsH+lifeH+relH+adH;

/* Interactividad */
document.querySelectorAll(".gallery-thumb").forEach(function(t){t.addEventListener("click",function(){document.getElementById("mainImg").src=fotos[t.dataset.idx];document.querySelectorAll(".gallery-thumb").forEach(function(x){x.classList.remove("is-active")});t.classList.add("is-active")})});
var qi=document.getElementById("qtyInput");document.getElementById("qtyMinus").addEventListener("click",function(){qi.value=Math.max(1,+qi.value-1)});document.getElementById("qtyPlus").addEventListener("click",function(){qi.value=Math.min(p.stock||1,+qi.value+1)});
document.getElementById("addToCartDetailBtn").addEventListener("click",function(){var r=addToCart(p.id,+qi.value||1);if(typeof showToast==="function")showToast(r.message,r.ok?"success":"error")})});
ob.observe(c,{childList:true})})();

/* ===== 8. REEMPLAZAR ICONOS SVG POR FOTOS REALES EN TODO EL SITIO ===== */
(function(){
  /* Promo tiles: reemplazar SVG con fotos reales */
  var promoFotos={
    "promo-tile--monitores": UX+"photo-1593062096033-9a26b09da705"+QL,
    "promo-tile--perifericos": UX+"photo-1563297007-0686b7003af7"+QL,
    "promo-tile--sillas": UX+"photo-1616588589676-62b3d4ff6f04"+QL
  };
  Object.entries(promoFotos).forEach(function(e){
    var t=document.querySelector("."+e[0]);
    if(!t)return;
    t.style.backgroundImage="url('"+e[1]+"')";
    t.style.backgroundSize="cover";
    t.style.backgroundPosition="center";
    var svg=t.querySelector("svg");if(svg)svg.style.display="none";
  });

  /* Value strip: reemplazar iconos SVG por emojis grandes */
  document.querySelectorAll(".value-item__icon").forEach(function(ic){
    var svg=ic.querySelector("svg");if(!svg)return;
    var parent=ic.closest(".value-item");
    var title=parent?parent.querySelector("h4"):null;
    var emoji="🎮";
    if(title){
      var t=title.textContent.toLowerCase();
      if(t.includes("envío")||t.includes("envio"))emoji="🚚";
      else if(t.includes("garantía")||t.includes("care"))emoji="🛡️";
      else if(t.includes("pago"))emoji="💳";
      else if(t.includes("soporte"))emoji="💬";
    }
    ic.innerHTML='<span style="font-size:1.6rem">'+emoji+'</span>';
  });

  /* Promo grid: ocultar iconos SVG de las promo tiles */
  document.querySelectorAll(".promo-tile__icon").forEach(function(ic){ic.style.display="none"});

  /* About section: foto real en showroom */
  var aboutVisual=document.querySelector(".about-grid__visual");
  if(aboutVisual){
    aboutVisual.style.backgroundImage="url('"+UX+"photo-1593152167544-085d3b9c4265"+QL+"')";
    aboutVisual.style.backgroundSize="cover";
    aboutVisual.style.backgroundPosition="center";
    var svg=aboutVisual.querySelector("svg");if(svg)svg.style.display="none";
  }

  /* Blog cards: fotos directamente en HTML */
})();
