import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  Menu,
  X,
  Database,
  Brain,
  ExternalLink,
  Sparkles,
  Layers,
  User,
  BarChart3,
  Cpu,
  Globe
} from 'lucide-react';

// --- SUB-COMPONENTS ---

const SocialBtn = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="p-3 bg-white border border-slate-200 text-slate-600 rounded-full hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300"
  >
    {icon}
  </a>
);

// --- CUSTOM BRAND ICONS (Images from URL) ---

// Official Python Logo
const PythonIcon = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
    alt="Python Logo" 
    className="w-8 h-8" 
  />
);

// Official R Logo
const RIcon = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" 
    alt="R Logo" 
    className="w-8 h-8" 
  />
);

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- YOUR DATA ---
  const projects = [
    {
      id: 1,
      title: "Healthcare Premium Prediction",
      image: "/images/healthcare_premium.png",
      tags: ["Python", "Machine Learning", "Streamlit", "Scikit-Learn"],
      description: "An interactive pricing engine that predicts insurance premiums with 18% higher accuracy. Deployed for real-time risk assessment.",
      links: {
        demo: "https://ml-premium-prediction-project-cb.streamlit.app/", // Link to your Streamlit app
        code: "https://github.com/ruchitha-meenakshi/ml-project-premium-prediction", // Link to Repo
        linkedin: "https://www.linkedin.com/posts/ruchithauppuluri_ai-machinelearning-datascience-activity-7396508304903966720-sGg3?utm_source=share&utm_medium=member_desktop&rcm=ACoAACijG-8BTsPM6tAdX5FjSKez9yFXjBY7Yi8" // Link to your specific Post
      }
    },
    {
      id: 2,
      title: "Study Dropout Prediction in ALSPAC Cohort",
      image: "/images/predicting_study_dropout.png", 
      tags: ["R Language", "Machine Learning", "MICE", "Random Forest"],
      description: "Predictive framework analyzing 14,000+ records to identify participant dropout risk, enabling proactive retention strategies.",
      links: {
        code: "https://github.com/MRCIEU/predicting-ALSPAC-dropout"
      }
    },
    {
      id: 3,
      title: "Prognostic Modeling of Head & Neck Cancer",
      image: "/images/predictive_modeling.png", 
      tags: ["R Language", "Survival Analysis", "RandomForestSRC"],
      description: "Benchmarked ML against Cox models using 528 patient records. Identified Tumour Stage IVC as a critical risk factor.",
      links: {
        code: "https://github.com/ruchitha-meenakshi/Prognostic-Survival-Modelling-in-Breast-Cancer"
      }
    },
    {
      id: 4,
      title: "Lauki Finance: Credit Risk Modelling",
      image: "/images/credit_risk_modelling.png", 
      tags: ["Python", "Machine Learning", "XGBoost", "SMOTE"],
      description: "Automated credit scoring system achieving 94% recall for defaulters. Solved class imbalance using SMOTE-Tomek.",
      links: {
        code: "https://github.com/ruchitha-meenakshi/ml-project-credit-risk-modelling",
        demo: "https://ml-project-credit-risk-modelling-codebasics.streamlit.app/"
      }
    }
  ];

  const getCount = (tag) => projects.filter(p => p.tags.includes(tag)).length;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Top Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="font-bold text-xl text-slate-900 tracking-tight">Ruchitha<span className="text-emerald-500">.</span></span>
          
          <div className="hidden md:flex gap-8">
            {['About', 'Projects', 'Skills', 'Experience'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-700">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 md:hidden flex flex-col gap-4 shadow-xl">
            {['About', 'Projects', 'Skills', 'Experience'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 mb-24">
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-6 tracking-wide">
              DATA SCIENTIST | STATISTICAL PROGRAMMER
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Hello, I am <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Ruchitha Uppuluri.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Driven by a simple belief: <span className="text-slate-900 font-medium">behind every dataset is a story waiting to shape better decisions.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-10">
              <a 
                href="/Ruchitha_Uppuluri_Resume.pdf" 
                className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1"
              >
                Download Resume <Download size={18} />
              </a>
              <div className="flex gap-4">
                <SocialBtn icon={<Linkedin size={20} />} href="https://linkedin.com/in/ruchithauppuluri" />
                <SocialBtn icon={<Mail size={20} />} href="mailto:ruchithau@outlook.com" />
              </div>
            </div>

            {/* Smart Stats - Focused on Tools */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 border-t border-slate-100 pt-8">
               
               {/* Python Stats */}
               <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center">
                    <PythonIcon />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-slate-900">{getCount('Python')}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Python Projects</div>
                  </div>
               </div>

               {/* R Stats */}
               <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center">
                    <RIcon />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-slate-900">{getCount('R Language')}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">R Projects</div>
                  </div>
               </div>

               {/* Future SQL */}
               {getCount('SQL') > 0 && (
                 <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <Database size={32} className="text-blue-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-slate-900">{getCount('SQL')}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase">SQL Projects</div>
                    </div>
                 </div>
               )}

               {/* Future Tableau */}
               {getCount('Tableau') > 0 && (
                 <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <BarChart3 size={32} className="text-orange-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-slate-900">{getCount('Tableau')}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase">Viz Projects</div>
                    </div>
                 </div>
               )}

            </div>
          </div>

          {/* Profile Picture */}
          <div className="relative group w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute top-0 right-0 w-full h-full bg-emerald-100 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-all duration-500 ease-out"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-slate-100 rounded-[3rem] -rotate-3 group-hover:-rotate-6 transition-all duration-500 ease-out"></div>
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/images/profile.png" 
                alt="Ruchitha Uppuluri" 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm">
                <Sparkles className="text-emerald-500 w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="mb-32 scroll-mt-24">
           <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-blue-500"></div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <User size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">My Story</h2>
                  <p className="text-slate-500">Beyond the code.</p>
                </div>
              </div>

              <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed">
                <p className="mb-6">
                  My journey began with a fascination for how small patterns can change big outcomes, leading me to specialize in <span className="font-semibold text-slate-800">Statistical Modelling</span> and <span className="font-semibold text-slate-800">Advanced Analytics</span>.
                </p>
                <p>
                  I thrive on transforming complex, imperfect data into insights that drive clarity and efficiency. Whether building predictive models or crafting intuitive dashboards, I focus on solutions that are transparent, reliable, and genuinely impactful. Meaningful progress starts with asking better questions—I’m here to build the data-driven answers.
                </p>
              </div>
           </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
             <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
               <Layers size={24} />
             </div>
             <div>
                <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
                <p className="text-slate-500">A selection of my work in Data Science & ML.</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col h-full overflow-hidden">
                
                <div className="aspect-video w-full relative bg-slate-50 border-b border-slate-100 flex items-center justify-center overflow-hidden">
                  {/* Background pattern to make empty space look nice */}
                  <div className="absolute inset-0 bg-slate-200/30 pattern-dots"></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    // 'object-contain': Shows full image. 'p-6': Adds frame/spacing.
                    className="w-full h-full object-contain p-6 z-10 hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Right External Link */}
                  <a href={project.links?.code || "#"} className="absolute top-4 right-4 z-30 p-2.5 bg-white rounded-full text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:text-emerald-600">
                    <ExternalLink size={18} />
                  </a>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-500 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* ACTION BUTTONS */}
                  <div className="flex items-center gap-3 mb-6">
                    {/* View Code Button */}
                    {project.links?.code && (
                      <a href={project.links.code} target="_blank" rel="noreferrer" 
                         className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-bold transition-colors">
                         <Github size={16} /> Code
                      </a>
                    )}
                    
                    {/* View Demo Button (if available) */}
                    {project.links?.demo && (
                      <a href={project.links.demo} target="_blank" rel="noreferrer" 
                         className="flex items-center gap-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-sm font-bold transition-colors">
                         <Globe size={16} /> Live Demo
                      </a>
                    )}

                    {/* LinkedIn Post Button (Special Highlight) */}
                    {project.links?.linkedin && (
                      <a href={project.links.linkedin} target="_blank" rel="noreferrer" 
                         className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-bold transition-colors border border-blue-100">
                         <Linkedin size={16} /> Read Post
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50">
                    {project.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="mb-32 scroll-mt-24">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">Technical Toolkit</h2>
              
              <div className="flex flex-wrap justify-center gap-3 relative z-10 max-w-3xl mx-auto">
                 {['Python', 'R Language', 'SQL', 'Scikit-Learn', 'Git', 'Survival Analysis', 'TensorFlow', 'Excel', 'Pandas', 'NumPy', 'Streamlit'].map((skill) => (
                   <div key={skill} className="px-6 py-3 bg-white/10 text-white rounded-2xl border border-white/10 hover:bg-white hover:text-slate-900 hover:scale-105 transition-all cursor-default font-medium backdrop-blur-sm">
                     {skill}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
             <div className="p-3 bg-purple-100 text-purple-600 rounded-xl"><Cpu size={24} /></div>
             <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
          </div>

          <div className="grid gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors">
               <div className="flex flex-col md:flex-row justify-between mb-4">
                 <div>
                   <h3 className="text-xl font-bold text-slate-900">ENT Administrative Assistant</h3>
                   <div className="text-emerald-600 font-medium">UHBW NHS Foundation Trust</div>
                 </div>
                 <span className="text-slate-400 font-mono text-sm mt-1 md:mt-0">Oct 2023 - Oct 2025</span>
               </div>
               <p className="text-slate-600 leading-relaxed">
                  Led data-driven process improvements by identifying bottlenecks. Developed interactive dashboards in Excel to visualise patient pathways, resulting in a <span className="font-bold text-slate-900">30% reduction</span> in follow-up delays.
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors">
               <div className="flex flex-col md:flex-row justify-between mb-4">
                 <div>
                   <h3 className="text-xl font-bold text-slate-900">Project Management Intern</h3>
                   <div className="text-emerald-600 font-medium">Marvell Technology</div>
                 </div>
                 <span className="text-slate-400 font-mono text-sm mt-1 md:mt-0"> Sep 2020 - Jun 2021</span>
               </div>
               <p className="text-slate-600 leading-relaxed">
                  Optimized project delivery by analyzing sprint performance data. Leveraged analytical insights to streamline task tracking, boosting delivery efficiency by <span className="font-bold text-slate-900">20%</span>.
               </p>
            </div>
          </div>
        </section>

        <footer className="mt-32 pt-12 border-t border-slate-200 text-center text-slate-400 text-sm">
          <p>© 2025 Ruchitha Uppuluri.</p>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;