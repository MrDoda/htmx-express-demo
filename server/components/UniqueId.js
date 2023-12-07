const React = require('react')
const store = require('../store')
const UniqueId = () => {
  const { userId } = store.db
  return (
    <div
      className="field"
      hx-post="/user-id"
      hx-swap="outerHTML"
      hx-trigger="uniqueId"
    >
      <label className="label">Vaše ID</label>
      <div className="control">
        <input
          name="userId"
          disabled
          className="input"
          type="text"
          value={userId}
        />
      </div>
    </div>
  )
}

module.exports = UniqueId
