const DB_NAME = "AtheriotFileDB";
const DB_Version = 1;

const request =
    indexedDB.open(DB_NAME,
        DB_Version);

request.onupgradeneeded = (event) => {
    const db =
        event.target.result;

    if (!
        db.objectStoreNames.contains("items")) {
        db.createObjectStore("items", {
            keyPath: "id"
        });
    }

    if (! 
        db.objectStoreNames.contains("blobs"))
        {
            db.createObjectStore("blobs", {
                keyPath: "id"
            });
        }
};

request.onsuccess = (event) => {
    window.atheriotDB =
    event.target.result;
    console.log("Atheriot File database ready");
};

request.onerror = () => {
    console.error("Database error:", request.error);
};