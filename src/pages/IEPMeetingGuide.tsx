import { Book, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IEPMeetingGuide() {
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
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Title */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              What Happens in an IEP Meeting? A Step-by-Step Guide for Parents
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to know to walk into your child's IEP meeting feeling prepared, confident, and ready to advocate.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed">
              If you're a parent about to attend your first IEP meeting, you're probably feeling a mix of emotions: hopeful, nervous, maybe even a little overwhelmed. That's completely normal. IEP meetings can feel like stepping into a room full of professionals speaking a language you don't quite understand yet.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mt-4">
              Here's the truth: IEP meetings don't have to be confusing or intimidating. When you know what to expect, who will be there, and what questions to ask, you can walk in feeling prepared and walk out knowing you've done right by your child.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mt-4">
              This guide breaks down the IEP meeting process step by step, so you know exactly what's coming and how to make the most of your time at the table.
            </p>
          </section>

          {/* Who Attends */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who's in the Room?</h2>
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <p className="text-slate-700 mb-6 leading-relaxed">
                IEP meetings typically include a team of professionals who each bring a different perspective on your child's education. Here's who you can expect to see:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">You (the parent or guardian)</span>
                    <p className="text-slate-600 mt-1">You're not just invited—you're a required member of the IEP team. Your voice matters.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">A general education teacher</span>
                    <p className="text-slate-600 mt-1">They provide insight into grade-level curriculum and classroom expectations.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">A special education teacher</span>
                    <p className="text-slate-600 mt-1">They understand specialized instruction and accommodations.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">A school administrator or district representative</span>
                    <p className="text-slate-600 mt-1">Someone who can allocate resources and approve services.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">Someone who can interpret evaluation results</span>
                    <p className="text-slate-600 mt-1">This could be a school psychologist, speech therapist, or another specialist.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">Your child (when appropriate)</span>
                    <p className="text-slate-600 mt-1">Older students often attend to share their own perspectives and goals.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">Related service providers</span>
                    <p className="text-slate-600 mt-1">Depending on your child's needs, you might see occupational therapists, speech therapists, counselors, or others.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Step-by-Step Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The IEP Meeting Process: Step by Step</h2>
            <p className="text-slate-700 mb-8 leading-relaxed">
              While every meeting is a little different, most IEP meetings follow a similar structure. Here's what typically happens:
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Introductions and Roles</h3>
                    <p className="text-slate-700 leading-relaxed">
                      The meeting usually starts with everyone introducing themselves and explaining their role on the team. Don't be shy—this is your chance to ask questions if you're not sure who someone is or what they do.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Review of Current Performance</h3>
                    <p className="text-slate-700 leading-relaxed">
                      The team will review how your child is doing academically, socially, and functionally. Teachers and specialists will share data, observations, and progress reports. This is where you'll hear what's working and what's not.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Discussion of Evaluations</h3>
                    <p className="text-slate-700 leading-relaxed">
                      If your child was recently evaluated, the team will go over the results. This might include testing, observations, or assessments from various specialists. Ask for clarification if anything is unclear—these results are important.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Developing Goals</h3>
                    <p className="text-slate-700 leading-relaxed">
                      This is the heart of the IEP. The team will develop measurable goals for your child in areas where they need support. Goals should be specific, realistic, and tied to your child's unique needs. You have input here—don't hesitate to share what matters most to you and your child.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Determining Services and Supports</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Based on your child's needs and goals, the team will decide what services, accommodations, and modifications your child will receive. This could include speech therapy, occupational therapy, extended time on tests, assistive technology, and more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Placement Decisions</h3>
                    <p className="text-slate-700 leading-relaxed">
                      The team will discuss where your child will receive their education and services. The goal is always the "least restrictive environment"—meaning your child should be included with their peers as much as possible while still getting the support they need.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    7
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Finalizing the IEP</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Once everything is agreed upon, the IEP is finalized. You'll receive a copy of the document. Remember: you don't have to sign it on the spot. You can take it home, review it, and ask for changes if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Questions to Ask */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Questions Parents Should Ask in an IEP Meeting</h2>
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 border border-amber-200">
              <p className="text-slate-700 mb-6 leading-relaxed">
                You're not expected to know everything. Asking questions shows you're engaged and advocating for your child. Here are some important ones to consider:
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>"Can you explain what this evaluation result means in plain language?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>"How will we measure progress on this goal?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>"What will this accommodation look like in the classroom?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>"Who will be responsible for implementing this service?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>"How often will I receive progress reports?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>"What happens if my child isn't making progress on a goal?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>"Can we add/change this goal to better reflect my child's needs?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>"What opportunities will my child have to interact with peers without disabilities?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>"Is there anything else you think my child needs that we haven't discussed?"</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Mistakes Parents Make During IEP Meetings</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Even the most prepared parents can fall into these traps. Here's what to watch out for:
            </p>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-slate-900 mb-2">Not reviewing the draft IEP beforehand</h4>
                <p className="text-slate-700">
                  Schools are required to give you a draft IEP before the meeting. Read it carefully and come prepared with questions or concerns.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-slate-900 mb-2">Signing the IEP at the meeting without fully understanding it</h4>
                <p className="text-slate-700">
                  It's okay to take the document home and think it over. You can always request another meeting if changes are needed.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-slate-900 mb-2">Being afraid to disagree</h4>
                <p className="text-slate-700">
                  If something doesn't feel right, speak up. You know your child better than anyone else in that room.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-slate-900 mb-2">Not bringing documentation or notes</h4>
                <p className="text-slate-700">
                  Bring any relevant reports, work samples, or notes about your child's progress or struggles. Evidence strengthens your case.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-slate-900 mb-2">Focusing only on weaknesses</h4>
                <p className="text-slate-700">
                  While it's important to address challenges, don't forget to highlight your child's strengths. A balanced picture helps the team create a better plan.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-slate-900 mb-2">Getting emotional and losing focus</h4>
                <p className="text-slate-700">
                  It's natural to feel emotional—this is your child. But try to stay calm and focused. If you need a break, ask for one.
                </p>
              </div>
            </div>
          </section>

          {/* Preparation Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">IEP Meeting Preparation Checklist</h2>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-green-200">
              <p className="text-slate-700 mb-6 leading-relaxed font-semibold">
                Before you walk into that meeting, make sure you've checked these boxes:
              </p>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="text-slate-700 group-hover:text-slate-900">Review the draft IEP (if provided) and highlight areas of concern or questions</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="text-slate-700 group-hover:text-slate-900">Gather recent work samples, report cards, and any relevant medical or private evaluations</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="text-slate-700 group-hover:text-slate-900">Write down your priorities and goals for your child</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="text-slate-700 group-hover:text-slate-900">Prepare a list of questions you want to ask</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="text-slate-700 group-hover:text-slate-900">Bring a notebook and pen to take notes during the meeting</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="text-slate-700 group-hover:text-slate-900">Consider bringing a support person (spouse, advocate, friend) if it helps you feel more comfortable</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="text-slate-700 group-hover:text-slate-900">Know your rights—familiarize yourself with IDEA and your state's special education laws</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="text-slate-700 group-hover:text-slate-900">Get a good night's sleep and eat before the meeting (you'll need your energy!)</span>
                </label>
              </div>
            </div>
          </section>

          {/* Book Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-40 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Book className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-4">
                    Want Even More Guidance?
                  </h3>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    <span className="font-semibold text-white">IEPs & WTFs: A Parent's Survival Guide to Special Education</span> by Marjorie Stevens walks you through every step of the IEP process with practical advice, real-world examples, and the kind of straight talk you won't find in official manuals.
                  </p>
                  <p className="text-blue-100 mb-8">
                    This book is written by a parent who's been in your shoes and knows exactly what you need to hear.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Book className="h-5 w-5" />
                    Learn More About the Book
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="text-center py-8">
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Remember: you belong at that table. Your voice matters. And with the right preparation, you can walk into any IEP meeting ready to advocate for your child with confidence.
            </p>
          </section>
        </div>
      </article>

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
