import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js';
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAMOuFlFp-PMieEMH20ZAgKYjfjWl6CnlM",
    authDomain: "guardian-del-aire-2-ed351.firebaseapp.com",
    projectId: "guardian-del-aire-2-ed351",
    storageBucket: "guardian-del-aire-2-ed351.appspot.com",
    messagingSenderId: "543230215325",
    appId: "1:543230215325:web:39471288bc2ab4bf020074"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { db, storage, analytics, auth };

// Función para actualizar el valor de temperatura en el DOM
function actualizarTemperatura(valor) {
    const temperaturaElement = document.getElementById('temperatura');
    if (temperaturaElement) {
        temperaturaElement.innerText = `${valor}°C`;
    } else {
        console.error('No se encontró un elemento con el ID "temperatura"');
    }
}

// Función para actualizar el valor de CO2 en el DOM
function actualizarCO2(valor) {
    const co2Element = document.getElementById('co2');
    if (co2Element) {
        co2Element.innerText = `${valor} ppm`; // ppm = partes por millón
    } else {
        console.error('No se encontró un elemento con el ID "co2"');
    }
}

// Función para actualizar el valor de humedad en el DOM
function actualizarHumedad(valor) {
    const humedadElement = document.getElementById('humedad');
    if (humedadElement) {
        humedadElement.innerText = `${valor}%`;
    } else {
        console.error('No se encontró un elemento con el ID "humedad"');
    }
}

// Escucha los cambios en la base de datos en la clave 'Sensores'
const sensoresRef = ref(database, 'Sensores');
onValue(sensoresRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        actualizarTemperatura(data.temperatura);
        actualizarCO2(data.co2);
        actualizarHumedad(data.humedad);
    } else {
        console.error('No se encontraron datos en la clave "Sensores"');
    }
});

console.log("Conexión a Firebase establecida correctamente...");

