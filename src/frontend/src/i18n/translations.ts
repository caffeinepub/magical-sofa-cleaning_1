export type Locale = 'en' | 'hi' | 'gu';

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
  };
  // Service Coverage Banner
  serviceCoverage: {
    chipText: string;
    heading: string;
    caption: string;
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
  };
  // Appointment Form
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
    timePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitButton: string;
    submitting: string;
    disclaimer: string;
    errorNameRequired: string;
    errorPhoneRequired: string;
    errorPhoneInvalid: string;
    errorServiceRequired: string;
    errorAreaRequired: string;
    errorDateRequired: string;
    errorTimeRequired: string;
  };
  // Live Photos
  livePhotos: {
    heading: string;
    description: string;
    sofaBeforeAfter: string;
    officeChairCleaning: string;
  };
  // Areas Served
  areas: {
    heading: string;
    description: string;
    ahmedabad: string;
    gandhinagar: string;
    notListed: string;
    ctaText: string;
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
  };
  // Google Reviews
  reviews: {
    heading: string;
    description: string;
    ratingText: string;
    review1: string;
    review1Author: string;
    review2: string;
    review2Author: string;
    review3: string;
    review3Author: string;
    ctaButton: string;
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
  };
  // Floating Buttons
  floating: {
    whatsappLabel: string;
    callLabel: string;
  };
  // Service Options (for appointment form)
  serviceOptions: {
    sofaCleaning: string;
    carpetCleaning: string;
    chairCleaning: string;
    mattressCleaning: string;
    acWaterJet: string;
  };
  // Time slots
  timeSlots: {
    morning1: string;
    morning2: string;
    afternoon1: string;
    afternoon2: string;
    evening1: string;
    evening2: string;
  };
  // Language selector
  language: {
    label: string;
    english: string;
    hindi: string;
    gujarati: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    header: {
      logoText: 'MAGICAL',
      logoSubtext: 'Professional Cleaning',
      navHome: 'Home',
      navServices: 'Services',
      navWhyChooseUs: 'Why Choose Us',
      navBookNow: 'Book Now',
      navAreas: 'Areas',
      navReviews: 'Reviews',
      navFAQ: 'FAQ',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
    },
    hero: {
      title: 'Best Sofa Cleaning Services in Ahmedabad',
      subtitle: 'Professional Sofa, Carpet, Chair, Mattress Cleaning & AC Water Jet Service',
      description: 'We provide expert cleaning services at just ₹90/ft with same-day availability. Trusted by 210+ customers with 5-star reviews, we serve all areas including Nikol, Naroda, Satellite, and SG Highway across Ahmedabad and Gandhinagar.',
      chipHygienic: 'Hygienic & Sanitized',
      chipQuickDry: 'Dries in ~2 Hours',
      chipThorough: 'Thorough Cleaning',
      chipReviews: '210+ Reviews · 5-Star',
      ctaCall: 'Call Now: +91 80002 62644',
      ctaWhatsApp: 'Book via WhatsApp',
      sameDayService: 'Same-Day Service Available',
      whyChooseMagicalHeading: 'Why Choose Magical Service?',
      whyChooseMagicalPoint1: 'Deep Cleaning & Sanitization for a germ-free home.',
      whyChooseMagicalPoint2: 'Quick Dry Technology: Dry in just ~2 hours.',
      whyChooseMagicalPoint3: 'Affordable Rates with guaranteed professional results.',
    },
    serviceCoverage: {
      chipText: 'Service Coverage Areas',
      heading: 'We Serve Across Ahmedabad & Gandhi Nagar',
      caption: 'Comprehensive service coverage across Ahmedabad including Nikol, Naroda, Bapunagar, Vastral, Kuber Nagar, Nana Chiloda and Gandhi Nagar - Professional residential cleaning services for flats, bungalows, offices, and hospitals',
    },
    services: {
      heading: 'Our Premium Services in Ahmedabad',
      description: 'Professional Sofa, Carpet, Chair, Mattress Cleaning & AC Water Jet Service across Ahmedabad & Gandhinagar with affordable rates and same-day availability',
      popular: 'Popular',
      startingAt: 'Starting at',
      sameDayAvailable: 'Same-Day Service Available',
      availableServices: 'Available Services:',
      sofaTitle: 'Sofa Cleaning in Ahmedabad',
      sofaDescription: 'Professional deep shampoo cleaning for fabric, leather, and velvet sofas in Ahmedabad. We restore your furniture to like-new condition with eco-friendly products.',
      carpetTitle: 'Carpet Cleaning in Ahmedabad',
      carpetDescription: 'Transform your carpets with our advanced dry and wet cleaning technology. Our specialized treatment removes deep-seated dirt, stains, and allergens from all carpet types, leaving them fresh, vibrant, and safe for your family.',
      chairTitle: 'Office Chair Cleaning in Ahmedabad',
      chairDescription: 'Expert cleaning for office chairs, dining chairs, and all seating furniture in Ahmedabad. Deep cleaning removes stains and odors effectively.',
      mattressTitle: 'Mattress Cleaning in Ahmedabad',
      mattressDescription: 'Experience healthier sleep with our professional mattress deep cleaning and sanitization service. We eliminate dust mites, allergens, bacteria, and stubborn stains using advanced equipment and eco-friendly solutions for all mattress types.',
      acTitle: 'AC Water Jet Service in Ahmedabad',
      acDescription: 'Keep your AC running efficiently with our professional AC Water Jet Service. Deep cleaning for split and window units to improve cooling performance and air quality.',
      acWaterJet: 'Water Jet Service',
    },
    calculator: {
      title: 'Sofa Price Calculator',
      description: 'Estimate your sofa cleaning cost instantly',
      sizeLabel: 'Sofa Size (in feet)',
      sizeSmall: 'Small',
      sizeMedium: 'Medium',
      sizeLarge: 'Large',
      pricePerFoot: 'Price per foot:',
      estimatedTotal: 'Estimated Total:',
      ctaCall: 'Call for Booking',
      ctaWhatsApp: 'WhatsApp Us',
      disclaimer: '* Final price may vary based on sofa condition and material type',
    },
    whyChooseUs: {
      heading: 'Why Choose Us',
      description: 'Experience the difference with our premium cleaning services backed by cutting-edge technology and eco-friendly practices',
      ecoFriendlyTitle: 'Eco-Friendly Chemicals',
      ecoFriendlyDescription: 'We use only environmentally safe, non-toxic cleaning solutions that are gentle on your furniture and safe for your family and pets.',
      germanMachinesTitle: 'German Machines Technology',
      germanMachinesDescription: 'Advanced German-engineered cleaning equipment ensures deep, thorough cleaning with superior results and faster drying times.',
      goldStandardTitle: 'Gold-Standard Equipment',
      goldStandardDescription: 'Premium, industry-leading tools and machinery deliver professional-grade cleaning that exceeds expectations every time.',
      certifiedExpertsTitle: 'Certified Experts',
      certifiedExpertsDescription: 'Our trained and certified professionals bring years of experience and expertise to every cleaning job, ensuring quality service.',
    },
    appointment: {
      heading: 'Book Your Appointment',
      description: 'Fill out the form below and we\'ll connect with you on WhatsApp to confirm your booking',
      cardTitle: 'Appointment Details',
      cardDescription: 'Enter your details and we\'ll reach out to you on WhatsApp',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your full name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'Enter your 10-digit mobile number',
      serviceLabel: 'Select Service',
      servicePlaceholder: 'Choose a service',
      areaLabel: 'Area/Location',
      areaPlaceholder: 'e.g., Nikol, Naroda, Satellite',
      dateLabel: 'Preferred Date',
      timeLabel: 'Preferred Time',
      timePlaceholder: 'Select time',
      notesLabel: 'Additional Notes',
      notesPlaceholder: 'Any special requirements or instructions (optional)',
      submitButton: 'Book via WhatsApp',
      submitting: 'Opening WhatsApp...',
      disclaimer: '* We\'ll confirm your appointment via WhatsApp',
      errorNameRequired: 'Name is required',
      errorPhoneRequired: 'Phone number is required',
      errorPhoneInvalid: 'Enter a valid 10-digit mobile number',
      errorServiceRequired: 'Please select a service',
      errorAreaRequired: 'Area/Location is required',
      errorDateRequired: 'Preferred date is required',
      errorTimeRequired: 'Preferred time is required',
    },
    livePhotos: {
      heading: 'Live Work Photos',
      description: 'Real photos from our professional cleaning services across Ahmedabad',
      sofaBeforeAfter: 'Sofa Cleaning (Before / After)',
      officeChairCleaning: 'Office Chair Cleaning',
    },
    areas: {
      heading: 'Areas We Serve in Ahmedabad',
      description: 'Professional sofa cleaning services in Ahmedabad, carpet, mattress, chair cleaning and AC services across all major areas in Ahmedabad & Gandhinagar',
      ahmedabad: 'Ahmedabad',
      gandhinagar: 'Gandhinagar',
      notListed: 'Don\'t see your area? We serve all of Ahmedabad & Gandhinagar including Nikol, Naroda, Bapunagar, Vastral, Kuber Nagar, and Nana Chiloda!',
      ctaText: 'Call to Confirm Service in Your Area',
    },
    faq: {
      heading: 'Frequently Asked Questions',
      description: 'Find answers to common questions about our best sofa cleaning services in Ahmedabad',
      q1: 'What areas do you serve in Ahmedabad?',
      a1: 'We provide the best sofa cleaning services across all areas of Ahmedabad including Nikol, Naroda, Bapunagar, Vastral, Kuber Nagar, Nana Chiloda, Satellite, SG Highway, Maninagar, Vastrapur, and all other localities in Ahmedabad and Gandhinagar. If your area is not listed, please call us to confirm service availability.',
      q2: 'How much does sofa cleaning cost in Ahmedabad?',
      a2: 'Our sofa cleaning service starts at just ₹90 per foot. The final price depends on the sofa size, material type (fabric, leather, or velvet), and condition. We also offer carpet cleaning at ₹15/sq ft, mattress cleaning at ₹599, office chair cleaning at ₹100-₹150, and AC water jet service at ₹499. Contact us for an accurate quote.',
      q3: 'How long does it take for the sofa to dry after cleaning?',
      a3: 'With our advanced Quick Dry Technology and German machines, your sofa will be dry in approximately 2 hours. This is much faster than traditional cleaning methods, allowing you to use your furniture the same day.',
      q4: 'Do you offer same-day service in Ahmedabad?',
      a4: 'Yes! We offer same-day service across Ahmedabad and Gandhinagar based on availability. Simply call us at +91 80002 62644 or book via WhatsApp to check same-day slot availability in your area including Nikol, Naroda, Bapunagar, Vastral, and other localities.',
      q5: 'Are your cleaning products safe for children and pets?',
      a5: 'Absolutely! We use only eco-friendly, non-toxic cleaning chemicals that are completely safe for children, pets, and the environment. Our cleaning solutions are gentle on your furniture while being tough on dirt, stains, and germs.',
      q6: 'What types of sofas can you clean?',
      a6: 'We clean all types of sofas including fabric sofas, leather sofas, velvet sofas, recliner sofas, L-shaped sofas, and sectional sofas. Our certified experts are trained to handle different materials and provide the best cleaning results for each type.',
      q7: 'How do I book an appointment?',
      a7: 'Booking is easy! You can call us directly at +91 80002 62644, send us a WhatsApp message at the same number, or fill out the appointment form on our website. We\'ll confirm your booking and preferred time slot via WhatsApp.',
      q8: 'Do you provide carpet and mattress cleaning as well?',
      a8: 'Yes! In addition to being the best sofa cleaning service in Ahmedabad, we also provide professional carpet cleaning (₹15/sq ft), mattress deep cleaning and sanitization (₹599), office chair cleaning (₹100-₹150), and AC water jet service (₹499) across all areas.',
      q9: 'What makes your service the best in Ahmedabad?',
      a9: 'We are trusted by 210+ customers with 5-star reviews. Our service stands out because of our German machines technology, eco-friendly chemicals, Quick Dry Technology (~2 hours), certified experts, affordable rates, and comprehensive coverage across Ahmedabad including Nikol, Naroda, Bapunagar, Vastral, Kuber Nagar, and Nana Chiloda.',
      q10: 'What is your working schedule?',
      a10: 'We are available Monday to Sunday from 8:00 AM to 8:00 PM. We offer flexible time slots including morning, afternoon, and evening appointments to suit your schedule. Same-day service is available based on slot availability.',
      stillHaveQuestions: 'Still have questions? We\'re here to help!',
      callUs: 'Call Us Now',
      whatsappUs: 'WhatsApp Us',
    },
    reviews: {
      heading: 'What Our Customers Say',
      description: 'Trusted by hundreds of satisfied customers across Ahmedabad & Gandhinagar',
      ratingText: '210+ Reviews · 5-Star Rating',
      review1: '"Excellent service! My sofa looks brand new after their deep cleaning. Very professional team and affordable rates."',
      review1Author: '- Rajesh P., Nikol',
      review2: '"Best carpet cleaning service in Ahmedabad! They removed all the tough stains and the carpet dried quickly. Highly recommended!"',
      review2Author: '- Priya S., Satellite',
      review3: '"Amazing mattress cleaning service! My mattress feels fresh and clean. The team was punctual and very professional."',
      review3Author: '- Amit K., Naroda',
      ctaButton: 'View All Reviews on Google',
    },
    footer: {
      companyName: 'MAGICAL SERVICE',
      companyDescription: 'Professional cleaning services in Ahmedabad & Gandhinagar. Expert sofa, carpet, mattress, chair cleaning and AC water jet services.',
      quickLinks: 'Quick Links',
      home: 'Home',
      services: 'Services',
      whyChooseUs: 'Why Choose Us',
      bookAppointment: 'Book Appointment',
      areasServed: 'Areas Served',
      reviewsLink: 'Reviews',
      faqLink: 'FAQ',
      ourServices: 'Our Services',
      sofaCleaning: 'Sofa Cleaning',
      carpetCleaning: 'Carpet Cleaning',
      mattressCleaning: 'Mattress Cleaning',
      chairCleaning: 'Chair Cleaning',
      acService: 'AC Water Jet Service',
      contactUs: 'Contact Us',
      servingAreas: 'Serving Ahmedabad & Gandhinagar',
      workingHours: 'Mon - Sun: 8:00 AM - 8:00 PM',
      callNow: 'Call Now',
      whatsAppUs: 'WhatsApp Us',
      copyright: '© 2026. Built with love using',
      builtWith: 'caffeine.ai',
    },
    floating: {
      whatsappLabel: 'WhatsApp',
      callLabel: 'Call',
    },
    serviceOptions: {
      sofaCleaning: 'Sofa Cleaning (₹90/ft)',
      carpetCleaning: 'Carpet Cleaning (₹15/sq ft)',
      chairCleaning: 'Office Chair Cleaning (₹100-₹150)',
      mattressCleaning: 'Mattress Cleaning (₹599)',
      acWaterJet: 'AC Water Jet Service (₹499)',
    },
    timeSlots: {
      morning1: '8:00 AM - 10:00 AM',
      morning2: '10:00 AM - 12:00 PM',
      afternoon1: '12:00 PM - 2:00 PM',
      afternoon2: '2:00 PM - 4:00 PM',
      evening1: '4:00 PM - 6:00 PM',
      evening2: '6:00 PM - 8:00 PM',
    },
    language: {
      label: 'Language',
      english: 'English',
      hindi: 'हिंदी',
      gujarati: 'ગુજરાતી',
    },
  },
  hi: {
    header: {
      logoText: 'मैजिकल',
      logoSubtext: 'प्रोफेशनल क्लीनिंग',
      navHome: 'होम',
      navServices: 'सेवाएं',
      navWhyChooseUs: 'हमें क्यों चुनें',
      navBookNow: 'बुक करें',
      navAreas: 'क्षेत्र',
      navReviews: 'समीक्षाएं',
      navFAQ: 'सामान्य प्रश्न',
      callNow: 'कॉल करें',
      whatsapp: 'व्हाट्सएप',
      instagram: 'इंस्टाग्राम',
    },
    hero: {
      title: 'अहमदाबाद में सर्वश्रेष्ठ सोफा क्लीनिंग सेवाएं',
      subtitle: 'प्रोफेशनल सोफा, कार्पेट, चेयर, मैट्रेस क्लीनिंग और एसी वाटर जेट सर्विस',
      description: 'हम केवल ₹90/फुट पर विशेषज्ञ क्लीनिंग सेवाएं प्रदान करते हैं, उसी दिन उपलब्धता के साथ। 210+ ग्राहकों द्वारा 5-स्टार समीक्षाओं के साथ विश्वसनीय, हम निकोल, नरोदा, सैटेलाइट और एसजी हाईवे सहित अहमदाबाद और गांधीनगर के सभी क्षेत्रों में सेवा करते हैं।',
      chipHygienic: 'स्वच्छ और सैनिटाइज़्ड',
      chipQuickDry: '~2 घंटे में सूख जाता है',
      chipThorough: 'संपूर्ण सफाई',
      chipReviews: '210+ समीक्षाएं · 5-स्टार',
      ctaCall: 'अभी कॉल करें: +91 80002 62644',
      ctaWhatsApp: 'व्हाट्सएप से बुक करें',
      sameDayService: 'उसी दिन सेवा उपलब्ध',
      whyChooseMagicalHeading: 'मैजिकल सर्विस क्यों चुनें?',
      whyChooseMagicalPoint1: 'कीटाणु-मुक्त घर के लिए डीप क्लीनिंग और सैनिटाइज़ेशन।',
      whyChooseMagicalPoint2: 'क्विक ड्राई टेक्नोलॉजी: केवल ~2 घंटे में सूख जाता है।',
      whyChooseMagicalPoint3: 'गारंटीड प्रोफेशनल परिणामों के साथ किफायती दरें।',
    },
    serviceCoverage: {
      chipText: 'सेवा कवरेज क्षेत्र',
      heading: 'हम अहमदाबाद और गांधीनगर में सेवा करते हैं',
      caption: 'निकोल, नरोदा, बापूनगर, वस्त्राल, कुबेर नगर, नाना चिलोडा और गांधीनगर सहित अहमदाबाद में व्यापक सेवा कवरेज - फ्लैट, बंगले, कार्यालय और अस्पतालों के लिए प्रोफेशनल आवासीय सफाई सेवाएं',
    },
    services: {
      heading: 'अहमदाबाद में हमारी प्रीमियम सेवाएं',
      description: 'अहमदाबाद और गांधीनगर में प्रोफेशनल सोफा, कार्पेट, चेयर, मैट्रेस क्लीनिंग और एसी वाटर जेट सर्विस किफायती दरों और उसी दिन उपलब्धता के साथ',
      popular: 'लोकप्रिय',
      startingAt: 'शुरुआत',
      sameDayAvailable: 'उसी दिन सेवा उपलब्ध',
      availableServices: 'उपलब्ध सेवाएं:',
      sofaTitle: 'अहमदाबाद में सोफा क्लीनिंग',
      sofaDescription: 'अहमदाबाद में फैब्रिक, लेदर और वेलवेट सोफा के लिए प्रोफेशनल डीप शैम्पू क्लीनिंग। हम इको-फ्रेंडली उत्पादों के साथ आपके फर्नीचर को नए जैसा बनाते हैं।',
      carpetTitle: 'अहमदाबाद में कार्पेट क्लीनिंग',
      carpetDescription: 'हमारी उन्नत ड्राई और वेट क्लीनिंग तकनीक से अपने कार्पेट को बदलें। हमारा विशेष उपचार सभी कार्पेट प्रकारों से गहरी गंदगी, दाग और एलर्जी को हटाता है।',
      chairTitle: 'अहमदाबाद में ऑफिस चेयर क्लीनिंग',
      chairDescription: 'अहमदाबाद में ऑफिस चेयर, डाइनिंग चेयर और सभी बैठने के फर्नीचर के लिए विशेषज्ञ सफाई। डीप क्लीनिंग दाग और गंध को प्रभावी ढंग से हटाती है।',
      mattressTitle: 'अहमदाबाद में मैट्रेस क्लीनिंग',
      mattressDescription: 'हमारी प्रोफेशनल मैट्रेस डीप क्लीनिंग और सैनिटाइज़ेशन सेवा के साथ स्वस्थ नींद का अनुभव करें। हम सभी मैट्रेस प्रकारों के लिए उन्नत उपकरण और इको-फ्रेंडली समाधान का उपयोग करके धूल के कण, एलर्जी, बैक्टीरिया और जिद्दी दाग को खत्म करते हैं।',
      acTitle: 'अहमदाबाद में एसी वाटर जेट सर्विस',
      acDescription: 'हमारी प्रोफेशनल एसी वाटर जेट सर्विस के साथ अपने एसी को कुशलता से चलाएं। कूलिंग प्रदर्शन और वायु गुणवत्ता में सुधार के लिए स्प्लिट और विंडो यूनिट के लिए डीप क्लीनिंग।',
      acWaterJet: 'वाटर जेट सर्विस',
    },
    calculator: {
      title: 'सोफा मूल्य कैलकुलेटर',
      description: 'अपनी सोफा क्लीनिंग लागत तुरंत अनुमानित करें',
      sizeLabel: 'सोफा का आकार (फीट में)',
      sizeSmall: 'छोटा',
      sizeMedium: 'मध्यम',
      sizeLarge: 'बड़ा',
      pricePerFoot: 'प्रति फुट मूल्य:',
      estimatedTotal: 'अनुमानित कुल:',
      ctaCall: 'बुकिंग के लिए कॉल करें',
      ctaWhatsApp: 'हमें व्हाट्सएप करें',
      disclaimer: '* अंतिम मूल्य सोफा की स्थिति और सामग्री के प्रकार के आधार पर भिन्न हो सकता है',
    },
    whyChooseUs: {
      heading: 'हमें क्यों चुनें',
      description: 'अत्याधुनिक तकनीक और इको-फ्रेंडली प्रथाओं द्वारा समर्थित हमारी प्रीमियम सफाई सेवाओं के साथ अंतर का अनुभव करें',
      ecoFriendlyTitle: 'इको-फ्रेंडली रसायन',
      ecoFriendlyDescription: 'हम केवल पर्यावरण के अनुकूल, गैर-विषैले सफाई समाधान का उपयोग करते हैं जो आपके फर्नीचर पर कोमल और आपके परिवार और पालतू जानवरों के लिए सुरक्षित हैं।',
      germanMachinesTitle: 'जर्मन मशीन तकनीक',
      germanMachinesDescription: 'उन्नत जर्मन-इंजीनियर्ड सफाई उपकरण बेहतर परिणामों और तेज सुखाने के समय के साथ गहरी, संपूर्ण सफाई सुनिश्चित करता है।',
      goldStandardTitle: 'गोल्ड-स्टैंडर्ड उपकरण',
      goldStandardDescription: 'प्रीमियम, उद्योग-अग्रणी उपकरण और मशीनरी हर बार अपेक्षाओं से अधिक प्रोफेशनल-ग्रेड सफाई प्रदान करती है।',
      certifiedExpertsTitle: 'प्रमाणित विशेषज्ञ',
      certifiedExpertsDescription: 'हमारे प्रशिक्षित और प्रमाणित पेशेवर हर सफाई कार्य में वर्षों का अनुभव और विशेषज्ञता लाते हैं, गुणवत्ता सेवा सुनिश्चित करते हैं।',
    },
    appointment: {
      heading: 'अपनी अपॉइंटमेंट बुक करें',
      description: 'नीचे दिया गया फॉर्म भरें और हम आपकी बुकिंग की पुष्टि करने के लिए व्हाट्सएप पर आपसे संपर्क करेंगे',
      cardTitle: 'अपॉइंटमेंट विवरण',
      cardDescription: 'अपना विवरण दर्ज करें और हम व्हाट्सएप पर आपसे संपर्क करेंगे',
      nameLabel: 'पूरा नाम',
      namePlaceholder: 'अपना पूरा नाम दर्ज करें',
      phoneLabel: 'फोन नंबर',
      phonePlaceholder: 'अपना 10-अंकीय मोबाइल नंबर दर्ज करें',
      serviceLabel: 'सेवा चुनें',
      servicePlaceholder: 'एक सेवा चुनें',
      areaLabel: 'क्षेत्र/स्थान',
      areaPlaceholder: 'उदा., निकोल, नरोदा, सैटेलाइट',
      dateLabel: 'पसंदीदा तारीख',
      timeLabel: 'पसंदीदा समय',
      timePlaceholder: 'समय चुनें',
      notesLabel: 'अतिरिक्त नोट्स',
      notesPlaceholder: 'कोई विशेष आवश्यकताएं या निर्देश (वैकल्पिक)',
      submitButton: 'व्हाट्सएप से बुक करें',
      submitting: 'व्हाट्सएप खोल रहे हैं...',
      disclaimer: '* हम व्हाट्सएप के माध्यम से आपकी अपॉइंटमेंट की पुष्टि करेंगे',
      errorNameRequired: 'नाम आवश्यक है',
      errorPhoneRequired: 'फोन नंबर आवश्यक है',
      errorPhoneInvalid: 'एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें',
      errorServiceRequired: 'कृपया एक सेवा चुनें',
      errorAreaRequired: 'क्षेत्र/स्थान आवश्यक है',
      errorDateRequired: 'पसंदीदा तारीख आवश्यक है',
      errorTimeRequired: 'पसंदीदा समय आवश्यक है',
    },
    livePhotos: {
      heading: 'लाइव वर्क फोटो',
      description: 'अहमदाबाद में हमारी प्रोफेशनल सफाई सेवाओं की वास्तविक तस्वीरें',
      sofaBeforeAfter: 'सोफा क्लीनिंग (पहले / बाद में)',
      officeChairCleaning: 'ऑफिस चेयर क्लीनिंग',
    },
    areas: {
      heading: 'अहमदाबाद में हम जहां सेवा करते हैं',
      description: 'अहमदाबाद में प्रोफेशनल सोफा क्लीनिंग सेवाएं, कार्पेट, मैट्रेस, चेयर क्लीनिंग और एसी सेवाएं अहमदाबाद और गांधीनगर के सभी प्रमुख क्षेत्रों में',
      ahmedabad: 'अहमदाबाद',
      gandhinagar: 'गांधीनगर',
      notListed: 'अपना क्षेत्र नहीं दिख रहा? हम निकोल, नरोदा, बापूनगर, वस्त्राल, कुबेर नगर और नाना चिलोडा सहित अहमदाबाद और गांधीनगर के सभी क्षेत्रों में सेवा करते हैं!',
      ctaText: 'अपने क्षेत्र में सेवा की पुष्टि के लिए कॉल करें',
    },
    faq: {
      heading: 'अक्सर पूछे जाने वाले प्रश्न',
      description: 'अहमदाबाद में हमारी सर्वश्रेष्ठ सोफा क्लीनिंग सेवाओं के बारे में सामान्य प्रश्नों के उत्तर खोजें',
      q1: 'आप अहमदाबाद में किन क्षेत्रों में सेवा करते हैं?',
      a1: 'हम निकोल, नरोदा, बापूनगर, वस्त्राल, कुबेर नगर, नाना चिलोडा, सैटेलाइट, एसजी हाईवे, मणिनगर, वास्त्रापुर और अहमदाबाद और गांधीनगर के सभी अन्य इलाकों सहित अहमदाबाद के सभी क्षेत्रों में सर्वश्रेष्ठ सोफा क्लीनिंग सेवाएं प्रदान करते हैं। यदि आपका क्षेत्र सूचीबद्ध नहीं है, तो कृपया सेवा उपलब्धता की पुष्टि के लिए हमें कॉल करें।',
      q2: 'अहमदाबाद में सोफा क्लीनिंग की लागत कितनी है?',
      a2: 'हमारी सोफा क्लीनिंग सेवा केवल ₹90 प्रति फुट से शुरू होती है। अंतिम मूल्य सोफा के आकार, सामग्री के प्रकार (फैब्रिक, लेदर या वेलवेट) और स्थिति पर निर्भर करता है। हम ₹15/वर्ग फुट पर कार्पेट क्लीनिंग, ₹599 पर मैट्रेस क्लीनिंग, ₹100-₹150 पर ऑफिस चेयर क्लीनिंग और ₹499 पर एसी वाटर जेट सर्विस भी प्रदान करते हैं। सटीक उद्धरण के लिए हमसे संपर्क करें।',
      q3: 'सफाई के बाद सोफा को सूखने में कितना समय लगता है?',
      a3: 'हमारी उन्नत क्विक ड्राई टेक्नोलॉजी और जर्मन मशीनों के साथ, आपका सोफा लगभग 2 घंटे में सूख जाएगा। यह पारंपरिक सफाई विधियों की तुलना में बहुत तेज है, जिससे आप उसी दिन अपने फर्नीचर का उपयोग कर सकते हैं।',
      q4: 'क्या आप अहमदाबाद में उसी दिन सेवा प्रदान करते हैं?',
      a4: 'हां! हम उपलब्धता के आधार पर अहमदाबाद और गांधीनगर में उसी दिन सेवा प्रदान करते हैं। निकोल, नरोदा, बापूनगर, वस्त्राल और अन्य इलाकों में अपने क्षेत्र में उसी दिन स्लॉट उपलब्धता की जांच करने के लिए बस हमें +91 80002 62644 पर कॉल करें या व्हाट्सएप के माध्यम से बुक करें।',
      q5: 'क्या आपके सफाई उत्पाद बच्चों और पालतू जानवरों के लिए सुरक्षित हैं?',
      a5: 'बिल्कुल! हम केवल इको-फ्रेंडली, गैर-विषैले सफाई रसायनों का उपयोग करते हैं जो बच्चों, पालतू जानवरों और पर्यावरण के लिए पूरी तरह से सुरक्षित हैं। हमारे सफाई समाधान आपके फर्नीचर पर कोमल होते हैं जबकि गंदगी, दाग और कीटाणुओं पर कठोर होते हैं।',
      q6: 'आप किस प्रकार के सोफा साफ कर सकते हैं?',
      a6: 'हम फैब्रिक सोफा, लेदर सोफा, वेलवेट सोफा, रिक्लाइनर सोफा, एल-आकार के सोफा और सेक्शनल सोफा सहित सभी प्रकार के सोफा साफ करते हैं। हमारे प्रमाणित विशेषज्ञ विभिन्न सामग्रियों को संभालने और प्रत्येक प्रकार के लिए सर्वोत्तम सफाई परिणाम प्रदान करने के लिए प्रशिक्षित हैं।',
      q7: 'मैं अपॉइंटमेंट कैसे बुक करूं?',
      a7: 'बुकिंग आसान है! आप हमें सीधे +91 80002 62644 पर कॉल कर सकते हैं, हमें उसी नंबर पर व्हाट्सएप संदेश भेज सकते हैं, या हमारी वेबसाइट पर अपॉइंटमेंट फॉर्म भर सकते हैं। हम व्हाट्सएप के माध्यम से आपकी बुकिंग और पसंदीदा समय स्लॉट की पुष्टि करेंगे।',
      q8: 'क्या आप कार्पेट और मैट्रेस क्लीनिंग भी प्रदान करते हैं?',
      a8: 'हां! अहमदाबाद में सर्वश्रेष्ठ सोफा क्लीनिंग सेवा होने के अलावा, हम सभी क्षेत्रों में प्रोफेशनल कार्पेट क्लीनिंग (₹15/वर्ग फुट), मैट्रेस डीप क्लीनिंग और सैनिटाइज़ेशन (₹599), ऑफिस चेयर क्लीनिंग (₹100-₹150), और एसी वाटर जेट सर्विस (₹499) भी प्रदान करते हैं।',
      q9: 'आपकी सेवा अहमदाबाद में सर्वश्रेष्ठ क्यों है?',
      a9: 'हम 5-स्टार समीक्षाओं के साथ 210+ ग्राहकों द्वारा विश्वसनीय हैं। हमारी सेवा हमारी जर्मन मशीन तकनीक, इको-फ्रेंडली रसायन, क्विक ड्राई टेक्नोलॉजी (~2 घंटे), प्रमाणित विशेषज्ञ, किफायती दरें और निकोल, नरोदा, बापूनगर, वस्त्राल, कुबेर नगर और नाना चिलोडा सहित अहमदाबाद में व्यापक कवरेज के कारण अलग है।',
      q10: 'आपका कार्य कार्यक्रम क्या है?',
      a10: 'हम सोमवार से रविवार सुबह 8:00 बजे से रात 8:00 बजे तक उपलब्ध हैं। हम आपके कार्यक्रम के अनुरूप सुबह, दोपहर और शाम की अपॉइंटमेंट सहित लचीले समय स्लॉट प्रदान करते हैं। स्लॉट उपलब्धता के आधार पर उसी दिन सेवा उपलब्ध है।',
      stillHaveQuestions: 'अभी भी प्रश्न हैं? हम मदद के लिए यहां हैं!',
      callUs: 'हमें अभी कॉल करें',
      whatsappUs: 'हमें व्हाट्सएप करें',
    },
    reviews: {
      heading: 'हमारे ग्राहक क्या कहते हैं',
      description: 'अहमदाबाद और गांधीनगर में सैकड़ों संतुष्ट ग्राहकों द्वारा विश्वसनीय',
      ratingText: '210+ समीक्षाएं · 5-स्टार रेटिंग',
      review1: '"उत्कृष्ट सेवा! उनकी डीप क्लीनिंग के बाद मेरा सोफा बिल्कुल नया दिखता है। बहुत प्रोफेशनल टीम और किफायती दरें।"',
      review1Author: '- राजेश पी., निकोल',
      review2: '"अहमदाबाद में सर्वश्रेष्ठ कार्पेट क्लीनिंग सेवा! उन्होंने सभी कठिन दागों को हटा दिया और कार्पेट जल्दी सूख गया। अत्यधिक अनुशंसित!"',
      review2Author: '- प्रिया एस., सैटेलाइट',
      review3: '"अद्भुत मैट्रेस क्लीनिंग सेवा! मेरा मैट्रेस ताजा और साफ महसूस होता है। टीम समय पर और बहुत प्रोफेशनल थी।"',
      review3Author: '- अमित के., नरोदा',
      ctaButton: 'गूगल पर सभी समीक्षाएं देखें',
    },
    footer: {
      companyName: 'मैजिकल सर्विस',
      companyDescription: 'अहमदाबाद और गांधीनगर में प्रोफेशनल सफाई सेवाएं। विशेषज्ञ सोफा, कार्पेट, मैट्रेस, चेयर क्लीनिंग और एसी वाटर जेट सेवाएं।',
      quickLinks: 'त्वरित लिंक',
      home: 'होम',
      services: 'सेवाएं',
      whyChooseUs: 'हमें क्यों चुनें',
      bookAppointment: 'अपॉइंटमेंट बुक करें',
      areasServed: 'सेवा क्षेत्र',
      reviewsLink: 'समीक्षाएं',
      faqLink: 'सामान्य प्रश्न',
      ourServices: 'हमारी सेवाएं',
      sofaCleaning: 'सोफा क्लीनिंग',
      carpetCleaning: 'कार्पेट क्लीनिंग',
      mattressCleaning: 'मैट्रेस क्लीनिंग',
      chairCleaning: 'चेयर क्लीनिंग',
      acService: 'एसी वाटर जेट सर्विस',
      contactUs: 'संपर्क करें',
      servingAreas: 'अहमदाबाद और गांधीनगर में सेवा',
      workingHours: 'सोम - रवि: सुबह 8:00 - रात 8:00',
      callNow: 'अभी कॉल करें',
      whatsAppUs: 'हमें व्हाट्सएप करें',
      copyright: '© 2026. प्यार से बनाया गया',
      builtWith: 'caffeine.ai',
    },
    floating: {
      whatsappLabel: 'व्हाट्सएप',
      callLabel: 'कॉल',
    },
    serviceOptions: {
      sofaCleaning: 'सोफा क्लीनिंग (₹90/फुट)',
      carpetCleaning: 'कार्पेट क्लीनिंग (₹15/वर्ग फुट)',
      chairCleaning: 'ऑफिस चेयर क्लीनिंग (₹100-₹150)',
      mattressCleaning: 'मैट्रेस क्लीनिंग (₹599)',
      acWaterJet: 'एसी वाटर जेट सर्विस (₹499)',
    },
    timeSlots: {
      morning1: 'सुबह 8:00 - सुबह 10:00',
      morning2: 'सुबह 10:00 - दोपहर 12:00',
      afternoon1: 'दोपहर 12:00 - दोपहर 2:00',
      afternoon2: 'दोपहर 2:00 - शाम 4:00',
      evening1: 'शाम 4:00 - शाम 6:00',
      evening2: 'शाम 6:00 - रात 8:00',
    },
    language: {
      label: 'भाषा',
      english: 'English',
      hindi: 'हिंदी',
      gujarati: 'ગુજરાતી',
    },
  },
  gu: {
    header: {
      logoText: 'મેજિકલ',
      logoSubtext: 'પ્રોફેશનલ ક્લીનિંગ',
      navHome: 'હોમ',
      navServices: 'સેવાઓ',
      navWhyChooseUs: 'અમને કેમ પસંદ કરો',
      navBookNow: 'બુક કરો',
      navAreas: 'વિસ્તારો',
      navReviews: 'સમીક્ષાઓ',
      navFAQ: 'સામાન્ય પ્રશ્નો',
      callNow: 'કૉલ કરો',
      whatsapp: 'વોટ્સએપ',
      instagram: 'ઇન્સ્ટાગ્રામ',
    },
    hero: {
      title: 'અમદાવાદમાં શ્રેષ્ઠ સોફા ક્લીનિંગ સેવાઓ',
      subtitle: 'પ્રોફેશનલ સોફા, કાર્પેટ, ચેર, મેટ્રેસ ક્લીનિંગ અને એસી વોટર જેટ સર્વિસ',
      description: 'અમે માત્ર ₹90/ફૂટ પર નિષ્ણાત ક્લીનિંગ સેવાઓ પ્રદાન કરીએ છીએ, તે જ દિવસે ઉપલબ્ધતા સાથે। 5-સ્ટાર સમીક્ષાઓ સાથે 210+ ગ્રાહકો દ્વારા વિશ્વાસપાત્ર, અમે નિકોલ, નરોડા, સેટેલાઇટ અને એસજી હાઇવે સહિત અમદાવાદ અને ગાંધીનગરના તમામ વિસ્તારોમાં સેવા આપીએ છીએ।',
      chipHygienic: 'સ્વચ્છ અને સેનિટાઇઝ્ડ',
      chipQuickDry: '~2 કલાકમાં સુકાય છે',
      chipThorough: 'સંપૂર્ણ સફાઈ',
      chipReviews: '210+ સમીક્ષાઓ · 5-સ્ટાર',
      ctaCall: 'હમણાં કૉલ કરો: +91 80002 62644',
      ctaWhatsApp: 'વોટ્સએપ દ્વારા બુક કરો',
      sameDayService: 'તે જ દિવસે સેવા ઉપલબ્ધ',
      whyChooseMagicalHeading: 'મેજિકલ સર્વિસ કેમ પસંદ કરો?',
      whyChooseMagicalPoint1: 'જંતુ-મુક્ત ઘર માટે ડીપ ક્લીનિંગ અને સેનિટાઇઝેશન।',
      whyChooseMagicalPoint2: 'ક્વિક ડ્રાય ટેકનોલોજી: માત્ર ~2 કલાકમાં સુકાય છે।',
      whyChooseMagicalPoint3: 'ગેરંટીડ પ્રોફેશનલ પરિણામો સાથે સસ્તા દરો।',
    },
    serviceCoverage: {
      chipText: 'સેવા કવરેજ વિસ્તારો',
      heading: 'અમે અમદાવાદ અને ગાંધીનગરમાં સેવા આપીએ છીએ',
      caption: 'નિકોલ, નરોડા, બાપુનગર, વસ્ત્રાલ, કુબેર નગર, નાના ચિલોડા અને ગાંધીનગર સહિત અમદાવાદમાં વ્યાપક સેવા કવરેજ - ફ્લેટ, બંગલા, ઓફિસ અને હોસ્પિટલો માટે પ્રોફેશનલ રહેણાંક સફાઈ સેવાઓ',
    },
    services: {
      heading: 'અમદાવાદમાં અમારી પ્રીમિયમ સેવાઓ',
      description: 'અમદાવાદ અને ગાંધીનગરમાં પ્રોફેશનલ સોફા, કાર્પેટ, ચેર, મેટ્રેસ ક્લીનિંગ અને એસી વોટર જેટ સર્વિસ સસ્તા દરો અને તે જ દિવસે ઉપલબ્ધતા સાથે',
      popular: 'લોકપ્રિય',
      startingAt: 'શરૂઆત',
      sameDayAvailable: 'તે જ દિવસે સેવા ઉપલબ્ધ',
      availableServices: 'ઉપલબ્ધ સેવાઓ:',
      sofaTitle: 'અમદાવાદમાં સોફા ક્લીનિંગ',
      sofaDescription: 'અમદાવાદમાં ફેબ્રિક, લેધર અને વેલ્વેટ સોફા માટે પ્રોફેશનલ ડીપ શેમ્પૂ ક્લીનિંગ। અમે ઇકો-ફ્રેન્ડલી ઉત્પાદનો સાથે તમારા ફર્નિચરને નવા જેવું બનાવીએ છીએ।',
      carpetTitle: 'અમદાવાદમાં કાર્પેટ ક્લીનિંગ',
      carpetDescription: 'અમારી અદ્યતન ડ્રાય અને વેટ ક્લીનિંગ ટેકનોલોજી સાથે તમારા કાર્પેટને રૂપાંતરિત કરો। અમારી વિશિષ્ટ સારવાર તમામ કાર્પેટ પ્રકારોમાંથી ઊંડી ગંદકી, ડાઘ અને એલર્જન દૂર કરે છે।',
      chairTitle: 'અમદાવાદમાં ઓફિસ ચેર ક્લીનિંગ',
      chairDescription: 'અમદાવાદમાં ઓફિસ ચેર, ડાઇનિંગ ચેર અને તમામ બેઠક ફર્નિચર માટે નિષ્ણાત સફાઈ। ડીપ ક્લીનિંગ ડાઘ અને ગંધને અસરકારક રીતે દૂર કરે છે।',
      mattressTitle: 'અમદાવાદમાં મેટ્રેસ ક્લીનિંગ',
      mattressDescription: 'અમારી પ્રોફેશનલ મેટ્રેસ ડીપ ક્લીનિંગ અને સેનિટાઇઝેશન સેવા સાથે તંદુરસ્ત ઊંઘનો અનુભવ કરો। અમે તમામ મેટ્રેસ પ્રકારો માટે અદ્યતન સાધનો અને ઇકો-ફ્રેન્ડલી સોલ્યુશન્સનો ઉપયોગ કરીને ધૂળના જીવાણુઓ, એલર્જન, બેક્ટેરિયા અને હઠીલા ડાઘને દૂર કરીએ છીએ।',
      acTitle: 'અમદાવાદમાં એસી વોટર જેટ સર્વિસ',
      acDescription: 'અમારી પ્રોફેશનલ એસી વોટર જેટ સર્વિસ સાથે તમારા એસીને કાર્યક્ષમ રીતે ચાલુ રાખો। કૂલિંગ પ્રદર્શન અને હવાની ગુણવત્તામાં સુધારો કરવા માટે સ્પ્લિટ અને વિન્ડો યુનિટ માટે ડીપ ક્લીનિંગ।',
      acWaterJet: 'વોટર જેટ સર્વિસ',
    },
    calculator: {
      title: 'સોફા કિંમત કેલ્ક્યુલેટર',
      description: 'તમારી સોફા ક્લીનિંગ કિંમત તરત જ અંદાજિત કરો',
      sizeLabel: 'સોફાનું કદ (ફૂટમાં)',
      sizeSmall: 'નાનું',
      sizeMedium: 'મધ્યમ',
      sizeLarge: 'મોટું',
      pricePerFoot: 'પ્રતિ ફૂટ કિંમત:',
      estimatedTotal: 'અંદાજિત કુલ:',
      ctaCall: 'બુકિંગ માટે કૉલ કરો',
      ctaWhatsApp: 'અમને વોટ્સએપ કરો',
      disclaimer: '* અંતિમ કિંમત સોફાની સ્થિતિ અને સામગ્રીના પ્રકારના આધારે બદલાઈ શકે છે',
    },
    whyChooseUs: {
      heading: 'અમને કેમ પસંદ કરો',
      description: 'અત્યાધુનિક ટેકનોલોજી અને ઇકો-ફ્રેન્ડલી પ્રથાઓ દ્વારા સમર્થિત અમારી પ્રીમિયમ સફાઈ સેવાઓ સાથે તફાવતનો અનુભવ કરો',
      ecoFriendlyTitle: 'ઇકો-ફ્રેન્ડલી રસાયણો',
      ecoFriendlyDescription: 'અમે ફક્ત પર્યાવરણને અનુકૂળ, બિન-ઝેરી સફાઈ સોલ્યુશન્સનો ઉપયોગ કરીએ છીએ જે તમારા ફર્નિચર પર નરમ અને તમારા પરિવાર અને પાલતુ પ્રાણીઓ માટે સુરક્ષિત છે।',
      germanMachinesTitle: 'જર્મન મશીન ટેકનોલોજી',
      germanMachinesDescription: 'અદ્યતન જર્મન-એન્જિનિયર્ડ સફાઈ સાધનો શ્રેષ્ઠ પરિણામો અને ઝડપી સુકવણી સમય સાથે ઊંડી, સંપૂર્ણ સફાઈ સુનિશ્ચિત કરે છે।',
      goldStandardTitle: 'ગોલ્ડ-સ્ટાન્ડર્ડ સાધનો',
      goldStandardDescription: 'પ્રીમિયમ, ઉદ્યોગ-અગ્રણી સાધનો અને મશીનરી દર વખતે અપેક્ષાઓ કરતાં વધુ પ્રોફેશનલ-ગ્રેડ સફાઈ પ્રદાન કરે છે।',
      certifiedExpertsTitle: 'પ્રમાણિત નિષ્ણાતો',
      certifiedExpertsDescription: 'અમારા પ્રશિક્ષિત અને પ્રમાણિત વ્યાવસાયિકો દરેક સફાઈ કાર્યમાં વર્ષોનો અનુભવ અને નિપુણતા લાવે છે, ગુણવત્તા સેવા સુનિશ્ચિત કરે છે।',
    },
    appointment: {
      heading: 'તમારી એપોઇન્ટમેન્ટ બુક કરો',
      description: 'નીચે આપેલ ફોર્મ ભરો અને અમે તમારી બુકિંગની પુષ્ટિ કરવા માટે વોટ્સએપ પર તમારી સાથે જોડાઈશું',
      cardTitle: 'એપોઇન્ટમેન્ટ વિગતો',
      cardDescription: 'તમારી વિગતો દાખલ કરો અને અમે વોટ્સએપ પર તમારી સાથે સંપર્ક કરીશું',
      nameLabel: 'પૂરું નામ',
      namePlaceholder: 'તમારું પૂરું નામ દાખલ કરો',
      phoneLabel: 'ફોન નંબર',
      phonePlaceholder: 'તમારો 10-અંકનો મોબાઇલ નંબર દાખલ કરો',
      serviceLabel: 'સેવા પસંદ કરો',
      servicePlaceholder: 'એક સેવા પસંદ કરો',
      areaLabel: 'વિસ્તાર/સ્થાન',
      areaPlaceholder: 'દા.ત., નિકોલ, નરોડા, સેટેલાઇટ',
      dateLabel: 'પસંદગીની તારીખ',
      timeLabel: 'પસંદગીનો સમય',
      timePlaceholder: 'સમય પસંદ કરો',
      notesLabel: 'વધારાની નોંધો',
      notesPlaceholder: 'કોઈ વિશેષ જરૂરિયાતો અથવા સૂચનાઓ (વૈકલ્પિક)',
      submitButton: 'વોટ્સએપ દ્વારા બુક કરો',
      submitting: 'વોટ્સએપ ખોલી રહ્યા છીએ...',
      disclaimer: '* અમે વોટ્સએપ દ્વારા તમારી એપોઇન્ટમેન્ટની પુષ્ટિ કરીશું',
      errorNameRequired: 'નામ જરૂરી છે',
      errorPhoneRequired: 'ફોન નંબર જરૂરી છે',
      errorPhoneInvalid: 'માન્ય 10-અંકનો મોબાઇલ નંબર દાખલ કરો',
      errorServiceRequired: 'કૃપા કરીને એક સેવા પસંદ કરો',
      errorAreaRequired: 'વિસ્તાર/સ્થાન જરૂરી છે',
      errorDateRequired: 'પસંદગીની તારીખ જરૂરી છે',
      errorTimeRequired: 'પસંદગીનો સમય જરૂરી છે',
    },
    livePhotos: {
      heading: 'લાઇવ વર્ક ફોટા',
      description: 'અમદાવાદમાં અમારી પ્રોફેશનલ સફાઈ સેવાઓના વાસ્તવિક ફોટા',
      sofaBeforeAfter: 'સોફા ક્લીનિંગ (પહેલાં / પછી)',
      officeChairCleaning: 'ઓફિસ ચેર ક્લીનિંગ',
    },
    areas: {
      heading: 'અમદાવાદમાં અમે જ્યાં સેવા આપીએ છીએ',
      description: 'અમદાવાદમાં પ્રોફેશનલ સોફા ક્લીનિંગ સેવાઓ, કાર્પેટ, મેટ્રેસ, ચેર ક્લીનિંગ અને એસી સેવાઓ અમદાવાદ અને ગાંધીનગરના તમામ મુખ્ય વિસ્તારોમાં',
      ahmedabad: 'અમદાવાદ',
      gandhinagar: 'ગાંધીનગર',
      notListed: 'તમારો વિસ્તાર દેખાતો નથી? અમે નિકોલ, નરોડા, બાપુનગર, વસ્ત્રાલ, કુબેર નગર અને નાના ચિલોડા સહિત અમદાવાદ અને ગાંધીનગરના તમામ વિસ્તારોમાં સેવા આપીએ છીએ!',
      ctaText: 'તમારા વિસ્તારમાં સેવાની પુષ્ટિ માટે કૉલ કરો',
    },
    faq: {
      heading: 'વારંવાર પૂછાતા પ્રશ્નો',
      description: 'અમદાવાદમાં અમારી શ્રેષ્ઠ સોફા ક્લીનિંગ સેવાઓ વિશે સામાન્ય પ્રશ્નોના જવાબો શોધો',
      q1: 'તમે અમદાવાદમાં કયા વિસ્તારોમાં સેવા આપો છો?',
      a1: 'અમે નિકોલ, નરોડા, બાપુનગર, વસ્ત્રાલ, કુબેર નગર, નાના ચિલોડા, સેટેલાઇટ, એસજી હાઇવે, મણિનગર, વાસ્ત્રાપુર અને અમદાવાદ અને ગાંધીનગરના તમામ અન્ય વિસ્તારો સહિત અમદાવાદના તમામ વિસ્તારોમાં શ્રેષ્ઠ સોફા ક્લીનિંગ સેવાઓ પ્રદાન કરીએ છીએ। જો તમારો વિસ્તાર સૂચિબદ્ધ નથી, તો કૃપા કરીને સેવા ઉપલબ્ધતાની પુષ્ટિ માટે અમને કૉલ કરો।',
      q2: 'અમદાવાદમાં સોફા ક્લીનિંગની કિંમત કેટલી છે?',
      a2: 'અમારી સોફા ક્લીનિંગ સેવા માત્ર ₹90 પ્રતિ ફૂટથી શરૂ થાય છે। અંતિમ કિંમત સોફાના કદ, સામગ્રીના પ્રકાર (ફેબ્રિક, લેધર અથવા વેલ્વેટ) અને સ્થિતિ પર આધાર રાખે છે। અમે ₹15/ચો ફૂટ પર કાર્પેટ ક્લીનિંગ, ₹599 પર મેટ્રેસ ક્લીનિંગ, ₹100-₹150 પર ઓફિસ ચેર ક્લીનિંગ અને ₹499 પર એસી વોટર જેટ સર્વિસ પણ પ્રદાન કરીએ છીએ। ચોક્કસ અવતરણ માટે અમારો સંપર્ક કરો।',
      q3: 'સફાઈ પછી સોફાને સુકાવામાં કેટલો સમય લાગે છે?',
      a3: 'અમારી અદ્યતન ક્વિક ડ્રાય ટેકનોલોજી અને જર્મન મશીનો સાથે, તમારો સોફા લગભગ 2 કલાકમાં સુકાઈ જશે। આ પરંપરાગત સફાઈ પદ્ધતિઓ કરતાં ઘણું ઝડપી છે, જે તમને તે જ દિવસે તમારા ફર્નિચરનો ઉપયોગ કરવાની મંજૂરી આપે છે।',
      q4: 'શું તમે અમદાવાદમાં તે જ દિવસે સેવા પ્રદાન કરો છો?',
      a4: 'હા! અમે ઉપલબ્ધતાના આધારે અમદાવાદ અને ગાંધીનગરમાં તે જ દિવસે સેવા પ્રદાન કરીએ છીએ। નિકોલ, નરોડા, બાપુનગર, વસ્ત્રાલ અને અન્ય વિસ્તારો સહિત તમારા વિસ્તારમાં તે જ દિવસે સ્લોટ ઉપલબ્ધતા તપાસવા માટે ફક્ત અમને +91 80002 62644 પર કૉલ કરો અથવા વોટ્સએપ દ્વારા બુક કરો।',
      q5: 'શું તમારા સફાઈ ઉત્પાદનો બાળકો અને પાલતુ પ્રાણીઓ માટે સુરક્ષિત છે?',
      a5: 'બિલકુલ! અમે ફક્ત ઇકો-ફ્રેન્ડલી, બિન-ઝેરી સફાઈ રસાયણોનો ઉપયોગ કરીએ છીએ જે બાળકો, પાલતુ પ્રાણીઓ અને પર્યાવરણ માટે સંપૂર્ણપણે સુરક્ષિત છે। અમારા સફાઈ સોલ્યુશન્સ તમારા ફર્નિચર પર નરમ હોય છે જ્યારે ગંદકી, ડાઘ અને જંતુઓ પર કઠોર હોય છે।',
      q6: 'તમે કયા પ્રકારના સોફા સાફ કરી શકો છો?',
      a6: 'અમે ફેબ્રિક સોફા, લેધર સોફા, વેલ્વેટ સોફા, રિક્લાઇનર સોફા, એલ-આકારના સોફા અને સેક્શનલ સોફા સહિત તમામ પ્રકારના સોફા સાફ કરીએ છીએ। અમારા પ્રમાણિત નિષ્ણાતો વિવિધ સામગ્રીઓને સંભાળવા અને દરેક પ્રકાર માટે શ્રેષ્ઠ સફાઈ પરિણામો પ્રદાન કરવા માટે પ્રશિક્ષિત છે।',
      q7: 'હું એપોઇન્ટમેન્ટ કેવી રીતે બુક કરું?',
      a7: 'બુકિંગ સરળ છે! તમે અમને સીધા +91 80002 62644 પર કૉલ કરી શકો છો, અમને તે જ નંબર પર વોટ્સએપ સંદેશ મોકલી શકો છો, અથવા અમારી વેબસાઇટ પર એપોઇન્ટમેન્ટ ફોર્મ ભરી શકો છો। અમે વોટ્સએપ દ્વારા તમારી બુકિંગ અને પસંદગીના સમય સ્લોટની પુષ્ટિ કરીશું।',
      q8: 'શું તમે કાર્પેટ અને મેટ્રેસ ક્લીનિંગ પણ પ્રદાન કરો છો?',
      a8: 'હા! અમદાવાદમાં શ્રેષ્ઠ સોફા ક્લીનિંગ સેવા હોવા ઉપરાંત, અમે તમામ વિસ્તારોમાં પ્રોફેશનલ કાર્પેટ ક્લીનિંગ (₹15/ચો ફૂટ), મેટ્રેસ ડીપ ક્લીનિંગ અને સેનિટાઇઝેશન (₹599), ઓફિસ ચેર ક્લીનિંગ (₹100-₹150), અને એસી વોટર જેટ સર્વિસ (₹499) પણ પ્રદાન કરીએ છીએ।',
      q9: 'તમારી સેવા અમદાવાદમાં શ્રેષ્ઠ કેમ છે?',
      a9: 'અમે 5-સ્ટાર સમીક્ષાઓ સાથે 210+ ગ્રાહકો દ્વારા વિશ્વાસપાત્ર છીએ। અમારી સેવા અમારી જર્મન મશીન ટેકનોલોજી, ઇકો-ફ્રેન્ડલી રસાયણો, ક્વિક ડ્રાય ટેકનોલોજી (~2 કલાક), પ્રમાણિત નિષ્ણાતો, સસ્તા દરો અને નિકોલ, નરોડા, બાપુનગર, વસ્ત્રાલ, કુબેર નગર અને નાના ચિલોડા સહિત અમદાવાદમાં વ્યાપક કવરેજને કારણે અલગ છે।',
      q10: 'તમારું કાર્ય શેડ્યૂલ શું છે?',
      a10: 'અમે સોમવારથી રવિવાર સવારે 8:00 વાગ્યાથી રાત્રે 8:00 વાગ્યા સુધી ઉપલબ્ધ છીએ। અમે તમારા શેડ્યૂલને અનુરૂપ સવાર, બપોર અને સાંજની એપોઇન્ટમેન્ટ સહિત લવચીક સમય સ્લોટ પ્રદાન કરીએ છીએ। સ્લોટ ઉપલબ્ધતાના આધારે તે જ દિવસે સેવા ઉપલબ્ધ છે।',
      stillHaveQuestions: 'હજુ પણ પ્રશ્નો છે? અમે મદદ માટે અહીં છીએ!',
      callUs: 'અમને હમણાં કૉલ કરો',
      whatsappUs: 'અમને વોટ્સએપ કરો',
    },
    reviews: {
      heading: 'અમારા ગ્રાહકો શું કહે છે',
      description: 'અમદાવાદ અને ગાંધીનગરમાં સેંકડો સંતુષ્ટ ગ્રાહકો દ્વારા વિશ્વાસપાત્ર',
      ratingText: '210+ સમીક્ષાઓ · 5-સ્ટાર રેટિંગ',
      review1: '"ઉત્કૃષ્ટ સેવા! તેમની ડીપ ક્લીનિંગ પછી મારો સોફા બિલકુલ નવો દેખાય છે। ખૂબ જ પ્રોફેશનલ ટીમ અને સસ્તા દરો।"',
      review1Author: '- રાજેશ પી., નિકોલ',
      review2: '"અમદાવાદમાં શ્રેષ્ઠ કાર્પેટ ક્લીનિંગ સેવા! તેઓએ તમામ કઠિન ડાઘ દૂર કર્યા અને કાર્પેટ ઝડપથી સુકાઈ ગયું। ખૂબ જ ભલામણ કરેલ!"',
      review2Author: '- પ્રિયા એસ., સેટેલાઇટ',
      review3: '"અદ્ભુત મેટ્રેસ ક્લીનિંગ સેવા! મારું મેટ્રેસ તાજું અને સ્વચ્છ લાગે છે। ટીમ સમયસર અને ખૂબ જ પ્રોફેશનલ હતી।"',
      review3Author: '- અમિત કે., નરોડા',
      ctaButton: 'ગૂગલ પર તમામ સમીક્ષાઓ જુઓ',
    },
    footer: {
      companyName: 'મેજિકલ સર્વિસ',
      companyDescription: 'અમદાવાદ અને ગાંધીનગરમાં પ્રોફેશનલ સફાઈ સેવાઓ। નિષ્ણાત સોફા, કાર્પેટ, મેટ્રેસ, ચેર ક્લીનિંગ અને એસી વોટર જેટ સેવાઓ।',
      quickLinks: 'ઝડપી લિંક્સ',
      home: 'હોમ',
      services: 'સેવાઓ',
      whyChooseUs: 'અમને કેમ પસંદ કરો',
      bookAppointment: 'એપોઇન્ટમેન્ટ બુક કરો',
      areasServed: 'સેવા વિસ્તારો',
      reviewsLink: 'સમીક્ષાઓ',
      faqLink: 'સામાન્ય પ્રશ્નો',
      ourServices: 'અમારી સેવાઓ',
      sofaCleaning: 'સોફા ક્લીનિંગ',
      carpetCleaning: 'કાર્પેટ ક્લીનિંગ',
      mattressCleaning: 'મેટ્રેસ ક્લીનિંગ',
      chairCleaning: 'ચેર ક્લીનિંગ',
      acService: 'એસી વોટર જેટ સર્વિસ',
      contactUs: 'અમારો સંપર્ક કરો',
      servingAreas: 'અમદાવાદ અને ગાંધીનગરમાં સેવા',
      workingHours: 'સોમ - રવિ: સવારે 8:00 - રાત્રે 8:00',
      callNow: 'હમણાં કૉલ કરો',
      whatsAppUs: 'અમને વોટ્સએપ કરો',
      copyright: '© 2026. પ્રેમથી બનાવેલ',
      builtWith: 'caffeine.ai',
    },
    floating: {
      whatsappLabel: 'વોટ્સએપ',
      callLabel: 'કૉલ',
    },
    serviceOptions: {
      sofaCleaning: 'સોફા ક્લીનિંગ (₹90/ફૂટ)',
      carpetCleaning: 'કાર્પેટ ક્લીનિંગ (₹15/ચો ફૂટ)',
      chairCleaning: 'ઓફિસ ચેર ક્લીનિંગ (₹100-₹150)',
      mattressCleaning: 'મેટ્રેસ ક્લીનિંગ (₹599)',
      acWaterJet: 'એસી વોટર જેટ સર્વિસ (₹499)',
    },
    timeSlots: {
      morning1: 'સવારે 8:00 - સવારે 10:00',
      morning2: 'સવારે 10:00 - બપોરે 12:00',
      afternoon1: 'બપોરે 12:00 - બપોરે 2:00',
      afternoon2: 'બપોરે 2:00 - સાંજે 4:00',
      evening1: 'સાંજે 4:00 - સાંજે 6:00',
      evening2: 'સાંજે 6:00 - રાત્રે 8:00',
    },
    language: {
      label: 'ભાષા',
      english: 'English',
      hindi: 'हिंदी',
      gujarati: 'ગુજરાતી',
    },
  },
};
