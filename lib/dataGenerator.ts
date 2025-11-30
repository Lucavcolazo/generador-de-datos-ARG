// Nombres argentinos comunes (triplicados para mayor variedad)
const nombres = [
  'Juan', 'María', 'Carlos', 'Ana', 'Luis', 'Laura', 'Diego', 'Sofía',
  'Martín', 'Valentina', 'Fernando', 'Camila', 'Pablo', 'Lucía', 'Gonzalo', 'Martina',
  'Nicolás', 'Agustina', 'Sebastián', 'Isabella', 'Andrés', 'Florencia', 'Javier', 'Antonella',
  'Rodrigo', 'Catalina', 'Federico', 'Constanza', 'Matías', 'Victoria', 'Tomás', 'Jazmín',
  'Ignacio', 'Olivia', 'Emiliano', 'Emma', 'Santiago', 'Mía', 'Benjamín', 'Delfina',
  'Alejandro', 'Julieta', 'Facundo', 'Bianca', 'Bruno', 'Amparo', 'Leandro', 'Renata',
  'Maximiliano', 'Lola', 'Franco', 'Francesca', 'Lucas', 'Helena', 'Thiago', 'Amanda',
  'Bautista', 'Celeste', 'Dante', 'Diana', 'Enzo', 'Eliana', 'Gabriel', 'Gabriela',
  'Hugo', 'Inés', 'Iván', 'Irene', 'Joaquín', 'Julia', 'Kevin', 'Kiara',
  'Lautaro', 'Liliana', 'Manuel', 'Micaela', 'Nahuel', 'Natalia', 'Octavio', 'Oriana',
  'Patricio', 'Paula', 'Quique', 'Querida', 'Rafael', 'Rocío', 'Simón', 'Sol',
  'Tadeo', 'Tatiana', 'Ulises', 'Úrsula', 'Vicente', 'Verónica', 'Walter', 'Wendy',
  'Xavier', 'Ximena', 'Yago', 'Yamila', 'Zacarías', 'Zoe', 'Ángel', 'Ángela',
  'Érica', 'Íñigo', 'Óscar', 'Úrsula', 'Adrián', 'Adriana', 'Bárbara', 'César',
  'Damián', 'Daniela', 'Eduardo', 'Elena', 'Felipe', 'Fátima', 'Gustavo', 'Gisela',
  'Héctor', 'Hilda', 'Iván', 'Iris', 'Jorge', 'Josefina', 'Kurt', 'Karina',
  'Lorenzo', 'Lorena', 'Marcelo', 'Mariana', 'Néstor', 'Nora', 'Omar', 'Olga',
  'Pedro', 'Patricia', 'Ramiro', 'Rosa', 'Sergio', 'Silvia', 'Tobías', 'Teresa',
  'Uriel', 'Ursula', 'Víctor', 'Vanesa', 'Wenceslao', 'Wanda', 'Ximena', 'Xenia',
  'Yamil', 'Yanina', 'Zacarías', 'Zulma', 'Álvaro', 'Ángeles', 'Édgar', 'Érica',
  'Íñigo', 'Íris', 'Óliver', 'Órquidea', 'Úrsula', 'Única', 'Adolfo', 'Alicia',
  'Bernardo', 'Beatriz', 'Cristian', 'Cristina', 'Dario', 'Dolores', 'Esteban', 'Estela',
  'Fabio', 'Fabiana', 'Gerardo', 'Gloria', 'Horacio', 'Hortensia', 'Iván', 'Inmaculada',
  'Julián', 'Juana', 'Kai', 'Karla', 'Leonardo', 'Leonor', 'Mauricio', 'Margarita',
  'Norberto', 'Nieves', 'Oswaldo', 'Ofelia', 'Pascual', 'Pilar', 'Rafael', 'Raquel',
  'Salvador', 'Susana', 'Teodoro', 'Teresa', 'Ulises', 'Úrsula', 'Vicente', 'Virginia',
  'Wilfredo', 'Wendy', 'Xavier', 'Ximena', 'Yago', 'Yolanda', 'Zacarías', 'Zoraida'
];

// Apellidos argentinos comunes (triplicados para mayor variedad)
const apellidos = [
  'García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez',
  'Gómez', 'Martín', 'Jiménez', 'Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Álvarez',
  'Muñoz', 'Romero', 'Alonso', 'Gutiérrez', 'Navarro', 'Torres', 'Domínguez', 'Vázquez',
  'Ramos', 'Gil', 'Ramírez', 'Serrano', 'Blanco', 'Suárez', 'Molina', 'Morales',
  'Ortega', 'Delgado', 'Castro', 'Ortiz', 'Rubio', 'Marín', 'Sanz', 'Iglesias',
  'Acosta', 'Aguilar', 'Arias', 'Benítez', 'Bravo', 'Cabrera', 'Calvo', 'Cano',
  'Carrasco', 'Castillo', 'Cortés', 'Cruz', 'Delgado', 'Díaz', 'Domingo', 'Durán',
  'Esteban', 'Ferrer', 'Flores', 'Fuentes', 'Gallardo', 'Garrido', 'Guerrero', 'Herrera',
  'Hidalgo', 'Ibáñez', 'Iglesias', 'Izquierdo', 'Jáuregui', 'Juárez', 'Lara', 'León',
  'Lozano', 'Márquez', 'Medina', 'Méndez', 'Miranda', 'Mora', 'Nieto', 'Núñez',
  'Ochoa', 'Ortega', 'Pardo', 'Parra', 'Peña', 'Pérez', 'Prieto', 'Quiroga',
  'Reyes', 'Rivas', 'Robles', 'Rojas', 'Romero', 'Ruiz', 'Sáez', 'Salazar',
  'Santiago', 'Santos', 'Sierra', 'Silva', 'Soler', 'Soto', 'Toro', 'Torres',
  'Vargas', 'Vega', 'Velasco', 'Vicente', 'Vidal', 'Villa', 'Yáñez', 'Zamora',
  'Acevedo', 'Aguirre', 'Alarcón', 'Alvarado', 'Amaya', 'Aranda', 'Arévalo', 'Arias',
  'Báez', 'Barrios', 'Bermúdez', 'Blanco', 'Bustos', 'Caballero', 'Campos', 'Cárdenas',
  'Carmona', 'Carrera', 'Casas', 'Castaño', 'Cervantes', 'Chávez', 'Collado', 'Contreras',
  'Correa', 'Costa', 'Crespo', 'Cuenca', 'Dávila', 'De la Cruz', 'Del Río', 'Del Valle',
  'Escobar', 'Espinosa', 'Esquivel', 'Fajardo', 'Falcón', 'Fariña', 'Ferrero', 'Figueroa',
  'Franco', 'Frías', 'Galán', 'Gallegos', 'Gallego', 'García', 'Garmendia', 'Garza',
  'Giménez', 'Giraldo', 'Godoy', 'Gómez', 'González', 'Granados', 'Guerra', 'Guillén',
  'Guzmán', 'Haro', 'Henríquez', 'Herrera', 'Hidalgo', 'Hoyos', 'Huerta', 'Ibarra',
  'Infante', 'Jaime', 'Jaramillo', 'Jasso', 'Jiménez', 'Jurado', 'Lagos', 'Landa',
  'Lara', 'Larios', 'Leiva', 'Lema', 'Linares', 'Lira', 'Lobato', 'Lobo',
  'López', 'Lozano', 'Luna', 'Macías', 'Madrid', 'Maldonado', 'Manzano', 'Márquez',
  'Mata', 'Mateo', 'Mayorga', 'Méndez', 'Mendoza', 'Mesa', 'Molina', 'Monroy',
  'Montes', 'Montoya', 'Mora', 'Morales', 'Moreno', 'Moya', 'Muñoz', 'Murillo',
  'Naranjo', 'Navarro', 'Nieto', 'Núñez', 'Ocampo', 'Ochoa', 'Oliva', 'Olivares',
  'Olmos', 'Ordóñez', 'Orellana', 'Ortega', 'Ortiz', 'Osorio', 'Pacheco', 'Padilla',
  'Palacios', 'Palomino', 'Paniagua', 'Pardo', 'Paredes', 'Parra', 'Pascual', 'Pastor',
  'Paz', 'Peña', 'Peralta', 'Pérez', 'Pineda', 'Pizarro', 'Plaza', 'Ponce',
  'Pozo', 'Prieto', 'Puerta', 'Pulido', 'Quesada', 'Quintero', 'Quirós', 'Ramírez',
  'Ramos', 'Raya', 'Reina', 'Requena', 'Reyes', 'Rico', 'Rincón', 'Ríos',
  'Rivas', 'Rivera', 'Robledo', 'Robles', 'Roca', 'Rocha', 'Rodríguez', 'Rojo',
  'Roldán', 'Román', 'Romero', 'Ros', 'Rosado', 'Rosales', 'Rosas', 'Rubio',
  'Ruiz', 'Sáenz', 'Sáez', 'Salas', 'Salazar', 'Salcedo', 'Salgado', 'Salinas',
  'Salvador', 'Sánchez', 'Sandoval', 'Sancho', 'Santana', 'Santiago', 'Santos', 'Sanz',
  'Sarmiento', 'Segovia', 'Segura', 'Serna', 'Serrano', 'Sierra', 'Silva', 'Sobrino',
  'Sola', 'Soler', 'Soria', 'Soriano', 'Sosa', 'Soto', 'Suárez', 'Talavera',
  'Tamayo', 'Tapia', 'Tejada', 'Tejeda', 'Téllez', 'Tello', 'Toledo', 'Tomé',
  'Torres', 'Tovar', 'Trujillo', 'Ureña', 'Urías', 'Valdés', 'Valdez', 'Valencia',
  'Valero', 'Valladares', 'Valle', 'Vallejo', 'Varela', 'Vargas', 'Vázquez', 'Vega',
  'Velasco', 'Vélez', 'Vera', 'Verdugo', 'Vicente', 'Vidal', 'Villa', 'Villalobos',
  'Villanueva', 'Villar', 'Villareal', 'Villegas', 'Yáñez', 'Ybarra', 'Zamora', 'Zapata',
  'Zaragoza', 'Zavala', 'Zúñiga', 'Zurita'
];

// Provincias argentinas con códigos postales típicos
const provincias = [
  { nombre: 'Buenos Aires', cpInicio: 1000, cpFin: 1999 },
  { nombre: 'Córdoba', cpInicio: 5000, cpFin: 5999 },
  { nombre: 'Santa Fe', cpInicio: 2000, cpFin: 2999 },
  { nombre: 'Mendoza', cpInicio: 5500, cpFin: 5599 },
  { nombre: 'Tucumán', cpInicio: 4000, cpFin: 4099 },
  { nombre: 'Salta', cpInicio: 4400, cpFin: 4499 },
  { nombre: 'Entre Ríos', cpInicio: 3100, cpFin: 3199 },
  { nombre: 'Misiones', cpInicio: 3300, cpFin: 3399 },
  { nombre: 'Corrientes', cpInicio: 3400, cpFin: 3499 },
  { nombre: 'Chaco', cpInicio: 3500, cpFin: 3599 },
  { nombre: 'Santiago del Estero', cpInicio: 4200, cpFin: 4299 },
  { nombre: 'San Juan', cpInicio: 5400, cpFin: 5499 },
  { nombre: 'Jujuy', cpInicio: 4600, cpFin: 4699 },
  { nombre: 'Río Negro', cpInicio: 8300, cpFin: 8399 },
  { nombre: 'Formosa', cpInicio: 3600, cpFin: 3699 },
  { nombre: 'Neuquén', cpInicio: 8300, cpFin: 8399 },
  { nombre: 'Chubut', cpInicio: 9100, cpFin: 9199 },
  { nombre: 'San Luis', cpInicio: 5700, cpFin: 5799 },
  { nombre: 'Catamarca', cpInicio: 4700, cpFin: 4799 },
  { nombre: 'La Rioja', cpInicio: 5300, cpFin: 5399 },
  { nombre: 'La Pampa', cpInicio: 6300, cpFin: 6399 },
  { nombre: 'Santa Cruz', cpInicio: 9400, cpFin: 9499 },
  { nombre: 'Tierra del Fuego', cpInicio: 9410, cpFin: 9419 }
];

// Calles argentinas comunes (triplicadas para mayor variedad)
const calles = [
  'Av. Corrientes', 'Av. Santa Fe', 'Av. Córdoba', 'Av. Cabildo', 'Av. Rivadavia',
  'Av. Libertador', 'Av. 9 de Julio', 'Av. Belgrano', 'Av. San Martín', 'Av. Mitre',
  'Calle San Juan', 'Calle Mendoza', 'Calle Salta', 'Calle Tucumán', 'Calle Entre Ríos',
  'Calle Jujuy', 'Calle Formosa', 'Calle La Rioja', 'Calle Catamarca', 'Calle Santiago',
  'Calle Moreno', 'Calle Sarmiento', 'Calle Alberdi', 'Calle Urquiza', 'Calle Rawson',
  'Calle Güemes', 'Calle Dorrego', 'Calle Pueyrredón', 'Calle Scalabrini Ortiz', 'Calle Warnes',
  'Av. del Libertador', 'Av. General Paz', 'Av. Juan B. Justo', 'Av. Las Heras', 'Av. Monroe',
  'Av. Triunvirato', 'Av. Forest', 'Av. del Libertador', 'Av. Figueroa Alcorta', 'Av. Lugones',
  'Calle Reconquista', 'Calle Florida', 'Calle Lavalle', 'Calle Maipú', 'Calle Viamonte',
  'Calle Talcahuano', 'Calle Callao', 'Calle Ayacucho', 'Calle Junín', 'Calle Uriburu',
  'Calle Agüero', 'Calle Bulnes', 'Calle Soler', 'Calle Armenia', 'Calle Gorriti',
  'Av. Cramer', 'Av. Olazábal', 'Av. Monroe', 'Av. Juramento', 'Av. Congreso',
  'Av. Nazca', 'Av. Acoyte', 'Av. Directorio', 'Av. Boedo', 'Av. San Juan',
  'Calle Defensa', 'Calle Balcarce', 'Calle Perú', 'Calle Bolívar', 'Calle Alsina',
  'Calle Hipólito Yrigoyen', 'Calle Bartolomé Mitre', 'Calle Adolfo Alsina', 'Calle Bernardo de Irigoyen', 'Calle Humberto Primo',
  'Av. La Plata', 'Av. Boedo', 'Av. San Juan', 'Av. Independencia', 'Av. Entre Ríos',
  'Av. Jujuy', 'Av. Pueyrredón', 'Av. Santa Fe', 'Av. Córdoba', 'Av. Corrientes',
  'Calle Montevideo', 'Calle Paraguay', 'Calle Uruguay', 'Calle Chile', 'Calle Brasil',
  'Calle Venezuela', 'Calle Colombia', 'Calle Ecuador', 'Calle Perú', 'Calle Bolivia',
  'Av. Díaz Vélez', 'Av. Ángel Gallardo', 'Av. Medrano', 'Av. Scalabrini Ortiz', 'Av. Dorrego',
  'Calle Thames', 'Calle Fitz Roy', 'Calle Serrano', 'Calle Malabia', 'Calle Costa Rica',
  'Calle Nicaragua', 'Calle Honduras', 'Calle Guatemala', 'Calle El Salvador', 'Calle Panamá',
  'Av. Federico Lacroze', 'Av. Elcano', 'Av. Álvarez Thomas', 'Av. Forest', 'Av. del Libertador',
  'Calle Aráoz', 'Calle Gurruchaga', 'Calle Bonpland', 'Calle Carranza', 'Calle Charcas',
  'Calle Paraguay', 'Calle Montevideo', 'Calle Uruguay', 'Calle Chile', 'Calle Brasil',
  'Av. Santa Fe', 'Av. Córdoba', 'Av. Corrientes', 'Av. Cabildo', 'Av. Rivadavia',
  'Calle San Martín', 'Calle Belgrano', 'Calle Moreno', 'Calle Sarmiento', 'Calle Mitre',
  'Calle Alem', 'Calle Reconquista', 'Calle Florida', 'Calle Lavalle', 'Calle Maipú',
  'Av. Libertador', 'Av. 9 de Julio', 'Av. Belgrano', 'Av. San Martín', 'Av. Mitre',
  'Calle Viamonte', 'Calle Talcahuano', 'Calle Callao', 'Calle Ayacucho', 'Calle Junín',
  'Calle Uriburu', 'Calle Agüero', 'Calle Bulnes', 'Calle Soler', 'Calle Armenia',
  'Calle Gorriti', 'Calle Thames', 'Calle Fitz Roy', 'Calle Serrano', 'Calle Malabia',
  'Av. Cramer', 'Av. Olazábal', 'Av. Monroe', 'Av. Juramento', 'Av. Congreso',
  'Av. Nazca', 'Av. Acoyte', 'Av. Directorio', 'Av. Boedo', 'Av. San Juan',
  'Calle Defensa', 'Calle Balcarce', 'Calle Perú', 'Calle Bolívar', 'Calle Alsina',
  'Calle Hipólito Yrigoyen', 'Calle Bartolomé Mitre', 'Calle Adolfo Alsina', 'Calle Bernardo de Irigoyen', 'Calle Humberto Primo',
  'Av. La Plata', 'Av. Boedo', 'Av. San Juan', 'Av. Independencia', 'Av. Entre Ríos',
  'Av. Jujuy', 'Av. Pueyrredón', 'Av. Santa Fe', 'Av. Córdoba', 'Av. Corrientes',
  'Calle Montevideo', 'Calle Paraguay', 'Calle Uruguay', 'Calle Chile', 'Calle Brasil',
  'Av. Díaz Vélez', 'Av. Ángel Gallardo', 'Av. Medrano', 'Av. Scalabrini Ortiz', 'Av. Dorrego',
  'Calle Thames', 'Calle Fitz Roy', 'Calle Serrano', 'Calle Malabia', 'Calle Costa Rica',
  'Av. Federico Lacroze', 'Av. Elcano', 'Av. Álvarez Thomas', 'Av. Forest', 'Av. del Libertador',
  'Calle Aráoz', 'Calle Gurruchaga', 'Calle Bonpland', 'Calle Carranza', 'Calle Charcas'
];

// Función auxiliar para obtener un elemento aleatorio de un array
function randomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Función para generar un número aleatorio en un rango
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sistema de tracking de DNI para evitar duplicados
const dnisGenerados = new Set<string>();
let contadorDNI = Date.now();

// Generar DNI en formato argentino (XX.XXX.XXX) sin duplicados
export function generarDNI(): string {
  let dni: string;
  let intentos = 0;
  const maxIntentos = 1000; // Límite de seguridad
  
  do {
    // Combinar timestamp, número aleatorio y contador para máxima variedad
    const timestamp = Date.now() % 100000;
    const aleatorio = randomInt(10000, 99999);
    contadorDNI++;
    const numero = (timestamp * 1000 + aleatorio + contadorDNI + intentos) % 90000000 + 10000000;
    const str = numero.toString().padStart(8, '0');
    dni = `${str.substring(0, 2)}.${str.substring(2, 5)}.${str.substring(5, 8)}`;
    intentos++;
  } while (dnisGenerados.has(dni) && intentos < maxIntentos);
  
  // Si después de muchos intentos sigue duplicado, usar timestamp completo
  if (dnisGenerados.has(dni)) {
    const timestampCompleto = Date.now();
    const numeroUnico = (timestampCompleto % 90000000) + 10000000;
    const str = numeroUnico.toString().padStart(8, '0');
    dni = `${str.substring(0, 2)}.${str.substring(2, 5)}.${str.substring(5, 8)}`;
  }
  
  dnisGenerados.add(dni);
  return dni;
}

// Función para limpiar DNI generados (útil si se necesita resetear)
export function limpiarDNIsGenerados(): void {
  dnisGenerados.clear();
}

// Función para obtener el conteo de DNI únicos generados
export function obtenerCantidadDNIsUnicos(): number {
  return dnisGenerados.size;
}

// Generar nombre completo
export function generarNombre(): { nombre: string; apellido: string } {
  return {
    nombre: randomElement(nombres),
    apellido: randomElement(apellidos)
  };
}

// Generar fecha de nacimiento (entre 18 y 80 años)
export function generarFechaNacimiento(): string {
  const hoy = new Date();
  const edad = randomInt(18, 80);
  const año = hoy.getFullYear() - edad;
  const mes = randomInt(1, 12);
  const diasEnMes = new Date(año, mes, 0).getDate();
  const dia = randomInt(1, diasEnMes);
  
  const fecha = new Date(año, mes - 1, dia);
  const diaStr = fecha.getDate().toString().padStart(2, '0');
  const mesStr = (fecha.getMonth() + 1).toString().padStart(2, '0');
  const añoStr = fecha.getFullYear().toString();
  
  return `${diaStr}/${mesStr}/${añoStr}`;
}

// Generar email basado en nombre y apellido
export function generarEmail(nombre: string, apellido: string): string {
  const dominios = ['gmail.com', 'hotmail.com', 'yahoo.com.ar', 'outlook.com', 'live.com'];
  const nombreLimpio = nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const apellidoLimpio = apellido.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const numero = Math.random() < 0.3 ? randomInt(1, 99) : '';
  const dominio = randomElement(dominios);
  
  return `${nombreLimpio}.${apellidoLimpio}${numero ? numero : ''}@${dominio}`;
}

// Generar número de teléfono argentino (formato: +54 11 XXXX-XXXX o 011 XXXX-XXXX)
export function generarTelefono(): string {
  const codigosArea = [
    '11', '221', '223', '224', '226', '230', '236', '237', '239', '240',
    '260', '261', '262', '263', '264', '266', '280', '290', '291', '292',
    '294', '296', '297', '298', '299', '341', '342', '343', '345', '348',
    '351', '352', '353', '354', '356', '358', '362', '364', '370', '371',
    '376', '379', '380', '381', '383', '385', '387', '388', '389', '391'
  ];
  
  const codigoArea = randomElement(codigosArea);
  const numero = randomInt(1000000, 9999999);
  
  // Formato: +54 11 XXXX-XXXX o 011 XXXX-XXXX
  if (codigoArea === '11') {
    // Buenos Aires puede tener formato con 011
    const formato = Math.random() < 0.5 ? '+54 11' : '011';
    return `${formato} ${numero.toString().substring(0, 4)}-${numero.toString().substring(4)}`;
  } else {
    return `+54 ${codigoArea} ${numero.toString().substring(0, 4)}-${numero.toString().substring(4)}`;
  }
}

// Generar código postal según provincia
function generarCodigoPostal(provincia: typeof provincias[0]): string {
  return randomInt(provincia.cpInicio, provincia.cpFin).toString();
}

// Generar dirección completa
export function generarDireccion(): {
  calle: string;
  numero: number;
  piso?: number;
  departamento?: string;
  provincia: string;
  codigoPostal: string;
} {
  const provincia = randomElement(provincias);
  const calle = randomElement(calles);
  const numero = randomInt(100, 9999);
  const tieneDepto = Math.random() < 0.4; // 40% de probabilidad de tener departamento
  
  const direccion: {
    calle: string;
    numero: number;
    piso?: number;
    departamento?: string;
    provincia: string;
    codigoPostal: string;
  } = {
    calle,
    numero,
    provincia: provincia.nombre,
    codigoPostal: generarCodigoPostal(provincia)
  };
  
  if (tieneDepto) {
    direccion.piso = randomInt(1, 15);
    direccion.departamento = String.fromCharCode(65 + randomInt(0, 5)); // A-F
  }
  
  return direccion;
}

// Generar persona completa
export function generarPersona(): {
  dni: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  email: string;
  telefono: string;
} {
  const { nombre, apellido } = generarNombre();
  return {
    dni: generarDNI(),
    nombre,
    apellido,
    fechaNacimiento: generarFechaNacimiento(),
    email: generarEmail(nombre, apellido),
    telefono: generarTelefono()
  };
}

// Tipos de propiedades
const tiposPropiedad = [
  'Casa', 'Departamento', 'Local Comercial', 'Oficina', 'Terreno', 
  'Cochera', 'PH', 'Duplex', 'Monoambiente', 'Loft', 'Quinta', 'Casa Quinta'
];

const estadosPropiedad = [
  'Disponible', 'Alquilada', 'Vendida', 'En Mantenimiento', 'Reservada'
];

// Localidades argentinas comunes por provincia
const localidades = [
  'Palermo', 'Belgrano', 'Recoleta', 'San Telmo', 'Puerto Madero',
  'Caballito', 'Villa Crespo', 'Almagro', 'Boedo', 'Flores',
  'Villa Devoto', 'Villa Pueyrredón', 'Núñez', 'Saavedra', 'Coghlan',
  'Villa Urquiza', 'Villa Ortúzar', 'Chacarita', 'Colegiales', 'Villa Crespo',
  'Córdoba Capital', 'Villa Allende', 'Río Cuarto', 'Villa María', 'San Francisco',
  'Rosario', 'Santa Fe Capital', 'Rafaela', 'Venado Tuerto', 'Reconquista',
  'Mendoza Capital', 'Godoy Cruz', 'Luján de Cuyo', 'Maipú', 'San Rafael',
  'San Miguel de Tucumán', 'Yerba Buena', 'Tafí Viejo', 'Alderetes', 'Banda del Río Salí',
  'Salta Capital', 'San Salvador de Jujuy', 'Orán', 'Tartagal', 'Metán'
];

// Generar propiedad completa
export function generarPropiedad(): {
  nombre: string;
  codigo: string;
  calle: string;
  altura: number;
  pais: string;
  provincia: string;
  localidad: string;
  codigoPostal: string;
  piso?: number;
  estado: string;
  cantidadAmbientes: number;
  superficieTotal: number;
  cantidadBanos: number;
  cantidadHabitaciones: number;
  superficieCubierta: number;
  descripcion: string;
} {
  const direccion = generarDireccion();
  const tipo = randomElement(tiposPropiedad);
  const tienePiso = Math.random() < 0.5;
  
  // Generar código de propiedad
  const codigoNum = randomInt(1, 9999);
  const codigo = `PROP-${codigoNum.toString().padStart(4, '0')}`;
  
  // Generar nombre de propiedad
  const localidad = randomElement(localidades);
  const nombre = `${tipo} en ${localidad}`;
  
  // Datos de la propiedad
  const cantidadAmbientes = randomInt(1, 6);
  const cantidadHabitaciones = Math.max(1, cantidadAmbientes - 1);
  const cantidadBanos = Math.max(1, Math.floor(cantidadAmbientes / 2));
  const superficieCubierta = randomInt(40, 200);
  const superficieTotal = superficieCubierta + randomInt(0, 50);
  
  // Descripciones posibles
  const descripciones = [
    'Cocina integrada, balcón con vista al parque, pisos de madera',
    'Amplio living comedor, cocina con isla, baño completo',
    'Excelente iluminación natural, pisos de porcelanato, aires acondicionados',
    'Cómoda distribución, patio interno, cochera cubierta',
    'Moderno diseño, excelente ubicación, cerca de transporte público',
    'Terraza privada, vista panorámica, amenities incluidos',
    'Recién refaccionado, listo para entrar a vivir',
    'Excelente estado, luminoso, con balcón al frente'
  ];
  
  const propiedad: {
    nombre: string;
    codigo: string;
    calle: string;
    altura: number;
    pais: string;
    provincia: string;
    localidad: string;
    codigoPostal: string;
    piso?: number;
    estado: string;
    cantidadAmbientes: number;
    superficieTotal: number;
    cantidadBanos: number;
    cantidadHabitaciones: number;
    superficieCubierta: number;
    descripcion: string;
  } = {
    nombre,
    codigo,
    calle: direccion.calle,
    altura: direccion.numero,
    pais: 'Argentina',
    provincia: direccion.provincia,
    localidad: randomElement(localidades),
    codigoPostal: direccion.codigoPostal,
    estado: randomElement(estadosPropiedad),
    cantidadAmbientes,
    superficieTotal,
    cantidadBanos,
    cantidadHabitaciones,
    superficieCubierta,
    descripcion: randomElement(descripciones)
  };
  
  if (tienePiso && direccion.piso) {
    propiedad.piso = direccion.piso;
  }
  
  return propiedad;
}

// Tipos para las opciones de generación
export type TipoGeneracion = 
  | 'solo-direccion'
  | 'propietario'
  | 'propietario-direccion'
  | 'propiedad'
  | 'propiedad-completa'
  | 'inquilino'
  | 'inquilino-direccion'
  | 'inquilino-garante'
  | 'inquilino-garante-direcciones';

// Generar datos según el tipo seleccionado
export function generarDatos(tipo: TipoGeneracion): any {
  switch (tipo) {
    case 'solo-direccion':
      return generarDireccion();
    
    case 'propietario':
      return {
        propietario: generarPersona()
      };
    
    case 'propietario-direccion':
      return {
        propietario: generarPersona(),
        direccion: generarDireccion()
      };
    
    case 'propiedad':
      return generarPropiedad();
    
    case 'propiedad-completa':
      return {
        propiedad: generarPropiedad(),
        propietario: generarPersona()
      };
    
    case 'inquilino':
      return {
        inquilino: generarPersona()
      };
    
    case 'inquilino-direccion':
      return {
        inquilino: generarPersona(),
        direccion: generarDireccion()
      };
    
    case 'inquilino-garante':
      return {
        inquilino: generarPersona(),
        garante: generarPersona()
      };
    
    case 'inquilino-garante-direcciones':
      return {
        inquilino: generarPersona(),
        direccionInquilino: generarDireccion(),
        garante: generarPersona(),
        direccionGarante: generarDireccion()
      };
    
    default:
      return {};
  }
}

