const Pet = require('../models/Pet');

exports.createPet = async (req, res) => {
  const { type, name, breed, age, photos } = req.body;

  try {
    const newPet = new Pet({
      type,
      name,
      breed,
      age,
      photos,
    });

    const pet = await newPet.save();
    res.json(pet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.json(pets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.getFilteredPets = async (req, res) => {
  const filters = req.body;

  try {
    const pets = await Pet.find(filters).populate('shelter', ['name', 'email']);
    res.json(pets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.updatePet = async (req, res) => {
  const { type, name, breed, age, photos } = req.body;

  const petFields = { type, name, breed, age, photos };

  try {
    let pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({ msg: 'Pet not found' });
    }

    pet = await Pet.findByIdAndUpdate(
      req.params.id,
      { $set: petFields },
      { new: true }
    );

    res.json(pet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.deletePet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({ msg: 'Pet not found' });
    }

    await pet.deleteOne();

    res.json({ msg: 'Pet removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Pet not found' });
    }
    res.status(500).send('Server error');
  }
};