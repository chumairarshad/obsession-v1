import { useState } from 'react'
import { useStore } from '../context/StoreContext'
import PageHead from '../components/PageHead'

export default function Contact() {
  const { notify } = useStore()
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    notify('Message sent — we will reply within 24 hours')
    setF({ name: '', email: '', message: '' })
  }
  return (
    <>
      <PageHead title="Contact us" crumb="Contact Us" />
      <div className="container page two">
        <form className="box" onSubmit={submit}>
          <h3>Send a message</h3>
          <div className="field"><label>Name</label><input required value={f.name} onChange={set('name')} /></div>
          <div className="field"><label>Email</label><input required type="email" value={f.email} onChange={set('email')} /></div>
          <div className="field"><label>Message</label><textarea required rows="5" value={f.message} onChange={set('message')} /></div>
          <button className="btn btn-wine">Send</button>
        </form>
        <div className="box">
          <h3>Get in touch</h3>
          <p style={{ color: 'var(--muted)', marginBottom: 10 }}>Our team is available 24/7.</p>
          <p><b>Email</b><br />support@obssession.store</p>
          <p style={{ marginTop: 10 }}><b>WhatsApp</b><br />+971 00 000 0000</p>
          <p style={{ marginTop: 10 }}><b>Service area</b><br />UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman</p>
        </div>
      </div>
    </>
  )
}
