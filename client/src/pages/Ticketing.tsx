import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, ChevronRight, Mail, Plane } from 'lucide-react';

export default function Ticketing() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tripType: 'Round-trip',
    departureCity: '',
    arrivalCity: '',
    departureDate: '',
    returnDate: '',
    travelers: '1',
    cabinClass: 'Economy',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: '',
    agreeTerms: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const tripTypes = ['Round-trip', 'One-way'];
  const cabinClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        access_key: "1a817e9e-024d-473b-a2e8-a6ce29090b0a",
        subject: `New Flight Ticket Request: ${formData.firstName} ${formData.lastName}`,
        ...formData
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setStep(1);
          setFormData({
            tripType: 'Round-trip',
            departureCity: '',
            arrivalCity: '',
            departureDate: '',
            returnDate: '',
            travelers: '1',
            cabinClass: 'Economy',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: '',
            specialRequests: '',
            agreeTerms: false
          });
          setSubmitted(false);
        }, 5000);
      } else {
        console.error('Submission failed:', result);
      }
    } catch (error) {
      console.error('Ticketing error:', error);
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header */}
      <section className="py-32 bg-cover bg-center relative" style={{ backgroundImage: 'url(/Gemini_Generated_Image_s1bjvzs1bjvzs1bj.png)' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              Flight Ticketing
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Book your flights easily to East Africa and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ticketing Form */}
      <section className="py-24 bg-background">
        <div className="container max-w-2xl">
          {submitted ? (
            <motion.div
              {...fadeInUp}
              className="card-modern text-center py-12"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-accent mb-4">Request Submitted!</h2>
              <p className="text-muted-foreground mb-4">
                Thank you for your flight request. We've sent a confirmation email to <strong>{formData.email}</strong>
              </p>
              <p className="text-muted-foreground">
                Our team will contact you shortly with the best flight options.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Progress Steps */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-8">
                  {[1, 2, 3, 4, 5].map(s => (
                    <div key={s} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${s <= step
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-card text-muted-foreground border border-border'
                          }`}
                      >
                        {s < step ? <Check className="w-5 h-5" /> : s}
                      </div>
                      {s < 5 && (
                        <div
                          className={`flex-1 h-1 mx-2 transition-all ${s < step ? 'bg-accent' : 'bg-border'
                            }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Flight</span>
                  <span>Details</span>
                  <span>Passenger</span>
                  <span>Contact</span>
                  <span>Confirm</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="card-modern">
                {/* Step 1: Flight Details */}
                {step === 1 && (
                  <motion.div {...fadeInUp}>
                    <h3 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2"><Plane className="w-6 h-6" /> Flight Details</h3>
                    <div className="space-y-6 mb-8">
                      <div className="flex gap-4">
                        {tripTypes.map((type, idx) => (
                          <label key={idx} className="flex items-center p-4 border border-border rounded-lg hover:border-accent cursor-pointer transition flex-1">
                            <input
                              type="radio"
                              name="tripType"
                              value={type}
                              checked={formData.tripType === type}
                              onChange={handleChange}
                              className="w-4 h-4"
                            />
                            <span className="ml-4 text-foreground">{type}</span>
                          </label>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Flying From</label>
                          <input
                            type="text"
                            name="departureCity"
                            placeholder="City or Airport Code"
                            value={formData.departureCity}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Flying To</label>
                          <input
                            type="text"
                            name="arrivalCity"
                            placeholder="City or Airport Code"
                            value={formData.arrivalCity}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Dates and Options */}
                {step === 2 && (
                  <motion.div {...fadeInUp}>
                    <h3 className="text-2xl font-bold text-accent mb-6">Dates & Preferences</h3>
                    <div className="space-y-4 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Departure Date</label>
                          <input
                            type="date"
                            name="departureDate"
                            value={formData.departureDate}
                            min={today}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none appearance-none"
                            required
                          />
                        </div>
                        {formData.tripType === 'Round-trip' && (
                          <div>
                            <label className="block text-sm font-semibold mb-2">Return Date</label>
                            <input
                              type="date"
                              name="returnDate"
                              value={formData.returnDate}
                              min={formData.departureDate || today}
                              onChange={handleChange}
                              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none appearance-none"
                              required
                            />
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Passengers</label>
                          <select
                            name="travelers"
                            value={formData.travelers}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                              <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Cabin Class</label>
                          <select
                            name="cabinClass"
                            value={formData.cabinClass}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                          >
                            {cabinClasses.map((c, idx) => (
                              <option key={idx} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Passenger Details */}
                {step === 3 && (
                  <motion.div {...fadeInUp}>
                    <h3 className="text-2xl font-bold text-accent mb-6">Passenger Details</h3>
                    <div className="space-y-4 mb-8">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Info */}
                {step === 4 && (
                  <motion.div {...fadeInUp}>
                    <h3 className="text-2xl font-bold text-accent mb-6">Contact Information</h3>
                    <div className="space-y-4 mb-8">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Special Requests</label>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                          placeholder="Seat preferences, dietary requirements for meals, or other needs?"
                        ></textarea>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Confirmation */}
                {step === 5 && (
                  <motion.div {...fadeInUp}>
                    <h3 className="text-2xl font-bold text-accent mb-6">Confirm Request</h3>
                    <div className="space-y-4 mb-8 bg-card/50 p-6 rounded-lg border border-border">
                      <div className="flex justify-between"><span className="text-muted-foreground">Route:</span><span className="font-semibold text-right">{formData.departureCity} ➝ {formData.arrivalCity} <br /><span className="text-sm font-normal text-muted-foreground">({formData.tripType})</span></span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Departure:</span><span className="font-semibold">{formData.departureDate}</span></div>
                      {formData.tripType === 'Round-trip' && (
                        <div className="flex justify-between"><span className="text-muted-foreground">Return:</span><span className="font-semibold">{formData.returnDate}</span></div>
                      )}
                      <div className="flex justify-between"><span className="text-muted-foreground">Cabin & Passengers:</span><span className="font-semibold">{formData.cabinClass}, {formData.travelers} {formData.travelers === '1' ? 'Adult' : 'Adults'}</span></div>
                      <div className="flex justify-between mt-4 pt-4 border-t border-border"><span className="text-muted-foreground">Passenger:</span><span className="font-semibold">{formData.firstName} {formData.lastName}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Contact:</span><span className="font-semibold">{formData.email} | {formData.phone}</span></div>
                    </div>
                    <label className="flex items-start gap-3 mb-8">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="w-4 h-4 mt-1"
                        required
                      />
                      <span className="text-sm text-muted-foreground">
                        I agree to the terms and conditions and consent to receive flight options and updates
                      </span>
                    </label>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(Math.max(1, step - 1))}
                    disabled={step === 1}
                    className="px-6 py-2 border border-border rounded-lg hover:bg-card/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      disabled={!formData.departureCity && step === 1 || !formData.arrivalCity && step === 1 || !formData.departureDate && step === 2 || formData.tripType === 'Round-trip' && !formData.returnDate && step === 2 || !formData.firstName && step === 3 || !formData.email && step === 4}
                      className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!formData.agreeTerms || loading}
                      className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Mail className="w-4 h-4" />
                      {loading ? 'Submitting...' : 'Submit Request'}
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
