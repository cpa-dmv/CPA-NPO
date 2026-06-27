/* =====================================================================
   Business Growth Foundation — Site Configuration
   ---------------------------------------------------------------------
   SINGLE SOURCE OF TRUTH for branding + content.
   Change the organization name, tagline, contact details, stats, and
   all card content here — script.js injects everything into the page.
   To rebrand the whole site, you only need to edit this one file.
   ===================================================================== */
window.SITE_CONFIG = {

  /* ---- Brand ---- */
  brand: {
    name: 'Business Growth Foundation',   // full name (titles, meta, modal)
    primary: 'Business Growth',           // nav/footer logo — line 1 (bold)
    secondary: 'Foundation',              // nav/footer logo — line 2 (small)
    tagline: 'Empowering New Businesses to Start, Grow & Succeed',
    email: 'hello@businessgrowthfoundation.org',
    phone: '+1 (800) 555-0123'
  },

  /* ---- Typing effect phrases (hero) ---- */
  typedPhrases: ['mentorship.', 'proven programs.', 'a generous community.', 'real resources.'],

  /* ---- Core Programs ---- */
  programs: [
    { icon: 'award', title: 'Google Reviews Management', desc: 'Build and protect your online reputation — get more 5-star reviews, respond professionally, and rank higher on Google Search and Maps.' },
    { icon: 'rocket', title: 'Business Launch Program', desc: 'Business planning, registration guidance, and a clear startup roadmap to launch with confidence.' },
    { icon: 'chart', title: 'Business Development', desc: 'Growth strategy, operations improvement, scaling support, and performance coaching.' },
    { icon: 'brush', title: 'Marketing & Branding', desc: 'Brand identity, social media, content, email, SEO, lead generation, and advertising guidance.' },
    { icon: 'code', title: 'Website Development', desc: 'Professional design, landing pages, SEO, hosting, and business email — built to convert.' },
    { icon: 'handshake', title: 'Sales & Customer Growth', desc: 'Sales strategy, proposals, CRM guidance, customer acquisition, referrals, and retention.' },
    { icon: 'cap', title: 'Training Academy', desc: 'Workshops on leadership, AI, technology, marketing, sales, operations, and productivity.' },
    { icon: 'users', title: 'Mentorship', desc: 'One-on-one and group mentoring, business coaching, office hours, and peer support.' },
    { icon: 'chip', title: 'Technology & Innovation', desc: 'AI, automation, CRM, cloud tools, cybersecurity, and digital transformation.' },
    { icon: 'library', title: 'Resource Center', desc: 'Business plans, contracts, proposals, SOPs, policies, checklists, and guides.' },
    { icon: 'network', title: 'Networking', desc: 'Events, meetups, a founder community, roundtables, conferences, and mastermind groups.' },
    { icon: 'gift', title: 'Funding & Growth', desc: 'Grant guidance, funding resources, investor readiness, and pitch coaching.' },
    { icon: 'talent', title: 'Talent Development', desc: 'Hiring guidance, recruitment, training, leadership, and performance management.' },
    { icon: 'globe', title: 'Community Outreach', desc: 'Volunteer programs, business education, financial literacy, and local initiatives.' },
    { icon: 'heart', title: 'Wellness', desc: 'Hiking, family events, sports, community activities, and work-life balance.' },
    { icon: 'award', title: 'Awards', desc: 'Business Excellence, Innovation, Community Leadership, and Startup of the Year.' }
  ],

  /* ---- Website Development spotlight ---- */
  webdev: [
    { icon: 'brush', title: 'Professional Website Design', desc: 'Beautiful, on-brand designs tailored to your business.' },
    { icon: 'code', title: 'Website Development', desc: 'Fast, secure, and modern websites built to last.' },
    { icon: 'page', title: 'Landing Pages', desc: 'High-converting pages for your products and services.' },
    { icon: 'seo', title: 'SEO Optimization', desc: 'Rank higher and get found by local customers.' },
    { icon: 'pin', title: 'Google Business Profile', desc: 'Optimized local listing to drive discovery.' },
    { icon: 'server', title: 'Hosting Guidance', desc: 'Reliable hosting recommendations and setup help.' },
    { icon: 'mail', title: 'Business Email Setup', desc: 'Professional email on your own domain.' },
    { icon: 'gauge', title: 'Performance Optimization', desc: 'Lightning-fast load times that retain visitors.' },
    { icon: 'server', title: 'Website Maintenance', desc: 'Keep your site secure and up to date.' },
    { icon: 'chart', title: 'Analytics Setup', desc: 'Track visitors and measure what matters.' },
    { icon: 'form', title: 'Contact Forms', desc: 'Capture leads with smart, secure forms.' },
    { icon: 'globe', title: 'Mobile Responsive Design', desc: 'Flawless experience on every device.' }
  ],

  /* ---- Partners (marquee) ---- */
  partners: [
    { icon: 'code', name: 'Technology Companies' }, { icon: 'chart', name: 'Banks' },
    { icon: 'brush', name: 'Marketing Agencies' }, { icon: 'doc', name: 'Law Firms' },
    { icon: 'heart', name: 'Insurance Companies' }, { icon: 'cap', name: 'Universities' },
    { icon: 'handshake', name: 'Business Associations' }, { icon: 'network', name: 'Coworking Spaces' },
    { icon: 'chip', name: 'Software Companies' }, { icon: 'globe', name: 'Government Programs' }
  ],

  /* ---- Resource library ---- */
  resources: [
    { icon: 'rocket', title: 'Business Startup Guide', desc: 'A step-by-step guide to launching your business.' },
    { icon: 'brush', title: 'Marketing Toolkit', desc: 'Templates and assets to market your business.' },
    { icon: 'code', title: 'Website Guide', desc: 'Everything you need to build your online presence.' },
    { icon: 'award', title: 'Branding Guide', desc: 'Craft a brand identity that stands out.' },
    { icon: 'doc', title: 'Business Plan Template', desc: 'A clear, investor-ready business plan framework.' },
    { icon: 'talent', title: 'Hiring Toolkit', desc: 'Recruit, interview, and onboard great people.' },
    { icon: 'handshake', title: 'Sales Toolkit', desc: 'Scripts, pipelines, and closing strategies.' },
    { icon: 'form', title: 'Business Checklists', desc: 'Never miss a step launching or operating.' },
    { icon: 'library', title: 'SOP Templates', desc: 'Standardize your operations fast.' },
    { icon: 'page', title: 'Contract Templates', desc: 'Professional, ready-to-use agreements.' },
    { icon: 'doc', title: 'Proposal Templates', desc: 'Win more work with polished proposals.' },
    { icon: 'cap', title: 'Resource Library', desc: 'Explore the full member library.' }
  ],

  /* ---- Events ---- */
  events: [
    { day: '11', mon: 'JUL', tag: 'Workshop', title: 'Startup Bootcamp', desc: 'An intensive day of hands-on training to launch your business.', meta: 'Innovation Hub • 9:00 AM' },
    { day: '25', mon: 'JUL', tag: 'Conference', title: 'Business Summit', desc: 'Keynotes and workshops for founders and small business owners.', meta: 'Downtown Convention Center • 9:00 AM' },
    { day: '06', mon: 'AUG', tag: 'Networking', title: 'Networking Night', desc: 'Meet founders, mentors, and partners in a relaxed setting.', meta: 'Skyline Rooftop • 6:30 PM' },
    { day: '22', mon: 'AUG', tag: 'Conference', title: 'Leadership Conference', desc: 'Develop the leadership skills to grow a thriving team.', meta: 'Grand Hall • 10:00 AM' },
    { day: '12', mon: 'SEP', tag: 'Expo', title: 'Business Expo', desc: 'Showcase your business and discover new partners and tools.', meta: 'City Expo Center • 11:00 AM' },
    { day: '26', mon: 'SEP', tag: 'Workshop', title: 'AI Workshop', desc: 'Practical AI tools to automate and grow your business.', meta: 'Tech Campus • 1:00 PM' },
    { day: '09', mon: 'OCT', tag: 'Masterclass', title: 'Marketing Masterclass', desc: 'Modern marketing strategies that win and keep customers.', meta: 'Creative Studio • 2:00 PM' },
    { day: '23', mon: 'OCT', tag: 'Networking', title: 'Founder Meetup', desc: 'Connect with fellow founders over shared challenges and wins.', meta: 'Coworking Lounge • 6:00 PM' },
    { day: '07', mon: 'NOV', tag: 'Family', title: 'Family Picnic', desc: 'A relaxed day of food, games, and community for all ages.', meta: 'Riverside Park • 11:00 AM' },
    { day: '15', mon: 'NOV', tag: 'Wellness', title: 'Hiking Retreat', desc: 'Recharge in nature with fellow members and their families.', meta: 'Ridgeline Trails • 8:00 AM' },
    { day: '05', mon: 'DEC', tag: 'Volunteer', title: 'Volunteer Day', desc: 'Give back together through local community service projects.', meta: 'Community Center • 9:00 AM' },
    { day: '12', mon: 'DEC', tag: 'Gala', title: 'Awards Gala', desc: 'Celebrating outstanding businesses, mentors, and partners.', meta: 'Grand Ballroom • 7:00 PM' }
  ],

  /* ---- Testimonials / Success stories ---- */
  testimonials: [
    { initials: 'DM', name: 'Daniel Moore', role: 'Startup Founder', quote: 'The launch program took me from an idea to a registered, revenue-generating business in months. The mentorship was the turning point.' },
    { initials: 'SL', name: 'Sofia Laurent', role: 'Restaurant Owner', quote: 'The marketing toolkit and local SEO guidance filled our tables. We finally have a steady stream of new customers every week.' },
    { initials: 'MR', name: 'Marcus Reed', role: 'Marketing Agency', quote: 'The networking events alone grew our client base. This community genuinely wants every business to win.' },
    { initials: 'PA', name: 'Priya Anand', role: 'Retail Store Owner', quote: 'From branding to my first real website, the resources gave my shop a professional presence I never thought I could afford.' },
    { initials: 'JC', name: 'James Carter', role: 'Independent Consultant', quote: 'The sales toolkit and proposal templates helped me double my close rate. I now run a sustainable consulting practice.' },
    { initials: 'AO', name: 'Amara Okafor', role: 'Technology Startup', quote: 'Pitch coaching and investor readiness support helped us land our first round of funding. Invaluable for any founder.' }
  ],

  /* ---- FAQ ---- */
  faqs: [
    { q: 'Who can join Business Growth Foundation?', a: 'Any entrepreneur, startup, freelancer, nonprofit, family-owned business, or small business that shares our mission is welcome — along with mentors, volunteers, and corporate or community partners.' },
    { q: 'Is membership free?', a: 'We offer accessible membership options designed for businesses at every stage. Many of our core resources and programs are available at no cost thanks to our partners and donors.' },
    { q: 'How does the mentorship program work?', a: 'After applying, you are thoughtfully matched with an experienced mentor based on your goals. You meet regularly and gain access to member-only sessions and resources.' },
    { q: 'What does the Website Development Program include?', a: 'Everything from professional design and development to landing pages, SEO, hosting guidance, business email, performance optimization, and ongoing maintenance support.' },
    { q: 'How can my company become a partner?', a: 'Corporate and community partners gain visibility with thousands of businesses while supporting our mission. Apply through the membership section and our team will reach out.' },
    { q: 'Where are events held?', a: 'We host events nationally and virtually throughout the year — from startup bootcamps and summits to networking nights, family picnics, and our annual awards gala.' }
  ]
};
