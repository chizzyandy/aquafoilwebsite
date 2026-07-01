'use client';

import { useState } from 'react';
import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import ContactBlock from '@/components/ContactBlock';

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    year: '',
    discipline: '',
    experience: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: connect to form backend (Formspree, Netlify Forms, etc.)
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">Join the Team</p>
          <h1 className="text-hero text-white max-w-3xl">
            Build something that will improve your skills
          </h1>
          <p className="text-xl text-steel max-w-2xl mt-8 leading-relaxed">
            Take everything you learn in class and apply it to a real-world project.
          </p>
        </div>
      </section>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* What You Get */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">Why Join</p>
              <h3 className="reveal reveal-delay-1 text-section text-white">
                Hands on Engineering Challenge
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="reveal reveal-delay-2 text-lg text-steel leading-relaxed">
                aQuaFoil operates like a high-performance design team. Real deliverables, real accountability, while keeping the work fun.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fabrication',
                desc: 'Composite layup, tooling, CNC machining. Work with materials and processes that you won\'t always get to use in class.',
              },
              {
                title: 'Computational Analysis',
                desc: 'CFD, FEA, material simulation. Using software like OpenFOAM, ANSYS, SolidWorks, Python. Build analysis skills using a real problems.',
              },
              {
                title: 'Build a Brand That Speaks',
                desc: 'Documented projects, tested components, a brand that looks serious. Work that demonstrates professional-grade competence.',
              }
            ].map((benefit, i) => (
              <div key={benefit.title} className={`reveal reveal-delay-${i + 1} card-dark p-8`}>
                <div className="signal-line mb-6" />
                <h3 className="font-display text-lg font-medium text-white mb-3">{benefit.title}</h3>
                <p className="text-sm text-steel/80 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* Roles */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial">
          <div className="mb-12">
            <p className="reveal text-label text-signal-deep mb-4">Open Positions</p>
            <h2 className="reveal reveal-delay-1 text-subsection text-void">
              We are recruiting across all Sub-Teams
            </h2>
          </div>

          <div className="reveal reveal-delay-2 space-y-4">
            {[
              { role: 'Composites & Fabrication', dept: 'Manufacturing', desc: 'Composite layup, tooling design, and manufacturing process development.' },
              { role: 'CFD & Hydrodynamics', dept: 'CFD', desc: 'OpenFOAM simulations. Foil and hull hydrodynamic analysis.' },
              { role: 'Structural Analysis', dept: 'Structures', desc: 'FEA modeling, load case analysis, structural optimization.' },
              { role: 'CAD & Design', dept: 'Mechanical', desc: 'SolidWorks and parametric modeling. Component and assembly design.' },
              { role: 'Business & Sponsorship', dept: 'Business', desc: 'Sponsorship management, marketing, and communications.' },
            ].map((position) => (
              <div key={position.role} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-4 border-b border-light-border">
                <div className="md:w-1/3">
                  <h3 className="font-display text-base font-medium text-void">{position.role}</h3>
                </div>
                <div className="md:w-1/6">
                  <span className="text-label text-signal-deep text-[10px]">{position.dept}</span>
                </div>
                <div className="md:flex-1">
                  <p className="text-sm text-void/70">{position.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="carbon" flip />

      {/* Application Form */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="reveal text-label text-signal mb-4">Apply</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                Express your interest
              </h2>
              <p className="reveal reveal-delay-2 text-base text-steel mt-4">
                All Queen&apos;s students are eligible. Tell us about your skills, your experience, and what you want to contribute.
              </p>
            </div>

            {submitted ? (
              <div className="reveal text-center py-16">
                <div className="w-12 h-12 bg-signal/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#00BFB3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-medium text-white mb-3">Application received</h3>
                <p className="text-steel">We will review your application and respond within one week.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reveal reveal-delay-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-label text-steel mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-void border border-slate/30 text-white px-4 py-3 text-sm placeholder:text-steel"
                    />
                  </div>
                  <div>
                    <label className="text-label text-steel mb-2 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-void border border-slate/30 text-white px-4 py-3 text-sm placeholder:text-steel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-label text-steel mb-2 block">Program *</label>
                    <input
                      type="text"
                      name="program"
                      required
                      placeholder="e.g., Mechanical Engineering"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full bg-void border border-slate/30 text-white px-4 py-3 text-sm placeholder:text-steel"
                    />
                  </div>
                  <div>
                    <label className="text-label text-steel mb-2 block">Year *</label>
                    <select
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full bg-void border border-slate/30 text-white px-4 py-3 text-sm"
                    >
                      <option value="">Select year</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Fourth Year</option>
                      <option value="grad">Graduate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-label text-steel mb-2 block">Area of Interest *</label>
                  <select
                    name="discipline"
                    required
                    value={formData.discipline}
                    onChange={handleChange}
                    className="w-full bg-void border border-slate/30 text-white px-4 py-3 text-sm"
                  >
                    <option value="">Select discipline</option>
                    <option value="structures">Structures & Composites</option>
                    <option value="hydro">Hydrodynamics & CFD</option>
                    <option value="design">Hull & Foil Design</option>
                    <option value="materials">Materials Science</option>
                    <option value="systems">Systems & Integration</option>
                    <option value="manufacturing">Manufacturing & Fabrication</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-label text-steel mb-2 block">Relevant Experience</label>
                  <textarea
                    name="experience"
                    rows={3}
                    placeholder="CAD software, fabrication experience, relevant coursework, design teams, personal projects..."
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-void border border-slate/30 text-white px-4 py-3 text-sm placeholder:text-steel resize-none"
                  />
                </div>

                <div>
                  <label className="text-label text-steel mb-2 block">Why aQuaFoil?</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="What draws you to this project?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-void border border-slate/30 text-white px-4 py-3 text-sm placeholder:text-steel resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="void" />

      {/* Contact */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <ContactBlock
            headline="Questions?"
            body="Reach out directly. We respond to every inquiry."
            theme="dark"
          />
        </div>
      </RevealSection>
    </>
  );
}
