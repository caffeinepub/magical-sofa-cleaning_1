export type Locale = "en" | "hi" | "gu";

export interface Translations {
  // Header
  header: {
    logoText: string;
    logoSubtext: string;
    navHome: string;
    navServices: string;
    navWhyChooseUs: string;
    navBookNow: string;
    navAreas: string;
    navReviews: string;
    navFAQ: string;
    callNow: string;
    whatsapp: string;
    instagram: string;
    bookNow: string;
  };
  // Hero
  hero: {
    title: string;
    subtitle: string;
    description: string;
    chipHygienic: string;
    chipQuickDry: string;
    chipThorough: string;
    chipReviews: string;
    ctaCall: string;
    ctaWhatsApp: string;
    sameDayService: string;
    whyChooseMagicalHeading: string;
    whyChooseMagicalPoint1: string;
    whyChooseMagicalPoint2: string;
    whyChooseMagicalPoint3: string;
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    reviews: string;
    experience: string;
    guarantee: string;
    callNow: string;
    bookNow: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    beforeAfter: string;
    transformation: string;
  };
  // Service Coverage Banner
  serviceCoverage: {
    chipText: string;
    heading: string;
    caption: string;
  };
  // Coverage banner
  coverage: {
    title: string;
    desc: string;
    cta: string;
  };
  // Services
  services: {
    heading: string;
    description: string;
    popular: string;
    startingAt: string;
    sameDayAvailable: string;
    availableServices: string;
    sofaTitle: string;
    sofaDescription: string;
    carpetTitle: string;
    carpetDescription: string;
    chairTitle: string;
    chairDescription: string;
    mattressTitle: string;
    mattressDescription: string;
    acTitle: string;
    acDescription: string;
    acWaterJet: string;
    badge: string;
    title: string;
    subtitle: string;
    bookNow: string;
    bookAny: string;
  };
  // Sofa Price Calculator
  calculator: {
    title: string;
    description: string;
    sizeLabel: string;
    sizeSmall: string;
    sizeMedium: string;
    sizeLarge: string;
    pricePerFoot: string;
    estimatedTotal: string;
    ctaCall: string;
    ctaWhatsApp: string;
    disclaimer: string;
    badge: string;
    subtitle: string;
    selectService: string;
    quantity: string;
    estimate: string;
    getQuote: string;
    // New keys for area selector & mattress
    selectArea: string;
    areaLabel: string;
    perUnit: string;
    mattressNote: string;
  };
  // Why Choose Us
  whyChooseUs: {
    heading: string;
    description: string;
    ecoFriendlyTitle: string;
    ecoFriendlyDescription: string;
    germanMachinesTitle: string;
    germanMachinesDescription: string;
    goldStandardTitle: string;
    goldStandardDescription: string;
    certifiedExpertsTitle: string;
    certifiedExpertsDescription: string;
    badge: string;
    title: string;
    subtitle: string;
    certifiedTitle: string;
    certifiedDesc: string;
    sameDayTitle: string;
    sameDayDesc: string;
    ecoTitle: string;
    ecoDesc: string;
    experiencedTitle: string;
    experiencedDesc: string;
    satisfactionTitle: string;
    satisfactionDesc: string;
    coverageTitle: string;
    coverageDesc: string;
    statCustomers: string;
    statReviews: string;
    statYears: string;
    statSatisfaction: string;
  };
  // Appointment
  appointment: {
    heading: string;
    description: string;
    cardTitle: string;
    cardDescription: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    areaLabel: string;
    areaPlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitButton: string;
    successMessage: string;
    errorNameRequired: string;
    errorPhoneRequired: string;
    errorPhoneInvalid: string;
    errorServiceRequired: string;
    errorAreaRequired: string;
    errorDateRequired: string;
    errorTimeRequired: string;
    badge: string;
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    service: string;
    selectService: string;
    address: string;
    addressPlaceholder: string;
    date: string;
    time: string;
    notes: string;
    notesPlaceholderAlt: string;
    submit: string;
    disclaimer: string;
  };
  // Service Options
  serviceOptions: {
    sofaCleaning: string;
    carpetCleaning: string;
    chairCleaning: string;
    mattressCleaning: string;
    acWaterJet: string;
  };
  // Time Slots
  timeSlots: {
    morning1: string;
    morning2: string;
    afternoon1: string;
    afternoon2: string;
    evening1: string;
    evening2: string;
  };
  // Live Photos
  livePhotos: {
    heading: string;
    description: string;
    sofaBeforeAfter: string;
    officeChairCleaning: string;
    badge: string;
    title: string;
    subtitle: string;
  };
  // Areas Served
  areasServed: {
    heading: string;
    description: string;
    badge: string;
    title: string;
    subtitle: string;
    priority: string;
    other: string;
    notListed: string;
    askUs: string;
  };
  // Reviews
  reviews: {
    badge: string;
    title: string;
    reviewsLabel: string;
    onGoogle: string;
    viewAll: string;
    writeReview: string;
  };
  // FAQ
  faq: {
    heading: string;
    description: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
    q8: string;
    a8: string;
    q9: string;
    a9: string;
    q10: string;
    a10: string;
    stillHaveQuestions: string;
    callUs: string;
    whatsappUs: string;
    badge: string;
    title: string;
    subtitle: string;
  };
  // Footer
  footer: {
    companyName: string;
    companyDescription: string;
    quickLinks: string;
    home: string;
    services: string;
    whyChooseUs: string;
    bookAppointment: string;
    areasServed: string;
    reviewsLink: string;
    faqLink: string;
    ourServices: string;
    sofaCleaning: string;
    carpetCleaning: string;
    mattressCleaning: string;
    chairCleaning: string;
    acService: string;
    contactUs: string;
    servingAreas: string;
    workingHours: string;
    callNow: string;
    whatsAppUs: string;
    copyright: string;
    builtWith: string;
    tagline: string;
    contact: string;
    hours: string;
    rights: string;
  };
  // Language
  language: {
    english: string;
    hindi: string;
    gujarati: string;
  };
  // Floating
  floating: {
    whatsapp: string;
    call: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    header: {
      logoText: "Magical Service",
      logoSubtext: "Premium Cleaning",
      navHome: "Home",
      navServices: "Services",
      navWhyChooseUs: "Why Us",
      navBookNow: "Book Now",
      navAreas: "Areas",
      navReviews: "Reviews",
      navFAQ: "FAQ",
      callNow: "Call Now",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      bookNow: "Book Now",
    },
    hero: {
      title: "Expert Sofa & Upholstery Cleaning in Ahmedabad",
      subtitle: "Professional Deep Cleaning at ₹90/ft",
      description:
        "Top-rated sofa cleaning & upholstery cleaning services in Ahmedabad. Expert deep cleaning at ₹90/ft covering Nikol, Naroda, Bapunagar & all areas. 265+ 5-star Google reviews. Professional, eco-friendly results guaranteed.",
      chipHygienic: "Hygienic & Safe",
      chipQuickDry: "Quick Dry (~2hrs)",
      chipThorough: "Thorough Clean",
      chipReviews: "265+ Reviews",
      ctaCall: "Call Now",
      ctaWhatsApp: "WhatsApp Us",
      sameDayService: "Same Day Service",
      whyChooseMagicalHeading: "Why Choose Magical Service?",
      whyChooseMagicalPoint1:
        "German machines technology for deep cleaning with Quick Dry (~2 hours)",
      whyChooseMagicalPoint2:
        "Eco-friendly, non-toxic chemicals safe for children & pets",
      whyChooseMagicalPoint3:
        "Certified experts serving Nikol, Naroda, Bapunagar & all Ahmedabad areas",
      badge: "Premium Cleaning Services",
      title1: "Expert Sofa &",
      title2: "Upholstery Cleaning",
      title3: "in Ahmedabad",
      reviews: "Reviews",
      experience: "5+ Years Experience",
      guarantee: "100% Satisfaction",
      callNow: "Call Now",
      bookNow: "Book Appointment",
      feature1: "✓ Same Day Service",
      feature2: "✓ Eco-Friendly Products",
      feature3: "✓ Trained Professionals",
      feature4: "✓ Affordable Pricing",
      beforeAfter: "Before & After",
      transformation: "Amazing Transformation",
    },
    serviceCoverage: {
      chipText: "Service Coverage",
      heading: "Serving All of Ahmedabad & Gandhinagar",
      caption:
        "Serving Nana Chiloda, Odhav, and 100+ areas across Ahmedabad and Gandhinagar with premium sofa cleaning services.",
    },
    coverage: {
      title: "Serving All of Ahmedabad & Gandhinagar",
      desc: "From Nikol and Naroda in the east to Bopal in the west, from Nana Chiloda and Odhav in the north-east to Narol in the south — our professional cleaning team covers every corner of Ahmedabad and Gandhinagar.",
      cta: "Book in Your Area",
    },
    services: {
      heading: "Our Cleaning Services",
      description:
        "Expert cleaning services available across Kathwada, Krishna Nagar, Kuber Nagar, and all major areas in Ahmedabad. Premium quality guaranteed.",
      popular: "Popular",
      startingAt: "Starting at",
      sameDayAvailable: "Same day available",
      availableServices: "Available Services",
      sofaTitle: "Sofa Cleaning",
      sofaDescription:
        "Professional sofa cleaning & upholstery cleaning for all sofa types. Deep removes stains, odors, and allergens using German machine technology. Best sofa cleaning in Ahmedabad at ₹90/ft.",
      carpetTitle: "Carpet Cleaning",
      carpetDescription:
        "Expert carpet cleaning to restore original beauty. Removes deep-set dirt, stains, and odors effectively.",
      chairTitle: "Chair Cleaning",
      chairDescription:
        "Professional office and dining chair cleaning. Safe for all fabric types with quick dry technology.",
      mattressTitle: "Mattress Cleaning",
      mattressDescription:
        "Deep mattress sanitization to eliminate dust mites, bacteria, and allergens for healthier sleep.",
      acTitle: "AC Water Jet Service",
      acDescription:
        "Professional AC deep cleaning with water jet technology. Improves air quality and AC efficiency.",
      acWaterJet: "Water Jet Technology",
      badge: "Our Services",
      title: "Professional Cleaning Services",
      subtitle:
        "Top-Notch Sofa Cleaning & Professional Upholstery Cleaning Services — Ahmedabad's #1 Choice",
      bookNow: "Book Now",
      bookAny: "Book Any Service",
    },
    calculator: {
      title: "Price Calculator",
      description: "Estimate your cleaning cost instantly",
      sizeLabel: "Sofa Size (in feet)",
      sizeSmall: "Small",
      sizeMedium: "Medium",
      sizeLarge: "Large",
      pricePerFoot: "Price per foot",
      estimatedTotal: "Estimated Total",
      ctaCall: "Call to Book",
      ctaWhatsApp: "Book on WhatsApp",
      disclaimer: "* Final price may vary based on condition and fabric type",
      badge: "Price Calculator",
      subtitle: "Get an instant price estimate for your cleaning service",
      selectService: "Select Service",
      quantity: "Quantity",
      estimate: "Estimated Price",
      getQuote: "Get Quote on WhatsApp",
      selectArea: "Select Your Area",
      areaLabel: "Your Area",
      perUnit: "per unit",
      mattressNote:
        "Mattress Cleaning – ₹600 per mattress (deep steam cleaning)",
    },
    whyChooseUs: {
      heading: "Why Choose Magical Service?",
      description:
        "We combine expertise, eco-friendly products, and exceptional service to deliver outstanding results every time.",
      ecoFriendlyTitle: "Eco-Friendly Products",
      ecoFriendlyDescription:
        "We use only non-toxic, biodegradable cleaning products that are safe for children, pets, and the environment.",
      germanMachinesTitle: "German Machine Technology",
      germanMachinesDescription:
        "Advanced German cleaning machines ensure deep cleaning with Quick Dry technology (~2 hours drying time).",
      goldStandardTitle: "Gold Standard Quality",
      goldStandardDescription:
        "Our gold standard cleaning process ensures every fiber is cleaned, sanitized, and refreshed to perfection.",
      certifiedExpertsTitle: "Certified Experts",
      certifiedExpertsDescription:
        "Our team is trained and certified in advanced upholstery cleaning techniques for all fabric types.",
      badge: "Why Choose Us",
      title: "The Magical Service Difference",
      subtitle:
        "We combine expertise, eco-friendly products, and exceptional service to deliver outstanding results every time.",
      certifiedTitle: "Certified Professionals",
      certifiedDesc:
        "Our team is trained and certified in advanced upholstery cleaning techniques for all fabric types.",
      sameDayTitle: "Same Day Service",
      sameDayDesc:
        "Need urgent cleaning? We offer same-day service across Ahmedabad, subject to availability.",
      ecoTitle: "Eco-Friendly Products",
      ecoDesc:
        "We use only non-toxic, biodegradable cleaning products that are safe for children, pets, and the environment.",
      experiencedTitle: "5+ Years Experience",
      experiencedDesc:
        "With over 5 years of experience, we have cleaned thousands of sofas, mattresses, and carpets across Ahmedabad.",
      satisfactionTitle: "100% Satisfaction",
      satisfactionDesc:
        "We guarantee your satisfaction. If you are not happy with our service, we will re-clean at no extra charge.",
      coverageTitle: "Wide Coverage",
      coverageDesc:
        "We serve all major areas of Ahmedabad and Gandhinagar including Nikol, Naroda, Bapunagar, Odhav, and more.",
      statCustomers: "Happy Customers",
      statReviews: "Google Reviews",
      statYears: "Years Experience",
      statSatisfaction: "Satisfaction Rate",
    },
    appointment: {
      heading: "Book Your Appointment",
      description:
        "Schedule your cleaning service today. Same-day appointments available.",
      cardTitle: "Book Cleaning Service",
      cardDescription:
        "Fill in your details and we'll confirm via WhatsApp within 30 minutes.",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "10-digit mobile number",
      serviceLabel: "Service Required",
      servicePlaceholder: "Select a service",
      areaLabel: "Your Area",
      areaPlaceholder: "e.g. Nikol, Naroda, Bapunagar",
      dateLabel: "Preferred Date",
      timeLabel: "Preferred Time",
      notesLabel: "Additional Notes",
      notesPlaceholder: "Any special requirements...",
      submitButton: "Book via WhatsApp",
      successMessage: "Booking sent! We'll confirm shortly.",
      errorNameRequired: "Name is required",
      errorPhoneRequired: "Phone number is required",
      errorPhoneInvalid: "Please enter a valid 10-digit mobile number",
      errorServiceRequired: "Please select a service",
      errorAreaRequired: "Area is required",
      errorDateRequired: "Please select a date",
      errorTimeRequired: "Please select a time slot",
      badge: "Book Appointment",
      title: "Schedule Your Cleaning",
      subtitle:
        "Fill in the details below and we'll confirm your appointment via WhatsApp",
      name: "Your Name",
      phone: "Phone Number",
      service: "Service Required",
      selectService: "Select a service",
      address: "Address / Area",
      addressPlaceholder: "Your area in Ahmedabad",
      date: "Date",
      time: "Time",
      notes: "Additional Notes",
      notesPlaceholderAlt: "Any special requirements or details...",
      submit: "Book via WhatsApp",
      disclaimer:
        "We'll confirm your appointment within 30 minutes via WhatsApp",
    },
    serviceOptions: {
      sofaCleaning: "Sofa Cleaning",
      carpetCleaning: "Carpet Cleaning",
      chairCleaning: "Office Chair Cleaning",
      mattressCleaning: "Mattress Cleaning",
      acWaterJet: "AC Water Jet Service",
    },
    timeSlots: {
      morning1: "8:00 AM - 10:00 AM",
      morning2: "10:00 AM - 12:00 PM",
      afternoon1: "12:00 PM - 2:00 PM",
      afternoon2: "2:00 PM - 4:00 PM",
      evening1: "4:00 PM - 6:00 PM",
      evening2: "6:00 PM - 8:00 PM",
    },
    livePhotos: {
      heading: "Our Work in Action",
      description: "Real photos from our cleaning jobs across Ahmedabad.",
      sofaBeforeAfter: "Before & After",
      officeChairCleaning: "Office Chair",
      badge: "Live Photos",
      title: "Our Work in Action",
      subtitle:
        "Real photos from our cleaning jobs across Ahmedabad. See the quality of our work firsthand.",
    },
    areasServed: {
      heading: "Areas We Serve in Ahmedabad",
      description:
        "Comprehensive sofa cleaning coverage across Nikol, Naroda, Bapunagar, Hanspura, Odhav, and 100+ localities in Ahmedabad and Gandhinagar.",
      badge: "Service Coverage",
      title: "Areas We Serve in Ahmedabad",
      subtitle:
        "We provide professional upholstery cleaning services across Ahmedabad and Gandhinagar. From Nikol and Naroda in the east to Bopal and Satellite in the west — we cover it all.",
      priority: "Primary Service Areas",
      other: "Also Serving",
      notListed: "Don't see your area? We likely cover it too!",
      askUs: "Ask About Your Area",
    },
    reviews: {
      badge: "Customer Reviews",
      title: "What Our Customers Say",
      reviewsLabel: "Reviews",
      onGoogle: "on Google Business Profile",
      viewAll: "View All Reviews",
      writeReview: "Write a Review",
    },
    faq: {
      heading: "Frequently Asked Questions",
      description: "Everything you need to know about our cleaning services.",
      q1: "Which areas do you serve in Ahmedabad?",
      a1: "We provide professional sofa cleaning and upholstery cleaning services across all areas of Ahmedabad including Nikol, Naroda, Bapunagar, Hanspura, Odhav, Kathwada, Nana Chiloda, Krishna Nagar, Kuber Nagar, Vastral, Satellite, SG Highway, Maninagar, Vejalpur, Bopal, Chandkheda, and all of Gandhinagar.",
      q2: "How much does sofa cleaning cost?",
      a2: "Our sofa cleaning starts at ₹499 for a 1-seater, ₹799 for 2-seater, ₹999 for 3-seater, and ₹1499 for L-shape sofas. Mattress cleaning is ₹600 per mattress. Final price may vary based on condition.",
      q3: "How long does sofa cleaning take?",
      a3: "A standard 3-seater sofa takes about 45–60 minutes to clean. Drying time is approximately 2 hours with our Quick Dry technology.",
      q4: "Is the cleaning safe for children and pets?",
      a4: "Yes! We use only eco-friendly, non-toxic, biodegradable cleaning products that are completely safe for children, pets, and the environment.",
      q5: "Do you offer same-day service?",
      a5: "Yes, we offer same-day service subject to availability. Please WhatsApp or call us to check availability for your preferred date and time.",
      q6: "What types of sofas do you clean?",
      a6: "We provide expert sofa cleaning and upholstery cleaning for all types — fabric, leather, velvet, microfiber, and suede sofas. Our certified technicians use German machine technology for best results.",
      q7: "How often should I get my sofa cleaned?",
      a7: "We recommend professional sofa cleaning every 6–12 months for regular use. If you have pets or children, every 3–6 months is ideal.",
      q8: "Do you clean mattresses?",
      a8: "Yes! We offer deep mattress cleaning at ₹600 per mattress. This includes steam cleaning to remove dust mites, bacteria, stains, and allergens for healthier sleep.",
      q9: "What payment methods do you accept?",
      a9: "We accept cash, UPI (GPay, PhonePe, Paytm), and bank transfer. Payment is collected after the service is completed.",
      q10: "Do you provide a satisfaction guarantee?",
      a10: "Yes! We offer a 100% satisfaction guarantee. If you are not happy with our service, we will re-clean at no extra charge.",
      stillHaveQuestions: "Still have questions? We are here to help!",
      callUs: "📞 Call Us",
      whatsappUs: "💬 WhatsApp Us",
      badge: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our cleaning services",
    },
    footer: {
      companyName: "Magical Service",
      companyDescription:
        "Premium sofa and upholstery cleaning services across Ahmedabad and Gandhinagar.",
      quickLinks: "Quick Links",
      home: "Home",
      services: "Services",
      whyChooseUs: "Why Choose Us",
      bookAppointment: "Book Appointment",
      areasServed: "Areas Served",
      reviewsLink: "Reviews",
      faqLink: "FAQ",
      ourServices: "Our Services",
      sofaCleaning: "Sofa Cleaning",
      carpetCleaning: "Carpet Cleaning",
      mattressCleaning: "Mattress Cleaning",
      chairCleaning: "Chair Cleaning",
      acService: "AC Water Jet Service",
      contactUs: "Contact Us",
      servingAreas: "Ahmedabad & Gandhinagar",
      workingHours: "Mon–Sun: 8:00 AM – 8:00 PM",
      callNow: "Call Now",
      whatsAppUs: "WhatsApp Us",
      copyright: "All rights reserved.",
      builtWith: "Built with",
      tagline:
        "Ahmedabad's #1 Sofa Cleaning & Upholstery Cleaning Service — 265+ 5-Star Google Reviews",
      contact: "Contact",
      hours: "Mon–Sun: 8AM–8PM",
      rights: "All rights reserved.",
    },
    language: {
      english: "English",
      hindi: "Hindi",
      gujarati: "Gujarati",
    },
    floating: {
      whatsapp: "Chat on WhatsApp",
      call: "Call Us",
    },
  },

  hi: {
    header: {
      logoText: "Magical Service",
      logoSubtext: "प्रीमियम क्लीनिंग",
      navHome: "होम",
      navServices: "सेवाएं",
      navWhyChooseUs: "हमें क्यों",
      navBookNow: "बुक करें",
      navAreas: "क्षेत्र",
      navReviews: "समीक्षाएं",
      navFAQ: "FAQ",
      callNow: "अभी कॉल करें",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      bookNow: "बुक करें",
    },
    hero: {
      title: "अहमदाबाद में विशेषज्ञ सोफा और अपहोल्स्ट्री क्लीनिंग",
      subtitle: "₹90/फीट पर प्रोफेशनल डीप क्लीनिंग",
      description:
        "अहमदाबाद में निकोल, नरोडा, बापूनगर और आसपास के क्षेत्रों में प्रीमियम सोफा क्लीनिंग सेवाएं।",
      chipHygienic: "स्वच्छ और सुरक्षित",
      chipQuickDry: "जल्दी सूखे (~2 घंटे)",
      chipThorough: "पूरी तरह साफ",
      chipReviews: "265+ समीक्षाएं",
      ctaCall: "अभी कॉल करें",
      ctaWhatsApp: "WhatsApp करें",
      sameDayService: "उसी दिन सेवा",
      whyChooseMagicalHeading: "Magical Service क्यों चुनें?",
      whyChooseMagicalPoint1: "जर्मन मशीन तकनीक से डीप क्लीनिंग, Quick Dry (~2 घंटे)",
      whyChooseMagicalPoint2:
        "बच्चों और पालतू जानवरों के लिए सुरक्षित इको-फ्रेंडली रसायन",
      whyChooseMagicalPoint3:
        "निकोल, नरोडा, बापूनगर और सभी अहमदाबाद क्षेत्रों में प्रमाणित विशेषज्ञ",
      badge: "प्रीमियम क्लीनिंग सेवाएं",
      title1: "विशेषज्ञ सोफा और",
      title2: "अपहोल्स्ट्री क्लीनिंग",
      title3: "अहमदाबाद में",
      reviews: "समीक्षाएं",
      experience: "5+ साल का अनुभव",
      guarantee: "100% संतुष्टि",
      callNow: "अभी कॉल करें",
      bookNow: "अपॉइंटमेंट बुक करें",
      feature1: "✓ उसी दिन सेवा",
      feature2: "✓ इको-फ्रेंडली उत्पाद",
      feature3: "✓ प्रशिक्षित पेशेवर",
      feature4: "✓ किफायती मूल्य",
      beforeAfter: "पहले और बाद",
      transformation: "अद्भुत परिवर्तन",
    },
    serviceCoverage: {
      chipText: "सेवा कवरेज",
      heading: "अहमदाबाद और गांधीनगर में सेवा",
      caption:
        "नाना चिलोडा, ओढव और अहमदाबाद-गांधीनगर के 100+ क्षेत्रों में प्रीमियम सोफा क्लीनिंग।",
    },
    coverage: {
      title: "अहमदाबाद और गांधीनगर में सेवा",
      desc: "पूर्व में निकोल और नरोडा से पश्चिम में बोपल तक, उत्तर-पूर्व में नाना चिलोडा और ओढव से दक्षिण में नरोल तक — हमारी टीम हर कोने को कवर करती है।",
      cta: "अपने क्षेत्र में बुक करें",
    },
    services: {
      heading: "हमारी क्लीनिंग सेवाएं",
      description:
        "कठवाड़ा, कृष्णा नगर, कुबेर नगर और अहमदाबाद के सभी प्रमुख क्षेत्रों में विशेषज्ञ क्लीनिंग सेवाएं।",
      popular: "लोकप्रिय",
      startingAt: "शुरुआत",
      sameDayAvailable: "उसी दिन उपलब्ध",
      availableServices: "उपलब्ध सेवाएं",
      sofaTitle: "सोफा क्लीनिंग",
      sofaDescription:
        "सभी प्रकार के सोफे के लिए प्रोफेशनल डीप क्लीनिंग। जर्मन मशीन तकनीक से दाग, गंध और एलर्जेन हटाएं।",
      carpetTitle: "कार्पेट क्लीनिंग",
      carpetDescription:
        "मूल सुंदरता बहाल करने के लिए विशेषज्ञ कार्पेट क्लीनिंग। गहरी गंदगी, दाग और गंध प्रभावी ढंग से हटाएं।",
      chairTitle: "कुर्सी क्लीनिंग",
      chairDescription:
        "प्रोफेशनल ऑफिस और डाइनिंग चेयर क्लीनिंग। सभी फैब्रिक प्रकारों के लिए सुरक्षित।",
      mattressTitle: "मैट्रेस क्लीनिंग",
      mattressDescription:
        "स्वस्थ नींद के लिए धूल के कण, बैक्टीरिया और एलर्जेन को खत्म करने के लिए डीप मैट्रेस सैनिटाइजेशन।",
      acTitle: "AC वाटर जेट सर्विस",
      acDescription:
        "वाटर जेट तकनीक से प्रोफेशनल AC डीप क्लीनिंग। वायु गुणवत्ता और AC दक्षता में सुधार।",
      acWaterJet: "वाटर जेट तकनीक",
      badge: "हमारी सेवाएं",
      title: "प्रोफेशनल क्लीनिंग सेवाएं",
      subtitle:
        "अहमदाबाद में आपके घर और ऑफिस के लिए विशेषज्ञ अपहोल्स्ट्री और डीप क्लीनिंग सेवाएं",
      bookNow: "अभी बुक करें",
      bookAny: "कोई भी सेवा बुक करें",
    },
    calculator: {
      title: "मूल्य कैलकुलेटर",
      description: "अपनी क्लीनिंग लागत तुरंत अनुमान लगाएं",
      sizeLabel: "सोफा का आकार (फीट में)",
      sizeSmall: "छोटा",
      sizeMedium: "मध्यम",
      sizeLarge: "बड़ा",
      pricePerFoot: "प्रति फीट मूल्य",
      estimatedTotal: "अनुमानित कुल",
      ctaCall: "बुक करने के लिए कॉल करें",
      ctaWhatsApp: "WhatsApp पर बुक करें",
      disclaimer: "* अंतिम मूल्य स्थिति और फैब्रिक प्रकार के आधार पर भिन्न हो सकता है",
      badge: "मूल्य कैलकुलेटर",
      subtitle: "अपनी क्लीनिंग सेवा के लिए तुरंत मूल्य अनुमान प्राप्त करें",
      selectService: "सेवा चुनें",
      quantity: "मात्रा",
      estimate: "अनुमानित मूल्य",
      getQuote: "WhatsApp पर कोटेशन पाएं",
      selectArea: "अपना क्षेत्र चुनें",
      areaLabel: "आपका क्षेत्र",
      perUnit: "प्रति यूनिट",
      mattressNote: "मैट्रेस क्लीनिंग – ₹600 प्रति मैट्रेस (डीप स्टीम क्लीनिंग)",
    },
    whyChooseUs: {
      heading: "Magical Service क्यों चुनें?",
      description:
        "हम हर बार उत्कृष्ट परिणाम देने के लिए विशेषज्ञता, इको-फ्रेंडली उत्पाद और असाधारण सेवा को जोड़ते हैं।",
      ecoFriendlyTitle: "इको-फ्रेंडली उत्पाद",
      ecoFriendlyDescription:
        "हम केवल गैर-विषाक्त, बायोडिग्रेडेबल क्लीनिंग उत्पादों का उपयोग करते हैं जो बच्चों, पालतू जानवरों और पर्यावरण के लिए सुरक्षित हैं।",
      germanMachinesTitle: "जर्मन मशीन तकनीक",
      germanMachinesDescription:
        "उन्नत जर्मन क्लीनिंग मशीनें Quick Dry तकनीक (~2 घंटे सुखाने का समय) के साथ डीप क्लीनिंग सुनिश्चित करती हैं।",
      goldStandardTitle: "गोल्ड स्टैंडर्ड गुणवत्ता",
      goldStandardDescription:
        "हमारी गोल्ड स्टैंडर्ड क्लीनिंग प्रक्रिया सुनिश्चित करती है कि हर फाइबर को परफेक्ट तरीके से साफ, सैनिटाइज और ताजा किया जाए।",
      certifiedExpertsTitle: "प्रमाणित विशेषज्ञ",
      certifiedExpertsDescription:
        "हमारी टीम सभी फैब्रिक प्रकारों के लिए उन्नत अपहोल्स्ट्री क्लीनिंग तकनीकों में प्रशिक्षित और प्रमाणित है।",
      badge: "हमें क्यों चुनें",
      title: "Magical Service का अंतर",
      subtitle:
        "हम हर बार उत्कृष्ट परिणाम देने के लिए विशेषज्ञता, इको-फ्रेंडली उत्पाद और असाधारण सेवा को जोड़ते हैं।",
      certifiedTitle: "प्रमाणित पेशेवर",
      certifiedDesc:
        "हमारी टीम सभी फैब्रिक प्रकारों के लिए उन्नत अपहोल्स्ट्री क्लीनिंग तकनीकों में प्रशिक्षित और प्रमाणित है।",
      sameDayTitle: "उसी दिन सेवा",
      sameDayDesc:
        "तत्काल क्लीनिंग चाहिए? हम उपलब्धता के अधीन अहमदाबाद में उसी दिन सेवा प्रदान करते हैं।",
      ecoTitle: "इको-फ्रेंडली उत्पाद",
      ecoDesc: "हम केवल गैर-विषाक्त, बायोडिग्रेडेबल क्लीनिंग उत्पादों का उपयोग करते हैं।",
      experiencedTitle: "5+ साल का अनुभव",
      experiencedDesc:
        "5 साल से अधिक के अनुभव के साथ, हमने अहमदाबाद में हजारों सोफे, मैट्रेस और कार्पेट साफ किए हैं।",
      satisfactionTitle: "100% संतुष्टि",
      satisfactionDesc:
        "हम आपकी संतुष्टि की गारंटी देते हैं। यदि आप हमारी सेवा से खुश नहीं हैं, तो हम बिना किसी अतिरिक्त शुल्क के दोबारा साफ करेंगे।",
      coverageTitle: "व्यापक कवरेज",
      coverageDesc:
        "हम निकोल, नरोडा, बापूनगर, ओढव और अधिक सहित अहमदाबाद और गांधीनगर के सभी प्रमुख क्षेत्रों में सेवा देते हैं।",
      statCustomers: "खुश ग्राहक",
      statReviews: "Google समीक्षाएं",
      statYears: "साल का अनुभव",
      statSatisfaction: "संतुष्टि दर",
    },
    appointment: {
      heading: "अपना अपॉइंटमेंट बुक करें",
      description: "आज अपनी क्लीनिंग सेवा शेड्यूल करें। उसी दिन अपॉइंटमेंट उपलब्ध।",
      cardTitle: "क्लीनिंग सेवा बुक करें",
      cardDescription:
        "अपना विवरण भरें और हम 30 मिनट के भीतर WhatsApp पर पुष्टि करेंगे।",
      nameLabel: "आपका नाम",
      namePlaceholder: "अपना पूरा नाम दर्ज करें",
      phoneLabel: "फोन नंबर",
      phonePlaceholder: "10 अंकों का मोबाइल नंबर",
      serviceLabel: "आवश्यक सेवा",
      servicePlaceholder: "एक सेवा चुनें",
      areaLabel: "आपका क्षेत्र",
      areaPlaceholder: "जैसे निकोल, नरोडा, बापूनगर",
      dateLabel: "पसंदीदा तारीख",
      timeLabel: "पसंदीदा समय",
      notesLabel: "अतिरिक्त नोट्स",
      notesPlaceholder: "कोई विशेष आवश्यकताएं...",
      submitButton: "WhatsApp पर बुक करें",
      successMessage: "बुकिंग भेजी गई! हम जल्द पुष्टि करेंगे।",
      errorNameRequired: "नाम आवश्यक है",
      errorPhoneRequired: "फोन नंबर आवश्यक है",
      errorPhoneInvalid: "कृपया एक वैध 10 अंकों का मोबाइल नंबर दर्ज करें",
      errorServiceRequired: "कृपया एक सेवा चुनें",
      errorAreaRequired: "क्षेत्र आवश्यक है",
      errorDateRequired: "कृपया एक तारीख चुनें",
      errorTimeRequired: "कृपया एक समय स्लॉट चुनें",
      badge: "अपॉइंटमेंट बुक करें",
      title: "अपनी क्लीनिंग शेड्यूल करें",
      subtitle: "नीचे विवरण भरें और हम WhatsApp पर आपके अपॉइंटमेंट की पुष्टि करेंगे",
      name: "आपका नाम",
      phone: "फोन नंबर",
      service: "आवश्यक सेवा",
      selectService: "एक सेवा चुनें",
      address: "पता / क्षेत्र",
      addressPlaceholder: "अहमदाबाद में आपका क्षेत्र",
      date: "तारीख",
      time: "समय",
      notes: "अतिरिक्त नोट्स",
      notesPlaceholderAlt: "कोई विशेष आवश्यकताएं या विवरण...",
      submit: "WhatsApp पर बुक करें",
      disclaimer: "हम 30 मिनट के भीतर WhatsApp पर आपके अपॉइंटमेंट की पुष्टि करेंगे",
    },
    serviceOptions: {
      sofaCleaning: "सोफा क्लीनिंग",
      carpetCleaning: "कार्पेट क्लीनिंग",
      chairCleaning: "ऑफिस चेयर क्लीनिंग",
      mattressCleaning: "मैट्रेस क्लीनिंग",
      acWaterJet: "AC वाटर जेट सर्विस",
    },
    timeSlots: {
      morning1: "8:00 AM - 10:00 AM",
      morning2: "10:00 AM - 12:00 PM",
      afternoon1: "12:00 PM - 2:00 PM",
      afternoon2: "2:00 PM - 4:00 PM",
      evening1: "4:00 PM - 6:00 PM",
      evening2: "6:00 PM - 8:00 PM",
    },
    livePhotos: {
      heading: "हमारा काम",
      description: "अहमदाबाद में हमारी क्लीनिंग जॉब्स की वास्तविक तस्वीरें।",
      sofaBeforeAfter: "पहले और बाद",
      officeChairCleaning: "ऑफिस चेयर",
      badge: "लाइव फोटो",
      title: "हमारा काम",
      subtitle:
        "अहमदाबाद में हमारी क्लीनिंग जॉब्स की वास्तविक तस्वीरें। हमारे काम की गुणवत्ता खुद देखें।",
    },
    areasServed: {
      heading: "अहमदाबाद में हम जहां सेवा देते हैं",
      description:
        "निकोल, नरोडा, बापूनगर, हंसपुरा, ओढव और अहमदाबाद-गांधीनगर के 100+ इलाकों में व्यापक सोफा क्लीनिंग कवरेज।",
      badge: "सेवा कवरेज",
      title: "अहमदाबाद में हम जहां सेवा देते हैं",
      subtitle:
        "हम अहमदाबाद और गांधीनगर में प्रोफेशनल अपहोल्स्ट्री क्लीनिंग सेवाएं प्रदान करते हैं।",
      priority: "प्राथमिक सेवा क्षेत्र",
      other: "अन्य क्षेत्र",
      notListed: "अपना क्षेत्र नहीं दिखा? हम शायद वहां भी सेवा देते हैं!",
      askUs: "अपने क्षेत्र के बारे में पूछें",
    },
    reviews: {
      badge: "ग्राहक समीक्षाएं",
      title: "हमारे ग्राहक क्या कहते हैं",
      reviewsLabel: "समीक्षाएं",
      onGoogle: "Google Business Profile पर",
      viewAll: "सभी समीक्षाएं देखें",
      writeReview: "समीक्षा लिखें",
    },
    faq: {
      heading: "अक्सर पूछे जाने वाले प्रश्न",
      description: "हमारी क्लीनिंग सेवाओं के बारे में आपको जो कुछ जानना है।",
      q1: "आप अहमदाबाद में कौन से क्षेत्रों में सेवा देते हैं?",
      a1: "हम अहमदाबाद के सभी क्षेत्रों में सेवा देते हैं जिनमें निकोल, नरोडा, बापूनगर, हंसपुरा, ओढव, कठवाड़ा, नाना चिलोडा, कृष्णा नगर, कुबेर नगर, वस्त्राल, सैटेलाइट, SG हाईवे, मणिनगर, वेजलपुर, बोपल, चांदखेड़ा और गांधीनगर के सभी सेक्टर शामिल हैं।",
      q2: "सोफा क्लीनिंग की कीमत क्या है?",
      a2: "हमारी सोफा क्लीनिंग 1-सीटर के लिए ₹499, 2-सीटर के लिए ₹799, 3-सीटर के लिए ₹999 और L-शेप के लिए ₹1499 से शुरू होती है। मैट्रेस क्लीनिंग ₹600 प्रति मैट्रेस है।",
      q3: "सोफा क्लीनिंग में कितना समय लगता है?",
      a3: "एक मानक 3-सीटर सोफे को साफ करने में लगभग 45-60 मिनट लगते हैं। हमारी Quick Dry तकनीक से सुखाने का समय लगभग 2 घंटे है।",
      q4: "क्या क्लीनिंग बच्चों और पालतू जानवरों के लिए सुरक्षित है?",
      a4: "हां! हम केवल इको-फ्रेंडली, गैर-विषाक्त, बायोडिग्रेडेबल क्लीनिंग उत्पादों का उपयोग करते हैं जो बच्चों, पालतू जानवरों और पर्यावरण के लिए पूरी तरह सुरक्षित हैं।",
      q5: "क्या आप उसी दिन सेवा प्रदान करते हैं?",
      a5: "हां, उपलब्धता के अधीन। कृपया अपनी पसंदीदा तारीख और समय के लिए उपलब्धता जांचने के लिए हमें WhatsApp या कॉल करें।",
      q6: "आप किस प्रकार के सोफे साफ करते हैं?",
      a6: "हम फैब्रिक, लेदर, वेलवेट, माइक्रोफाइबर और साबर सहित सभी प्रकार के सोफे साफ करते हैं।",
      q7: "मुझे अपना सोफा कितनी बार साफ करवाना चाहिए?",
      a7: "हम नियमित उपयोग के लिए हर 6-12 महीने में प्रोफेशनल सोफा क्लीनिंग की सलाह देते हैं।",
      q8: "क्या आप मैट्रेस साफ करते हैं?",
      a8: "हां! हम ₹600 प्रति मैट्रेस पर डीप मैट्रेस क्लीनिंग प्रदान करते हैं। इसमें धूल के कण, बैक्टीरिया, दाग और एलर्जेन हटाने के लिए स्टीम क्लीनिंग शामिल है।",
      q9: "आप कौन से भुगतान तरीके स्वीकार करते हैं?",
      a9: "हम नकद, UPI (GPay, PhonePe, Paytm) और बैंक ट्रांसफर स्वीकार करते हैं।",
      q10: "क्या आप संतुष्टि गारंटी प्रदान करते हैं?",
      a10: "हां! हम 100% संतुष्टि गारंटी प्रदान करते हैं। यदि आप हमारी सेवा से खुश नहीं हैं, तो हम बिना किसी अतिरिक्त शुल्क के दोबारा साफ करेंगे।",
      stillHaveQuestions: "अभी भी प्रश्न हैं? हम मदद के लिए यहां हैं!",
      callUs: "📞 हमें कॉल करें",
      whatsappUs: "💬 WhatsApp करें",
      badge: "FAQ",
      title: "अक्सर पूछे जाने वाले प्रश्न",
      subtitle: "हमारी क्लीनिंग सेवाओं के बारे में आपको जो कुछ जानना है",
    },
    footer: {
      companyName: "Magical Service",
      companyDescription:
        "अहमदाबाद और गांधीनगर में प्रीमियम सोफा और अपहोल्स्ट्री क्लीनिंग सेवाएं।",
      quickLinks: "त्वरित लिंक",
      home: "होम",
      services: "सेवाएं",
      whyChooseUs: "हमें क्यों चुनें",
      bookAppointment: "अपॉइंटमेंट बुक करें",
      areasServed: "सेवा क्षेत्र",
      reviewsLink: "समीक्षाएं",
      faqLink: "FAQ",
      ourServices: "हमारी सेवाएं",
      sofaCleaning: "सोफा क्लीनिंग",
      carpetCleaning: "कार्पेट क्लीनिंग",
      mattressCleaning: "मैट्रेस क्लीनिंग",
      chairCleaning: "कुर्सी क्लीनिंग",
      acService: "AC वाटर जेट सर्विस",
      contactUs: "संपर्क करें",
      servingAreas: "अहमदाबाद और गांधीनगर",
      workingHours: "सोम–रवि: सुबह 8 – शाम 8",
      callNow: "अभी कॉल करें",
      whatsAppUs: "WhatsApp करें",
      copyright: "सर्वाधिकार सुरक्षित।",
      builtWith: "के साथ बनाया गया",
      tagline: "अहमदाबाद के विश्वसनीय सोफा और अपहोल्स्ट्री क्लीनिंग विशेषज्ञ",
      contact: "संपर्क",
      hours: "सोम–रवि: 8AM–8PM",
      rights: "सर्वाधिकार सुरक्षित।",
    },
    language: {
      english: "English",
      hindi: "हिंदी",
      gujarati: "ગુજરાતી",
    },
    floating: {
      whatsapp: "WhatsApp पर चैट करें",
      call: "हमें कॉल करें",
    },
  },

  gu: {
    header: {
      logoText: "Magical Service",
      logoSubtext: "પ્રીમિયમ ક્લીનિંગ",
      navHome: "હોમ",
      navServices: "સેવાઓ",
      navWhyChooseUs: "અમને કેમ",
      navBookNow: "બુક કરો",
      navAreas: "વિસ્તારો",
      navReviews: "સમીક્ષાઓ",
      navFAQ: "FAQ",
      callNow: "હવે કૉલ કરો",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      bookNow: "બુક કરો",
    },
    hero: {
      title: "અમદાવાદમાં નિષ્ણાત સોફા અને અપહોલ્સ્ટ્રી ક્લીનિંગ",
      subtitle: "₹90/ફૂટ પર પ્રોફેશનલ ડીપ ક્લીનિંગ",
      description:
        "અમદાવાદમાં નિકોલ, નરોડા, બાપુનગર અને આસપાસના વિસ્તારોમાં પ્રીમિયમ સોફા ક્લીનિંગ સેવાઓ.",
      chipHygienic: "સ્વચ્છ અને સુરક્ષિત",
      chipQuickDry: "ઝડપી સૂકવણી (~2 કલાક)",
      chipThorough: "સંપૂર્ણ સ્વચ્છ",
      chipReviews: "265+ સમીક્ષાઓ",
      ctaCall: "હવે કૉલ કરો",
      ctaWhatsApp: "WhatsApp કરો",
      sameDayService: "તે જ દિવસે સેવા",
      whyChooseMagicalHeading: "Magical Service કેમ પસંદ કરો?",
      whyChooseMagicalPoint1:
        "જર્મન મશીન ટેક્નોલોજી ડીપ ક્લીનિંગ સાથે Quick Dry (~2 કલાક)",
      whyChooseMagicalPoint2:
        "બાળકો અને પાળતુ પ્રાણીઓ માટે સુરક્ષિત ઇકો-ફ્રેન્ડલી રસાયણો",
      whyChooseMagicalPoint3:
        "નિકોલ, નરોડા, બાપુનગર અને તમામ અમદાવાદ વિસ્તારોમાં પ્રમાણિત નિષ્ણાતો",
      badge: "પ્રીમિયમ ક્લીનિંગ સેવાઓ",
      title1: "નિષ્ણાત સોફા અને",
      title2: "અપહોલ્સ્ટ્રી ક્લીનિંગ",
      title3: "અમદાવાદમાં",
      reviews: "સમીક્ષાઓ",
      experience: "5+ વર્ષનો અનુભવ",
      guarantee: "100% સંતોષ",
      callNow: "હવે કૉલ કરો",
      bookNow: "એપોઇન્ટમેન્ટ બુક કરો",
      feature1: "✓ તે જ દિવસે સેવા",
      feature2: "✓ ઇકો-ફ્રેન્ડલી ઉત્પાદનો",
      feature3: "✓ પ્રશિક્ષિત વ્યાવસાયિકો",
      feature4: "✓ પોષણક્ષમ ભાવ",
      beforeAfter: "પહેલા અને પછી",
      transformation: "અદ્ભુત પરિવર્તન",
    },
    serviceCoverage: {
      chipText: "સેવા કવરેજ",
      heading: "અમદાવાદ અને ગાંધીનગરમાં સેવા",
      caption:
        "નાના ચિલોડા, ઓઢવ અને અમદાવાદ-ગાંધીનગરના 100+ વિસ્તારોમાં પ્રીમિયમ સોફા ક્લીનિંગ.",
    },
    coverage: {
      title: "અમદાવાદ અને ગાંધીનગરમાં સેવા",
      desc: "પૂર્વમાં નિકોલ અને નરોડાથી પશ્ચિમમાં બોપલ સુધી, ઉત્તર-પૂર્વમાં નાના ચિલોડા અને ઓઢવથી દક્ષિણમાં નરોળ સુધી — અમારી ટીમ દરેક ખૂણો આવરી લે છે.",
      cta: "તમારા વિસ્તારમાં બુક કરો",
    },
    services: {
      heading: "અમારી ક્લીનિંગ સેવાઓ",
      description:
        "કઠવાડા, કૃષ્ણા નગર, કુબેર નગર અને અમદાવાદના તમામ મુખ્ય વિસ્તારોમાં નિષ્ણાત ક્લીનિંગ સેવાઓ.",
      popular: "લોકપ્રિય",
      startingAt: "શરૂઆત",
      sameDayAvailable: "તે જ દિવસે ઉપલબ્ધ",
      availableServices: "ઉપલબ્ધ સેવાઓ",
      sofaTitle: "સોફા ક્લીનિંગ",
      sofaDescription:
        "તમામ પ્રકારના સોફા માટે પ્રોફેશનલ ડીપ ક્લીનિંગ. જર્મન મશીન ટેક્નોલોજી વડે ડાઘ, ગંધ અને એલર્જન દૂર કરો.",
      carpetTitle: "કાર્પેટ ક્લીનિંગ",
      carpetDescription: "મૂળ સૌંદર્ય પુનઃસ્થાપિત કરવા માટે નિષ્ણાત કાર્પેટ ક્લીનિંગ.",
      chairTitle: "ખુરશી ક્લીનિંગ",
      chairDescription:
        "પ્રોફેશનલ ઓફિસ અને ડાઇનિંગ ચેર ક્લીનિંગ. ઝડપી સૂકવણી ટેક્નોલોજી સાથે.",
      mattressTitle: "મેટ્રેસ ક્લીનિંગ",
      mattressDescription:
        "સ્વસ્થ ઊંઘ માટે ધૂળના જીવાત, બેક્ટેરિયા અને એલર્જન દૂર કરવા ડીપ મેટ્રેસ સેનિટાઇઝેશન.",
      acTitle: "AC વૉટર જેટ સર્વિસ",
      acDescription: "વૉટર જેટ ટેક્નોલોજી સાથે પ્રોફેશનલ AC ડીપ ક્લીનિંગ.",
      acWaterJet: "વૉટર જેટ ટેક્નોલોજી",
      badge: "અમારી સેવાઓ",
      title: "પ્રોફેશનલ ક્લીનિંગ સેવાઓ",
      subtitle:
        "અમદાવાદમાં તમારા ઘર અને ઓફિસ માટે નિષ્ણાત અપહોલ્સ્ટ્રી અને ડીપ ક્લીનિંગ સેવાઓ",
      bookNow: "હવે બુક કરો",
      bookAny: "કોઈ પણ સેવા બુક કરો",
    },
    calculator: {
      title: "ભાવ કેલ્ક્યુલેટર",
      description: "તમારી ક્લીનિંગ કિંમત તાત્કાલિક અંદાજ કરો",
      sizeLabel: "સોફાનું કદ (ફૂટમાં)",
      sizeSmall: "નાનો",
      sizeMedium: "મધ્યમ",
      sizeLarge: "મોટો",
      pricePerFoot: "પ્રતિ ફૂટ ભાવ",
      estimatedTotal: "અંદાજિત કુલ",
      ctaCall: "બુક કરવા કૉલ કરો",
      ctaWhatsApp: "WhatsApp પર બુક કરો",
      disclaimer: "* અંતિમ ભાવ સ્થિતિ અને ફેબ્રિક પ્રકારના આધારે બદલાઈ શકે છે",
      badge: "ભાવ કેલ્ક્યુલેટર",
      subtitle: "તમારી ક્લીનિંગ સેવા માટે તાત્કાલિક ભાવ અંદાજ મેળવો",
      selectService: "સેવા પસંદ કરો",
      quantity: "જથ્થો",
      estimate: "અંદાજિત ભાવ",
      getQuote: "WhatsApp પર કોટેશન મેળવો",
      selectArea: "તમારો વિસ્તાર પસંદ કરો",
      areaLabel: "તમારો વિસ્તાર",
      perUnit: "પ્રતિ યુનિટ",
      mattressNote: "મેટ્રેસ ક્લીનિંગ – ₹600 પ્રતિ મેટ્રેસ (ડીપ સ્ટીમ ક્લીનિંગ)",
    },
    whyChooseUs: {
      heading: "Magical Service કેમ પસંદ કરો?",
      description:
        "અમે દર વખતે ઉત્કૃષ્ટ પરિણામ આપવા માટે નિષ્ણાત, ઇકો-ફ્રેન્ડલી ઉત્પાદનો અને અસાધારણ સેવાને જોડીએ છીએ.",
      ecoFriendlyTitle: "ઇકો-ફ્રેન્ડલી ઉત્પાદનો",
      ecoFriendlyDescription:
        "અમે ફક્ત બિન-ઝેરી, બાયોડિગ્રેડેબલ ક્લીનિંગ ઉત્પાદનોનો ઉપયોગ કરીએ છીએ જે બાળકો, પાળતુ પ્રાણીઓ અને પર્યાવરણ માટે સુરક્ષિત છે.",
      germanMachinesTitle: "જર્મન મશીન ટેક્નોલોજી",
      germanMachinesDescription:
        "અદ્યતન જર્મન ક્લીનિંગ મશીનો Quick Dry ટેક્નોલોજી (~2 કલાક સૂકવવાનો સમય) સાથે ડીપ ક્લીનિંગ સુનિશ્ચિત કરે છે.",
      goldStandardTitle: "ગોલ્ડ સ્ટાન્ડર્ડ ગુણવત્તા",
      goldStandardDescription:
        "અમારી ગોલ્ડ સ્ટાન્ડર્ડ ક્લીનિંગ પ્રક્રિયા સુનિશ્ચિત કરે છે કે દરેક ફાઇબર સ્વચ્છ, સેનિટાઇઝ અને તાજો થાય.",
      certifiedExpertsTitle: "પ્રમાણિત નિષ્ણાતો",
      certifiedExpertsDescription:
        "અમારી ટીમ તમામ ફેબ્રિક પ્રકારો માટે અદ્યતન અપહોલ્સ્ટ્રી ક્લીનિંગ તકનીકોમાં પ્રશિક્ષિત અને પ્રમાણિત છે.",
      badge: "અમને કેમ પસંદ કરો",
      title: "Magical Service નો તફાવત",
      subtitle:
        "અમે દર વખતે ઉત્કૃષ્ટ પરિણામ આપવા માટે નિષ્ણાત, ઇકો-ફ્રેન્ડલી ઉત્પાદનો અને અસાધારણ સેવાને જોડીએ છીએ.",
      certifiedTitle: "પ્રમાણિત વ્યાવસાયિકો",
      certifiedDesc:
        "અમારી ટીમ તમામ ફેબ્રિક પ્રકારો માટે અદ્યતન અપહોલ્સ્ટ્રી ક્લીનિંગ તકનીકોમાં પ્રશિક્ષિત અને પ્રમાણિત છે.",
      sameDayTitle: "તે જ દિવસે સેવા",
      sameDayDesc:
        "તાત્કાલિક ક્લીનિંગ જોઈએ? અમે ઉપલબ્ધતાને આધીન અમદાવાદમાં તે જ દિવસે સેવા ઓફર કરીએ છીએ.",
      ecoTitle: "ઇકો-ફ્રેન્ડલી ઉત્પાદનો",
      ecoDesc: "અમે ફક્ત બિન-ઝેરી, બાયોડિગ્રેડેબલ ક્લીનિંગ ઉત્પાદનોનો ઉપયોગ કરીએ છીએ.",
      experiencedTitle: "5+ વર્ષનો અનુભવ",
      experiencedDesc:
        "5 વર્ષથી વધુ અનુભવ સાથે, અમે અમદાવાદમાં હજારો સોફા, મેટ્રેસ અને કાર્પેટ સ્વચ્છ કર્યા છે.",
      satisfactionTitle: "100% સંતોષ",
      satisfactionDesc:
        "અમે તમારા સંતોષની ગેરંટી આપીએ છીએ. જો તમે અમારી સેવાથી ખુશ ન હો, તો અમે કોઈ વધારાના ચાર્જ વિના ફરીથી સ્વચ્છ કરીશું.",
      coverageTitle: "વ્યાપક કવરેજ",
      coverageDesc:
        "અમે નિકોલ, નરોડા, બાપુનગર, ઓઢવ અને વધુ સહિત અમદાવાદ અને ગાંધીનગરના તમામ મુખ્ય વિસ્તારોમાં સેવા આપીએ છીએ.",
      statCustomers: "ખુશ ગ્રાહકો",
      statReviews: "Google સમીક્ષાઓ",
      statYears: "વર્ષનો અનુભવ",
      statSatisfaction: "સંતોષ દર",
    },
    appointment: {
      heading: "તમારી એપોઇન્ટમેન્ટ બુક કરો",
      description: "આજે તમારી ક્લીનિંગ સેવા શેડ્યૂલ કરો. તે જ દિવસે એપોઇન્ટમેન્ટ ઉપલબ્ધ.",
      cardTitle: "ક્લીનિંગ સેવા બુક કરો",
      cardDescription:
        "તમારી વિગતો ભરો અને અમે 30 મિનિટ અંદર WhatsApp પર પુષ્ટિ કરીશું.",
      nameLabel: "તમારું નામ",
      namePlaceholder: "તમારું પૂરું નામ દાખલ કરો",
      phoneLabel: "ફોન નંબર",
      phonePlaceholder: "10 અંકનો મોબાઇલ નંબર",
      serviceLabel: "જરૂરી સેવા",
      servicePlaceholder: "એક સેવા પસંદ કરો",
      areaLabel: "તમારો વિસ્તાર",
      areaPlaceholder: "દા.ત. નિકોલ, નરોડા, બાપુનગર",
      dateLabel: "પ્રાધાન્ય તારીખ",
      timeLabel: "પ્રાધાન્ય સમય",
      notesLabel: "વધારાની નોંધ",
      notesPlaceholder: "કોઈ ખાસ જરૂરિયાતો...",
      submitButton: "WhatsApp પર બુક કરો",
      successMessage: "બુકિંગ મોકલ્યું! અમે ટૂંક સમયમાં પુષ્ટિ કરીશું.",
      errorNameRequired: "નામ જરૂરી છે",
      errorPhoneRequired: "ફોન નંબર જરૂરી છે",
      errorPhoneInvalid: "કૃપા કરીને માન્ય 10 અંકનો મોબાઇલ નંબર દાખલ કરો",
      errorServiceRequired: "કૃપા કરીને એક સેવા પસંદ કરો",
      errorAreaRequired: "વિસ્તાર જરૂરી છે",
      errorDateRequired: "કૃપા કરીને એક તારીખ પસંદ કરો",
      errorTimeRequired: "કૃપા કરીને એક સમય સ્લૉટ પસંદ કરો",
      badge: "એપોઇન્ટમેન્ટ બુક કરો",
      title: "તમારી ક્લીનિંગ શેડ્યૂલ કરો",
      subtitle: "નીચે વિગતો ભરો અને અમે WhatsApp પર તમારી એપોઇન્ટમેન્ટ પુષ્ટિ કરીશું",
      name: "તમારું નામ",
      phone: "ફોન નંબર",
      service: "જરૂરી સેવા",
      selectService: "એક સેવા પસંદ કરો",
      address: "સરનામું / વિસ્તાર",
      addressPlaceholder: "અમદાવાદમાં તમારો વિસ્તાર",
      date: "તારીખ",
      time: "સમય",
      notes: "વધારાની નોંધ",
      notesPlaceholderAlt: "કોઈ ખાસ જરૂરિયાતો અથવા વિગતો...",
      submit: "WhatsApp પર બુક કરો",
      disclaimer: "અમે 30 મિનિટ અંદર WhatsApp પર તમારી એપોઇન્ટમેન્ટ પુષ્ટિ કરીશું",
    },
    serviceOptions: {
      sofaCleaning: "સોફા ક્લીનિંગ",
      carpetCleaning: "કાર્પેટ ક્લીનિંગ",
      chairCleaning: "ઓફિસ ચેર ક્લીનિંગ",
      mattressCleaning: "મેટ્રેસ ક્લીનિંગ",
      acWaterJet: "AC વૉટર જેટ સર્વિસ",
    },
    timeSlots: {
      morning1: "8:00 AM - 10:00 AM",
      morning2: "10:00 AM - 12:00 PM",
      afternoon1: "12:00 PM - 2:00 PM",
      afternoon2: "2:00 PM - 4:00 PM",
      evening1: "4:00 PM - 6:00 PM",
      evening2: "6:00 PM - 8:00 PM",
    },
    livePhotos: {
      heading: "અમારું કામ",
      description: "અમદાવાદમાં અમારી ક્લીનિંગ જૉબ્સની વાસ્તવિક તસ્વીરો.",
      sofaBeforeAfter: "પહેલા અને પછી",
      officeChairCleaning: "ઓફિસ ચેર",
      badge: "લાઇવ ફોટો",
      title: "અમારું કામ",
      subtitle:
        "અમદાવાદમાં અમારી ક્લીનિંગ જૉબ્સની વાસ્તવિક તસ્વીરો. અમારા કામની ગુણવત્તા જાતે જુઓ.",
    },
    areasServed: {
      heading: "અમદાવાદમાં અમે જ્યાં સેવા આપીએ છીએ",
      description:
        "નિકોલ, નરોડા, બાપુનગર, હંસપુરા, ઓઢવ અને અમદાવાદ-ગાંધીનગરના 100+ વિસ્તારોમાં વ્યાપક સોફા ક્લીનિંગ કવરેજ.",
      badge: "સેવા કવરેજ",
      title: "અમદાવાદમાં અમે જ્યાં સેવા આપીએ છીએ",
      subtitle:
        "અમે અમદાવાદ અને ગાંધીનગરમાં પ્રોફેશનલ અપહોલ્સ્ટ્રી ક્લીનિંગ સેવાઓ પ્રદાન કરીએ છીએ.",
      priority: "પ્રાથમિક સેવા વિસ્તારો",
      other: "અન્ય વિસ્તારો",
      notListed: "તમારો વિસ્તાર દેખાતો નથી? અમે ત્યાં પણ સેવા આપીએ છીએ!",
      askUs: "તમારા વિસ્તાર વિશે પૂછો",
    },
    reviews: {
      badge: "ગ્રાહક સમીક્ષાઓ",
      title: "અમારા ગ્રાહકો શું કહે છે",
      reviewsLabel: "સમીક્ષાઓ",
      onGoogle: "Google Business Profile પર",
      viewAll: "બધી સમીક્ષાઓ જુઓ",
      writeReview: "સમીક્ષા લખો",
    },
    faq: {
      heading: "વારંવાર પૂછાતા પ્રશ્નો",
      description: "અમારી ક્લીનિંગ સેવાઓ વિશે તમારે જાણવાની જરૂર છે તે બધું.",
      q1: "તમે અમદાવાદમાં કયા વિસ્તારોમાં સેવા આપો છો?",
      a1: "અમે અમદાવાદના તમામ વિસ્તારોમાં સેવા આપીએ છીએ જેમ કે નિકોલ, નરોડા, બાપુનગર, હંસપુરા, ઓઢવ, કઠવાડા, નાના ચિલોડા, કૃષ્ણા નગર, કુબેર નગર, વસ્ત્રાલ, સેટેલાઇટ, SG હાઇવે, મણિનગર, વેજલપુર, બોપલ, ચાંદખેડા અને ગાંધીનગરના તમામ સેક્ટર.",
      q2: "સોફા ક્લીનિંગ કેટલું ખર્ચ થાય છે?",
      a2: "અમારી સોફા ક્લીનિંગ 1-સીટર માટે ₹499, 2-સીટર માટે ₹799, 3-સીટર માટે ₹999 અને L-શેપ માટે ₹1499 થી શરૂ થાય છે. મેટ્રેસ ક્લીનિંગ ₹600 પ્રતિ મેટ્રેસ છે.",
      q3: "સોફા ક્લીનિંગ કેટલો સમય લે છે?",
      a3: "એક સ્ટાન્ડર્ડ 3-સીટર સોફા સ્વચ્છ કરવામાં લગભગ 45-60 મિનિટ લાગે છે. અમારી Quick Dry ટેક્નોલોજી સાથે સૂકવવાનો સમય લગભગ 2 કલાક છે.",
      q4: "શું ક્લીનિંગ બાળકો અને પાળતુ પ્રાણીઓ માટે સુરક્ષિત છે?",
      a4: "હા! અમે ફક્ત ઇકો-ફ્રેન્ડલી, બિન-ઝેરી, બાયોડિગ્રેડેબલ ક્લીનિંગ ઉત્પાદનોનો ઉપયોગ કરીએ છીએ.",
      q5: "શું તમે તે જ દિવસે સેવા આપો છો?",
      a5: "હા, ઉપલબ્ધતાને આધીન. કૃપા કરીને ઉપલબ્ધતા તપાસવા માટે અમને WhatsApp અથવા કૉલ કરો.",
      q6: "તમે કયા પ્રકારના સોફા સ્વચ્છ કરો છો?",
      a6: "અમે ફેબ્રિક, લેધર, વેલ્વેટ, માઇક્રોફાઇબર અને સ્યૂડ સહિત તમામ પ્રકારના સોફા સ્વચ્છ કરીએ છીએ.",
      q7: "મારે મારો સોફા કેટલી વાર સ્વચ્છ કરાવવો જોઈએ?",
      a7: "અમે નિયમિત ઉપયોગ માટે દર 6-12 મહિને પ્રોફેશનલ સોફા ક્લીનિંગ ભલામણ કરીએ છીએ.",
      q8: "શું તમે મેટ્રેસ સ્વચ્છ કરો છો?",
      a8: "હા! અમે ₹600 પ્રતિ મેટ્રેસ પર ડીપ મેટ્રેસ ક્લીનિંગ ઓફર કરીએ છીએ. આમાં ધૂળના જીવાત, બેક્ટેરિયા, ડાઘ અને એલર્જન દૂર કરવા સ્ટીમ ક્લીનિંગ સામેલ છે.",
      q9: "તમે કઈ ચુકવણી પદ્ધતિઓ સ્વીકારો છો?",
      a9: "અમે રોકડ, UPI (GPay, PhonePe, Paytm) અને બેંક ટ્રાન્સફર સ્વીકારીએ છીએ.",
      q10: "શું તમે સંતોષ ગેરંટી આપો છો?",
      a10: "હા! અમે 100% સંતોષ ગેરંટી ઓફર કરીએ છીએ. જો તમે અમારી સેવાથી ખુશ ન હો, તો અમે કોઈ વધારાના ચાર્જ વિના ફરીથી સ્વચ્છ કરીશું.",
      stillHaveQuestions: "હજી પ્રશ્નો છે? અમે મદદ કરવા અહીં છીએ!",
      callUs: "📞 અમને કૉલ કરો",
      whatsappUs: "💬 WhatsApp કરો",
      badge: "FAQ",
      title: "વારંવાર પૂછાતા પ્રશ્નો",
      subtitle: "અમારી ક્લીનિંગ સેવાઓ વિશે તમારે જાણવાની જરૂર છે તે બધું",
    },
    footer: {
      companyName: "Magical Service",
      companyDescription:
        "અમદાવાદ અને ગાંધીનગરમાં પ્રીમિયમ સોફા અને અપહોલ્સ્ટ્રી ક્લીનિંગ સેવાઓ.",
      quickLinks: "ઝડપી લિંક્સ",
      home: "હોમ",
      services: "સેવાઓ",
      whyChooseUs: "અમને કેમ પસંદ કરો",
      bookAppointment: "એપોઇન્ટમેન્ટ બુક કરો",
      areasServed: "સેવા વિસ્તારો",
      reviewsLink: "સમીક્ષાઓ",
      faqLink: "FAQ",
      ourServices: "અમારી સેવાઓ",
      sofaCleaning: "સોફા ક્લીનિંગ",
      carpetCleaning: "કાર્પેટ ક્લીનિંગ",
      mattressCleaning: "મેટ્રેસ ક્લીનિંગ",
      chairCleaning: "ખુરશી ક્લીનિંગ",
      acService: "AC વૉટર જેટ સર્વિસ",
      contactUs: "સંપર્ક કરો",
      servingAreas: "અમદાવાદ અને ગાંધીનગર",
      workingHours: "સોમ–રવિ: સવારે 8 – સાંજે 8",
      callNow: "હવે કૉલ કરો",
      whatsAppUs: "WhatsApp કરો",
      copyright: "તમામ અધિકારો સુરક્ષિત.",
      builtWith: "સાથે બનાવ્યું",
      tagline: "અમદાવાદના વિશ્વસનીય સોફા અને અપહોલ્સ્ટ્રી ક્લીનિંગ નિષ્ણાતો",
      contact: "સંપર્ક",
      hours: "સોમ–રવિ: 8AM–8PM",
      rights: "તમામ અધિકારો સુરક્ષિત.",
    },
    language: {
      english: "English",
      hindi: "हिंदी",
      gujarati: "ગુજરાતી",
    },
    floating: {
      whatsapp: "WhatsApp પર ચેટ કરો",
      call: "અમને કૉલ કરો",
    },
  },
};
