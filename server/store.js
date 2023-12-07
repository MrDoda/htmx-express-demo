const store = { db: {} }

const set = (item) => {
  store.db = { ...store.db, ...item }
}
store.set = set

module.exports = store
