import PageHead from '../components/PageHead'

const faqs = [
  ['How long does delivery take?', 'Orders arrive in 2–5 working days across the GCC. You will receive tracking as soon as your parcel ships.'],
  ['Is shipping really free?', 'Yes, on every order over 100 AED. Below that, a flat 15 AED fee applies.'],
  ['What is your return policy?', 'You can return unused items within 14 days of delivery for a refund or exchange.'],
  ['Are your products genuine?', 'Always. We source directly from brands and authorised suppliers.'],
  ['Which payment methods do you accept?', 'Visa, Mastercard, Apple Pay, PayPal and cash on delivery.'],
  ['How do I use a discount code?', 'Enter it in your cart before checkout. Try OBSESS10 for 10% off.'],
]

export default function FAQ() {
  return (
    <>
      <PageHead title="Frequently asked questions" crumb="FAQ" />
      <div className="container page">
        <div className="faq prose">
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </div>
    </>
  )
}
