function createFolder (name, 
    parentId = null) {

          const folder  = {
            id: crypto.randomUUID(),
            name,
            kind: "folder",
            parentId,
            createdAt: Date.now()
          };

          const transaction = 

          window.atheriotDB.transaction("items",
            "readwrite"
          );

          transaction.objectStore("items").add(folder);
    }

