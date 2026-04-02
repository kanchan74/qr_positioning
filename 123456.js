// Create QR reader
const reader = new Html5Qrcode("camera");
let scannerOn = false;

// Toggle scanner
function toggleScanner() {
    scannerOn = !scannerOn;
    const mapContainer = document.getElementById("mapContainer");
    const btn = document.getElementById("btn");

    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        btn.innerText = "CANCEL";
    } else {
        stopScanner();
        mapContainer.style.display = "block";
        btn.innerText = "SCAN";
    }
}

// Start QR scanner
function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            try {
                const item = JSON.parse(text);

                showInventory(item);
                placeMarker(item.latitude, item.longitude);
                toggleScanner(); // stop scanner automatically
            } catch (err) {
                console.error("Invalid QR code data", err);
            }
        }
    ).catch(err => console.error(err));
}

// Stop scanner
function stopScanner() {
    reader.stop();
}

// Show inventory info
function showInventory(item) {
    document.getElementById("itemName").innerText =
        "Name: " + (item.name || "Unknown");

    document.getElementById("latitude").innerText =
        "Latitude: " + (item.latitude !== undefined ? item.latitude : "Unknown");

    document.getElementById("longitude").innerText =
        "Longitude: " + (item.longitude !== undefined ? item.longitude : "Unknown");
}

// Place marker on the map
function placeMarker(lat, lng) {
    const marker = document.getElementById("marker");
    const map = document.getElementById("map");

    // Calculate proportional position on the map
    // Assuming lat/lng ranges (for demo) - adjust according to your map
    const topPercent = ((62.6 - lat) / 0.01) * 100; // Example calculation
    const leftPercent = ((lng - 29.77) / 0.01) * 100;

    marker.style.top = topPercent + "%";
    marker.style.left = leftPercent + "%";

    // Show the map
    document.getElementById("mapContainer").style.display = "block";
}
