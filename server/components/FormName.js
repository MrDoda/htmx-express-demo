const React = require('react')
const UniqueId = require('./UniqueId')
const store = require('../store')

const FormName = () => {
  const { name, lastName, isSaved } = store.db
  return (
    <form
      className="container box"
      id="name_form"
      hx-post="/form/user"
      hx-target="#name_form"
      hx-swap="outerHTML"
    >
      <div className="field">
        <label className="label">Křestní jméno</label>
        <div className="control">
          <input
            id="prase"
            name="name"
            className="input"
            type="text"
            placeholder="Vaše křestní jméno"
            defaultValue={name}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Příjmení</label>
        <div className="control">
          <input
            name="lastName"
            className="input"
            type="text"
            placeholder="Vaše příjmení"
            defaultValue={lastName}
          />
        </div>
      </div>
      <UniqueId />
      <button className="button is-primary is-pulled-right">
        <span className="icon is-small">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </button>
      {!isSaved && (
        <button
          hx-post="/form/user"
          hx-target="#name_form"
          hx-trigger="click"
          className="button is-primary"
        >
          Save
        </button>
      )}

      {isSaved && (
        <div className="notification is-primary">
          <button hx-get="/hide" className="delete"></button>
          Succesfully saved.
        </div>
      )}
    </form>
  )
}

module.exports = FormName
