import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, AlertCircle, Shield, FileText, MessageCircle, CheckCircle, Quote, Book } from 'lucide-react';
import { supabase } from '../lib/supabase';

function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [resourceEmail, setResourceEmail] = useState('');
  const [resourceIsSubmitting, setResourceIsSubmitting] = useState(false);
  const [resourceMessage, setResourceMessage] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('email_subscribers')
        .insert([{ email, source: 'iep_checklist' }]);

      if (error) {
        if (error.code === '23505') {
          setMessage('You are already subscribed! Opening your checklist now.');
          // Open checklist for existing subscribers
          window.open('/iep-checklist.html', '_blank');
        } else {
          setMessage('Something went wrong. Please try again.');
        }
      } else {
        setMessage('Thank you! Opening your free checklist now.');
        setEmail('');
        // Open checklist for new subscribers
        window.open('/iep-checklist.html', '_blank');
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResourceEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResourceIsSubmitting(true);
    setResourceMessage('');

    try {
      const { error } = await supabase
        .from('email_subscribers')
        .insert([{ email: resourceEmail, source: 'resource_section' }]);

      if (error) {
        if (error.code === '23505') {
          setResourceMessage('You are already subscribed! Opening your checklist now.');
          // Open checklist for existing subscribers
          window.open('/iep-checklist.html', '_blank');
        } else {
          setResourceMessage('Something went wrong. Please try again.');
        }
      } else {
        setResourceMessage('Thank you! Opening your free checklist now.');
        setResourceEmail('');
        // Open checklist for new subscribers
        window.open('/iep-checklist.html', '_blank');
      }
    } catch (err) {
      setResourceMessage('Something went wrong. Please try again.');
    } finally {
      setResourceIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Book className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">IEPs & WTFs</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/iep-meeting-guide" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Resources
              </Link>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Buy Book
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                NEW BOOK RELEASE
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-none tracking-tight">
                IEPs & WTFs
              </h1>
              <p className="text-2xl sm:text-3xl font-medium text-slate-700 leading-tight">
                A Parent's Survival Guide to Special Education
              </p>
              <div className="pt-2">
                <p className="text-lg text-slate-600 font-medium">
                  by Marjorie Stevens
                </p>
              </div>
            </div>

            <p className="text-xl text-slate-700 leading-relaxed max-w-xl">
              When special education meetings leave parents confused, this book helps you fight for your child with confidence and clarity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
                <BookOpen className="w-6 h-6" />
                Buy the Book
              </button>

              <a
                href="/iep-checklist.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-slate-50 text-blue-700 text-lg font-bold rounded-xl border-2 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Download className="w-6 h-6" />
                Download Free Checklist
              </a>
            </div>

            {/* Email Capture Form */}
            <div className="pt-4">
              <form onSubmit={handleEmailSubmit} className="max-w-xl">
                <label htmlFor="email-input" className="block text-base font-semibold text-slate-900 mb-3">
                  Get your free IEP meeting checklist
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Checklist'}
                  </button>
                </div>
                {message && (
                  <p className="mt-3 text-sm text-green-700 font-semibold bg-green-50 px-4 py-2 rounded-lg">{message}</p>
                )}
              </form>
            </div>
          </div>

          {/* Right Column - Book Cover Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative" style={{ perspective: '2000px' }}>
              {/* 3D Book Container */}
              <div
                className="relative w-72 sm:w-80 lg:w-[420px]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(-25deg) rotateX(5deg)',
                  transition: 'transform 0.6s ease'
                }}
              >
                {/* Book Front Cover */}
                <div
                  className="relative aspect-[3/4.2] rounded-r-lg shadow-2xl"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.3), -5px 5px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src="/images/iep-book-cover.png.png"
                    alt="IEPs & WTFs book cover by Marjorie Stevens"
                    className="absolute inset-0 w-full h-full object-cover rounded-r-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling;
                      if (fallback) {
                        (fallback as HTMLElement).style.display = 'block';
                      }
                    }}
                  />
                  <div className="absolute inset-0 rounded-r-lg overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900" style={{ display: 'none' }}>
                    {/* Book Cover Content - Fallback */}
                    <div className="relative h-full flex flex-col justify-between p-10 lg:p-12">
                      <div>
                        <div className="text-xs font-bold tracking-widest mb-6 text-blue-300 uppercase">
                          A Parent's Survival Guide
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-black leading-none mb-3 text-white drop-shadow-lg">
                          IEPs
                        </h2>
                        <h2 className="text-2xl lg:text-3xl font-bold text-blue-200 mb-4">
                          & WTFs
                        </h2>
                        <div className="w-20 h-1.5 bg-blue-400 my-6"></div>
                        <p className="text-base lg:text-lg text-blue-100 leading-relaxed font-medium max-w-xs">
                          Navigate special education meetings with confidence and clarity
                        </p>
                      </div>

                      <div className="pt-8 border-t-2 border-blue-600">
                        <p className="text-base font-bold text-white mb-1">
                          Marjorie Stevens
                        </p>
                        <p className="text-xs text-blue-300 font-medium">
                          Special Education Liaison & Autism Parent
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Book Spine */}
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 rounded-l-lg"
                    style={{
                      width: '50px',
                      transform: 'rotateY(-90deg)',
                      transformOrigin: 'left',
                      boxShadow: 'inset -10px 0 20px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <div className="h-full flex items-center justify-center">
                      <p className="text-white text-xs font-bold tracking-wider transform rotate-90 whitespace-nowrap">
                        IEPs & WTFs
                      </p>
                    </div>
                  </div>

                  {/* Book Pages Effect */}
                  <div
                    className="absolute top-1 right-1 bottom-1 bg-white rounded-r-lg"
                    style={{
                      width: '8px',
                      transform: 'translateZ(-10px)',
                      boxShadow: 'inset 2px 0 4px rgba(0, 0, 0, 0.1)'
                    }}
                  ></div>
                  <div
                    className="absolute top-2 right-2 bottom-2 bg-slate-50 rounded-r-lg"
                    style={{
                      width: '6px',
                      transform: 'translateZ(-20px)'
                    }}
                  ></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-300 rounded-full opacity-10 blur-2xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200 rounded-full opacity-10 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Parent Pain Section */}
      <section className="bg-white py-20 lg:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 text-center mb-6 leading-tight">
            Ever Walked Out of an IEP Meeting Thinking…<br/>
            <span className="text-blue-700">What Just Happened?</span>
          </h2>

          <p className="text-xl text-slate-600 text-center mb-16 leading-relaxed max-w-3xl mx-auto">
            You're not alone. Many parents leave IEP meetings feeling overwhelmed, confused, and unsure about how decisions were actually made. The special education system can feel like a maze of jargon, paperwork, and unspoken rules.
          </p>

          {/* Pain Points Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div className="flex gap-5 p-7 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Confusing special education terminology</h3>
                <p className="text-slate-600 leading-relaxed">FAPE, LRE, PLAAFP… it feels like everyone is speaking a foreign language.</p>
              </div>
            </div>

            <div className="flex gap-5 p-7 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Feeling intimidated speaking up in meetings</h3>
                <p className="text-slate-600 leading-relaxed">You're surrounded by professionals, and it's hard to voice your concerns.</p>
              </div>
            </div>

            <div className="flex gap-5 p-7 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Not knowing what services or supports to request</h3>
                <p className="text-slate-600 leading-relaxed">What accommodations exist? What's reasonable to ask for?</p>
              </div>
            </div>

            <div className="flex gap-5 p-7 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Feeling like decisions were already made</h3>
                <p className="text-slate-600 leading-relaxed">The meeting feels like a formality, not a collaboration.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 lg:p-10 border border-blue-100">
            <p className="text-xl text-center text-slate-700 leading-relaxed">
              <strong className="text-slate-900 font-bold">You are not alone, and this is not your fault.</strong> Understanding the system is the key to advocating effectively for your child. When you know the rules, the process, and your rights, you can walk into any IEP meeting with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* What This Book Will Teach You Section */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50 py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.03),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 text-center mb-5 leading-tight">
            What This Book Will Teach You
          </h2>
          <p className="text-xl text-slate-600 text-center mb-20 max-w-3xl mx-auto leading-relaxed">
            Everything you need to navigate the IEP process with clarity and confidence
          </p>

          {/* Learning Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Learning Point 1 */}
            <div className="bg-white p-9 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <CheckCircle className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Prepare with Confidence
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Learn exactly how to prepare for an IEP meeting so you walk in feeling organized, informed, and ready to advocate.
              </p>
            </div>

            {/* Learning Point 2 */}
            <div className="bg-white p-9 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Decode the Jargon
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Understand common special education terms, acronyms, and documents in plain English that actually makes sense.
              </p>
            </div>

            {/* Learning Point 3 */}
            <div className="bg-white p-9 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Advocate Effectively
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Discover practical strategies for speaking up, asking the right questions, and ensuring your voice is heard.
              </p>
            </div>

            {/* Learning Point 4 */}
            <div className="bg-white p-9 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Shield className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Know Your Rights
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Understand your legal rights as a parent in the IEP process and how to use them to protect your child.
              </p>
            </div>

            {/* Learning Point 5 */}
            <div className="bg-white p-9 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <AlertCircle className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Avoid Common Mistakes
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Learn what pitfalls to avoid during IEP meetings so you don't miss opportunities or agree to less than your child needs.
              </p>
            </div>

            {/* Learning Point 6 */}
            <div className="bg-white p-9 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Real-World Examples
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Get practical guidance from someone who has been on both sides of the IEP table as a teacher and parent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="bg-white py-20 lg:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 text-center mb-20 leading-tight">
            About the Author
          </h2>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Author Photo */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full shadow-2xl overflow-hidden ring-8 ring-blue-50">
                  <img
                    src="/images/marjories_picture.jpg"
                    alt="Marjorie Stevens - Special Education Liaison & Autism Parent Advocate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-300 rounded-full opacity-15 blur-2xl -z-10"></div>

                {/* Name and Title Below Photo */}
                <div className="mt-8 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Marjorie Stevens
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 font-medium">
                    Special Education Liaison & Autism Parent Advocate
                  </p>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="lg:col-span-3 space-y-7">
              <div className="space-y-5 text-xl text-slate-600 leading-relaxed">
                <p>
                  Marjorie Stevens is a Special Education Liaison and autism parent who has spent years helping families navigate the IEP system.
                </p>
                <p>
                  Her experience working within schools and advocating for children with disabilities gives her a unique perspective on how parents and schools can work together to support student success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50 py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.03),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 text-center mb-5 leading-tight">
            Inside the Book
          </h2>
          <p className="text-xl text-slate-600 text-center mb-20 max-w-3xl mx-auto leading-relaxed">
            Practical guidance and real strategies you can use immediately
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* 3D Book Mockup Placeholder */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                {/* 3D Book Effect */}
                <div className="relative w-72 sm:w-80 lg:w-96" style={{ perspective: '1000px' }}>
                  <div
                    className="relative aspect-[3/4] rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                    style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-15deg)' }}
                  >
                    {/* Book Cover */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/4861373/pexels-photo-4861373.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="IEPs & WTFs 3D Book Mockup"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex flex-col justify-between p-8 sm:p-10">
                        <div>
                          <div className="text-xs font-semibold tracking-wider mb-4 sm:mb-6 text-blue-200">
                            A PARENT'S SURVIVAL GUIDE
                          </div>
                          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 text-white">
                            IEPs<br/>& WTFs
                          </h3>
                          <div className="w-16 sm:w-20 h-1 bg-blue-300 my-4 sm:my-6"></div>
                          <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-6 sm:mb-8">
                            Navigate special education with confidence and clarity
                          </p>

                          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-blue-100">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Step-by-step meeting preparation</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Decode complex terminology</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Real advocacy strategies</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 sm:pt-8 border-t border-blue-400">
                          <p className="text-sm font-medium text-blue-100">
                            Marjorie Stevens
                          </p>
                          <p className="text-xs text-blue-200 mt-1">
                            Special Education Liaison & Autism Parent
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Book Spine (3D effect) */}
                    <div
                      className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-l-lg"
                      style={{ transform: 'rotateY(90deg)', transformOrigin: 'left' }}
                    ></div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-20 -z-10"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-20 -z-10"></div>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                  What You'll Discover
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg mb-1">How IEP meetings really work</h4>
                      <p className="text-slate-600">Behind-the-scenes insights from a teacher's perspective</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg mb-1">Questions every parent should ask</h4>
                      <p className="text-slate-600">The right questions unlock better services for your child</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg mb-1">Understanding evaluations and services</h4>
                      <p className="text-slate-600">Decode test results and know what accommodations to request</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg mb-1">Advocacy strategies that actually work</h4>
                      <p className="text-slate-600">Tested approaches for speaking up and being heard</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg mb-1">Real-life experiences from special education</h4>
                      <p className="text-slate-600">Stories and lessons from both sides of the IEP table</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  <BookOpen className="w-5 h-5" />
                  Read the First Chapter
                </button>
                <Link
                  to="/iep-meeting-guide"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-blue-700 font-semibold rounded-lg border-2 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <FileText className="w-5 h-5" />
                  Free IEP Meeting Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 lg:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 text-center mb-5 leading-tight">
            What Parents Are Saying
          </h2>
          <p className="text-xl text-slate-600 text-center mb-20 max-w-3xl mx-auto leading-relaxed">
            Real feedback from parents navigating the IEP process
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 p-9 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="mb-7">
                <Quote className="w-12 h-12 text-blue-600 opacity-80" />
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 italic text-lg">
                "This book explains things schools never clearly tell parents. Every family should read it before their next IEP meeting."
              </p>
              <div className="border-t-2 border-slate-200 pt-5">
                <p className="font-bold text-slate-900 text-lg">Sarah M.</p>
                <p className="text-slate-600 mt-1">Parent of child with autism</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 p-9 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="mb-7">
                <Quote className="w-12 h-12 text-blue-600 opacity-80" />
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 italic text-lg">
                "I finally understand what all those acronyms mean and feel confident speaking up for my son. This book changed everything."
              </p>
              <div className="border-t-2 border-slate-200 pt-5">
                <p className="font-bold text-slate-900 text-lg">Jennifer L.</p>
                <p className="text-slate-600 mt-1">Mother of 8-year-old with ADHD</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 p-9 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="mb-7">
                <Quote className="w-12 h-12 text-blue-600 opacity-80" />
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 italic text-lg">
                "Marjorie's insight from both sides of the table is invaluable. I wish I had this book years ago when we started the IEP journey."
              </p>
              <div className="border-t-2 border-slate-200 pt-5">
                <p className="font-bold text-slate-900 text-lg">David R.</p>
                <p className="text-slate-600 mt-1">Father of two children with learning disabilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Resources Section */}
      <section className="bg-white py-20 lg:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 text-center mb-5 leading-tight">
            Parent Resources
          </h2>
          <p className="text-xl text-slate-600 text-center mb-20 max-w-3xl mx-auto leading-relaxed">
            Tools and resources to help parents navigate special education with confidence.
          </p>

          {/* Product Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Product 1: IEP Meeting Survival Kit */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  IEP Meeting Survival Kit
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 min-h-[80px]">
                  A practical toolkit to help parents prepare for IEP meetings, organize concerns, and advocate with confidence.
                </p>
                <button
                  disabled
                  className="w-full px-6 py-3 bg-slate-300 text-slate-500 font-semibold rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Product 2: IEP Acronym Decoder */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  IEP Acronym Decoder
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 min-h-[80px]">
                  A simple guide that explains common special education terms and acronyms in plain English.
                </p>
                <a
                  href="/iep-checklist.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  Free Download
                </a>
              </div>
            </div>

            {/* Product 3: IEP Meeting Planner Workbook */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  IEP Meeting Planner Workbook
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 min-h-[80px]">
                  A fillable workbook to help parents track strengths, concerns, goals, accommodations, and questions before meetings.
                </p>
                <button
                  disabled
                  className="w-full px-6 py-3 bg-slate-300 text-slate-500 font-semibold rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Product 4: Parent Advocacy Checklist */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Parent Advocacy Checklist
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 min-h-[80px]">
                  A quick-reference checklist parents can use before, during, and after IEP meetings.
                </p>
                <a
                  href="/iep-checklist.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  Free Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Parent Resource Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 shadow-xl">
              <Download className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get Your Free IEP Meeting Survival Checklist
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Prepare for your next IEP meeting with confidence. This comprehensive checklist covers everything you need to organize, questions to ask, and rights to remember.
            </p>
          </div>

          {/* Resource Email Signup Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-10 sm:p-12">
            <form onSubmit={handleResourceEmailSubmit} className="space-y-6">
              <div>
                <label htmlFor="resource-email-input" className="block text-sm font-semibold text-slate-900 mb-3">
                  Enter your email to download the free checklist
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="resource-email-input"
                    type="email"
                    value={resourceEmail}
                    onChange={(e) => setResourceEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="flex-1 px-5 py-4 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
                  />
                  <button
                    type="submit"
                    disabled={resourceIsSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Download className="w-5 h-5" />
                    {resourceIsSubmitting ? 'Sending...' : 'Download the Free Checklist'}
                  </button>
                </div>
                {resourceMessage && (
                  <p className="mt-3 text-sm text-green-700 font-medium">{resourceMessage}</p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Pre-meeting preparation steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Essential questions to ask</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Your parental rights reminder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Post-meeting action items</span>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            You Don't Have to Walk Into the Next IEP Meeting Alone
          </h2>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-14 max-w-3xl mx-auto">
            Get the knowledge, confidence, and practical strategies you need to advocate effectively for your child's education and future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <BookOpen className="w-6 h-6" />
              Buy the Book
            </button>

            <button
              onClick={() => document.getElementById('resource-email-input')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white hover:bg-slate-50 text-blue-700 text-lg font-semibold rounded-lg border-2 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Download className="w-6 h-6" />
              Get the Free Guide
            </button>
          </div>

          <div className="mt-16 pt-12 border-t border-slate-200">
            <p className="text-slate-600 text-lg">
              <strong className="text-slate-900 font-bold">Need help now?</strong> Start with the free IEP checklist and see how understanding the process changes everything.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              IEPs & WTFs
            </h3>
            <p className="text-slate-400 text-base mb-6">
              A Parent's Survival Guide to Special Education
            </p>
            <p className="text-slate-500 text-sm">
              © 2026 Marjorie Stevens. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
