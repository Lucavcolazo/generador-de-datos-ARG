// Interfaz para los datos de persona
export interface PersonaData {
  dni: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  email: string;
  telefono: string;
}

// Dimensiones del DNI argentino (proporción 1.585:1)
const DNI_WIDTH = 856; // 85.6mm en píxeles (300 DPI)
const DNI_HEIGHT = 540; // 53.98mm en píxeles (300 DPI)

// Colores del DNI argentino
const COLORS = {
  background: '#E8F4F8',
  blue: '#1E3A8A',
  darkBlue: '#1E40AF',
  text: '#1F2937',
  lightText: '#6B7280',
  border: '#9CA3AF',
  photoBorder: '#CBD5E1'
};

// Generar avatar con iniciales
function generateAvatar(ctx: CanvasRenderingContext2D, nombre: string, apellido: string, x: number, y: number, size: number) {
  const initials = `${nombre.charAt(0)}${apellido.charAt(0)}`.toUpperCase();
  
  // Fondo circular
  ctx.fillStyle = COLORS.blue;
  ctx.beginPath();
  ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();
  
  // Texto de iniciales
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${size * 0.4}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(initials, x + size / 2, y + size / 2);
  
  // Borde
  ctx.strokeStyle = COLORS.photoBorder;
  ctx.lineWidth = 3;
  ctx.stroke();
}

// Generar número de trámite aleatorio
function generarNumeroTramite(): string {
  const numero = Math.floor(Math.random() * 90000000) + 10000000;
  return numero.toString();
}

// Calcular fecha de vencimiento (10 años después de la emisión)
function calcularFechaVencimiento(fechaEmision: Date): string {
  const vencimiento = new Date(fechaEmision);
  vencimiento.setFullYear(vencimiento.getFullYear() + 10);
  const dia = vencimiento.getDate().toString().padStart(2, '0');
  const mes = (vencimiento.getMonth() + 1).toString().padStart(2, '0');
  const año = vencimiento.getFullYear();
  return `${dia}/${mes}/${año}`;
}

// Determinar sexo basado en el nombre (simplificado)
function determinarSexo(nombre: string): string {
  const nombresFemeninos = ['María', 'Ana', 'Laura', 'Sofía', 'Valentina', 'Camila', 'Lucía', 'Martina', 'Agustina', 'Isabella', 'Florencia', 'Antonella', 'Catalina', 'Constanza', 'Victoria', 'Jazmín', 'Olivia', 'Emma', 'Mía', 'Delfina', 'Julieta', 'Bianca', 'Amparo', 'Renata', 'Lola', 'Francesca', 'Helena', 'Amanda', 'Celeste', 'Diana', 'Eliana', 'Gabriela', 'Inés', 'Irene', 'Julia', 'Kiara', 'Liliana', 'Micaela', 'Natalia', 'Oriana', 'Paula', 'Rocío', 'Sol', 'Tatiana', 'Úrsula', 'Verónica', 'Wendy', 'Ximena', 'Yamila', 'Zoe', 'Ángela', 'Érica', 'Adriana', 'Bárbara', 'Cristina', 'Daniela', 'Dolores', 'Elena', 'Fátima', 'Gisela', 'Hilda', 'Iris', 'Josefina', 'Karina', 'Lorena', 'Mariana', 'Nora', 'Olga', 'Patricia', 'Rosa', 'Silvia', 'Teresa', 'Ursula', 'Vanesa', 'Wanda', 'Ximena', 'Xenia', 'Yanina', 'Zulma', 'Ángeles', 'Érica', 'Única', 'Alicia', 'Beatriz', 'Cristina', 'Dolores', 'Estela', 'Fabiana', 'Gloria', 'Hortensia', 'Inmaculada', 'Juana', 'Karla', 'Leonor', 'Margarita', 'Nieves', 'Ofelia', 'Pilar', 'Raquel', 'Susana', 'Teresa', 'Úrsula', 'Virginia', 'Wendy', 'Ximena', 'Yolanda', 'Zoraida'];
  return nombresFemeninos.includes(nombre) ? 'F' : 'M';
}

// Renderizar frente del DNI
export function renderizarFrenteDNI(persona: PersonaData): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = DNI_WIDTH;
  canvas.height = DNI_HEIGHT;
  const ctx = canvas.getContext('2d')!;

  // Fondo
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, DNI_WIDTH, DNI_HEIGHT);

  // Borde
  ctx.strokeStyle = COLORS.border;
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, DNI_WIDTH - 20, DNI_HEIGHT - 20);

  // Título "REPÚBLICA ARGENTINA"
  ctx.fillStyle = COLORS.blue;
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('REPÚBLICA ARGENTINA', DNI_WIDTH / 2, 50);

  // Subtítulo "DOCUMENTO NACIONAL DE IDENTIDAD"
  ctx.fillStyle = COLORS.darkBlue;
  ctx.font = 'bold 20px Arial';
  ctx.fillText('DOCUMENTO NACIONAL DE IDENTIDAD', DNI_WIDTH / 2, 80);

  // Foto/Avatar (lado izquierdo)
  const photoSize = 180;
  const photoX = 60;
  const photoY = 140;
  generateAvatar(ctx, persona.nombre, persona.apellido, photoX, photoY, photoSize);

  // Etiqueta "FOTO"
  ctx.fillStyle = COLORS.lightText;
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('FOTO', photoX + photoSize / 2, photoY + photoSize + 20);

  // Datos personales (lado derecho)
  const dataX = 300;
  let dataY = 150;

  // Apellido
  ctx.fillStyle = COLORS.text;
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('APELLIDO:', dataX, dataY);
  ctx.fillText(persona.apellido.toUpperCase(), dataX + 150, dataY);
  dataY += 40;

  // Nombre
  ctx.fillText('NOMBRE:', dataX, dataY);
  ctx.fillText(persona.nombre.toUpperCase(), dataX + 150, dataY);
  dataY += 50;

  // DNI
  ctx.font = 'bold 20px Arial';
  ctx.fillText('DOCUMENTO:', dataX, dataY);
  ctx.fillStyle = COLORS.blue;
  ctx.font = 'bold 24px Arial';
  ctx.fillText(persona.dni, dataX + 150, dataY);
  dataY += 40;

  // Fecha de nacimiento
  ctx.fillStyle = COLORS.text;
  ctx.font = 'bold 18px Arial';
  ctx.fillText('FECHA DE NACIMIENTO:', dataX, dataY);
  ctx.fillText(persona.fechaNacimiento, dataX + 250, dataY);
  dataY += 40;

  // Sexo
  const sexo = determinarSexo(persona.nombre);
  ctx.fillText('SEXO:', dataX, dataY);
  ctx.fillText(sexo, dataX + 150, dataY);
  dataY += 40;

  // Nacionalidad
  ctx.fillText('NACIONALIDAD:', dataX, dataY);
  ctx.fillText('ARGENTINA', dataX + 200, dataY);
  dataY += 50;

  // Fechas de emisión y vencimiento
  const fechaEmision = new Date();
  const fechaVencimiento = calcularFechaVencimiento(fechaEmision);
  const diaEmision = fechaEmision.getDate().toString().padStart(2, '0');
  const mesEmision = (fechaEmision.getMonth() + 1).toString().padStart(2, '0');
  const añoEmision = fechaEmision.getFullYear();
  const fechaEmisionStr = `${diaEmision}/${mesEmision}/${añoEmision}`;

  ctx.font = '16px Arial';
  ctx.fillText('EMISIÓN:', dataX, dataY);
  ctx.fillText(fechaEmisionStr, dataX + 120, dataY);
  dataY += 35;

  ctx.fillText('VENCIMIENTO:', dataX, dataY);
  ctx.fillText(fechaVencimiento, dataX + 150, dataY);
  dataY += 50;

  // Número de trámite
  const numeroTramite = generarNumeroTramite();
  ctx.font = '14px Arial';
  ctx.fillStyle = COLORS.lightText;
  ctx.fillText(`NRO. TRÁMITE: ${numeroTramite}`, dataX, dataY);

  // Código de barras simple (representación visual)
  const barcodeY = DNI_HEIGHT - 80;
  const barcodeX = dataX;
  const barcodeWidth = 300;
  const barcodeHeight = 40;
  
  ctx.fillStyle = COLORS.text;
  ctx.fillRect(barcodeX, barcodeY, barcodeWidth, barcodeHeight);
  
  // Líneas del código de barras
  ctx.fillStyle = '#FFFFFF';
  for (let i = 0; i < 20; i++) {
    const x = barcodeX + (i * 15);
    const width = Math.random() * 8 + 2;
    ctx.fillRect(x, barcodeY, width, barcodeHeight);
  }

  return canvas;
}

// Renderizar dorso del DNI
export function renderizarDorsoDNI(persona: PersonaData): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = DNI_WIDTH;
  canvas.height = DNI_HEIGHT;
  const ctx = canvas.getContext('2d')!;

  // Fondo
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, DNI_WIDTH, DNI_HEIGHT);

  // Borde
  ctx.strokeStyle = COLORS.border;
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, DNI_WIDTH - 20, DNI_HEIGHT - 20);

  // Título
  ctx.fillStyle = COLORS.blue;
  ctx.font = 'bold 28px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('REPÚBLICA ARGENTINA', DNI_WIDTH / 2, 50);

  // Información del domicilio
  let yPos = 120;
  ctx.fillStyle = COLORS.text;
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('DOMICILIO:', 60, yPos);
  yPos += 40;

  ctx.font = '18px Arial';
  ctx.fillText('El domicilio debe ser actualizado', 60, yPos);
  ctx.fillText('en el Registro Nacional de las Personas', 60, yPos + 30);
  yPos += 80;

  // Información adicional
  ctx.font = 'bold 18px Arial';
  ctx.fillText('INFORMACIÓN ADICIONAL:', 60, yPos);
  yPos += 40;

  ctx.font = '16px Arial';
  ctx.fillStyle = COLORS.lightText;
  ctx.fillText(`Email: ${persona.email}`, 60, yPos);
  yPos += 30;
  ctx.fillText(`Teléfono: ${persona.telefono}`, 60, yPos);
  yPos += 50;

  // Advertencias y notas
  ctx.font = '14px Arial';
  ctx.fillStyle = COLORS.text;
  ctx.fillText('Este documento es de prueba y no tiene validez legal.', 60, yPos);
  yPos += 30;
  ctx.fillText('Generado para fines de desarrollo y testing únicamente.', 60, yPos);

  // Código QR placeholder (representación visual)
  const qrSize = 120;
  const qrX = DNI_WIDTH - qrSize - 60;
  const qrY = DNI_HEIGHT - qrSize - 60;

  ctx.fillStyle = COLORS.text;
  ctx.fillRect(qrX, qrY, qrSize, qrSize);
  
  // Patrón simple de QR
  ctx.fillStyle = '#FFFFFF';
  const cellSize = qrSize / 8;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 3 === 0 || (i === 0 && j < 3) || (i < 3 && j === 0)) {
        ctx.fillRect(qrX + i * cellSize, qrY + j * cellSize, cellSize, cellSize);
      }
    }
  }

  // Etiqueta QR
  ctx.fillStyle = COLORS.lightText;
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('CÓDIGO QR', qrX + qrSize / 2, qrY + qrSize + 20);

  return canvas;
}

// Función para descargar canvas como imagen
export function descargarCanvas(canvas: HTMLCanvasElement, filename: string) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

