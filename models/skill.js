const skills = [
  {id: 125223, skill: 'Fluid in Express', done: true},
  {id: 127904, skill: 'Piano Master', done: false},
  {id: 139608, skill: 'Chef', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
};

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skill.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}