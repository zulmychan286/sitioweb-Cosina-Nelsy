function mostrarVistaPrevia(event) {
  const archivo = event.target.files[0];
  const vista = document.getElementById('vista-previa');
  vista.innerHTML = '';
  if (archivo) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(archivo);
    vista.appendChild(img);
  }
}

function mostrarOpcionesPago() {
  const metodo = document.getElementById('metodoPago').value;
  const efectivoDiv = document.getElementById('campoEfectivo');
  const transferenciaDiv = document.getElementById('campoTransferencia');

  efectivoDiv.style.display = metodo === 'efectivo' ? 'block' : 'none';
  transferenciaDiv.style.display = metodo === 'transferencia' ? 'block' : 'none';
}

function enviarWhatsApp() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const referencia = document.getElementById('referencia').value.trim();
  const metodo = document.getElementById('metodoPago').value;
  const pagoCon = document.getElementById('pagoCon').value.trim();

  if (!nombre || !apellido || !direccion || !referencia || !metodo) {
    alert('Por favor completa todos los campos antes de enviar.');
    return;
  }

  let mensaje = `*Pedido para Cocina Nelsy*\n\n👤 *Nombre:* ${nombre} ${apellido}\n📍 *Dirección:* ${direccion}\n📌 *Referencia:* ${referencia}\n💳 *Método de pago:* ${metodo}`;

  if (metodo === 'transferencia') {
    mensaje += `\n💳 *Cuenta:* 4027 6658 4368 2825`;
  } else if (metodo === 'efectivo') {
    mensaje += `\n💰 *Pago con:* $${pagoCon}`;
  }

  const telefono = "9992236981";
  const url = `https://wa.me/52${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}


