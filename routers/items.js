const express = require("express");
const router = express.Router();
const { items } = require("../data/db");
/**
* GET /api/items
* Recupera tutti gli elementi
*/
router.get("/", (req, res) => {
res.json(items);
});

/**
* GET /api/items/:id
* Recupera un elemento per ID
*/
router.get("/:id", (req, res) => {
const id = parseInt(req.params.id);
const item = items.find(i => i.id === id);
if (!item) {
return res.status(404).json({ message: "Elemento non trovato" });
}
res.json(item);
});
/**
* POST /api/items
* Crea un nuovo elemento
*/
router.post("/", (req, res) => {
    // 👉 TODO STUDENTE:
    // - prendere i dati dal body
    // - creare un nuovo oggetto
    // - assegnare un ID
    const { name, description } = req.body;
    const newItem = {
    id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
    name,
    description
    };
    items.push(newItem);
    res.json({
    message: "Elemento creato con successo"
    });
});
/**
* PUT /api/items/:id
* Modifica un elemento
*/
router.put("/:id", (req, res) => {
    // 👉 TODO STUDENTE:
    // - trovare elemento
    // - aggiornarlo
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ message: "Elemento non trovato" });
    }
    items.splice(itemIndex, 1);
    res.json({
    message: "elemento modificato con successo"
    });
});
/**
* DELETE /api/items/:id

* Elimina un elemento
*/
router.delete("/:id", (req, res) => {
    // 👉 TODO STUDENTE:
    // - trovare elemento
    // - eliminarlo
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ message: "Elemento non trovato" });
    }
    items.splice(itemIndex, 1);
    res.json({
    message: "Elemento eliminato con successo"
    });
});
module.exports = router;