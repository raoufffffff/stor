import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

// Translation resources
const resources = {
  en: {
    translation: {
      bestOffer: "Best Offer",
      categories: "Categories",
      footerhaed: "Welcome to Daily Shop",
      footertext:
        "We are in the beta version of our platform that aims to facilitate the supermarket shopping experience. We offer you a service to deliver food directly to your doorstep quickly and easily, saving you time and effort. We seek to improve our services based on your feedback to always be up to your expectations!",
        offer: "Offer",
        body: "Cleanliness and body care",
        dairy_and_eggs: "Dairy & Eggs",
        nuts_and_seeds: "Nuts & Seeds",
        chips_and_snacks: "Chips & Snacks",
        chocolates: "Chocolates",
        soft_drinks_and_juices: "Soft Drinks & Juices",
        household_care: "Household Care",
        cans_and_jars: "Cans & Jars",
        baby_care: "Baby Care",
        Pastries: "Pastries",
        coffe: "Coffee and tea",
        candy: "Preparing sweets",
        sals: "Spices and sauces",
        text: "Your Cart",
        deliveryTime: "Delivery Time: {{time}}",
        todayEvening: "Today Evening",
        tomorrowEvening: "Tomorrow Evening",
        total: "Total",
        deliveryCost: "Delivery Cost",
        serviceCost: "Service Cost",
        finalTotal: "Final Total",
        priceChangeNote: "Some prices may change.",
        next: "Next",
        sendOrder: "Send the Order",
        successfully : "Your order has been sent successfully",
        will: "We will contact you as soon as possible to confirm the order.",
        back: "back home",
        conatct:"Contact Information",
        Delivery: "Delivery location",
        name: "inter your name",
        phone: "inter your phone number",
        Confirm: "Confirm",
        find: "Fine-tune your location",
        move: "Please move the map to set the exact delivery location",
        location: "Confirm pin location",
        thanks: "Thank you for choosing Daily Shop",
        empty: "empty card",
        View: "View Basket",
        search: "Search for products"
    },
  },
  ar: {
    translation: {
      bestOffer: "أفضل عرض",
      categories: "التصنيفات",
      footerhaed: "مرحبا بكم في دايلي شوب",
      footertext:
        "نحن في النسخة التجريبية من منصتنا التي تهدف إلى تسهيل تجربة التسوق من السوبرماركت. نقدم لكم خدمة توصيل المواد الغذائية مباشرة إلى باب منزلكم بسرعة وسهولة، مما يوفر عليكم الوقت والجهد. نسعى لتحسين خدماتنا بناءً على ملاحظاتكم لنكون دائماً عند حسن ظنكم!",
        // 
        offer: "العروض",
        dairy_and_eggs: "بيض و مشتقات الحليب",
        nuts_and_seeds: "البقوليات",
        chocolates: "بسكويت و شوكولاته",
        soft_drinks_and_juices: "مشروبات",
        household_care: "مواد التنضيف و الغسيل",
        cans_and_jars: "المعلبات",
        body: "نضافة و العناية بالجسم",
        baby_care: "رعاية الأطفال",
        Pastries: "العجائن",
        coffe: "قهوة و شاي",
        candy: "تحضير الحلويات",
        sals: "بهارات و الصلصات",
        text: "السلة",
        deliveryTime: "وقت التوصيل: {{time}}",
        todayEvening: "مساء اليوم",
        tomorrowEvening: "مساء الغد",
        total: "الإجمالي",
        deliveryCost: "تكلفة التوصيل",
        serviceCost: "تكلفة الخدمة",
        finalTotal: "الإجمالي النهائي",
        priceChangeNote: "قد تتغير بعض الأسعار.",
        next: "التالي",
        sendOrder: "إرسال الطلب",
        successfully : "لقد تم إرسال طلبك بنجاح",
        will: "سوف نتواصل معك في أقرب وقت ممكن لتأكيد الطلب.",
        back: "العودة إلى الصفحة الرئيسية",
        conatct:"معلومات الاتصال",
        Delivery: "مكان التسليم",
        name: "اكتب اسمك",
        phone: "أدخل رقم هاتفك",
        Confirm: "تأكيد",
        find: "ضبط موقعك",
        move: "يرجى تحريك الخريطة لتحديد موقع التسليم الدقيق",
        location: "تأكيد الموقع",
        thanks: "شكرا لاختيارك Daily Shop",
        empty: "السلة فارغة",
        View: "عرض السلة",
        search: "البحث عن المنتجات"
    },
  },
  fr: {
    translation: {
      bestOffer: "Meilleure Offre",
      categories: "Catégories",
      footerhaed: "Bienvenue à la boutique quotidienne",
      footertext:
        "Nous sommes dans la version bêta de notre plateforme qui vise à faciliter l'expérience d'achat en supermarché. Nous vous proposons un service de livraison de nourriture directement à votre porte, rapidement et facilement, vous faisant gagner du temps et des efforts. Nous nous efforçons d'améliorer nos services en fonction de vos commentaires pour toujours être à la hauteur de vos attentes !",
        offer: "Offre",
        dairy_and_eggs: "Produits Laitiers & Œufs",
        nuts_and_seeds: "Noix & Graines",
        chips_and_snacks: "Chips & Snacks",
        chocolates: "Chocolats",
        soft_drinks_and_juices: "Boissons Gazeuses & Jus",
        household_care: "Entretien Ménager",
        cans_and_jars: "Boîtes & Bocaux",
        baby_care: "Soins pour Bébé",
        body: "Propreté et soins du corps",
        Pastries: "Pastries",
        coffe: "Café et thé",
        candy: "Préparation de bonbons",
        sals: "Épices et sauces",
        text: "Votre Panier",
        deliveryTime: "Heure de livraison: {{time}}",
        todayEvening: "Ce soir",
        tomorrowEvening: "Demain soir",
        total: "Total",
        deliveryCost: "Coût de livraison",
        serviceCost: "Coût du service",
        finalTotal: "Total final",
        priceChangeNote: "Certains prix peuvent changer.",
        next: "Suivant",
        sendOrder: "Envoyer la commande",
        successfully : "Votre commande a été envoyée avec succès",
        will: "Nous vous contacterons dans les plus brefs délais pour confirmer la commande.",
        back: "Retour à la page d'accueil",
        conatct:"Coordonnées",
        Delivery: "Lieu de livraison",
        name: "entre ton nom",
        phone: "entrez votre numéro de téléphone",
        Confirm: "Confirmer",
        find: "Affinez votre localisation",
        move: "Veuillez déplacer la carte pour définir le lieu de livraison exact",
        location: "Confirmer l'emplacement du code PIN",
        thanks: "Merci d'avoir choisi Daily Shop",
        empty: "Le panier est vide.",
        View: "Voir le panier",
        search: "Rechercher des produits"
    },
  },
};



// Initialize i18n
i18n
  .use(HttpBackend) // Load translations using HTTP (if needed)
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Bind react-i18next to the instance
  .init({
    resources, // Set translation resources
    fallbackLng: "ar", // Fallback language if no translation is available
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
