export interface ServiceItem {
  id: string
  title: string
  ar_title: string
  description: string
  ar_description: string
  imageSrc: string
  href: string
}

export const servicesData: ServiceItem[] = [
  {
    id: 'healthcare-systems',
    title: 'Healthcare Systems',
    ar_title: 'النظم الصحية',
    description:
      'Comprehensive healthcare management solutions including HIS, EMR/EHR, and medical device integration.',
    ar_description:
      'حلول متكاملة لإدارة المنشآت الصحية تشمل نظم المعلومات الصحية والسجلات الطبية الإلكترونية وربط الأجهزة الطبية.',
    imageSrc: '/services/medical-8990009_1280.jpg',
    href: '#',
  },
  {
    id: 'e-commerce',
    title: 'E-commerce Store',
    ar_title: 'متجر إلكتروني',
    description:
      'Build powerful online stores with seamless shopping experiences, secure payments, and inventory management.',
    ar_description: 'بناء متاجر إلكترونية قوية مع تجارب تسوق سلسة ومدفوعات آمنة وإدارة المخزون.',
    imageSrc: '/services/E-commerce-Store.png',
    href: '/pages/services/e-commerce',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    ar_title: 'تطوير المواقع',
    description:
      'Custom websites and web applications built with cutting-edge technologies for optimal performance.',
    ar_description: 'مواقع وتطبيقات ويب مخصصة مبنية بأحدث التقنيات لأداء مثالي.',
    imageSrc: '/services/Web_Development.png',
    href: '/pages/services/web-development',
  },
  {
    id: 'warehouse-management',
    title: 'Warehouse Management System',
    ar_title: 'نظام إدارة المستودعات',
    description:
      'Streamline warehouse operations with real-time inventory tracking, receiving, and dispatch management.',
    ar_description:
      'تبسيط عمليات المستودعات مع تتبع المخزون في الوقت الفعلي وإدارة الاستلام والصرف.',
    imageSrc: '/services/warehouse.jpg',
    href: '/pages/services/warehouse-management-system',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    ar_title: 'تطوير تطبيقات الجوال',
    description:
      'Native and cross-platform mobile applications for iOS and Android with modern tech stacks.',
    ar_description:
      'تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS وAndroid بأحدث التقنيات.',
    imageSrc: '/services/mobile-app.jpg',
    href: '/pages/services/mobile-app-development',
  },
  {
    id: 'pos-systems',
    title: 'POS Hardware & Software',
    ar_title: 'أنظمة نقاط البيع',
    description:
      'Complete point-of-sale solutions with hardware integration, inventory sync, and sales analytics.',
    ar_description:
      'حلول متكاملة لنقاط البيع مع ربط الأجهزة ومزامنة المخزون وتحليلات المبيعات.',
    imageSrc: '/services/POS-Hardware-and-Software.jpg',
    href: '/pages/services/POS',
  },
  {
    id: 'rfid-solutions',
    title: 'RFID Solutions',
    ar_title: 'حلول RFID',
    description:
      'Advanced RFID systems for inventory tracking, asset management, and access control.',
    ar_description:
      'أنظمة RFID متقدمة لتتبع المخزون وإدارة الأصول والتحكم في الوصول.',
    imageSrc: '/services/RFID-Solutions.png',
    href: '/pages/services/RFID-solutions',
  },
  {
    id: 'specialized-medical-software',
    title: 'Specialized Medical Software',
    ar_title: 'برامج طبية متخصصة',
    description:
      'Specialized software solutions for laboratories, radiology, pharmacy, and AI-powered diagnostics.',
    ar_description:
      'حلول برمجية متخصصة للمختبرات والأشعة والصيدلة والتشخيص بالذكاء الاصطناعي.',
    imageSrc: '/services/Medical-Device-Integration.jpg',
    href: '/pages/services/specialized-medical-software',
  },
]
