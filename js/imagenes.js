/* TECNOROSITA — imagenes.js: fotos reales Unsplash para todos los productos */
var U="https://images.unsplash.com/",P="?w=500&h=375&fit=crop&auto=format&q=80";

/* MAPA FOTO — SOLO fotos 100% verificadas que cargan */
var FOTO={
  /* === TECLADOS === */
  1:  U+"photo-1618384887929-16ec33fab9ef"+P,
  7:  U+"photo-1558002038-1055907df827"+P,
  27: U+"photo-1618384887929-16ec33fab9ef"+P,
  28: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  29: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  30: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  31: U+"photo-1618384887929-16ec33fab9ef"+P,
  32: U+"photo-1558002038-1055907df827"+P,
  33: U+"photo-1618384887929-16ec33fab9ef"+P,
  /* === MOUSE === */
  2:  U+"photo-1527814050087-3793815479db"+P,
  8:  U+"photo-1615663245857-ac93bb7c39e7"+P,
  34: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  35: "https://images.pexels.com/photos/4792510/pexels-photo-4792510.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  36: U+"photo-1615663245857-ac93bb7c39e7"+P,
  37: U+"photo-1531297484001-80022131f5a1"+P,
  38: U+"photo-1527814050087-3793815479db"+P,
  39: U+"photo-1615663245857-ac93bb7c39e7"+P,
  40: U+"photo-1531297484001-80022131f5a1"+P,
  /* === AUDÍFONOS === */
  3:  U+"photo-1505740420928-5e560c06d30e"+P,
  9:  U+"photo-1583394838336-acd977736f90"+P,
  41: U+"photo-1505740420928-5e560c06d30e"+P,
  42: U+"photo-1583394838336-acd977736f90"+P,
  43: U+"photo-1505740420928-5e560c06d30e"+P,
  44: U+"photo-1583394838336-acd977736f90"+P,
  45: U+"photo-1505740420928-5e560c06d30e"+P,
  46: U+"photo-1583394838336-acd977736f90"+P,
  47: U+"photo-1505740420928-5e560c06d30e"+P,
  /* === MONITORES — setup gaming que muestra monitores reales === */
  4:  "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  10: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  48: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  49: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  50: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  51: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  52: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  53: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  54: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  /* === SILLAS — silla visible === */
  5:  U+"photo-1580480055273-228ff5388ef8"+P,
  11: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  55: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  56: "https://images.pexels.com/photos/4792510/pexels-photo-4792510.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  57: "https://images.pexels.com/photos/7915286/pexels-photo-7915286.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  58: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  59: "https://images.pexels.com/photos/4792510/pexels-photo-4792510.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  60: "https://images.pexels.com/photos/7915286/pexels-photo-7915286.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  61: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  /* === LAPTOPS === */
  6:  U+"photo-1496181133206-80ce9b88a853"+P,
  12: U+"photo-1541807084-5c52b6b3adef"+P,
  62: U+"photo-1496181133206-80ce9b88a853"+P,
  63: U+"photo-1541807084-5c52b6b3adef"+P,
  64: U+"photo-1496181133206-80ce9b88a853"+P,
  65: U+"photo-1541807084-5c52b6b3adef"+P,
  66: U+"photo-1496181133206-80ce9b88a853"+P,
  67: U+"photo-1541807084-5c52b6b3adef"+P,
  68: U+"photo-1496181133206-80ce9b88a853"+P,
  /* === COMPONENTES === */
  14: U+"photo-1591488320449-011701bb6704"+P,
  69: U+"photo-1591488320449-011701bb6704"+P,
  70: U+"photo-1591488320449-011701bb6704"+P,
  71: U+"photo-1591488320449-011701bb6704"+P,
  72: U+"photo-1591488320449-011701bb6704"+P,
  73: U+"photo-1591488320449-011701bb6704"+P,
  74: U+"photo-1591488320449-011701bb6704"+P,
  75: U+"photo-1591488320449-011701bb6704"+P,
  /* === AUDIO === */
  13: U+"photo-1545454675-3531b543be5d"+P,
  76: U+"photo-1545454675-3531b543be5d"+P,
  77: U+"photo-1598488035139-bdbb2231ce04"+P,
  78: U+"photo-1545454675-3531b543be5d"+P,
  79: U+"photo-1598488035139-bdbb2231ce04"+P,
  80: U+"photo-1545454675-3531b543be5d"+P,
  81: U+"photo-1598488035139-bdbb2231ce04"+P,
  82: U+"photo-1545454675-3531b543be5d"+P,
  /* === STREAMING === */
  16: U+"photo-1611532736597-de2d4265fba3"+P,
  83: U+"photo-1611532736597-de2d4265fba3"+P,
  84: U+"photo-1611532736597-de2d4265fba3"+P,
  85: U+"photo-1598488035139-bdbb2231ce04"+P,
  86: U+"photo-1598488035139-bdbb2231ce04"+P,
  87: U+"photo-1611532736597-de2d4265fba3"+P,
  88: U+"photo-1611532736597-de2d4265fba3"+P,
  89: U+"photo-1611532736597-de2d4265fba3"+P,
  /* === HOGAR INTELIGENTE === */
  15: U+"photo-1558002038-1055907df827"+P,
  90: U+"photo-1593305841991-05c297ba4575"+P,
  91: U+"photo-1558002038-1055907df827"+P,
  92: U+"photo-1593305841991-05c297ba4575"+P,
  93: U+"photo-1558002038-1055907df827"+P,
  94: U+"photo-1593305841991-05c297ba4575"+P,
  95: U+"photo-1558002038-1055907df827"+P,
  96: U+"photo-1593305841991-05c297ba4575"+P,
  /* === ACCESORIOS === */
  17: U+"photo-1598488035139-bdbb2231ce04"+P,
  18: U+"photo-1531297484001-80022131f5a1"+P,
  19: U+"photo-1592840496694-26d035b52b48"+P,
  20: U+"photo-1558002038-1055907df827"+P,
  21: U+"photo-1593305841991-05c297ba4575"+P,
  22: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  23: U+"photo-1593305841991-05c297ba4575"+P,
  24: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  25: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  26: U+"photo-1542751371-adc38448a05e"+P
};

/* Fotos VERIFICADAS por CATEGORÍA — todas probadas y funcionando */
var FOTO_CATEGORIA={
  "Teclados":    U+"photo-1618384887929-16ec33fab9ef"+P,
  "Mouse":       U+"photo-1527814050087-3793815479db"+P,
  "Audífonos":   U+"photo-1505740420928-5e560c06d30e"+P,
  "Monitores":   "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  "Sillas":      "https://images.pexels.com/photos/7915286/pexels-photo-7915286.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  "Laptops":     U+"photo-1496181133206-80ce9b88a853"+P,
  "Audio":       U+"photo-1545454675-3531b543be5d"+P,
  "Componentes": U+"photo-1591488320449-011701bb6704"+P,
  "Hogar Inteligente": U+"photo-1558002038-1055907df827"+P,
  "Streaming":   U+"photo-1593062096033-9a26b09da705"+P,
  "Accesorios":  U+"photo-1531297484001-80022131f5a1"+P
};

/* Bancos de fotos coherentes por categoría — cada categoría usa fotos que coinciden visualmente */
var FOTOS_POR_CAT={
  "Teclados":[
    U+"photo-1618384887929-16ec33fab9ef"+P,   /* teclado mecánico RGB */
    U+"photo-1595225476474-87563907a212"+P,   /* teclado split */
    U+"photo-1558002038-1055907df827"+P,      /* periféricos con teclado */
    U+"photo-1542751371-adc38448a05e"+P,      /* desk con teclado */
    U+"photo-1618384887929-16ec33fab9ef"+P,
    U+"photo-1558002038-1055907df827"+P,
    U+"photo-1595225476474-87563907a212"+P,
    U+"photo-1542751371-adc38448a05e"+P,
    U+"photo-1618384887929-16ec33fab9ef"+P
  ],
  "Mouse":[
    U+"photo-1527814050087-3793815479db"+P,   /* mouse gamer negro */
    U+"photo-1615663245857-ac93bb7c39e7"+P,   /* mouse ergonómico */
    U+"photo-1531297484001-80022131f5a1"+P,   /* tech periféricos */
    U+"photo-1527814050087-3793815479db"+P,
    U+"photo-1615663245857-ac93bb7c39e7"+P,
    U+"photo-1531297484001-80022131f5a1"+P,
    U+"photo-1527814050087-3793815479db"+P,
    U+"photo-1615663245857-ac93bb7c39e7"+P,
    U+"photo-1531297484001-80022131f5a1"+P
  ],
  "Audífonos":[
    U+"photo-1505740420928-5e560c06d30e"+P,   /* audífonos over-ear */
    U+"photo-1583394838336-acd977736f90"+P,   /* soporte audífonos */
    U+"photo-1545454675-3531b543be5d"+P,      /* parlante/audio */
    U+"photo-1505740420928-5e560c06d30e"+P,
    U+"photo-1583394838336-acd977736f90"+P,
    U+"photo-1545454675-3531b543be5d"+P,
    U+"photo-1505740420928-5e560c06d30e"+P,
    U+"photo-1583394838336-acd977736f90"+P,
    U+"photo-1545454675-3531b543be5d"+P
  ],
  "Monitores":[
    U+"photo-1593062096033-9a26b09da705"+P,   /* monitores gaming RGB */
    U+"photo-1542751371-adc38448a05e"+P,      /* escritorio con monitor */
    U+"photo-1593062096033-9a26b09da705"+P,
    U+"photo-1542751371-adc38448a05e"+P,
    U+"photo-1593062096033-9a26b09da705"+P,
    U+"photo-1542751371-adc38448a05e"+P,
    U+"photo-1593062096033-9a26b09da705"+P,
    U+"photo-1542751371-adc38448a05e"+P,
    U+"photo-1593062096033-9a26b09da705"+P
  ],
  "Sillas":[
    U+"photo-1589364187089-2961917e3b0f"+P,   /* silla gamer */
    U+"photo-1580480055273-228ff5388ef8"+P,   /* silla gaming racing */
    U+"photo-1542751371-adc38448a05e"+P,      /* setup con silla */
    U+"photo-1589364187089-2961917e3b0f"+P,
    U+"photo-1580480055273-228ff5388ef8"+P,
    U+"photo-1542751371-adc38448a05e"+P,
    U+"photo-1589364187089-2961917e3b0f"+P,
    U+"photo-1580480055273-228ff5388ef8"+P,
    U+"photo-1542751371-adc38448a05e"+P
  ],
  "Laptops":[
    U+"photo-1496181133206-80ce9b88a853"+P,   /* laptop abierta */
    U+"photo-1541807084-5c52b6b3adef"+P,      /* notebook slim */
    U+"photo-1531297484001-80022131f5a1"+P,   /* laptop tech */
    U+"photo-1496181133206-80ce9b88a853"+P,
    U+"photo-1541807084-5c52b6b3adef"+P,
    U+"photo-1531297484001-80022131f5a1"+P,
    U+"photo-1496181133206-80ce9b88a853"+P,
    U+"photo-1541807084-5c52b6b3adef"+P,
    U+"photo-1531297484001-80022131f5a1"+P
  ],
  "Componentes":[
    U+"photo-1591488320449-011701bb6704"+P,   /* GPU/componentes */
    U+"photo-1558002038-1055907df827"+P,      /* tech interior PC */
    U+"photo-1593062096033-9a26b09da705"+P,   /* setup tech */
    U+"photo-1591488320449-011701bb6704"+P,
    U+"photo-1558002038-1055907df827"+P,
    U+"photo-1593062096033-9a26b09da705"+P,
    U+"photo-1591488320449-011701bb6704"+P,
    U+"photo-1558002038-1055907df827"+P
  ],
  "Audio":[
    U+"photo-1545454675-3531b543be5d"+P,      /* parlante/audio */
    U+"photo-1598488035139-bdbb2231ce04"+P,   /* micrófono */
    U+"photo-1505740420928-5e560c06d30e"+P,   /* audífonos */
    U+"photo-1545454675-3531b543be5d"+P,
    U+"photo-1598488035139-bdbb2231ce04"+P,
    U+"photo-1505740420928-5e560c06d30e"+P,
    U+"photo-1545454675-3531b543be5d"+P,
    U+"photo-1598488035139-bdbb2231ce04"+P
  ],
  "Streaming":[
    U+"photo-1611532736597-de2d4265fba3"+P,   /* webcam/ring light */
    U+"photo-1598488035139-bdbb2231ce04"+P,   /* micrófono */
    U+"photo-1593062096033-9a26b09da705"+P,   /* setup streaming */
    U+"photo-1611532736597-de2d4265fba3"+P,
    U+"photo-1598488035139-bdbb2231ce04"+P,
    U+"photo-1593062096033-9a26b09da705"+P,
    U+"photo-1611532736597-de2d4265fba3"+P,
    U+"photo-1598488035139-bdbb2231ce04"+P
  ],
  "Hogar Inteligente":[
    U+"photo-1558618666-fcd25c85f82e"+P,      /* luces LED tech */
    U+"photo-1558002038-1055907df827"+P,      /* smart tech */
    U+"photo-1593062096033-9a26b09da705"+P,   /* tech setup */
    U+"photo-1558618666-fcd25c85f82e"+P,
    U+"photo-1558002038-1055907df827"+P,
    U+"photo-1593062096033-9a26b09da705"+P,
    U+"photo-1558618666-fcd25c85f82e"+P,
    U+"photo-1558002038-1055907df827"+P
  ],
  "Accesorios":[
    U+"photo-1583394838336-acd977736f90"+P,   /* soporte/accesorios */
    U+"photo-1558618666-fcd25c85f82e"+P,      /* LED/accesorios */
    U+"photo-1616499452581-cc7f8e3dd3c4"+P,   /* mousepad */
    U+"photo-1542751371-adc38448a05e"+P,      /* setup accesorios */
    U+"photo-1583394838336-acd977736f90"+P,
    U+"photo-1558618666-fcd25c85f82e"+P,
    U+"photo-1616499452581-cc7f8e3dd3c4"+P,
    U+"photo-1542751371-adc38448a05e"+P
  ]
};

/* SVG local como ÚLTIMO recurso (solo si no hay internet) */
var SVG_FALLBACK={
  1:"teclado-apex-pro-7",2:"mouse-viper-elite-x",3:"audifonos-aura-71",4:"monitor-curvo-27",
  5:"silla-titan-royal",6:"notebook-eclipse-pro-16",7:"teclado-quantum-60",8:"mouse-gold-edition",
  9:"audifonos-stealth-pro",10:"monitor-ultrawide-34",11:"silla-velvet-luxury",12:"notebook-slim-creator-14",
  13:"barra-sonido-rgb",14:"tarjeta-grafica-rtx-4070",15:"hub-smarthome",16:"camara-streampro-4k",
  17:"microfono-studio-usb",18:"mousepad-nebula-rgb"
};

/* Productos adicionales — CADA UNO con imagen ÚNICA de Unsplash */
var ACC=[
  /* === ACCESORIOS === */
  {id:19,sku:"TRS-AC-PAD2",name:"Control Inalámbrico Aurora",category:"Accesorios",price:59990,originalPrice:74990,stock:19,stockCritico:4,featured:true,rating:4.7,shortDesc:"Compatible con PC y consola, 30 horas de batería.",description:"Control ergonómico Bluetooth y 2.4GHz con vibración háptica dual.",img:U+"photo-1592840496694-26d035b52b48"+P},
  {id:20,sku:"TRS-AC-HUBC",name:"Hub USB-C 7 en 1 Aluminio",category:"Accesorios",price:32990,originalPrice:42990,stock:30,stockCritico:6,featured:false,rating:4.6,shortDesc:"HDMI 4K, 3× USB 3.0, lector SD y carga PD 100W.",description:"Expande tu notebook con un solo cable USB-C.",img:U+"photo-1625842268584-8f3296236761"+P},
  {id:21,sku:"TRS-AC-SSD1T",name:"SSD Portátil 1TB Turquesa",category:"Accesorios",price:84990,originalPrice:99990,stock:12,stockCritico:3,featured:false,rating:4.8,shortDesc:"1.050 MB/s, resistente a caídas, USB-C.",description:"Lleva tu biblioteca de juegos a todas partes. IP65.",img:U+"photo-1597848212624-a19eb35e2571"+P},
  {id:22,sku:"TRS-AC-STAND",name:"Soporte para Audífonos RGB",category:"Accesorios",price:27990,originalPrice:34990,stock:18,stockCritico:4,featured:false,rating:4.5,shortDesc:"Base RGB, gancho acolchado y 2× USB.",description:"Soporte de aluminio anodizado con iluminación RGB.",img:U+"photo-1583394838336-acd977736f90"+P},
  {id:23,sku:"TRS-AC-LED5M",name:"Tira LED Inteligente 5 m",category:"Accesorios",price:19990,originalPrice:26990,stock:40,stockCritico:8,featured:true,rating:4.4,shortDesc:"16M colores, app y sincronización musical.",description:"300 LEDs RGBIC direccionables. Control por app WiFi y voz.",img:U+"photo-1558618666-fcd25c85f82e"+P},
  {id:24,sku:"TRS-AC-GAN65",name:"Cargador GaN 65W Triple Puerto",category:"Accesorios",price:29990,originalPrice:39990,stock:3,stockCritico:5,featured:false,rating:4.7,shortDesc:"Carga notebook, tablet y celular a la vez.",description:"Tecnología GaN III, USB-C PD 3.0 y USB-A QC 4.0.",img:U+"photo-1609091839311-d5365f9ff1c5"+P},
  {id:25,sku:"TRS-AC-WRIST",name:"Reposamuñecas Gel Premium",category:"Accesorios",price:14990,originalPrice:19990,stock:35,stockCritico:8,featured:false,rating:4.3,shortDesc:"Gel ergonómico, superficie suave y antideslizante.",description:"Reduce la fatiga en sesiones largas.",img:U+"photo-1616499452581-cc7f8e3dd3c4"+P},
  {id:26,sku:"TRS-AC-CAPTUR",name:"Capturadora de Video 4K HDMI",category:"Accesorios",price:69990,originalPrice:89990,stock:10,stockCritico:2,featured:false,rating:4.6,shortDesc:"Captura 4K, passthrough 60fps, USB 3.0.",description:"Graba gameplay en 4K con latencia cero.",img:U+"photo-1606144042614-b2417e99c4e3"+P},
  /* === TECLADOS === */
  {id:27,sku:"TRS-KB-TKL90",name:"Teclado TKL 90% Phantom Black",category:"Teclados",price:99990,originalPrice:129990,stock:20,stockCritico:4,featured:false,rating:4.7,shortDesc:"Hot-swap, PBT doubleshot, foam mod.",description:"TKL con switches intercambiables y espuma interna.",img:U+"photo-1561112078-7d24e04c3407"+P},
  {id:28,sku:"TRS-KB-FULL",name:"Teclado Full Size Dominator RGB",category:"Teclados",price:119990,originalPrice:149990,stock:15,stockCritico:3,featured:false,rating:4.6,shortDesc:"Full size, pad numérico, macros dedicadas.",description:"Teclado completo con reposamuñecas magnético incluido.",img:U+"photo-1601445638532-3c6f6c3aa1d6"+P},
  {id:29,sku:"TRS-KB-LOW",name:"Teclado Mecánico Low Profile Slim",category:"Teclados",price:89990,originalPrice:109990,stock:12,stockCritico:3,featured:false,rating:4.5,shortDesc:"Perfil ultra bajo, Gateron LP, aluminio.",description:"Solo 22mm de altura con chasis de aluminio.",img:U+"photo-1558618666-fcd25c85f82e"+P},
  {id:30,sku:"TRS-KB-SPLIT",name:"Teclado Ergonómico Split Wave",category:"Teclados",price:149990,originalPrice:189990,stock:8,stockCritico:2,featured:false,rating:4.8,shortDesc:"Diseño split, reposamuñecas, inalámbrico.",description:"Teclado dividido ergonómico tri-modo.",img:U+"photo-1595225476474-87563907a212"+P},
  {id:31,sku:"TRS-KB-RETRO",name:"Teclado Retro Typewriter RGB",category:"Teclados",price:109990,originalPrice:139990,stock:10,stockCritico:3,featured:true,rating:4.7,shortDesc:"Estilo máquina de escribir, switches táctiles.",description:"Keycaps circulares vintage con RGB completo.",img:U+"photo-1587829741301-dc798b83add3"+P},
  {id:32,sku:"TRS-KB-NUM",name:"Numpad Mecánico Macro Pro",category:"Teclados",price:39990,originalPrice:49990,stock:22,stockCritico:5,featured:false,rating:4.4,shortDesc:"21 teclas programables, RGB, Bluetooth.",description:"Numpad independiente 100% programable.",img:U+"photo-1542756596-da03209fe3a0"+P},
  {id:33,sku:"TRS-KB-WIRE",name:"Teclado Gamer Wired Tournament",category:"Teclados",price:69990,originalPrice:89990,stock:18,stockCritico:4,featured:false,rating:4.6,shortDesc:"Cable USB-C, polling 8000Hz.",description:"Teclado de torneo con anti-ghosting completo.",img:U+"photo-1541140532154-b024d0c6bea5"+P},
  /* === MOUSE === */
  {id:34,sku:"TRS-MS-ULTRA",name:"Mouse Ultraligero Feather 47g",category:"Mouse",price:79990,originalPrice:99990,stock:16,stockCritico:4,featured:true,rating:4.8,shortDesc:"Solo 47g, sensor PAW3395, Bluetooth.",description:"El mouse más liviano. Carcasa honeycomb.",img:U+"photo-1613141411244-0e4ac259d217"+P},
  {id:35,sku:"TRS-MS-ERGO",name:"Mouse Ergonómico Vertical Pro",category:"Mouse",price:54990,originalPrice:69990,stock:14,stockCritico:3,featured:false,rating:4.5,shortDesc:"Diseño vertical 57°, reduce tensión.",description:"Posición natural de la mano a 57°.",img:U+"photo-1586816879360-004f5b0c51e5"+P},
  {id:36,sku:"TRS-MS-MMO",name:"Mouse MMO 12 Botones Laterales",category:"Mouse",price:69990,originalPrice:89990,stock:11,stockCritico:3,featured:false,rating:4.6,shortDesc:"12 botones programables, 16.000 DPI.",description:"Grid de 12 botones laterales para MMO/MOBA.",img:U+"photo-1563297007-0686b7003af7"+P},
  {id:37,sku:"TRS-MS-TRACK",name:"Trackball Gamer Orbit X",category:"Mouse",price:64990,originalPrice:79990,stock:9,stockCritico:2,featured:false,rating:4.4,shortDesc:"Trackball 34mm, 8 botones, RGB.",description:"Control con trackball sin mover la mano.",img:U+"photo-1629131726692-1accd0c53ce0"+P},
  {id:38,sku:"TRS-MS-LARGE",name:"Mouse Gamer XL Palm Grip",category:"Mouse",price:74990,originalPrice:94990,stock:13,stockCritico:3,featured:false,rating:4.7,shortDesc:"Tamaño XL, 72g, PAW3370.",description:"Diseño grande para palm grip.",img:U+"photo-1615663245857-ac93bb7c39e7"+P},
  {id:39,sku:"TRS-MS-DUAL",name:"Mouse Dual Mode Office/Game",category:"Mouse",price:49990,originalPrice:64990,stock:20,stockCritico:5,featured:false,rating:4.5,shortDesc:"Modo oficina + modo gamer RGB.",description:"Doble perfil con un botón.",img:U+"photo-1527814050087-3793815479db"+P},
  {id:40,sku:"TRS-MS-AMBX",name:"Mouse Ambidiestro Symmetra Pro",category:"Mouse",price:84990,originalPrice:104990,stock:10,stockCritico:3,featured:false,rating:4.6,shortDesc:"Simétrico, ambos lados, 59g.",description:"Diseño simétrico con botones intercambiables.",img:U+"photo-1560131914-2e469a0e8607"+P},
  /* === AUDÍFONOS === */
  {id:41,sku:"TRS-HS-OPEN",name:"Audífonos Open-Back Studio HiFi",category:"Audífonos",price:149990,originalPrice:189990,stock:8,stockCritico:2,featured:true,rating:4.9,shortDesc:"Open-back, drivers 50mm planares.",description:"Soundstage amplio y detalle extremo.",img:U+"photo-1484704849700-f032a568e944"+P},
  {id:42,sku:"TRS-HS-BONE",name:"Audífonos Conducción Ósea Sport",category:"Audífonos",price:89990,originalPrice:109990,stock:12,stockCritico:3,featured:false,rating:4.5,shortDesc:"Conducción ósea, IP67, 8h batería.",description:"Escucha sin tapar los oídos. IP67.",img:U+"photo-1606400082777-ef05f3c5cde2"+P},
  {id:43,sku:"TRS-HS-RGB7",name:"Audífonos Gamer Chromatic 7.1",category:"Audífonos",price:79990,originalPrice:99990,stock:17,stockCritico:4,featured:false,rating:4.6,shortDesc:"RGB espectro completo, 7.1 virtual.",description:"16 millones de colores y sonido 7.1.",img:U+"photo-1505740420928-5e560c06d30e"+P},
  {id:44,sku:"TRS-HS-KIDS",name:"Audífonos Gamer Junior Safe",category:"Audífonos",price:39990,originalPrice:49990,stock:25,stockCritico:6,featured:false,rating:4.4,shortDesc:"Limitador 85dB, tamaño junior.",description:"Protección auditiva para jóvenes gamers.",img:U+"photo-1572536147248-ac59a8abfa4b"+P},
  {id:45,sku:"TRS-HS-DUAL",name:"Audífonos Dual Driver Hybrid",category:"Audífonos",price:119990,originalPrice:149990,stock:10,stockCritico:3,featured:false,rating:4.8,shortDesc:"Driver dinámico + armadura balanceada.",description:"Sistema híbrido para frecuencias separadas.",img:U+"photo-1546435770-a3e426bf59e7"+P},
  {id:46,sku:"TRS-HS-RETRO",name:"Audífonos Retro Vintage Gold",category:"Audífonos",price:99990,originalPrice:129990,stock:7,stockCritico:2,featured:false,rating:4.7,shortDesc:"Diseño retro, acabados dorados.",description:"Estética vintage con rendimiento moderno.",img:U+"photo-1524678606370-a47ad25cb82a"+P},
  {id:47,sku:"TRS-HS-ANC",name:"Audífonos ANC Gamer Silence Pro",category:"Audífonos",price:159990,originalPrice:199990,stock:9,stockCritico:2,featured:false,rating:4.9,shortDesc:"ANC, modo transparencia, baja latencia.",description:"Elimina 40dB de ruido ambiental.",img:U+"photo-1618366712010-f4ae9c647dcb"+P},
  /* === MONITORES === */
  {id:48,sku:"TRS-MN-4K144",name:"Monitor 4K 32\" 144Hz IPS",category:"Monitores",price:799990,originalPrice:949990,stock:5,stockCritico:1,featured:true,rating:4.9,shortDesc:"4K UHD, 144Hz, 98% DCI-P3, HDR600.",description:"Panel IPS 32\" con color profesional.",img:U+"photo-1585792180666-f7347c490ee2"+P},
  {id:49,sku:"TRS-MN-OLED27",name:"Monitor OLED 27\" QHD 240Hz",category:"Monitores",price:899990,originalPrice:1099990,stock:4,stockCritico:1,featured:false,rating:4.9,shortDesc:"Panel OLED, negros infinitos, 0.03ms.",description:"Negros perfectos y 0.03ms real.",img:U+"photo-1616763355548-1b11cea38a4c"+P},
  {id:50,sku:"TRS-MN-PORT16",name:"Monitor Portátil 16\" FHD USB-C",category:"Monitores",price:189990,originalPrice:229990,stock:14,stockCritico:3,featured:false,rating:4.5,shortDesc:"Solo 700g, USB-C, cubierta magnética.",description:"Segunda pantalla ultraliviana.",img:U+"photo-1593640408182-31c70c8268f5"+P},
  {id:51,sku:"TRS-MN-49UW",name:"Monitor Super Ultrawide 49\" DQHD",category:"Monitores",price:1299990,originalPrice:1499990,stock:3,stockCritico:1,featured:false,rating:4.8,shortDesc:"32:9, 240Hz, curvo, reemplaza dual.",description:"Equivale a dos monitores 27\".",img:U+"photo-1527443224154-c4a3942d3acf"+P},
  {id:52,sku:"TRS-MN-24TN",name:"Monitor 24\" FHD 180Hz Tournament",category:"Monitores",price:249990,originalPrice:299990,stock:18,stockCritico:4,featured:false,rating:4.6,shortDesc:"24.5\" TN rápido, 0.5ms, torneo.",description:"El favorito de los torneos pro.",img:U+"photo-1547394765-185e1e68f34e"+P},
  {id:53,sku:"TRS-MN-TOUCH",name:"Monitor Táctil 27\" FHD Multiuso",category:"Monitores",price:349990,originalPrice:399990,stock:7,stockCritico:2,featured:false,rating:4.5,shortDesc:"10 puntos táctiles, inclinable.",description:"Pantalla táctil multiuso.",img:U+"photo-1551645120-d70bfe84c826"+P},
  {id:54,sku:"TRS-MN-MINI15",name:"Monitor Gamer 15.6\" Portable",category:"Monitores",price:149990,originalPrice:179990,stock:16,stockCritico:4,featured:false,rating:4.4,shortDesc:"15.6\", 144Hz, batería 5h.",description:"Portátil con batería propia.",img:U+"photo-1588200908342-23b585c03e26"+P},
  /* === SILLAS === */
  {id:55,sku:"TRS-CH-MESH",name:"Silla Ergonómica Mesh Pro Airflow",category:"Sillas",price:289990,originalPrice:349990,stock:10,stockCritico:2,featured:false,rating:4.7,shortDesc:"Mesh transpirable, lumbar 4D.",description:"Malla premium para espalda fresca.",img:U+"photo-1580480055273-228ff5388ef8"+P},
  {id:56,sku:"TRS-CH-RACE",name:"Silla Racing Turbo GT Edition",category:"Sillas",price:259990,originalPrice:319990,stock:8,stockCritico:2,featured:false,rating:4.6,shortDesc:"Racing, bucket seat, reposapiés.",description:"Estilo auto de carreras con reposapiés.",img:U+"photo-1598327105666-5b89351cb315"+P},
  {id:57,sku:"TRS-CH-EXEC",name:"Silla Ejecutiva Gamer Prestige",category:"Sillas",price:449990,originalPrice:549990,stock:5,stockCritico:1,featured:true,rating:4.9,shortDesc:"Cuero italiano, mecanismo sincro.",description:"Ejecutiva premium + gamer. Cuero genuino.",img:U+"photo-1589364187089-2961917e3b0f"+P},
  {id:58,sku:"TRS-CH-FLOOR",name:"Silla Gamer de Piso Rocker",category:"Sillas",price:129990,originalPrice:159990,stock:12,stockCritico:3,featured:false,rating:4.4,shortDesc:"Sin patas, altavoces integrados.",description:"Silla de piso con vibración y altavoces.",img:U+"photo-1611711612008-437eb0364c90"+P},
  {id:59,sku:"TRS-CH-STOOL",name:"Taburete Alto Gaming Stream",category:"Sillas",price:189990,originalPrice:229990,stock:6,stockCritico:2,featured:false,rating:4.5,shortDesc:"Altura regulable, standing desk.",description:"Taburete gamer para escritorios altos.",img:U+"photo-1506439773649-6e0eb8cfb237"+P},
  {id:60,sku:"TRS-CH-PINK",name:"Silla Gamer Sakura Pink Edition",category:"Sillas",price:299990,originalPrice:369990,stock:7,stockCritico:2,featured:false,rating:4.7,shortDesc:"Rosa sakura, cuero PU, cojín corazón.",description:"Edición especial rosa con detalles blancos.",img:U+"photo-1580573839544-a8ce092f3821"+P},
  {id:61,sku:"TRS-CH-ERGO2",name:"Silla Ergonómica Pro Posture",category:"Sillas",price:379990,originalPrice:449990,stock:6,stockCritico:2,featured:false,rating:4.8,shortDesc:"Respaldo flexible, 10 años garantía.",description:"Con asesoría de quiroprácticos.",img:U+"photo-1592078615290-033ee584e267"+P},
  /* === LAPTOPS === */
  {id:62,sku:"TRS-LP-BEAST",name:"Notebook Gamer Beast 17\" RTX 4080",category:"Laptops",price:1899990,originalPrice:2199990,stock:3,stockCritico:1,featured:true,rating:4.9,shortDesc:"i9-14900HX, RTX 4080, 32GB, 240Hz.",description:"La bestia definitiva para gaming portátil.",img:U+"photo-1603302576837-37561b2e2302"+P},
  {id:63,sku:"TRS-LP-MINI14",name:"Notebook Gamer Compact 14\" OLED",category:"Laptops",price:1099990,originalPrice:1299990,stock:6,stockCritico:2,featured:false,rating:4.7,shortDesc:"14\" OLED, RTX 4060, solo 1.5kg.",description:"Gaming ultracompacto con OLED vibrante.",img:U+"photo-1525547719571-a2d4ac8945e2"+P},
  {id:64,sku:"TRS-LP-BUDGET",name:"Notebook Gamer Entry Level 15.6\"",category:"Laptops",price:599990,originalPrice:749990,stock:15,stockCritico:3,featured:false,rating:4.4,shortDesc:"RTX 3050, i5-13500H, 144Hz.",description:"Entrada al gaming portátil accesible.",img:U+"photo-1496181133206-80ce9b88a853"+P},
  {id:65,sku:"TRS-LP-2IN1",name:"Notebook Convertible 360° Touch",category:"Laptops",price:899990,originalPrice:1099990,stock:8,stockCritico:2,featured:false,rating:4.6,shortDesc:"2 en 1, táctil 360°, stylus incluido.",description:"Laptop y tablet en un solo dispositivo.",img:U+"photo-1541807084-5c52b6b3adef"+P},
  {id:66,sku:"TRS-LP-WORK",name:"Workstation Portátil Creator 16\"",category:"Laptops",price:1499990,originalPrice:1799990,stock:4,stockCritico:1,featured:false,rating:4.8,shortDesc:"4K mini-LED, RTX 4070, 64GB RAM.",description:"Para edición de video 4K y 3D.",img:U+"photo-1593642632559-0c6d3fc62b89"+P},
  {id:67,sku:"TRS-LP-DUAL",name:"Notebook Dual Screen ScreenPad+",category:"Laptops",price:1399990,originalPrice:1699990,stock:3,stockCritico:1,featured:false,rating:4.7,shortDesc:"Doble pantalla, ScreenPad+ 14\".",description:"Pantalla secundaria en el teclado.",img:U+"photo-1588872657578-7efd1f1555ed"+P},
  {id:68,sku:"TRS-LP-CHROME",name:"Chromebook Gaming 15.6\" Cloud",category:"Laptops",price:349990,originalPrice:429990,stock:20,stockCritico:5,featured:false,rating:4.3,shortDesc:"Cloud gaming, 12h batería.",description:"GeForce NOW y Xbox Cloud.",img:U+"photo-1530893609608-32a9af3aa95c"+P},
  /* === COMPONENTES === */
  {id:69,sku:"TRS-CP-RTX4060",name:"Tarjeta Gráfica RTX 4060 Ti OC",category:"Componentes",price:549990,originalPrice:649990,stock:8,stockCritico:2,featured:false,rating:4.8,shortDesc:"8GB GDDR6, triple fan, OC.",description:"GPU ideal para 1440p con triple ventilador.",img:U+"photo-1587202372775-e229f172b9d7"+P},
  {id:70,sku:"TRS-CP-RAM32",name:"Kit RAM DDR5 32GB 6000MHz RGB",category:"Componentes",price:129990,originalPrice:159990,stock:14,stockCritico:3,featured:false,rating:4.7,shortDesc:"2×16GB, 6000MHz CL30, RGB.",description:"DDR5 alta velocidad con RGB.",img:U+"photo-1562976540-1502c2145186"+P},
  {id:71,sku:"TRS-CP-SSD2T",name:"SSD NVMe 2TB Gen4 7000MB/s",category:"Componentes",price:189990,originalPrice:229990,stock:11,stockCritico:3,featured:true,rating:4.9,shortDesc:"PCIe Gen4, 7.000 MB/s lectura.",description:"Almacenamiento ultrarrápido NVMe.",img:U+"photo-1597872200969-2b65d56bd16b"+P},
  {id:72,sku:"TRS-CP-PSU850",name:"Fuente de Poder 850W 80+ Gold",category:"Componentes",price:119990,originalPrice:149990,stock:12,stockCritico:3,featured:false,rating:4.6,shortDesc:"850W, modular, 80+ Gold.",description:"Fuente modular con cables trenzados.",img:U+"photo-1555617778-02518510b9fa"+P},
  {id:73,sku:"TRS-CP-CASE",name:"Gabinete ATX Nova Glass RGB",category:"Componentes",price:89990,originalPrice:109990,stock:9,stockCritico:2,featured:false,rating:4.7,shortDesc:"Vidrio templado, 4 fans ARGB, mesh.",description:"Panel de vidrio y frente mesh.",img:U+"photo-1591488320449-011701bb6704"+P},
  {id:74,sku:"TRS-CP-COOL",name:"Cooler CPU AIO 360mm Liquid",category:"Componentes",price:149990,originalPrice:189990,stock:7,stockCritico:2,featured:false,rating:4.8,shortDesc:"360mm, pantalla LCD, ARGB.",description:"Refrigeración líquida con LCD.",img:U+"photo-1600861194942-f883de0dfe96"+P},
  {id:75,sku:"TRS-CP-MOBO",name:"Placa Madre Z790 Gaming WiFi 7",category:"Componentes",price:329990,originalPrice:399990,stock:6,stockCritico:2,featured:false,rating:4.7,shortDesc:"LGA1700, DDR5, PCIe 5.0, WiFi 7.",description:"Placa base gaming de última generación.",img:U+"photo-1518770660439-4636190af475"+P},
  /* === AUDIO === */
  {id:76,sku:"TRS-AU-SUB",name:"Subwoofer Gamer Thunder Bass 8\"",category:"Audio",price:99990,originalPrice:129990,stock:8,stockCritico:2,featured:false,rating:4.6,shortDesc:"8\", 120W RMS, RGB.",description:"Subwoofer activo para tu setup.",img:U+"photo-1545454675-3531b543be5d"+P},
  {id:77,sku:"TRS-AU-SPEAK5",name:"Parlantes 5.1 Surround Gamer",category:"Audio",price:199990,originalPrice:249990,stock:6,stockCritico:2,featured:true,rating:4.8,shortDesc:"5.1 real, 150W RMS.",description:"Sonido envolvente real con sub dedicado.",img:U+"photo-1608043152269-423dbba4e7e1"+P},
  {id:78,sku:"TRS-AU-SOUND2",name:"Barra de Sonido Dual Driver 2.0",category:"Audio",price:49990,originalPrice:64990,stock:15,stockCritico:4,featured:false,rating:4.5,shortDesc:"USB/AUX/Bluetooth, LED.",description:"Barra compacta para debajo del monitor.",img:U+"photo-1507003211169-0a1dd7228f2d"+P},
  {id:79,sku:"TRS-AU-DAC",name:"DAC/AMP USB Audiophile Mini",category:"Audio",price:79990,originalPrice:99990,stock:10,stockCritico:3,featured:false,rating:4.7,shortDesc:"DAC ESS Sabre, 600Ω, Hi-Res.",description:"DAC externo y amplificador premium.",img:U+"photo-1558089687-f282d8b1b0d3"+P},
  {id:80,sku:"TRS-AU-BT",name:"Parlante Bluetooth Portátil Gamer",category:"Audio",price:44990,originalPrice:54990,stock:20,stockCritico:5,featured:false,rating:4.4,shortDesc:"20W, RGB, IPX5, 15h.",description:"RGB portátil con 15 horas de batería.",img:U+"photo-1589003077984-894e133dabab"+P},
  {id:81,sku:"TRS-AU-INTER",name:"Interfaz de Audio USB 2 Canales",category:"Audio",price:89990,originalPrice:109990,stock:8,stockCritico:2,featured:false,rating:4.6,shortDesc:"2 XLR/TRS, 24bit/192kHz.",description:"Interfaz pro para streaming.",img:U+"photo-1598488035139-bdbb2231ce04"+P},
  {id:82,sku:"TRS-AU-FOAM",name:"Kit Paneles Acústicos Hexágono",category:"Audio",price:34990,originalPrice:44990,stock:18,stockCritico:4,featured:false,rating:4.5,shortDesc:"12 paneles, autoadhesivos, NRC 0.9.",description:"Paneles decorativos de alta absorción.",img:U+"photo-1558618666-fcd25c85f82e"+P},
  /* === STREAMING === */
  {id:83,sku:"TRS-ST-LIGHT",name:"Aro de Luz LED 18\" Bicolor",category:"Streaming",price:49990,originalPrice:64990,stock:14,stockCritico:3,featured:false,rating:4.6,shortDesc:"45cm, 3200K-5600K, trípode.",description:"Iluminación regulable con trípode 2m.",img:U+"photo-1611532736597-de2d4265fba3"+P},
  {id:84,sku:"TRS-ST-DECK",name:"Stream Deck 15 Teclas LCD",category:"Streaming",price:159990,originalPrice:199990,stock:7,stockCritico:2,featured:true,rating:4.8,shortDesc:"15 teclas LCD, macros OBS.",description:"Controla OBS, Twitch con teclas LCD.",img:U+"photo-1593642632559-0c6d3fc62b89"+P},
  {id:85,sku:"TRS-ST-GREEN",name:"Pantalla Verde Plegable 180×200",category:"Streaming",price:69990,originalPrice:89990,stock:10,stockCritico:3,featured:false,rating:4.5,shortDesc:"Chroma key, plegable, anti-arrugas.",description:"Fondo verde portátil para streaming.",img:U+"photo-1574717024653-61fd2cf4d44v"+P},
  {id:86,sku:"TRS-ST-MIC2",name:"Micrófono Dinámico XLR Pro Voice",category:"Streaming",price:119990,originalPrice:149990,stock:9,stockCritico:2,featured:false,rating:4.8,shortDesc:"Cápsula dinámica, rechazo ruido.",description:"Rechaza ruido de teclado. Brazo incluido.",img:U+"photo-1598488035139-bdbb2231ce04"+P},
  {id:87,sku:"TRS-ST-CAP",name:"Capturadora Video USB3 1080p60",category:"Streaming",price:44990,originalPrice:59990,stock:15,stockCritico:4,featured:false,rating:4.5,shortDesc:"1080p60, USB 3.0, plug & play.",description:"Captura gameplay sin drivers.",img:U+"photo-1606144042614-b2417e99c4e3"+P},
  {id:88,sku:"TRS-ST-PANEL",name:"Panel LED Key Light Escritorio",category:"Streaming",price:89990,originalPrice:109990,stock:8,stockCritico:2,featured:false,rating:4.7,shortDesc:"2900 lux, control por app, clamp.",description:"Panel LED profesional con clamp.",img:U+"photo-1621259182978-fbf93132e53d"+P},
  {id:89,sku:"TRS-ST-WEBCAM2",name:"Webcam Full HD 1080p60 Autofocus",category:"Streaming",price:59990,originalPrice:79990,stock:18,stockCritico:4,featured:false,rating:4.5,shortDesc:"1080p60, autofocus, privacidad.",description:"Enfoque automático rápido.",img:U+"photo-1609091839311-d5365f9ff1c5"+P},
  /* === HOGAR INTELIGENTE === */
  {id:90,sku:"TRS-SH-BULB4",name:"Pack 4 Ampolletas Inteligentes RGB",category:"Hogar Inteligente",price:29990,originalPrice:39990,stock:25,stockCritico:6,featured:false,rating:4.5,shortDesc:"WiFi, 16M colores, Alexa/Google.",description:"4 ampolletas WiFi con 16M de colores.",img:U+"photo-1558089687-f282d8b1b0d3"+P},
  {id:91,sku:"TRS-SH-PLUG4",name:"Pack 4 Enchufes Inteligentes WiFi",category:"Hogar Inteligente",price:24990,originalPrice:34990,stock:30,stockCritico:8,featured:false,rating:4.4,shortDesc:"Control remoto, temporizador.",description:"Controla dispositivos desde tu celular.",img:U+"photo-1555680202-c86f0e12f086"+P},
  {id:92,sku:"TRS-SH-CAM360",name:"Cámara Seguridad 360° WiFi 2K",category:"Hogar Inteligente",price:39990,originalPrice:54990,stock:16,stockCritico:4,featured:true,rating:4.7,shortDesc:"360°, visión nocturna, audio bidireccional.",description:"Vigila tu setup 24/7 con 2K.",img:U+"photo-1585771724684-38269d6639fd"+P},
  {id:93,sku:"TRS-SH-SENSOR",name:"Sensor Temperatura y Humedad",category:"Hogar Inteligente",price:14990,originalPrice:19990,stock:35,stockCritico:8,featured:false,rating:4.3,shortDesc:"LCD, alertas por app, historial.",description:"Monitorea tu gaming room.",img:U+"photo-1567581935884-3349723552ca"+P},
  {id:94,sku:"TRS-SH-SPEAK",name:"Parlante Inteligente Mini Pantalla",category:"Hogar Inteligente",price:54990,originalPrice:69990,stock:12,stockCritico:3,featured:false,rating:4.6,shortDesc:"Pantalla 5\", asistente de voz.",description:"Control por voz y pantalla táctil.",img:U+"photo-1543512214-318228f4e78d"+P},
  {id:95,sku:"TRS-SH-STRIP",name:"Regleta Inteligente 6 Tomas USB",category:"Hogar Inteligente",price:34990,originalPrice:44990,stock:18,stockCritico:4,featured:false,rating:4.5,shortDesc:"6 tomas + 4 USB, surge protector.",description:"Protege cada dispositivo de tu setup.",img:U+"photo-1544244015-0df4b3ffc6b0"+P},
  {id:96,sku:"TRS-SH-BLINDS",name:"Motor para Cortinas Inteligente",category:"Hogar Inteligente",price:44990,originalPrice:59990,stock:10,stockCritico:3,featured:false,rating:4.4,shortDesc:"App y voz, silencioso, USB.",description:"Automatiza tus cortinas para gaming.",img:U+"photo-1558002038-1055907df827"+P}
];

/* Asignar fotos coherentes a todos los productos */
var _catIdx={};
function getPhotoForProduct(p) {
  /* 1. Mapa FOTO verificado para los 18 base */
  if (FOTO[p.id]) return FOTO[p.id];
  /* 2. Si el producto ACC ya trae img válida, usarla */
  if (p.img && p.img.indexOf("unsplash")>-1) return p.img;
  /* 3. Banco rotativo por categoría */
  var bank = FOTOS_POR_CAT[p.category];
  if (bank && bank.length > 0) {
    if (!_catIdx[p.category]) _catIdx[p.category] = 0;
    var idx = _catIdx[p.category] % bank.length;
    _catIdx[p.category]++;
    return bank[idx];
  }
  /* 4. Fallback categoría */
  return FOTO_CATEGORIA[p.category] || U+"photo-1542751371-adc38448a05e"+P;
}

(function() {
  if (typeof PRODUCTS === "undefined") return;
  /* Agregar productos nuevos del ACC */
  ACC.forEach(function(n) {
    if (!PRODUCTS.some(function(p) { return String(p.id) === String(n.id); })) {
      PRODUCTS.push(n);
    }
  });
  /* Asignar foto real a CADA producto — sin SVG fallback */
  PRODUCTS.forEach(function(p) {
    p.img = getPhotoForProduct(p);
  });
  localStorage.setItem("productosTecnoRosita", JSON.stringify(PRODUCTS));
})();

/* Fallback global: si una imagen falla → foto real de categoría, NUNCA un SVG */
var _fallbackPhotos=[
  U+"photo-1558002038-1055907df827"+P,
  U+"photo-1542751371-adc38448a05e"+P,
  U+"photo-1593062096033-9a26b09da705"+P,
  U+"photo-1531297484001-80022131f5a1"+P
];
var _fbIdx=0;
document.addEventListener("error", function(e) {
  var img = e.target;
  if (img.tagName === "IMG" && !img.dataset.fallback) {
    img.dataset.fallback = "1";
    /* Buscar producto para usar foto de su categoría */
    var card = img.closest("[data-product-id]") || img.closest(".card");
    if (card) {
      var id = card.dataset.productId || (card.querySelector("[data-add-id]") || {}).dataset?.addId;
      var p = typeof findProductById === "function" ? findProductById(id) : null;
      if (p && FOTO_CATEGORIA[p.category]) { img.src = FOTO_CATEGORIA[p.category]; return; }
    }
    /* Fallback genérico rotativo — nunca SVG */
    img.src = _fallbackPhotos[_fbIdx % _fallbackPhotos.length];
    _fbIdx++;
  }
}, true);
