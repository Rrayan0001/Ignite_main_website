export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  branch: 'Branch 1: Malmaddi Branch (Main)' | 'Branch 2: Ignite Prime (Gandhi Nagar)';
  plan: string;
  message?: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Enrolled';
}

export interface Offer {
  id: string;
  title: string;
  desc: string;
  branch: string;
  active: boolean;
}

export interface BranchInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
}

const DEFAULT_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-1',
    name: 'Rahul Sharma',
    phone: '+91 98765 43210',
    email: 'rahul@example.com',
    branch: 'Branch 1: Malmaddi Branch (Main)',
    plan: '6-Month Plan',
    message: 'Interested in 1-on-1 personal training for muscle building.',
    createdAt: '2026-07-22 14:30',
    status: 'New',
  },
  {
    id: 'inq-2',
    name: 'Pooja Naik',
    phone: '+91 87654 32109',
    email: 'pooja@example.com',
    branch: 'Branch 2: Ignite Prime (Gandhi Nagar)',
    plan: '3-Month Plan',
    message: 'Enquiring about weight loss & transformation program + Ignite Cafe meal plans.',
    createdAt: '2026-07-22 11:15',
    status: 'Contacted',
  },
];

const DEFAULT_OFFERS: Offer[] = [
  {
    id: 'off-1',
    title: 'Student Discount Offer',
    desc: 'Get 15% off on 6-Month and 12-Month memberships with valid college ID.',
    branch: 'All Branches',
    active: true,
  },
  {
    id: 'off-2',
    title: 'Ignite Cafe Free Shake Pass',
    desc: 'Complimentary high-protein recovery shake with every new 6-Month enrollment at Ignite Prime.',
    branch: 'Branch 2: Ignite Prime',
    active: true,
  },
];

const STORAGE_KEY_INQUIRIES = 'ignite_gym_inquiries';
const STORAGE_KEY_OFFERS = 'ignite_gym_offers';

export function getInquiries(): Inquiry[] {
  if (typeof window === 'undefined') return DEFAULT_INQUIRIES;
  const stored = localStorage.getItem(STORAGE_KEY_INQUIRIES);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(DEFAULT_INQUIRIES));
    return DEFAULT_INQUIRIES;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return DEFAULT_INQUIRIES;
  }
}

export function saveInquiry(inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Inquiry {
  const current = getInquiries();
  const newInquiry: Inquiry = {
    ...inquiry,
    id: `inq-${Date.now()}`,
    createdAt: new Date().toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' }),
    status: 'New',
  };
  const updated = [newInquiry, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(updated));
  }
  return newInquiry;
}

export function updateInquiryStatus(id: string, status: 'New' | 'Contacted' | 'Enrolled') {
  const current = getInquiries();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(updated));
  }
  return updated;
}

export function deleteInquiry(id: string) {
  const current = getInquiries();
  const updated = current.filter((item) => item.id !== id);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(updated));
  }
  return updated;
}

export function getOffers(): Offer[] {
  if (typeof window === 'undefined') return DEFAULT_OFFERS;
  const stored = localStorage.getItem(STORAGE_KEY_OFFERS);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY_OFFERS, JSON.stringify(DEFAULT_OFFERS));
    return DEFAULT_OFFERS;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return DEFAULT_OFFERS;
  }
}

export function toggleOfferStatus(id: string) {
  const current = getOffers();
  const updated = current.map((item) => (item.id === id ? { ...item, active: !item.active } : item));
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_OFFERS, JSON.stringify(updated));
  }
  return updated;
}

export function addOffer(offer: Omit<Offer, 'id'>): Offer {
  const current = getOffers();
  const newOffer: Offer = { ...offer, id: `off-${Date.now()}` };
  const updated = [newOffer, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_OFFERS, JSON.stringify(updated));
  }
  return newOffer;
}
