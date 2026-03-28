const reader = new Html5Qrcode("camera");
let scannerOn = false;

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

function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            try {
                const item = JSON.parse(text); // Parse QR JSON
                showInventory(item);           // Show inventory info
                toggleScanner();               // Stop scanner automatically
            } catch (err) {
                console.error("Invalid QR code data", err);
            }
        }
    ).catch(function (err) {
        console.error(err);
    });
}

function stopScanner() {
    reader.stop();
}

// Function to display inventory info
function showInventory(item) {
    // item should have keys: name, in_store, price
    document.getElementById("itemName").innerText = "Name: " + (item.name || "Unknown");
    document.getElementById("inStore").innerText = "In Store: " + (item.in_store ? "Yes" : "No");
    document.getElementById("price").innerText = "Price: €" + (item.price || "0.00");
}

// Optional: Keep the marker if needed (from previous assignment)
function showMarkerAt(top, left) {
    const marker = document.getElementById("marker");
    marker.style.top = top;
    marker.style.left = left;
}
