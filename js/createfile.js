function createFile(name, parentId = null) {

    const id = crypto.randomUUID();

    const file = {
        id,
        name,
        kind: "file",
        mimeType: "text/plain",
        size: 0,
        parentId,
        createdAt: Date.now()
    };

    const transaction = window.atheriotDB.transaction(
        ["items", "blobs"],
        "readwrite"
    );

    transaction.objectStore("items").add(file);

    transaction.objectStore("blobs").add({
        id,
        data: new Blob([""], {
            type: "text/plain"
        })
    });
}