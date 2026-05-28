import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center flex-wrap py-6">
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <div className="w-20 h-12 shrink-0 flex items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-gray-900">
            {/* Si vous souhaitez utiliser l'image du logo, décommentez ceci et supprimez le texte ci-dessus :
            <img className="w-auto h-full" alt="HOHAYA" src="/images/IMG_7352.PNG" /> */}
            HOHAYA.
          </a>
        </div>
        <div className="flex flex-wrap">
          <ul className="flex flex-wrap bg-gray-800 text-gray-100 justify-center gap-4 lg:gap-6 pl-1 pr-4 py-1 items-center rounded-full text-sm lg:text-base">
            <li className="bg-white text-gray-900 py-2 px-4 hover:bg-gray-200 shadow-xl rounded-3xl"><a href="#home">Accueil</a></li>
            <li><a href="#properties" className="bg-gray-800 py-2 px-4 rounded-3xl shadow-xl hover:bg-gray-100 hover:text-gray-900">Propriétés</a></li>
            <li><a href="#about" className="bg-gray-800 py-2 px-4 rounded-3xl shadow-xl hover:bg-gray-100 hover:text-gray-900">À Propos</a></li>
            <li className="hidden md:block"><a href="#testimonials" className="bg-gray-800 py-2 px-4 rounded-3xl shadow-xl hover:bg-gray-100 hover:text-gray-900">Témoignages</a></li>
            <li className="hidden md:block"><a href="#blog" className="bg-gray-800 py-2 px-4 rounded-3xl shadow-xl hover:bg-gray-100 hover:text-gray-900">Blog</a></li>
            <li className="hidden md:block"><a href="#faq" className="bg-gray-800 py-2 px-4 rounded-3xl shadow-xl hover:bg-gray-100 hover:text-gray-900">FAQ</a></li>
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/login" className="bg-gray-900 text-white hover:bg-gray-800 py-2.5 px-6 rounded-full text-sm lg:text-base font-semibold transition shadow-sm">
            Se Connecter
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home">
      <Navbar />
      <div className="text-black justify-center pt-4 items-center">
        <div className="flex flex-col lg:flex-row w-full mb-auto mt-8">
          <div className="w-full lg:w-3/4">
            <p className="inline-flex hover:bg-gray-200 items-center bg-white py-1.5 px-5 text-sm rounded-full font-medium shadow-sm transition">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Explorez. Découvrez. Achetez.
            </p>
            <h1 className="text-5xl lg:text-7xl mt-8 font-black leading-tight tracking-tight text-gray-900">
              Trouvez la maison <br className="hidden lg:block" /> de vos rêves.
            </h1>
          </div>
          <div className="w-full lg:w-2/4 mt-8 lg:mt-0 lg:pl-10 flex flex-col justify-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Découvrez facilement votre maison idéale. Parcourez une sélection rigoureuse de propriétés, connectez-vous avec des experts, et trouvez l'endroit parfait pour vous - que vous soyez primo-accédant ou investisseur.
            </p>
            <div>
              <button className="bg-gray-900 mt-8 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-gray-800 hover:shadow-2xl transition transform hover:-translate-y-1">
                Commencer &rarr;
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-16">
          <img
            className="w-full h-80 lg:h-[500px] object-cover rounded-[2rem] shadow-2xl"
            alt="Maison de luxe"
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          />
        </div>
      </div>
    </section>
  );
}

function Properties() {
  const propertiesData = [
    {
      title: "Villa Plage Akodessewa",
      price: "320 000 000 FCFA",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Superbe maison moderne avec un espace de vie ouvert et une luminosité naturelle exceptionnelle."
    },
    {
      title: "Villa Boulevard Tokoin",
      price: "550 000 000 FCFA",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Domaine de luxe avec finitions haut de gamme, piscine privée et vastes espaces de réception extérieurs."
    },
    {
      title: "Manoir Segbe CMS",
      price: "770 000 000 FCFA",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Un chef-d'œuvre architectural époustouflant situé au cœur du quartier le plus exclusif."
    },
    {
      title: "Retraite Rafiti",
      price: "250 000 000 FCFA",
      img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Maison de banlieue chaleureuse et charmante, parfaite pour les familles avec son grand jardin."
    },
    {
      title: "Lodge Vallée Dodji",
      price: "490 000 000 FCFA",
      img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Propriété minimaliste moderne entourée de nature, offrant une tranquillité et une paix absolues."
    },
    {
      title: "Domaine Colline Clet",
      price: "185 000 000 FCFA",
      img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Excellente opportunité d'investissement dans un quartier en plein développement avec de superbes commodités."
    }
  ];

  return (
    <section id="properties" className="my-16 lg:my-24">
      <div className="flex flex-col lg:flex-row w-full mb-10 items-end">
        <div className="w-full lg:w-3/4">
          <p className="inline-flex hover:bg-gray-200 items-center bg-white py-1 px-4 text-sm font-medium rounded-full shadow-sm mb-6">
            <span className="text-blue-500 mr-2"></span>
            Propriétés en Vedette
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Découvrez la maison <br className="hidden lg:block" /> de vos rêves</h1>
        </div>
        <div className="w-full lg:w-2/4 mt-6 lg:mt-0 lg:pb-2">
          <p className="text-base text-gray-600 leading-relaxed">
            Explorez une sélection exclusive de propriétés premium méticuleusement sélectionnées pour vous offrir le meilleur de l'immobilier de luxe et des opportunités d'investissement, sur mesure pour vos besoins.
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center overflow-x-auto pb-6 hide-scrollbar">
          <ul className="flex flex-nowrap lg:flex-wrap gap-4 pl-1 pr-4 items-center rounded-full whitespace-nowrap text-sm font-medium">
            <li className="bg-gray-900 px-6 py-3 text-white rounded-full hover:bg-gray-800 hover:shadow-lg transition cursor-pointer">Toutes les propriétés</li>
            <li className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition cursor-pointer text-gray-700">Maison Familiale</li>
            <li className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition cursor-pointer text-gray-700">Villa</li>
            <li className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition cursor-pointer text-gray-700">Appartement</li>
            <li className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition cursor-pointer text-gray-700">Manoirs</li>
            <li className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition cursor-pointer text-gray-700">Maison Écologique</li>
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((prop, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 shadow-sm">
                <img
                  src={prop.img}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                  alt={prop.title}
                />
              </div>
              <div className="px-2">
                <h1 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition">{prop.title}</h1>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{prop.desc}</p>
                <div className="flex justify-between items-center">
                  <p className="font-black text-2xl text-gray-900">{prop.price}</p>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ target, suffix = "", prefix = "", text }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!target) return;
    let start = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [target]);

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    return num;
  };

  return (
    <div className="bg-gray-50 p-6 rounded-[2rem] shadow-sm flex flex-col justify-center items-center transform hover:-translate-y-1 transition duration-300">
      <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
        {prefix}{target ? formatNumber(count) : count}{suffix}
      </h2>
      <p className="text-sm lg:text-base text-gray-500 mt-3 font-medium">{text}</p>
    </div>
  );
}

function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row px-6 lg:px-20 gap-16 items-center">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <p className="inline-flex text-gray-900 hover:bg-gray-200 items-center bg-gray-100 py-1 px-4 text-sm font-medium rounded-full mb-6 transition">
            <span className="text-blue-500 mr-2"></span>
            À Propos
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Une Aide Immobilière <br className="hidden lg:block" />Sur Mesure Pour Tous.
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Forts d'années d'expérience sur le marché immobilier, notre équipe dévouée est là pour vous guider à chaque étape de votre projet. Nous priorisons vos besoins pour des résultats exceptionnels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 pt-10 gap-6">
            <AnimatedCounter target={1200} prefix="+" text="Propriétés Vendues" />
            <AnimatedCounter target={98} suffix="%" text="Satisfaction Client" />
            <AnimatedCounter target={325} prefix="+" suffix=" Mds" text="FCFA en Transactions" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <div className="relative">
            <img
              className="w-full max-w-lg h-[500px] rounded-[2.5rem] object-cover shadow-2xl"
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Maison de luxe À Propos"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900">10+ Années</p>
                  <p className="text-sm text-gray-500">D'Expérience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Primo-accédant",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "Le processus a été incroyablement fluide. Ils ont exactement compris ce que nous cherchions et nous ont aidés à sécuriser la maison de nos rêves dans notre budget. Fortement recommandé !"
    },
    {
      name: "Marcus Dubois",
      role: "Investisseur Immobilier",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "Leur connaissance du marché et leurs compétences en négociation sont inégalées. J'ai déjà travaillé avec plusieurs agences, mais cette équipe offre toujours le meilleur retour sur investissement."
    },
    {
      name: "Elena Rodriguez",
      role: "Vendeur",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "Vendre une maison peut être stressant, mais ils ont rendu ça facile. La stratégie marketing était brillante, et ma maison s'est vendue au-dessus du prix demandé en seulement deux semaines."
    }
  ];

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="text-center max-w-3xl px-6 py-10">
          <p className="inline-flex hover:bg-gray-200 items-center bg-white py-1 px-4 text-sm font-medium rounded-full shadow-sm mb-6">
            <span className="text-blue-500 mr-2"></span>
            Témoignages
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">Ce que disent nos clients</h1>
          <p className="text-gray-600 text-lg">Ne nous croyez pas sur parole. Écoutez les familles, les investisseurs et les vendeurs qui nous ont fait confiance pour leurs besoins immobiliers.</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mb-16 gap-8">
        {testimonials.map((item, index) => (
          <div key={index} className="w-full lg:w-1/3 bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="text-blue-500 mb-6">
                <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>
              </div>
              <p className="text-gray-700 italic leading-relaxed text-lg mb-8">
                "{item.content}"
              </p>
            </div>
            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 rounded-full object-cover shadow-sm" src={item.avatar} alt={item.name} />
                <div>
                  <h2 className="font-bold text-gray-900">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <div className="text-right text-yellow-400">
                <p className="tracking-widest text-sm">★★★★★</p>
                <p className="text-gray-400 text-xs mt-1 font-medium">Note de 5.0</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Blog() {
  const articles = [
    {
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "12 Fév, 2026",
      title: "Les tendances Tech de la Maison Connectée à surveiller"
    },
    {
      img: "https://images.unsplash.com/photo-1416879598555-081498ea32eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "25 Juin, 2026",
      title: "Créer un Jardin Durable & Éco-Responsable"
    },
    {
      img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "08 Jan, 2026",
      title: "Conseils Budgétaires pour les Primo-accédants"
    },
    {
      img: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "15 Déc, 2025",
      title: "L'Art de Vivre Minimaliste dans les Espaces Urbains"
    }
  ];

  return (
    <div id="blog" className="py-12">
      <div className="mt-10 mb-12 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end">
        <div>
          <p className="inline-flex hover:bg-gray-200 items-center bg-white py-1 px-4 text-sm font-medium rounded-full shadow-sm mb-4">
            <span className="text-blue-500 mr-2"></span>
            Notre Blog
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">Articles Tendances</h1>
        </div>
        <button className="hidden lg:block bg-white border border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition shadow-sm">
          Voir Tous Les Articles
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="overflow-hidden rounded-3xl mb-4">
              <img
                className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                src={article.img}
                alt={article.title}
              />
            </div>
            <div className="px-2">
              <p className="py-2 text-sm text-blue-600 font-semibold">{article.date}</p>
              <h2 className="font-bold text-lg text-gray-900 leading-snug group-hover:text-blue-600 transition">
                {article.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left font-bold text-gray-900 hover:text-blue-600 transition"
      >
        <span className="text-lg lg:text-xl">{title}</span>
        <span className={`transform transition-transform duration-300 flex items-center justify-center w-8 h-8 rounded-full border ${isOpen ? 'rotate-180 bg-blue-600 text-white border-blue-600' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-8 text-gray-600 text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 lg:py-24">
      <div className="px-6 lg:px-20 flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <div className="sticky top-10">
            <p className="inline-flex hover:bg-gray-200 items-center bg-gray-100 py-1 px-4 text-sm font-medium rounded-full mb-6">
              <span className="text-blue-500 mr-2"></span>
              FAQ
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Foire Aux <br className="hidden lg:block" />Questions
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Trouvez les réponses aux questions fréquentes sur l'achat, la vente et l'investissement immobilier grâce à nos experts.
            </p>
            <p className="text-sm text-gray-500">
              Vous avez d'autres questions ? <a href="#" className="text-blue-600 font-semibold underline">Contactez notre support</a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <AccordionItem title="Comment commencer à chercher une propriété ?">
            <p>Vous pouvez commencer par utiliser notre outil de recherche avancée qui vous permet de filtrer par emplacement, budget, type de propriété et commodités. Nous vous recommandons également de planifier une consultation gratuite avec l'un de nos agents pour discuter de vos besoins en détail.</p>
          </AccordionItem>
          <AccordionItem title="Comment déterminer mon budget ?">
            <p className="mb-4">Évaluer vos revenus, votre épargne et vos dépenses actuelles est la première étape. Nous vous recommandons vivement de parler avec un conseiller financier ou un courtier hypothécaire pour obtenir une pré-approbation de prêt.</p>
            <p>Une lettre de pré-approbation vous donne non seulement un budget clair, mais montre également aux vendeurs que vous êtes un acheteur sérieux et qualifié.</p>
          </AccordionItem>
          <AccordionItem title="Quelles erreurs dois-je éviter en tant que primo-accédant ?">
            <p>Les erreurs courantes incluent : précipiter les décisions sans explorer le quartier, faire l'impasse sur l'inspection professionnelle de la maison, et maximiser son budget sans tenir compte des frais de clôture, des taxes foncières et des dépenses d'entretien.</p>
          </AccordionItem>
          <AccordionItem title="Combien de temps prend généralement le processus de clôture ?">
            <p>En moyenne, le processus de clôture (ou signature) prend entre 30 et 45 jours après l'acceptation d'une offre. Ce délai permet de réaliser l'inspection de la maison, l'évaluation, l'approbation du prêt et la recherche des titres de propriété de manière appropriée.</p>
          </AccordionItem>
        </div>
      </div>

      <div className="px-6 lg:px-20 mt-24">
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
          <div className="w-full lg:w-1/2 p-10 lg:p-16 z-10 flex flex-col justify-center">
            <p className="inline-flex text-white items-center bg-gray-800 py-1.5 px-5 text-sm font-medium rounded-full mb-8 w-max">
              <span className="text-blue-400 mr-2"></span>
              Rejoignez Notre Newsletter
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Prêt à Trouver la Maison <br className="hidden lg:block" /> de vos Rêves ?
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Inscrivez-vous à notre newsletter pour des annonces exclusives hors marché, des mises à jour du marché et des conseils d'experts pour acheteurs et vendeurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                Travaillons ensemble &rarr;
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Extérieur Maison Moderne"
            />
            {/* Dark gradient overlay to blend image into background */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="px-6 lg:px-20 mb-12 flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-1/3">
          <a href="#" className="text-3xl font-black tracking-tighter text-gray-900 mb-6 block">
            HOHAYA.
          </a>
          <p className="text-gray-500 leading-relaxed max-w-sm">
            Nous offrons un service complet pour la vente, l'achat ou la location de biens immobiliers. Nous opérons depuis plus de 10 ans.
          </p>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Entreprise</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition">À Propos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Nos Services</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Carrières</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Liens Rapides</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition">Rechercher des Propriétés</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Vendre votre Maison</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Rapports de Marché</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Agents</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2">
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3">
                <span className="text-blue-500">📍</span>
                Boulevard du 13 Janvier, Tokoin, Lomé, Togo
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span>
                hello@hohaya.com
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span>
                +228 22 21 01 20 / +228 90 05 55 01
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm font-medium">© 2026 Hohaya. Tous droits réservés.</p>
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-gray-900 transition">Politique de Confidentialité</a>
          <a href="#" className="hover:text-gray-900 transition">Conditions d'Utilisation</a>
          <a href="#" className="hover:text-gray-900 transition">Paramètres des Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="scroll-smooth font-sans text-gray-900 antialiased overflow-x-hidden">
      <div className="bg-[#f8f9fa] px-6 lg:px-20 pb-10">
        <Hero />
        <Properties />
      </div>

      <AboutUs />

      <section id="testimonials-blog" className="bg-[#f8f9fa] px-6 lg:px-20 py-10 lg:py-20 border-y border-gray-100">
        <Testimonials />
        <Blog />
      </section>

      <FAQ />
      <Footer />
    </div>
  );
}
