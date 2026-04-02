// Create QR code reader attached to the "camera" div
const reader = new Html5Qrcode("camera");

// Boolean to track if scanner is active
let scannerOn = false;

// Function to toggle scanner ON/OFF
function toggleScanner() {
    scannerOn = !scannerOn; // Flip state

    const mapContainer = document.getElementById("mapContainer");
    const btn = document.getElementById("btn");

    if (scannerOn) {
        // Start scanner
        startScanner();

        // Hide map while scanning
        mapContainer.style.display = "none";

        // Change button text
        btn.innerText = "CANCEL";
    } else {
        // Stop scanner
        stopScanner();

        // Show map again
        mapContainer.style.display = "block";

        // Reset button text
        btn.innerText = "SCAN";
    }
}

// Function to start QR scanner
function startScanner() {
    reader.start(
        { facingMode: "environment" }, // Use back camera
        {}, // Scanner options
        function (text) {
            // Callback when QR code is detected
            try {
                const item = JSON.parse(text); // Convert QR text to JSON

                showInventory(item);           // Display scanned data
                toggleScanner();               // Stop scanner automatically
            } catch (err) {
                console.error("Invalid QR code data", err);
            }
        }
    ).catch(function (err) {
        // Handle start errors
        console.error(err);
    });
}

// Function to stop scanner
function stopScanner() {
    reader.stop();
}

// Function to display inventory info
function showInventory(item) {
    document.getElementById("itemName").innerText =
        "Name: " + (item.name || "Unknown");

    document.getElementById("latitude").innerText =
        "Latitude: " + (item.latitude || "Unknown");

    document.getElementById("longitude").innerText =
        "Longitude: " + (item.longitude || "Unknown");
}

// Function to place marker on the map
function showMarkerAt(top, left) {
    const marker = document.getElementById("marker");

    // Set marker position
    marker.style.top = top;
    marker.style.left = left;
}
