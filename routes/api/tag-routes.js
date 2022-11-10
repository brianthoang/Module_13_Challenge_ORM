const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tag = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, }]
    })
    res.status(200).json(tag);
  } catch (err) {res.status(500).json(err);}
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag}]
    });
    res.status(200).json(tag);
  } catch (err) { es.status(500).json(err);}
});

router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {res.status(400).json(err);}
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id },
  }).then((tag) => {
    res.status(200).json(tag);
  }).catch((err) => {res.status(400).json(err);});
});

router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json(tag);
  } catch (err) {res.status(500).json(err);}
});

module.exports = router;

