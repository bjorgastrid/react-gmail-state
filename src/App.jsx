import Header from './components/Header'
import initialEmails from './data/emails'
import { useState } from 'react'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>{
            emails.map(email => (
              <li 
              className= {`email ${email.read ? 'read' : 'unread'}`}
              key={email.id}>
                <div className='select'>
                  <input 
                    className='select-checkbox' 
                    type='checkbox' 
                    checked={email.read}
                    onChange={
                      (event) => {
                        const newEmails = emails.slice();
                        newEmails[email.id -1 ].read = ! email.read;
                        setEmails(newEmails);
                      }
                    }
                  />
                </div>
                <div className='star'>
                  <input 
                    className='star-checkbox' 
                    type = 'checkbox' 
                    checked={email.starred}
                    onChange={
                      (event) => {
                        const newEmails = emails.slice();
                        newEmails[email.id -1 ].starred = ! email.starred;
                        setEmails(newEmails);
                      }
                    }
                  />
                </div>
                <div className='sender'>{email.sender}</div>
                <div className='title'>{email.title}</div>
              </li> )
            )

          }
        </ul>
        </main>
    </div>
  )
}

export default App
