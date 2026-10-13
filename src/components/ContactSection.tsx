import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  FileText,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { playUiSound } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    playUiSound('success');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.contact.phone);
    playUiSound('success');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playUiSound('success');
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 border-t theme-border-subtle theme-bg relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        <div className="mb-14 scroll-reveal">
          <div className="flex items-center gap-2 text-xs font-mono theme-accent uppercase tracking-widest mb-2">
            <span className="w-6 h-[1px] bg-current" />
            Get in Touch
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold theme-text-fg">
            Contact Me
          </h2>
          <p className="text-xs sm:text-base theme-text-muted mt-2 max-w-2xl leading-relaxed">
            Feel free to reach out for software engineering, AI/ML roles, collaborative research, or technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Direct Cards strictly from Resume (5 cols) */}
          <div className="lg:col-span-5 space-y-4 scroll-reveal-left">
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border theme-border-medium hover:theme-accent-border transition-all flex items-center justify-between hud-bracket">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl theme-accent-bg theme-accent border theme-accent-border">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono theme-text-subtle uppercase tracking-wider">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    onClick={() => playUiSound('click')}
                    className="text-xs sm:text-sm font-mono theme-text-fg hover:theme-accent transition-colors font-medium break-all"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl theme-card hover:theme-accent-border theme-text-muted hover:theme-text-fg border theme-border-subtle transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border theme-border-medium hover:theme-accent-border transition-all flex items-center justify-between hud-bracket">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl theme-accent-bg theme-accent border theme-accent-border">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono theme-text-subtle uppercase tracking-wider">
                    Phone
                  </div>
                  <a
                    href={`tel:${personalInfo.contact.phone}`}
                    onClick={() => playUiSound('click')}
                    className="text-xs sm:text-sm font-mono theme-text-fg hover:theme-accent transition-colors font-medium"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={copyPhone}
                className="p-2.5 rounded-xl theme-card hover:theme-accent-border theme-text-muted hover:theme-text-fg border theme-border-subtle transition-colors cursor-pointer"
                title="Copy Phone Number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Institution */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border theme-border-subtle flex items-center gap-3.5 hud-bracket">
              <div className="p-3 rounded-xl theme-card theme-text-muted border theme-border-subtle">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono theme-text-subtle uppercase tracking-wider">
                  Institution Location
                </div>
                <div className="text-xs sm:text-sm font-mono theme-text-fg font-semibold">
                  {personalInfo.education.institution}
                </div>
                <div className="text-xs theme-text-muted">
                  Trichy, Tamil Nadu, India
                </div>
              </div>
            </div>

            {/* Profiles & Resume */}
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border theme-border-subtle space-y-3.5">
              <div className="text-[11px] font-mono theme-text-subtle uppercase tracking-wider font-semibold">
                Online Profiles & Records
              </div>
              <div className="flex flex-col gap-2.5">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playUiSound('click')}
                  className="flex items-center justify-between p-3 rounded-xl theme-card hover:theme-accent-border border theme-border-subtle text-xs font-mono theme-text-fg hover:theme-accent transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-sky-500" />
                    <span>linkedin.com/in/kabileshwar-g</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playUiSound('click')}
                  className="flex items-center justify-between p-3 rounded-xl theme-card hover:theme-accent-border border theme-border-subtle text-xs font-mono theme-text-fg hover:theme-accent transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4" />
                    <span>github.com/Kabileshwar-G</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <button
                  onClick={() => {
                    playUiSound('open');
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl text-white bg-amber-600 hover:bg-amber-500 dark:text-black dark:bg-[#d4af37] dark:hover:bg-[#e6c253] text-xs font-mono font-semibold transition-all cursor-pointer shadow-md hover:scale-[1.01]"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Printable Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 scroll-reveal-right delay-150">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border theme-border-medium shadow-2xl hud-bracket beam-card">
              <div className="flex items-center gap-2 mb-5 text-sm sm:text-base font-display font-semibold theme-text-fg">
                <MessageSquare className="w-4 h-4 theme-accent" />
                <span>Send a Direct Message</span>
              </div>

              {formSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono mb-5 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Email client opened! You can also email directly to {personalInfo.contact.email}.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block theme-text-muted mb-1.5 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Recruiter Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl theme-card border theme-border-subtle theme-text-fg placeholder:theme-text-subtle focus:outline-none focus:theme-accent-border transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block theme-text-muted mb-1.5 font-medium">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl theme-card border theme-border-subtle theme-text-fg placeholder:theme-text-subtle focus:outline-none focus:theme-accent-border transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block theme-text-muted mb-1.5 font-medium">Subject</label>
                  <input
                    type="text"
                    placeholder="Engineering role / Internship opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl theme-card border theme-border-subtle theme-text-fg placeholder:theme-text-subtle focus:outline-none focus:theme-accent-border transition-colors"
                  />
                </div>

                <div>
                  <label className="block theme-text-muted mb-1.5 font-medium">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hello Kabileshwar, I reviewed your resume and projects..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl theme-card border theme-border-subtle theme-text-fg placeholder:theme-text-subtle focus:outline-none focus:theme-accent-border resize-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-[11px] theme-text-subtle">
                    Dispatches directly to {personalInfo.contact.email}
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-semibold text-white bg-amber-600 hover:bg-amber-500 dark:text-black dark:bg-[#d4af37] dark:hover:bg-[#e6c253] transition-all cursor-pointer shadow-md hover:scale-[1.02]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
