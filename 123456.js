const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    const mapContainer = document.getElementById("mapContainer");
    const btn = document.getElementById("btn");
    const cameraDiv = document.getElementById("camera");

    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        cameraDiv.style.display = "block"; // show camera
        btn.innerText = "CANCEL";
    } else {
        stopScanner();
        mapContainer.style.display = "flex";
        cameraDiv.style.display = "none"; // hide camera
        btn.innerText = "SCAN";
    }
}

function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function(text) {
            try {
                const item = JSON.parse(text);
                showInventory(item);
                toggleScanner();
            } catch(err) {
                console.error("Invalid QR code JSON:", err);
                alert("QR code does not contain valid inventory data!");
            }
        }
    ).catch(function(err) {
        console.error("Error starting scanner:", err);
    });
}

function stopScanner() {
    reader.stop();
}

// Display inventory info
function showInventory(item) {
    document.getElementById("itemName").innerText = "Name: " + (item.name || "Unknown");
    document.getElementById("inStore").innerText = "In Store: " + (item.in_store ? "Yes" : "No");
    document.getElementById("price").innerText = "Price: €" + (item.price !== undefined ? item.price.toFixed(2) : "0.00");
}

// Optional: marker positioning
function showMarkerAt(top, left) {
    const marker = document.getElementById("marker");
    marker.style.top = top;
    marker.style.left = left;
}
