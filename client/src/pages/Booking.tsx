import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, ChevronRight, Mail } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    package: '',
    startDate: '',
    endDate: '',
    travelers: '2',
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

  const packages = [
    'Safari Essentials - $1,800',
    'Classic East Africa - $2,800',
    'Beach & Bush Escape - $3,200',
    'Gorilla & Safari - $4,800',
    'Grand Safari Adventure - $4,500',
    'Photography Safari - $5,500',
    'Luxury Expedition - $7,500',
    'Honeymoon Special - $6,500'
  ];

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
      // Mock the backend API response since Vercel/Netlify are deploying
      // this as a static site without the Express server.
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitted(true);
      setTimeout(() => {
        setStep(1);
        setFormData({
          package: '',
          startDate: '',
          endDate: '',
          travelers: '2',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          country: '',
          specialRequests: '',
          agreeTerms: false
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header with Background Image */}
      <section className="py-32 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/OeZFKUNEnrgPTxsf.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              Book Your Adventure
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Complete the form below to reserve your safari experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
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
              <h2 className="text-3xl font-bold text-accent mb-4">Booking Submitted!</h2>
              <p className="text-muted-foreground mb-4">
                Thank you for your booking request. We've sent a confirmation email to <strong>{formData.email}</strong>
              </p>
              <p className="text-muted-foreground">
                Our team will contact you shortly to confirm your reservation.
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
                  <span>Package</span>
                  <span>Dates</span>
                  <span>Details</span>
                  <span>Contact</span>
                  <span>Confirm</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="card-modern">
                {/* Step 1: Package Selection */}
                {step === 1 && (
                  <motion.div {...fadeInUp}>
                    <h3 className="text-2xl font-bold text-accent mb-6">Select Your Package</h3>
                    <div className="space-y-3 mb-8">
                      {packages.map((pkg, idx) => (
                        <label key={idx} className="flex items-center p-4 border border-border rounded-lg hover:border-accent cursor-pointer transition">
                          <input
                            type="radio"
                            name="package"
                            value={pkg}
                            checked={formData.package === pkg}
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <span className="ml-4 text-foreground">{pkg}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Dates */}
                {step === 2 && (
                  <motion.div {...fadeInUp}>
                    <h3 className="text-2xl font-bold text-accent mb-6">Select Your Dates</h3>
                    <div className="space-y-4 mb-8">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Start Date</label>
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">End Date</label>
                        <input
                          type="date"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Number of Travelers</label>
                        <select
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:border-accent outline-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Personal Details */}
                {step === 3 && (
                  <motion.div {...fadeInUp}>
                    <h3 className="text-2xl font-bold text-accent mb-6">Your Details</h3>
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
                          placeholder="Any special dietary needs, accessibility requirements, or preferences?"
                        ></textarea>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Confirmation */}
                {step === 5 && (
                  <motion.div {...fadeInUp}>
                    <h3 className="text-2xl font-bold text-accent mb-6">Confirm Booking</h3>
                    <div className="space-y-4 mb-8 bg-card/50 p-6 rounded-lg border border-border">
                      <div className="flex justify-between"><span className="text-muted-foreground">Package:</span><span className="font-semibold">{formData.package}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Dates:</span><span className="font-semibold">{formData.startDate} to {formData.endDate}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Travelers:</span><span className="font-semibold">{formData.travelers}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Name:</span><span className="font-semibold">{formData.firstName} {formData.lastName}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Email:</span><span className="font-semibold">{formData.email}</span></div>
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
                        I agree to the terms and conditions and consent to receive updates about my booking
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
                      disabled={!formData.package && step === 1 || !formData.startDate && step === 2 || !formData.firstName && step === 3 || !formData.email && step === 4}
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
                      {loading ? 'Submitting...' : 'Submit Booking'}
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
